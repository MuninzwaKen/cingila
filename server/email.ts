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
  const resendApiKey = process.env.RESEND_API_KEY;
  const { apiKey, fromEmail } = resendApiKey
    ? { apiKey: resendApiKey, fromEmail: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev" }
    : await getCredentials();
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

// Sends admin notification for a new "Get Started" signup
export async function sendSignupNotification(data: SignupNotificationData): Promise<void> {
  try {
    const { client, fromEmail } = await getUncachableResendClient();
    
    const userTypeLabel = data.userType === 'property_manager' ? 'Property Manager' : 'Landlord';
    
    const safeName = escapeHtml(data.name);
    const safeEmail = escapeHtml(data.email);
    const safePhone = escapeHtml(data.phone);
    const safeLocation = escapeHtml(data.location);
    const timestamp = new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' });
    
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FF6B35;">New Get Started Signup</h2>
        <p>A new user has signed up for Cingila:</p>
        
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
          This is an automated notification from the Cingila signup system.
        </p>
      </div>
    `;

    // TODO: Update this to info@cingila.co.ke once domain is verified
    const adminRecipient = 'cingilake@gmail.com';
    
    // Send admin notification
    const adminResult = await client.emails.send({
      from: fromEmail,
      to: adminRecipient,
      subject: 'New Cingila Signup',
      html: adminEmailHtml,
    });

    if (adminResult.error) {
      console.error('Resend returned an error:', adminResult.error);
      throw new Error(`Resend error: ${JSON.stringify(adminResult.error)}`);
    }

    console.log(`✅ Admin signup notification sent! Email ID: ${adminResult.data?.id}`);

    // Send confirmation email to the user
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #FF6B35; font-size: 28px; margin-bottom: 4px;">Cingila</h1>
          <p style="color: #888; font-size: 14px; margin: 0;">AI Property Assistant</p>
        </div>

        <h2 style="color: #ffffff;">Hi ${safeName}, you're on the list!</h2>
        <p style="color: #cccccc; line-height: 1.6;">
          Thank you for signing up for Cingila. We're working hard to get everything ready, and 
          access will be granted to you soon.
        </p>
        <p style="color: #cccccc; line-height: 1.6;">
          We'll send you an email the moment your account is ready. In the meantime, feel free to 
          reach out if you have any questions.
        </p>

        <div style="margin: 30px 0; padding: 20px; background-color: #1a1a1a; border-radius: 8px; border-left: 4px solid #FF6B35;">
          <p style="color: #cccccc; margin: 0; font-size: 14px;">
            <strong style="color: #ffffff;">What's next?</strong><br/>
            Our team will review your request and grant you access to the Cingila platform. 
            You'll receive a follow-up email with your login details and next steps.
          </p>
        </div>

        <p style="color: #888; font-size: 13px; margin-top: 40px; border-top: 1px solid #333; padding-top: 20px;">
          Questions? Contact us at 
          <a href="mailto:info@cingila.co.ke" style="color: #FF6B35;">info@cingila.co.ke</a>
          <br/>Cingila — AI-Powered Property Management for Kenya
        </p>
      </div>
    `;

    const userResult = await client.emails.send({
      from: fromEmail,
      to: data.email,
      subject: 'Welcome to Cingila — Access Coming Soon',
      html: userEmailHtml,
    });

    if (userResult.error) {
      console.error('Resend returned an error sending user confirmation:', userResult.error);
    } else {
      console.log(`✅ User confirmation email sent! Email ID: ${userResult.data?.id}`);
    }

  } catch (error) {
    console.error('Failed to send signup notification email:', error);
    throw error;
  }
}

// Sends admin notification for a new demo request
export async function sendDemoRequestNotification(data: SignupNotificationData): Promise<void> {
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
        <h2 style="color: #FF6B35;">New Demo Request</h2>
        <p>Someone has requested a demo of Cingila:</p>
        
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
          This is an automated notification from the Cingila demo request system.
        </p>
      </div>
    `;

    // TODO: Update this to info@cingila.co.ke once domain is verified
    const recipient = 'cingilake@gmail.com';
    
    const result = await client.emails.send({
      from: fromEmail,
      to: recipient,
      subject: 'Demo Request',
      html: emailHtml,
    });

    if (result.error) {
      console.error('Resend returned an error:', result.error);
      throw new Error(`Resend error: ${JSON.stringify(result.error)}`);
    }

    console.log(`✅ Demo request notification email sent! Email ID: ${result.data?.id}`);
  } catch (error) {
    console.error('Failed to send demo request email:', error);
    throw error;
  }
}
