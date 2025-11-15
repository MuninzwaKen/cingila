import { Resend } from 'resend';

let connectionSettings: any;

async function getCredentials() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=resend',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || (!connectionSettings.settings?.api_key)) {
    throw new Error('Resend not connected - please set up Resend integration in Replit');
  }
  
  return {
    apiKey: connectionSettings.settings.api_key, 
    fromEmail: 'onboarding@resend.dev'
  };
}

async function getUncachableResendClient() {
  const { apiKey, fromEmail } = await getCredentials();
  const client = new Resend(apiKey);
  return {
    client,
    fromEmail
  };
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export interface SignupNotificationData {
  name: string;
  email: string;
  phone: string;
  location: string;
  userType: 'property_manager' | 'landlord';
}

export async function sendSignupNotification(data: SignupNotificationData): Promise<void> {
  try {
    const { client, fromEmail } = await getUncachableResendClient();
    
    const userTypeLabel = data.userType === 'property_manager' ? 'Property Manager' : 'Landlord';
    
    const safeName = escapeHtml(data.name);
    const safeEmail = escapeHtml(data.email);
    const safePhone = escapeHtml(data.phone);
    const safeLocation = escapeHtml(data.location);
    const timestamp = new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' });
    
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FF6B35;">New Waitlist Signup Request</h2>
        <p>A new user has joined the Cingila waitlist:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeEmail}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${safePhone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Location:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${safeLocation}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>User Type:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${userTypeLabel}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Received At:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${timestamp}</td>
          </tr>
        </table>
        
        <p style="color: #666; font-size: 14px; margin-top: 30px;">
          This is an automated notification from the Cingila waitlist system.
        </p>
      </div>
    `;

    // TODO: Update this to info@cingila.co.ke once domain is verified
    const recipient = 'cingilake@gmail.com';
    
    const result = await client.emails.send({
      from: fromEmail,
      to: recipient,
      subject: 'New Cingila Waitlist Signup',
      html: emailHtml,
    });

    if (result.error) {
      console.error('Resend returned an error:', result.error);
      throw new Error(`Resend error: ${JSON.stringify(result.error)}`);
    }

    console.log(`✅ Signup notification email sent successfully! Email ID: ${result.data?.id}`);
  } catch (error) {
    console.error('Failed to send signup notification email:', error);
    throw error;
  }
}
