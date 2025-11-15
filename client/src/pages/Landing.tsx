import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Users,
  DollarSign,
  TrendingUp,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Smartphone,
  BarChart3,
  FileText,
  Droplet,
  Wrench,
  MessageSquare,
  Star,
} from "lucide-react";
import dashboardDesktop from "@assets/image_1763214952463.png";
import propertiesDesktop from "@assets/image_1763214996693.png";
import dashboardMobile from "@assets/image_1763214861546.png";
import chatMobile from "@assets/image_1763214784107.png";
import waterMobile from "@assets/image_1763214901768.png";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/30 backdrop-blur-sm fixed top-0 w-full z-50">
        <div className="container max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-md bg-primary p-2">
                <Building2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-semibold text-lg">Cingila</h1>
                <p className="text-xs text-muted-foreground">AI Property Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#features" className="text-sm hover:text-primary transition-colors" data-testid="link-features">
                Features
              </a>
              <a href="#pricing" className="text-sm hover:text-primary transition-colors" data-testid="link-pricing">
                Pricing
              </a>
              <Button asChild variant="outline" size="sm" data-testid="button-login">
                <a href="/signup">Login</a>
              </Button>
              <Button asChild size="sm" data-testid="button-get-started">
                <a href="/signup">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4" data-testid="badge-trust">
              Trusted by 150+ property managers • 5,000+ properties managed
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
              AI-Powered Property
              <br />
              <span className="text-primary">Management for Kenya</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform your property management with intelligent automation. Track rent, manage tenants, monitor water usage, and handle maintenance - all in one platform.
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <Button size="lg" asChild data-testid="button-hero-cta">
                <a href="/signup">
                  Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild data-testid="button-hero-demo">
                <a href="/signup">Request Demo</a>
              </Button>
            </div>
            <div className="flex gap-8 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                No setup fees
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Cancel anytime
              </div>
            </div>
          </div>

          {/* Hero Image - Device Mockups */}
          <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-8 relative">
            {/* Desktop Mockup */}
            <div className="relative w-full md:w-2/3 max-w-4xl" data-testid="mockup-desktop">
              <div className="rounded-2xl overflow-hidden border-4 border-border shadow-2xl bg-card">
                <div className="h-6 bg-card border-b border-border flex items-center px-3 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                </div>
                <img
                  src={dashboardDesktop}
                  alt="Cingila desktop dashboard"
                  className="w-full h-auto"
                  data-testid="img-hero-desktop"
                />
              </div>
            </div>
            
            {/* Phone Mockup */}
            <div className="relative w-2/3 md:w-1/5 md:mb-8 max-w-xs" data-testid="mockup-phone">
              <div className="rounded-3xl overflow-hidden border-8 border-border shadow-2xl bg-card">
                <div className="bg-card h-6 border-b border-border" />
                <img
                  src={chatMobile}
                  alt="Cingila mobile app"
                  className="w-full h-auto"
                  data-testid="img-hero-mobile"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-card/30">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-properties">
                5,000+
              </div>
              <div className="text-muted-foreground">Properties Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-managers">
                150+
              </div>
              <div className="text-muted-foreground">Property Managers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-collected">
                KES 2.5B+
              </div>
              <div className="text-muted-foreground">Rent Collected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-satisfaction">
                98%
              </div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Challenge
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              60% of Kenyan property managers still use spreadsheets and paper records
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rent Collection Issues</h3>
                <p className="text-muted-foreground">
                  Manual tracking leads to missed payments, delayed reminders, and cash flow problems
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Time-Consuming Tasks</h3>
                <p className="text-muted-foreground">
                  Property managers spend 15+ hours weekly on administrative work instead of growth
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No Business Insights</h3>
                <p className="text-muted-foreground">
                  Without analytics, managers miss optimization opportunities and cost-saving insights
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center p-6 bg-destructive/5 rounded-lg border border-destructive/20">
            <p className="text-lg font-semibold">
              Average property manager loses{" "}
              <span className="text-destructive">KES 500,000 annually</span> to inefficiencies
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-card/30">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Property Management Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to manage properties efficiently, backed by AI intelligence
            </p>
          </div>

          {/* Feature 1 - AI-Powered KYC */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Badge variant="secondary" className="mb-4">AI-Powered KYC</Badge>
              <h3 className="text-3xl font-bold mb-4">
                Smart Tenant Verification & Management
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                AI-driven Know Your Customer (KYC) verification automates tenant screening, background checks, and document validation. Ensure you have reliable tenants from day one.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Automated ID and document verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>AI-powered background screening</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Complete tenant profiles and history</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Lease tracking and deposit management</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary">
                Verify tenants in under 5 minutes
              </div>
            </div>
            <div className="relative">
              {/* Phone Mockup for Chat AI */}
              <div className="mx-auto w-full max-w-xs">
                <div className="rounded-3xl overflow-hidden border-8 border-border shadow-2xl bg-card">
                  <div className="bg-card h-6 border-b border-border" />
                  <img
                    src={chatMobile}
                    alt="AI-powered tenant verification"
                    className="w-full h-auto"
                    data-testid="img-feature-kyc"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Properties */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              {/* Desktop Mockup for Properties */}
              <div className="rounded-2xl overflow-hidden border-4 border-border shadow-2xl bg-card">
                <div className="h-6 bg-card border-b border-border flex items-center px-3 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                </div>
                <img
                  src={propertiesDesktop}
                  alt="Property management dashboard"
                  className="w-full h-auto"
                  data-testid="img-feature-properties"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Badge variant="secondary" className="mb-4">Property Intelligence</Badge>
              <h3 className="text-3xl font-bold mb-4">
                Complete Portfolio Management with AI Insights
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Manage all your properties in one place with AI-powered recommendations. Track occupancy, revenue, and get proactive insights to maximize returns.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Real-time property performance metrics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>AI-driven pricing recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Automated vacancy alerts and listings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Portfolio analytics and forecasting</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary">
                Track unlimited properties
              </div>
            </div>
          </div>

          {/* Feature 3 - Water Management */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Badge variant="secondary" className="mb-4">Water Management</Badge>
              <h3 className="text-3xl font-bold mb-4">
                Smart Water Meter Tracking
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Track water consumption, detect leaks early, and automate billing. Save water and reduce costs with intelligent monitoring.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Digital meter reading records</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Automatic consumption calculation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Leak detection alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Water bill integration</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-primary">
                30% average water cost reduction
              </div>
            </div>
            <div className="relative">
              {/* Phone Mockup for Water Management */}
              <div className="mx-auto w-full max-w-xs">
                <div className="rounded-3xl overflow-hidden border-8 border-border shadow-2xl bg-card">
                  <div className="bg-card h-6 border-b border-border" />
                  <img
                    src={waterMobile}
                    alt="Water management tracking"
                    className="w-full h-auto"
                    data-testid="img-feature-water"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Maintenance Tracking</h3>
                <p className="text-muted-foreground">
                  Log repairs, assign contractors, track costs, and monitor resolution times. Never lose track of maintenance requests.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Tax & Compliance</h3>
                <p className="text-muted-foreground">
                  Stay compliant with county and national regulations. Automated tax calculations, filing reminders, and regulatory reporting built-in.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
                <p className="text-muted-foreground">
                  Ask questions, get insights, and receive intelligent recommendations powered by AI trained on property management best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
                <p className="text-muted-foreground">
                  Revenue trends, occupancy rates, maintenance costs, and predictive insights to optimize your portfolio.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mobile Ready</h3>
                <p className="text-muted-foreground">
                  Access everything from your phone. Record readings, log maintenance, and check payments on the go.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Billing</h3>
                <p className="text-muted-foreground">
                  Automated rent collection with M-PESA integration. Payment reminders, tracking, and 95% collection rates on average.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pay per property. Scale as you grow. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <Card className="hover-elevate">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Basic</h3>
                <p className="text-muted-foreground mb-6">Perfect for getting started</p>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold" data-testid="text-price-basic">$10</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">per property</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Property & unit management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Tenant tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Basic billing & invoicing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Maintenance logging</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild data-testid="button-plan-basic">
                  <a href="/signup?plan=basic">Get Started</a>
                </Button>
              </CardContent>
            </Card>

            {/* Advanced Plan */}
            <Card className="border-primary hover-elevate relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Advanced</h3>
                <p className="text-muted-foreground mb-6">For growing portfolios</p>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary" data-testid="text-price-advanced">$15</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">per property</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Everything in Basic, plus:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>M-PESA integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Water meter management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>AI assistant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full" asChild data-testid="button-plan-advanced">
                  <a href="/signup?plan=advanced">Get Started</a>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="hover-elevate">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-muted-foreground mb-6">For large portfolios</p>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold" data-testid="text-price-enterprise">Custom</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Contact for pricing</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Everything in Advanced, plus:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Custom training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>SLA guarantee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>24/7 phone support</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild data-testid="button-plan-enterprise">
                  <a href="/contact">Contact Sales</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              All plans include 14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Property Managers Across Kenya
            </h2>
            <p className="text-xl text-muted-foreground">
              See how Cingila is transforming property management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-elevate" data-testid="card-testimonial-1">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4" role="img" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4" data-testid="text-testimonial-1">
                  "Cingila transformed how we manage our 45 properties. Rent collection improved from 70% to 95%, and we save 12 hours every week."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10" />
                  <div>
                    <p className="font-semibold" data-testid="text-author-1">Sarah Wanjiku</p>
                    <p className="text-sm text-muted-foreground">Property Manager, Nairobi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-testimonial-2">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4" role="img" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4" data-testid="text-testimonial-2">
                  "The water management feature alone saved us KES 80,000 last month by detecting leaks early. The ROI is incredible."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10" />
                  <div>
                    <p className="font-semibold" data-testid="text-author-2">David Kimani</p>
                    <p className="text-sm text-muted-foreground">Landlord, Mombasa</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-testimonial-3">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4" role="img" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4" data-testid="text-testimonial-3">
                  "Best investment we've made. The AI assistant answers tenant questions instantly, and the analytics help us make smarter decisions."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10" />
                  <div>
                    <p className="font-semibold" data-testid="text-author-3">Grace Omondi</p>
                    <p className="text-sm text-muted-foreground">Real Estate Agency, Kisumu</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Property Management?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join 150+ property managers who are already saving time and increasing revenue with Cingila
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <Button size="lg" asChild data-testid="button-final-cta">
              <a href="/signup">
                Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild data-testid="button-final-demo">
              <a href="/signup">Request Demo</a>
            </Button>
          </div>
          <div className="flex gap-8 justify-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              Setup in 5 minutes
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-md bg-primary p-2">
                  <Building2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="font-semibold text-lg">Cingila</h1>
                  <p className="text-xs text-muted-foreground">AI Property Assistant</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Modern property management for Kenya, powered by AI.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors" data-testid="link-footer-features">Features</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors" data-testid="link-footer-pricing">Pricing</a></li>
                <li><a href="/signup" className="hover:text-primary transition-colors" data-testid="link-footer-demo">Demo</a></li>
                <li><a href="/changelog" className="hover:text-primary transition-colors" data-testid="link-footer-changelog">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-primary transition-colors" data-testid="link-footer-about">About</a></li>
                <li><a href="/blog" className="hover:text-primary transition-colors" data-testid="link-footer-blog">Blog</a></li>
                <li><a href="/careers" className="hover:text-primary transition-colors" data-testid="link-footer-careers">Careers</a></li>
                <li><a href="mailto:info@cingila.co.ke" className="hover:text-primary transition-colors" data-testid="link-footer-contact">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-primary transition-colors" data-testid="link-footer-privacy">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-primary transition-colors" data-testid="link-footer-terms">Terms of Service</a></li>
                <li><a href="/security" className="hover:text-primary transition-colors" data-testid="link-footer-security">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p className="mb-2">&copy; 2025 Cingila. All rights reserved.</p>
            <p>
              Contact us:{" "}
              <a
                href="mailto:info@cingila.co.ke"
                className="text-primary hover:underline"
                data-testid="link-footer-email"
              >
                info@cingila.co.ke
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
