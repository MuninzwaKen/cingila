import { 
  LayoutDashboard, 
  Building2, 
  FileText, 
  Droplets, 
  Wrench, 
  MessageSquare, 
  Settings,
  Bell,
  Search,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  AlertCircle,
  CheckCircle,
  Calendar,
  BarChart3,
  Zap,
  Download,
  Send,
  Clock,
  CheckCircle2,
  XCircle,
  Filter,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
  Home,
  MapPin,
  Eye
} from 'lucide-react';

export function WebWireframe() {
  return (
    <div className="grid grid-cols-1 gap-8">
      {/* Dashboard View */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
        <div className="border-b border-slate-700 p-4 bg-slate-800/80">
          <p className="text-orange-500">Web Wireframe #1 - Dashboard View</p>
        </div>
        
        <div className="flex h-[800px]">
          {/* Sidebar */}
          <div className="w-64 bg-slate-900/50 border-r border-slate-700 p-4">
            <div className="mb-8">
              <div className="h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <p className="text-white mt-2">Cingila</p>
              <p className="text-slate-400 text-xs">AI Property Assistant</p>
            </div>

            <nav className="space-y-2">
              <NavItem icon={<LayoutDashboard className="w-5 h-5" />} label="Dashboard" active />
              <NavItem icon={<Building2 className="w-5 h-5" />} label="Properties" />
              <NavItem icon={<FileText className="w-5 h-5" />} label="Billing & Invoices" />
              <NavItem icon={<Droplets className="w-5 h-5" />} label="Water Management" />
              <NavItem icon={<Wrench className="w-5 h-5" />} label="Maintenance" />
              <NavItem icon={<BarChart3 className="w-5 h-5" />} label="Analytics" />
              <NavItem icon={<MessageSquare className="w-5 h-5" />} label="AI Assistant" badge="AI" />
              <NavItem icon={<Settings className="w-5 h-5" />} label="Settings" />
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            {/* Header */}
            <div className="bg-slate-800/30 border-b border-slate-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-white mb-1">Dashboard Overview</h2>
                  <p className="text-slate-400">Welcome back, Alex</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="bg-slate-900/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-500 w-64"
                    />
                  </div>
                  <button className="relative p-2 bg-slate-900/50 border border-slate-600 rounded-lg hover:bg-slate-900 transition-colors">
                    <Bell className="w-5 h-5 text-slate-400" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
                  </button>
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full" />
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="p-6 grid grid-cols-4 gap-4">
              <StatCard
                icon={<DollarSign className="w-6 h-6" />}
                label="Total Revenue"
                value="KES 4.2M"
                change="+12.5%"
                positive
              />
              <StatCard
                icon={<Building2 className="w-6 h-6" />}
                label="Active Properties"
                value="42"
                change="+3"
                positive
              />
              <StatCard
                icon={<Users className="w-6 h-6" />}
                label="Tenants"
                value="156"
                change="-2"
              />
              <StatCard
                icon={<Wrench className="w-6 h-6" />}
                label="Pending Repairs"
                value="8"
                change="2 urgent"
                alert
              />
            </div>

            {/* Charts and AI Assistant */}
            <div className="p-6 grid grid-cols-3 gap-6">
              {/* Revenue Chart */}
              <div className="col-span-2 bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-white mb-1">Revenue Trends</h3>
                    <p className="text-slate-400">Last 6 months</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-orange-500 text-white rounded-lg text-sm">Monthly</button>
                    <button className="px-3 py-1 bg-slate-800 text-slate-400 rounded-lg text-sm">Weekly</button>
                  </div>
                </div>
                <div className="h-64 flex items-end justify-between gap-2">
                  {[65, 75, 60, 85, 95, 88].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-lg relative group cursor-pointer hover:opacity-80 transition-opacity"
                        style={{ height: `${height}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          KES {(height * 50).toFixed(0)}K
                        </div>
                      </div>
                      <span className="text-xs text-slate-500">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Quick Chat */}
              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white">Cingila AI</h3>
                    <p className="text-orange-400 text-sm">Online</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3">
                    <p className="text-slate-300 text-sm">💡 3 water meters are due for reading this week</p>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3">
                    <p className="text-slate-300 text-sm">⚠️ Compliance: Tax filing deadline in 5 days</p>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-3">
                    <p className="text-slate-300 text-sm">📊 Revenue up 12% vs last month</p>
                  </div>
                </div>
                <button className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Open Chat
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="p-6">
              <div className="bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-slate-700">
                  <h3 className="text-white">Recent Activity</h3>
                </div>
                <div className="divide-y divide-slate-700">
                  <ActivityItem
                    icon={<CheckCircle className="w-5 h-5 text-green-400" />}
                    title="Payment Received"
                    description="Tenant #104 - April Rent - KES 25,000"
                    time="2 hours ago"
                  />
                  <ActivityItem
                    icon={<AlertCircle className="w-5 h-5 text-orange-400" />}
                    title="Maintenance Request"
                    description="Unit #205 - Plumbing Issue"
                    time="4 hours ago"
                  />
                  <ActivityItem
                    icon={<FileText className="w-5 h-5 text-blue-400" />}
                    title="Invoice Generated"
                    description="Water billing for May 2025"
                    time="1 day ago"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Properties View */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
        <div className="border-b border-slate-700 p-4 bg-slate-800/80">
          <p className="text-orange-500">Web Wireframe #2 - Properties Management</p>
        </div>
        
        <div className="flex h-[800px]">
          <Sidebar active="Properties" />

          {/* Main Content */}
          <div className="flex-1 flex">
            <div className="flex-1 overflow-auto">
              <div className="bg-slate-800/30 border-b border-slate-700 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-white mb-1">Properties</h2>
                    <p className="text-slate-400">Manage your property portfolio</p>
                  </div>
                  <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    Add Property
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Property Stats */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-orange-400" />
                      <p className="text-slate-400">Total Properties</p>
                    </div>
                    <h3 className="text-white">42</h3>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Home className="w-5 h-5 text-green-400" />
                      <p className="text-slate-400">Occupied Units</p>
                    </div>
                    <h3 className="text-white">156/180</h3>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <DollarSign className="w-5 h-5 text-blue-400" />
                      <p className="text-slate-400">Avg. Rent/Unit</p>
                    </div>
                    <h3 className="text-white">KES 26K</h3>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <BarChart3 className="w-5 h-5 text-purple-400" />
                      <p className="text-slate-400">Occupancy Rate</p>
                    </div>
                    <h3 className="text-white">86.7%</h3>
                  </div>
                </div>

                {/* Properties Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <PropertyCard
                    name="Riverside Apartments"
                    location="Kilimani, Nairobi"
                    units={24}
                    occupied={22}
                    revenue="KES 528K"
                    image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop"
                  />
                  <PropertyCard
                    name="Greenview Heights"
                    location="Westlands, Nairobi"
                    units={36}
                    occupied={34}
                    revenue="KES 936K"
                    image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop"
                  />
                  <PropertyCard
                    name="Parkside Residences"
                    location="Lavington, Nairobi"
                    units={18}
                    occupied={16}
                    revenue="KES 432K"
                    image="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop"
                  />
                  <PropertyCard
                    name="Garden City Suites"
                    location="Karen, Nairobi"
                    units={28}
                    occupied={24}
                    revenue="KES 672K"
                    image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop"
                  />
                </div>
              </div>
            </div>

            {/* AI Assistant Panel */}
            <AIAssistantPanel 
              title="Property Insights"
              suggestions={[
                "Riverside Apartments has 2 vacant units. Average time to fill: 12 days. Would you like me to create listings?",
                "Garden City Suites rent is 8% below market average for Karen area. Consider rent adjustment.",
                "Greenview Heights has highest occupancy. Similar properties nearby might be good investment opportunities."
              ]}
            />
          </div>
        </div>
      </div>

      {/* Billing & Invoices View */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
        <div className="border-b border-slate-700 p-4 bg-slate-800/80">
          <p className="text-orange-500">Web Wireframe #3 - Billing & Invoices</p>
        </div>
        
        <div className="flex h-[800px]">
          <Sidebar active="Billing & Invoices" />

          <div className="flex-1 flex">
            <div className="flex-1 overflow-auto">
              <div className="bg-slate-800/30 border-b border-slate-700 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-white mb-1">Billing & Invoices</h2>
                    <p className="text-slate-400">Manage rent, service charges & collections</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Export
                    </button>
                    <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      New Invoice
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Billing Stats */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-slate-400">Total Billed</p>
                      <ArrowUpRight className="w-4 h-4 text-green-400" />
                    </div>
                    <h3 className="text-white mb-1">KES 4.2M</h3>
                    <p className="text-green-400 text-sm">+12% from last month</p>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-slate-400">Collected</p>
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    </div>
                    <h3 className="text-white mb-1">KES 3.8M</h3>
                    <p className="text-slate-400 text-sm">90.5% collection rate</p>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-slate-400">Pending</p>
                      <Clock className="w-4 h-4 text-orange-400" />
                    </div>
                    <h3 className="text-white mb-1">KES 320K</h3>
                    <p className="text-orange-400 text-sm">18 pending invoices</p>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-slate-400">Overdue</p>
                      <XCircle className="w-4 h-4 text-red-400" />
                    </div>
                    <h3 className="text-white mb-1">KES 80K</h3>
                    <p className="text-red-400 text-sm">5 overdue payments</p>
                  </div>
                </div>

                {/* Filters */}
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search invoices..."
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-500"
                    />
                  </div>
                  <button className="px-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                </div>

                {/* Invoices Table */}
                <div className="bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-slate-800/50">
                      <tr>
                        <th className="text-left px-4 py-3 text-slate-400 text-sm">Invoice #</th>
                        <th className="text-left px-4 py-3 text-slate-400 text-sm">Tenant/Unit</th>
                        <th className="text-left px-4 py-3 text-slate-400 text-sm">Type</th>
                        <th className="text-left px-4 py-3 text-slate-400 text-sm">Amount</th>
                        <th className="text-left px-4 py-3 text-slate-400 text-sm">Due Date</th>
                        <th className="text-left px-4 py-3 text-slate-400 text-sm">Status</th>
                        <th className="text-left px-4 py-3 text-slate-400 text-sm">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                      <InvoiceRow
                        invoiceId="INV-2025-001"
                        tenant="John Kamau"
                        unit="A-104"
                        type="Rent"
                        amount="KES 25,000"
                        dueDate="May 5, 2025"
                        status="Paid"
                      />
                      <InvoiceRow
                        invoiceId="INV-2025-002"
                        tenant="Mary Wanjiru"
                        unit="B-203"
                        type="Rent + Water"
                        amount="KES 28,500"
                        dueDate="May 5, 2025"
                        status="Pending"
                      />
                      <InvoiceRow
                        invoiceId="INV-2025-003"
                        tenant="Peter Ochieng"
                        unit="C-301"
                        type="Service Charge"
                        amount="KES 5,000"
                        dueDate="May 1, 2025"
                        status="Overdue"
                      />
                      <InvoiceRow
                        invoiceId="INV-2025-004"
                        tenant="Jane Akinyi"
                        unit="A-205"
                        type="Rent"
                        amount="KES 30,000"
                        dueDate="May 5, 2025"
                        status="Paid"
                      />
                      <InvoiceRow
                        invoiceId="INV-2025-005"
                        tenant="David Mwangi"
                        unit="B-107"
                        type="Rent + Water"
                        amount="KES 32,000"
                        dueDate="May 5, 2025"
                        status="Pending"
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <AIAssistantPanel 
              title="Billing Assistant"
              suggestions={[
                "5 invoices are overdue. Send MPESA payment reminders?",
                "May billing cycle starts in 2 days. Auto-generate all invoices?",
                "Water billing for 42 units ready. Total: KES 89,400. Generate invoices?",
                "Collection rate improved by 5% this month. Great job!"
              ]}
            />
          </div>
        </div>
      </div>

      {/* Water Management View */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
        <div className="border-b border-slate-700 p-4 bg-slate-800/80">
          <p className="text-orange-500">Web Wireframe #4 - Water Management</p>
        </div>
        
        <div className="flex h-[800px]">
          <Sidebar active="Water Management" />

          <div className="flex-1 flex">
            <div className="flex-1 overflow-auto">
              <div className="bg-slate-800/30 border-b border-slate-700 p-6">
                <h2 className="text-white mb-1">Water Management</h2>
                <p className="text-slate-400">Meter readings, tariffs & billing</p>
              </div>

              <div className="p-6 space-y-6">
                {/* Quick Actions */}
                <div className="grid grid-cols-3 gap-4">
                  <button className="bg-slate-900/50 border border-slate-700 rounded-xl p-4 hover:bg-slate-900 transition-colors text-left">
                    <Calendar className="w-8 h-8 text-orange-400 mb-2" />
                    <h4 className="text-white mb-1">New Reading</h4>
                    <p className="text-slate-400 text-sm">Record meter reading</p>
                  </button>
                  <button className="bg-slate-900/50 border border-slate-700 rounded-xl p-4 hover:bg-slate-900 transition-colors text-left">
                    <DollarSign className="w-8 h-8 text-orange-400 mb-2" />
                    <h4 className="text-white mb-1">Tariff Setup</h4>
                    <p className="text-slate-400 text-sm">Manage pricing</p>
                  </button>
                  <button className="bg-slate-900/50 border border-slate-700 rounded-xl p-4 hover:bg-slate-900 transition-colors text-left">
                    <FileText className="w-8 h-8 text-orange-400 mb-2" />
                    <h4 className="text-white mb-1">Generate Bills</h4>
                    <p className="text-slate-400 text-sm">Create invoices</p>
                  </button>
                </div>

                {/* Meters List */}
                <div className="bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden">
                  <div className="p-4 border-b border-slate-700 flex items-center justify-between">
                    <h3 className="text-white">Water Meters</h3>
                    <button className="px-3 py-1 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm transition-colors">
                      Add Meter
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-800/50">
                        <tr>
                          <th className="text-left px-4 py-3 text-slate-400 text-sm">Meter ID</th>
                          <th className="text-left px-4 py-3 text-slate-400 text-sm">Unit</th>
                          <th className="text-left px-4 py-3 text-slate-400 text-sm">Last Reading</th>
                          <th className="text-left px-4 py-3 text-slate-400 text-sm">Usage</th>
                          <th className="text-left px-4 py-3 text-slate-400 text-sm">Status</th>
                          <th className="text-left px-4 py-3 text-slate-400 text-sm">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-700">
                        <MeterRow 
                          id="WM-001" 
                          unit="A-101" 
                          reading="4,523" 
                          usage="245 L" 
                          status="Due" 
                          alert 
                        />
                        <MeterRow 
                          id="WM-002" 
                          unit="A-102" 
                          reading="3,891" 
                          usage="198 L" 
                          status="Current" 
                        />
                        <MeterRow 
                          id="WM-003" 
                          unit="A-103" 
                          reading="5,234" 
                          usage="312 L" 
                          status="Due" 
                          alert 
                        />
                        <MeterRow 
                          id="WM-004" 
                          unit="B-201" 
                          reading="2,987" 
                          usage="176 L" 
                          status="Current" 
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <AIAssistantPanel 
              title="Water Management AI"
              suggestions={[
                "3 meters are due for reading this week. Create reading schedule?",
                "Unusually high usage detected at WM-003 (Unit A-103). Possible leak?",
                "May water billing ready: 42 meters, total KES 89,400. Generate invoices?",
                "Water tariff increase of 5% effective June 1st. Update rates?"
              ]}
            />
          </div>
        </div>
      </div>

      {/* Maintenance & Analytics View */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
        <div className="border-b border-slate-700 p-4 bg-slate-800/80">
          <p className="text-orange-500">Web Wireframe #5 - Maintenance & Analytics</p>
        </div>
        
        <div className="flex h-[800px]">
          <Sidebar active="Maintenance" />

          <div className="flex-1 flex">
            <div className="flex-1 overflow-auto">
              <div className="bg-slate-800/30 border-b border-slate-700 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-white mb-1">Maintenance & Analytics</h2>
                    <p className="text-slate-400">Track repairs, workflows & performance</p>
                  </div>
                  <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors flex items-center gap-2">
                    <Wrench className="w-4 h-4" />
                    New Request
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Maintenance Stats */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-slate-400">Total Requests</p>
                      <Wrench className="w-4 h-4 text-orange-400" />
                    </div>
                    <h3 className="text-white mb-1">23</h3>
                    <p className="text-slate-400 text-sm">This month</p>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-slate-400">In Progress</p>
                      <Clock className="w-4 h-4 text-blue-400" />
                    </div>
                    <h3 className="text-white mb-1">8</h3>
                    <p className="text-blue-400 text-sm">2 urgent</p>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-slate-400">Completed</p>
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    </div>
                    <h3 className="text-white mb-1">15</h3>
                    <p className="text-green-400 text-sm">65% completion</p>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-slate-400">Avg Response</p>
                      <BarChart3 className="w-4 h-4 text-purple-400" />
                    </div>
                    <h3 className="text-white mb-1">4.2hrs</h3>
                    <p className="text-green-400 text-sm">-15% faster</p>
                  </div>
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Requests by Category */}
                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-white mb-4">Requests by Category</h3>
                    <div className="space-y-3">
                      <CategoryBar label="Plumbing" value={35} color="bg-blue-500" />
                      <CategoryBar label="Electrical" value={25} color="bg-yellow-500" />
                      <CategoryBar label="HVAC" value={20} color="bg-green-500" />
                      <CategoryBar label="Carpentry" value={12} color="bg-orange-500" />
                      <CategoryBar label="Other" value={8} color="bg-purple-500" />
                    </div>
                  </div>

                  {/* Response Time Trend */}
                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-white mb-4">Response Time Trend</h3>
                    <div className="h-48 flex items-end justify-between gap-2">
                      {[85, 72, 68, 65, 58, 52].map((height, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2">
                          <div 
                            className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg"
                            style={{ height: `${height}%` }}
                          />
                          <span className="text-xs text-slate-500">
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Active Maintenance Requests */}
                <div className="bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden">
                  <div className="p-4 border-b border-slate-700">
                    <h3 className="text-white">Active Maintenance Requests</h3>
                  </div>
                  <div className="divide-y divide-slate-700">
                    <MaintenanceItem
                      unit="B-205"
                      issue="Plumbing - Burst Pipe"
                      priority="Urgent"
                      status="In Progress"
                      contractor="ABC Plumbing"
                      time="2 hours ago"
                    />
                    <MaintenanceItem
                      unit="A-104"
                      issue="Electrical - Light Fixture"
                      priority="Medium"
                      status="Assigned"
                      contractor="QuickFix Electric"
                      time="5 hours ago"
                    />
                    <MaintenanceItem
                      unit="C-301"
                      issue="HVAC - AC Not Cooling"
                      priority="High"
                      status="Pending"
                      contractor="Not assigned"
                      time="1 day ago"
                    />
                  </div>
                </div>
              </div>
            </div>

            <AIAssistantPanel 
              title="Maintenance AI"
              suggestions={[
                "Unit B-205 plumbing issue marked as urgent. Recommended: ABC Plumbing (4.8★, avg 2hr response). Auto-schedule?",
                "3 requests pending assignment. Top-rated contractors available. View recommendations?",
                "May maintenance costs: KES 145K. 12% below budget. Trend analysis shows efficiency improvement.",
                "Recurring HVAC issues in Building C. Schedule preventive maintenance inspection?"
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Sidebar({ active }: { active: string }) {
  return (
    <div className="w-64 bg-slate-900/50 border-r border-slate-700 p-4">
      <div className="mb-8">
        <div className="h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
          <Building2 className="w-6 h-6 text-white" />
        </div>
        <p className="text-white mt-2">Cingila</p>
        <p className="text-slate-400 text-xs">AI Property Assistant</p>
      </div>

      <nav className="space-y-2">
        <NavItem icon={<LayoutDashboard className="w-5 h-5" />} label="Dashboard" active={active === "Dashboard"} />
        <NavItem icon={<Building2 className="w-5 h-5" />} label="Properties" active={active === "Properties"} />
        <NavItem icon={<FileText className="w-5 h-5" />} label="Billing & Invoices" active={active === "Billing & Invoices"} />
        <NavItem icon={<Droplets className="w-5 h-5" />} label="Water Management" active={active === "Water Management"} />
        <NavItem icon={<Wrench className="w-5 h-5" />} label="Maintenance" active={active === "Maintenance"} />
        <NavItem icon={<BarChart3 className="w-5 h-5" />} label="Analytics" />
        <NavItem icon={<MessageSquare className="w-5 h-5" />} label="AI Assistant" badge="AI" />
        <NavItem icon={<Settings className="w-5 h-5" />} label="Settings" />
      </nav>
    </div>
  );
}

function AIAssistantPanel({ title, suggestions }: { title: string; suggestions: string[] }) {
  return (
    <div className="w-96 bg-slate-900/30 flex flex-col border-l border-slate-700">
      <div className="bg-slate-800/50 border-b border-slate-700 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-white">{title}</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <p className="text-green-400 text-sm">Online</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-3">
          <div className="flex items-start gap-2 mb-2">
            <Zap className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
            <p className="text-slate-300 text-sm">Hello! I'm Cingila, your AI property assistant. I can help you with insights and automation.</p>
          </div>
        </div>

        {suggestions.map((suggestion, i) => (
          <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-3">
            <p className="text-slate-300 text-sm mb-2">{suggestion}</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-orange-500 hover:bg-orange-600 text-white rounded text-xs transition-colors">
                Yes
              </button>
              <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded text-xs transition-colors">
                Not now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-slate-700">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask me anything..."
            className="flex-1 bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500"
          />
          <button className="px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors">
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-slate-500 mt-2 text-center">AI responses may not always be accurate</p>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false, badge }: { 
  icon: React.ReactNode; 
  label: string; 
  active?: boolean;
  badge?: string;
}) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
        active
          ? 'bg-orange-500 text-white'
          : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
      }`}
    >
      {icon}
      <span className="flex-1 text-left">{label}</span>
      {badge && (
        <span className="px-2 py-0.5 bg-orange-500 text-white text-xs rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
}

function StatCard({ 
  icon, 
  label, 
  value, 
  change, 
  positive = false,
  alert = false 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  change: string;
  positive?: boolean;
  alert?: boolean;
}) {
  return (
    <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/30 rounded-lg flex items-center justify-center text-orange-400">
          {icon}
        </div>
        {positive && <TrendingUp className="w-5 h-5 text-green-400" />}
        {!positive && !alert && <TrendingDown className="w-5 h-5 text-red-400" />}
        {alert && <AlertCircle className="w-5 h-5 text-orange-400" />}
      </div>
      <p className="text-slate-400 mb-1">{label}</p>
      <div className="flex items-end justify-between">
        <h3 className="text-white">{value}</h3>
        <span className={`text-sm ${
          alert ? 'text-orange-400' : positive ? 'text-green-400' : 'text-red-400'
        }`}>
          {change}
        </span>
      </div>
    </div>
  );
}

function ActivityItem({ 
  icon, 
  title, 
  description, 
  time 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  time: string;
}) {
  return (
    <div className="flex items-center gap-4 p-4 hover:bg-slate-900/30 transition-colors">
      <div className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="text-white mb-0.5">{title}</h4>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
      <span className="text-slate-500 text-sm">{time}</span>
    </div>
  );
}

function PropertyCard({ 
  name, 
  location, 
  units, 
  occupied, 
  revenue, 
  image 
}: { 
  name: string; 
  location: string; 
  units: number; 
  occupied: number; 
  revenue: string;
  image: string;
}) {
  return (
    <div className="bg-slate-900/50 border border-slate-700 rounded-xl overflow-hidden hover:border-orange-500/50 transition-colors group">
      <div className="h-48 bg-slate-800 relative overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute top-3 right-3">
          <button className="p-2 bg-slate-900/80 border border-slate-700 rounded-lg hover:bg-orange-500 transition-colors">
            <Eye className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-white mb-1">{name}</h4>
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-slate-400" />
          <p className="text-slate-400 text-sm">{location}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-2">
            <p className="text-slate-400 text-xs mb-1">Occupancy</p>
            <p className="text-white text-sm">{occupied}/{units} units</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-2">
            <p className="text-slate-400 text-xs mb-1">Revenue</p>
            <p className="text-white text-sm">{revenue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InvoiceRow({ 
  invoiceId, 
  tenant, 
  unit, 
  type, 
  amount, 
  dueDate, 
  status 
}: { 
  invoiceId: string; 
  tenant: string; 
  unit: string; 
  type: string; 
  amount: string; 
  dueDate: string;
  status: string;
}) {
  const statusColors = {
    Paid: 'bg-green-500/10 text-green-400 border-green-500/30',
    Pending: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    Overdue: 'bg-red-500/10 text-red-400 border-red-500/30'
  };

  return (
    <tr className="hover:bg-slate-800/30 transition-colors">
      <td className="px-4 py-3 text-white">{invoiceId}</td>
      <td className="px-4 py-3">
        <div>
          <p className="text-white">{tenant}</p>
          <p className="text-slate-400 text-sm">{unit}</p>
        </div>
      </td>
      <td className="px-4 py-3 text-slate-300">{type}</td>
      <td className="px-4 py-3 text-white">{amount}</td>
      <td className="px-4 py-3 text-slate-300">{dueDate}</td>
      <td className="px-4 py-3">
        <span className={`px-2 py-1 rounded-full text-xs border ${statusColors[status as keyof typeof statusColors]}`}>
          {status}
        </span>
      </td>
      <td className="px-4 py-3">
        <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded text-sm transition-colors">
          View
        </button>
      </td>
    </tr>
  );
}

function MeterRow({ 
  id, 
  unit, 
  reading, 
  usage, 
  status, 
  alert = false 
}: { 
  id: string; 
  unit: string; 
  reading: string; 
  usage: string; 
  status: string;
  alert?: boolean;
}) {
  return (
    <tr className="hover:bg-slate-800/30 transition-colors">
      <td className="px-4 py-3 text-white">{id}</td>
      <td className="px-4 py-3 text-white">{unit}</td>
      <td className="px-4 py-3 text-slate-300">{reading}</td>
      <td className="px-4 py-3 text-slate-300">{usage}</td>
      <td className="px-4 py-3">
        <span className={`px-2 py-1 rounded-full text-xs ${
          alert 
            ? 'bg-orange-500/10 text-orange-400 border border-orange-500/30' 
            : 'bg-green-500/10 text-green-400 border border-green-500/30'
        }`}>
          {status}
        </span>
      </td>
      <td className="px-4 py-3">
        <button className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded text-sm transition-colors">
          Record
        </button>
      </td>
    </tr>
  );
}

function CategoryBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-slate-300 text-sm">{label}</span>
        <span className="text-slate-400 text-sm">{value}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function MaintenanceItem({ 
  unit, 
  issue, 
  priority, 
  status, 
  contractor, 
  time 
}: { 
  unit: string; 
  issue: string; 
  priority: string; 
  status: string; 
  contractor: string;
  time: string;
}) {
  const priorityColors = {
    Urgent: 'text-red-400 bg-red-500/10 border-red-500/30',
    High: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    Medium: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30'
  };

  return (
    <div className="flex items-center gap-4 p-4 hover:bg-slate-900/30 transition-colors">
      <div className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center">
        <Wrench className="w-5 h-5 text-orange-400" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="text-white">Unit {unit}</h4>
          <span className={`px-2 py-0.5 rounded-full text-xs border ${priorityColors[priority as keyof typeof priorityColors]}`}>
            {priority}
          </span>
        </div>
        <p className="text-slate-400 text-sm mb-1">{issue}</p>
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span>{contractor}</span>
          <span>•</span>
          <span>{time}</span>
        </div>
      </div>
      <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-full text-sm">
        {status}
      </span>
    </div>
  );
}
