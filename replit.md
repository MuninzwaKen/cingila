# Cingila Marketing Site

## Overview

Cingila is an AI-powered property management platform designed for the Kenyan market. This repository contains the standalone marketing/landing page that serves as the public-facing website to attract potential users (property managers and landlords) and collect waitlist signups.

The application is a full-stack TypeScript project built with React on the frontend and Express on the backend, designed to run on Replit with deployment capabilities. The site showcases Cingila's features through a modern, design-focused interface and processes signup requests via email notifications using the Resend service.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18 with TypeScript for type safety
- Vite as the build tool and development server
- Wouter for lightweight client-side routing (home page and signup page)

**UI Component System**
- shadcn/ui component library built on Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Dark theme design system with custom CSS variables for colors, spacing, and shadows
- Typography system using Inter font family from Google Fonts
- Responsive mobile-first design approach

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management
- React Hook Form with Zod validation for form handling
- Custom API request wrapper functions for type-safe HTTP calls

**Design Philosophy**
- Reference-based approach inspired by modern SaaS leaders (Stripe, Linear, Vercel)
- Bold typography with generous whitespace
- Visual hierarchy through scale and contrast rather than color
- Component library includes buttons, cards, forms, toasts, and tooltips

### Backend Architecture

**Server Framework**
- Express.js HTTP server
- Custom middleware for request logging and JSON response capture
- Error handling middleware for centralized error responses

**API Structure**
- RESTful endpoint: `POST /api/signup-request` for waitlist submissions
- Zod schema validation for incoming requests
- Type-safe request/response handling with TypeScript

**Development Environment**
- Vite middleware integration for HMR (Hot Module Replacement) in development
- Separate build processes for client (Vite) and server (esbuild)
- Custom Vite plugins for Replit-specific features (cartographer, dev banner, runtime error modal)

### Data Storage & Validation

**Schema Definition**
- Centralized schema definitions in `shared/schema.ts` using Zod
- Type inference from Zod schemas for compile-time type safety
- Validation schemas for signup requests with specific field requirements:
  - Name (min 2 characters)
  - Email (valid email format)
  - Phone (min 10 characters)
  - Location (min 3 characters)
  - User type (enum: property_manager or landlord)

**Database Configuration**
- Drizzle ORM configured for PostgreSQL (via `drizzle.config.ts`)
- Schema-first approach with migrations directory
- Note: Currently using in-memory storage for user data (MemStorage class), but infrastructure is prepared for PostgreSQL integration

### Build & Deployment

**Build Pipeline**
- Client build: Vite bundles React application to `dist/public`
- Server build: esbuild bundles Express server to `dist/server.js`
- External dependencies marked for Express and Resend to avoid bundling

**Environment Configuration**
- Development mode uses `tsx` for TypeScript execution with watch mode
- Production mode runs compiled JavaScript with Node.js
- Environment-aware Vite configuration for production vs development

## External Dependencies

### Email Service Integration

**Resend API**
- Third-party email service for transactional emails
- Replit Connector integration for credential management
- Dynamic credential fetching using Replit's connector API
- Sends HTML-formatted signup notifications with user details
- Uses `onboarding@resend.dev` as default sender (can be customized to verified domain)

**Authentication Flow**
- Uses Replit identity tokens (`REPL_IDENTITY` or `WEB_REPL_RENEWAL`) for connector authentication
- Fetches credentials from Replit Connectors API at runtime
- Error handling for missing or misconfigured Resend integration

### Replit Platform Services

**Deployment Infrastructure**
- Autoscale deployment option available through Replit Deploy
- Environment variables automatically configured for Replit environment
- Hostname and token management through Replit-specific environment variables

**Development Tools**
- Replit Vite plugins for enhanced developer experience:
  - Cartographer for code navigation
  - Dev banner for development mode indication
  - Runtime error modal for better error visibility

### Design Assets

**Figma Wireframes**
- Attached wireframe assets in `attached_assets/figma-make/`
- Separate web and mobile wireframe components
- Reference designs for dashboard, properties, and chat interfaces
- Design tokens and guidelines documented in `design_guidelines.md`

### UI Component Libraries

**Core Dependencies**
- Radix UI primitives for accessible, unstyled components
- Lucide React for icon system
- Class Variance Authority for component variant management
- Tailwind Merge and CLSX for className composition

**Form & Validation**
- React Hook Form for form state management
- Zod for schema validation and TypeScript type inference
- Hookform/resolvers for integrating Zod with React Hook Form