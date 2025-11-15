# Cingila Marketing Site

This is the standalone marketing/landing page for Cingila Property Management Platform.

## Setup Instructions

1. **Create a new Repl on Replit:**
   - Click "Create Repl"
   - Choose "Node.js" template
   - Name it `cingila-landing`

2. **Copy all files from this template:**
   - Copy the entire contents of this `marketing-site-template` directory into your new Repl
   - Make sure to maintain the directory structure

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up Resend integration:**
   - In Replit, go to the Integrations panel
   - Search for "Resend" and set it up
   - Add your Resend API key
   - Configure the from_email (use `onboarding@resend.dev` for testing, or your verified domain email)

5. **Update environment variables:**
   - The Resend connector will automatically be configured
   - No additional secrets needed

6. **Run the development server:**
   ```bash
   npm run dev
   ```

7. **Test the site:**
   - Visit your Repl URL
   - Fill out the waitlist form
   - Check your email for notifications

8. **Deploy (Publish):**
   - Click the "Deploy" button in Replit
   - Choose "Autoscale Deployment"
   - Your marketing site will be live!

## Project Structure

```
marketing-site-template/
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Landing and SignUp pages
│   │   ├── lib/          # Utilities and query client
│   │   ├── App.tsx       # Main app component with routing
│   │   ├── main.tsx      # React entry point
│   │   └── index.css     # Global styles
│   └── index.html        # HTML entry point
├── server/               # Backend Express server
│   ├── index.ts          # Server setup
│   ├── routes.ts         # API routes
│   ├── email.ts          # Resend email integration
│   └── vite.ts           # Vite middleware for dev
├── shared/               # Shared types and schemas
│   └── schema.ts         # Zod validation schemas
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite config
├── tailwind.config.ts    # Tailwind CSS config
└── README.md            # This file

```

## Features

- ✅ Responsive landing page with hero section
- ✅ Features showcase
- ✅ Pricing tiers (Basic, Advanced, Enterprise)
- ✅ Waitlist signup form with validation
- ✅ Email notifications via Resend
- ✅ Dark theme with orange accent (#FF6B35)
- ✅ Optimized for SEO
- ✅ Mobile-first design

## Tech Stack

- **Frontend:** React + TypeScript + Vite
- **Backend:** Express.js + Node.js
- **Styling:** Tailwind CSS + shadcn/ui components
- **Email:** Resend API
- **Validation:** Zod + React Hook Form
- **Deployment:** Replit Autoscale

## Important Notes

- This is a standalone marketing site separate from the main application
- Email notifications currently go to test email until domain is verified
- To send to production emails, verify your domain at resend.com/domains
- Update the recipient email in `server/email.ts` once domain is verified

## Support

For issues or questions, contact: info@cingila.co.ke
