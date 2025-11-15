import { 
  LayoutDashboard, 
  Building2, 
  FileText, 
  MessageSquare, 
  User,
  Bell,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Droplets,
  Wrench,
  Calendar,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Plus,
  Search,
  Filter,
  Zap,
  Send
} from 'lucide-react';

export function MobileWireframe() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Dashboard Screen */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
        <div className="border-b border-slate-700 p-4 bg-slate-800/80">
          <p className="text-orange-500 text-center">Mobile Wireframe #1 - Dashboard</p>
        </div>
        
        <div className="flex justify-center p-8 bg-slate-900/30">
          <div className="w-[375px] h-[812px] bg-slate-900 rounded-[3rem] border-4 border-slate-700 shadow-2xl overflow-hidden flex flex-col">
            {/* Status Bar */}
            <div className="h-11 bg-slate-900 flex items-center justify-between px-8 pt-2">
              <span className="text-white text-sm">9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-3 border border-white rounded-sm" />
                <div className="w-4 h-3 border border-white rounded-sm" />
                <div className="w-4 h-3 border border-white rounded-sm" />
              </div>
            </div>

            {/* Header */}
            <div className="bg-slate-800/50 p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-slate-400 text-sm">Welcome back</p>
                  <h2 className="text-white">Alex Muchemi</h2>
                </div>
                <button className="relative p-2 bg-slate-900/50 border border-slate-600 rounded-full">
                  <Bell className="w-5 h-5 text-slate-400" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full text-white text-xs flex items-center justify-center">5</span>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto bg-slate-900 p-4 space-y-4">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-3">
                <MobileStatCard
                  icon={<DollarSign className="w-5 h-5" />}
                  label="Revenue"
                  value="KES 4.2M"
                  change="+12.5%"
                  positive
                />
                <MobileStatCard
                  icon={<Building2 className="w-5 h-5" />}
                  label="Properties"
                  value="42"
                  change="+3"
                  positive
                />
              </div>

              {/* AI Quick Access */}
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-2xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white">Cingila AI</h3>
                    <p className="text-orange-400 text-sm">Ask me anything</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-orange-400" />
                </div>
                <div className="space-y-2">
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-2">
                    <p className="text-slate-300 text-xs">💡 3 meters due for reading</p>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-2">
                    <p className="text-slate-300 text-xs">⚠️ Tax deadline in 5 days</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-4">
                <h3 className="text-white mb-3">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <QuickActionButton
                    icon={<FileText className="w-5 h-5" />}
                    label="New Invoice"
                  />
                  <QuickActionButton
                    icon={<Droplets className="w-5 h-5" />}
                    label="Water Reading"
                  />
                  <QuickActionButton
                    icon={<Wrench className="w-5 h-5" />}
                    label="Maintenance"
                  />
                  <QuickActionButton
                    icon={<Calendar className="w-5 h-5" />}
                    label="Schedule"
                  />
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden">
                <div className="p-3 border-b border-slate-700 flex items-center justify-between">
                  <h3 className="text-white">Recent Activity</h3>
                  <button className="text-orange-400 text-sm">View All</button>
                </div>
                <div className="divide-y divide-slate-700">
                  <MobileActivityItem
                    icon={<CheckCircle className="w-4 h-4 text-green-400" />}
                    title="Payment Received"
                    description="Unit #104 - KES 25,000"
                    time="2h ago"
                  />
                  <MobileActivityItem
                    icon={<AlertCircle className="w-4 h-4 text-orange-400" />}
                    title="Maintenance Request"
                    description="Unit #205 - Plumbing"
                    time="4h ago"
                  />
                  <MobileActivityItem
                    icon={<FileText className="w-4 h-4 text-blue-400" />}
                    title="Invoice Generated"
                    description="Water billing - May"
                    time="1d ago"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="bg-slate-800 border-t border-slate-700 px-4 py-3 pb-6">
              <div className="flex items-center justify-around">
                <MobileNavButton icon={<LayoutDashboard className="w-6 h-6" />} label="Home" active />
                <MobileNavButton icon={<Building2 className="w-6 h-6" />} label="Properties" />
                <MobileNavButton icon={<MessageSquare className="w-6 h-6" />} label="AI Chat" badge />
                <MobileNavButton icon={<FileText className="w-6 h-6" />} label="Billing" />
                <MobileNavButton icon={<User className="w-6 h-6" />} label="Profile" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Chat Screen */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
        <div className="border-b border-slate-700 p-4 bg-slate-800/80">
          <p className="text-orange-500 text-center">Mobile Wireframe #2 - AI Chat</p>
        </div>
        
        <div className="flex justify-center p-8 bg-slate-900/30">
          <div className="w-[375px] h-[812px] bg-slate-900 rounded-[3rem] border-4 border-slate-700 shadow-2xl overflow-hidden flex flex-col">
            {/* Status Bar */}
            <div className="h-11 bg-slate-900 flex items-center justify-between px-8 pt-2">
              <span className="text-white text-sm">9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-3 border border-white rounded-sm" />
                <div className="w-4 h-3 border border-white rounded-sm" />
                <div className="w-4 h-3 border border-white rounded-sm" />
              </div>
            </div>

            {/* Chat Header */}
            <div className="bg-slate-800/50 border-b border-slate-700 p-4">
              <div className="flex items-center gap-3">
                <button className="p-2">
                  <ChevronRight className="w-5 h-5 text-white rotate-180" />
                </button>
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white">Cingila AI</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <p className="text-green-400 text-sm">Online</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-auto bg-slate-900 p-4 space-y-3">
              <MobileChatMessage
                type="assistant"
                message="Hello! I'm Cingila, your AI property management assistant. How can I help you today?"
                time="9:30 AM"
              />
              <MobileChatMessage
                type="user"
                message="Show me tenants with pending rent payments"
                time="9:32 AM"
              />
              <MobileChatMessage
                type="assistant"
                message="I found 5 tenants with pending rent payments for May 2025:\n\n• Unit A-104: KES 25,000 (2 days overdue)\n• Unit B-203: KES 30,000 (5 days overdue)\n• Unit C-301: KES 28,000 (1 day overdue)\n• Unit A-205: KES 25,000 (3 days overdue)\n• Unit B-107: KES 32,000 (overdue today)\n\nTotal pending: KES 140,000\n\nWould you like me to send payment reminders?"
                time="9:32 AM"
              />
              <MobileChatMessage
                type="user"
                message="Yes, send reminders via SMS"
                time="9:33 AM"
              />
              <MobileChatMessage
                type="assistant"
                message="✅ SMS reminders sent successfully to all 5 tenants!\n\nThe messages include:\n• Outstanding amount\n• MPESA paybill details\n• Payment deadline\n\nYou'll be notified when payments are received."
                time="9:33 AM"
              />
              
              {/* Suggestion Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                <SuggestionChip text="Water meter readings" />
                <SuggestionChip text="Generate invoices" />
                <SuggestionChip text="Maintenance status" />
              </div>
            </div>

            {/* Chat Input */}
            <div className="bg-slate-800 border-t border-slate-700 p-4 pb-6">
              <div className="flex gap-2">
                <button className="p-3 bg-slate-900/50 border border-slate-600 rounded-full">
                  <Plus className="w-5 h-5 text-slate-400" />
                </button>
                <div className="flex-1 flex gap-2 bg-slate-900/50 border border-slate-600 rounded-full px-4 items-center">
                  <input
                    type="text"
                    placeholder="Ask me anything..."
                    className="flex-1 bg-transparent text-white placeholder-slate-500 outline-none"
                  />
                  <button className="p-2">
                    <Send className="w-5 h-5 text-orange-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Water Management Screen */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
        <div className="border-b border-slate-700 p-4 bg-slate-800/80">
          <p className="text-orange-500 text-center">Mobile Wireframe #3 - Water Management</p>
        </div>
        
        <div className="flex justify-center p-8 bg-slate-900/30">
          <div className="w-[375px] h-[812px] bg-slate-900 rounded-[3rem] border-4 border-slate-700 shadow-2xl overflow-hidden flex flex-col">
            {/* Status Bar */}
            <div className="h-11 bg-slate-900 flex items-center justify-between px-8 pt-2">
              <span className="text-white text-sm">9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-3 border border-white rounded-sm" />
                <div className="w-4 h-3 border border-white rounded-sm" />
                <div className="w-4 h-3 border border-white rounded-sm" />
              </div>
            </div>

            {/* Header */}
            <div className="bg-slate-800/50 border-b border-slate-700 p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-white">Water Management</h2>
                <button className="p-2 bg-orange-500 rounded-full">
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search meters..."
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg pl-9 pr-3 py-2 text-white placeholder-slate-500 text-sm"
                  />
                </div>
                <button className="p-2 bg-slate-900/50 border border-slate-600 rounded-lg">
                  <Filter className="w-5 h-5 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto bg-slate-900 p-4 space-y-4">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-3">
                  <p className="text-slate-400 text-xs mb-1">Total Meters</p>
                  <p className="text-white">42</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-3">
                  <p className="text-slate-400 text-xs mb-1">Due Today</p>
                  <p className="text-orange-400">8</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-3">
                  <p className="text-slate-400 text-xs mb-1">This Month</p>
                  <p className="text-white">KES 89K</p>
                </div>
              </div>

              {/* Meters List */}
              <div className="space-y-3">
                <h3 className="text-white">Water Meters</h3>
                
                <MeterCard
                  id="WM-001"
                  unit="Unit A-101"
                  reading="4,523"
                  usage="245 L"
                  status="Due Today"
                  alert
                />
                <MeterCard
                  id="WM-002"
                  unit="Unit A-102"
                  reading="3,891"
                  usage="198 L"
                  status="Current"
                />
                <MeterCard
                  id="WM-003"
                  unit="Unit A-103"
                  reading="5,234"
                  usage="312 L"
                  status="Due Tomorrow"
                  alert
                />
                <MeterCard
                  id="WM-004"
                  unit="Unit B-201"
                  reading="2,987"
                  usage="176 L"
                  status="Current"
                />
                <MeterCard
                  id="WM-005"
                  unit="Unit B-202"
                  reading="4,156"
                  usage="223 L"
                  status="Current"
                />
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="bg-slate-800 border-t border-slate-700 px-4 py-3 pb-6">
              <div className="flex items-center justify-around">
                <MobileNavButton icon={<LayoutDashboard className="w-6 h-6" />} label="Home" />
                <MobileNavButton icon={<Building2 className="w-6 h-6" />} label="Properties" />
                <MobileNavButton icon={<MessageSquare className="w-6 h-6" />} label="AI Chat" />
                <MobileNavButton icon={<FileText className="w-6 h-6" />} label="Billing" active />
                <MobileNavButton icon={<User className="w-6 h-6" />} label="Profile" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Maintenance Screen */}
      <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
        <div className="border-b border-slate-700 p-4 bg-slate-800/80">
          <p className="text-orange-500 text-center">Mobile Wireframe #4 - Maintenance</p>
        </div>
        
        <div className="flex justify-center p-8 bg-slate-900/30">
          <div className="w-[375px] h-[812px] bg-slate-900 rounded-[3rem] border-4 border-slate-700 shadow-2xl overflow-hidden flex flex-col">
            {/* Status Bar */}
            <div className="h-11 bg-slate-900 flex items-center justify-between px-8 pt-2">
              <span className="text-white text-sm">9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-3 border border-white rounded-sm" />
                <div className="w-4 h-3 border border-white rounded-sm" />
                <div className="w-4 h-3 border border-white rounded-sm" />
              </div>
            </div>

            {/* Header */}
            <div className="bg-slate-800/50 border-b border-slate-700 p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-white">Maintenance</h2>
                <button className="px-3 py-1.5 bg-orange-500 text-white rounded-lg text-sm">
                  New Request
                </button>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-orange-500 text-white rounded-lg text-sm">
                  Active (8)
                </button>
                <button className="flex-1 py-2 bg-slate-900/50 border border-slate-600 text-slate-400 rounded-lg text-sm">
                  Completed
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto bg-slate-900 p-4 space-y-3">
              {/* AI Suggestion */}
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-xl p-3">
                <div className="flex items-start gap-2 mb-2">
                  <Zap className="w-4 h-4 text-orange-400 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-white text-sm mb-1">AI Suggestion</p>
                    <p className="text-slate-300 text-xs">Unit B-205 plumbing issue might require emergency service. Recommended contractor: ABC Plumbing (4.8★)</p>
                  </div>
                </div>
                <button className="w-full py-2 bg-orange-500 text-white rounded-lg text-xs">
                  Auto-Schedule
                </button>
              </div>

              {/* Maintenance Requests */}
              <MaintenanceCard
                unit="Unit B-205"
                issue="Plumbing - Burst Pipe"
                priority="Urgent"
                time="2 hours ago"
                status="In Progress"
              />
              <MaintenanceCard
                unit="Unit A-104"
                issue="Electrical - Light Fixture"
                priority="Medium"
                time="5 hours ago"
                status="Assigned"
              />
              <MaintenanceCard
                unit="Unit C-301"
                issue="HVAC - AC Not Cooling"
                priority="High"
                time="1 day ago"
                status="Pending"
              />
              <MaintenanceCard
                unit="Unit A-203"
                issue="Carpentry - Door Repair"
                priority="Low"
                time="2 days ago"
                status="Scheduled"
              />
              <MaintenanceCard
                unit="Unit B-108"
                issue="Painting - Wall Damage"
                priority="Low"
                time="3 days ago"
                status="Pending"
              />
            </div>

            {/* Bottom Navigation */}
            <div className="bg-slate-800 border-t border-slate-700 px-4 py-3 pb-6">
              <div className="flex items-center justify-around">
                <MobileNavButton icon={<LayoutDashboard className="w-6 h-6" />} label="Home" />
                <MobileNavButton icon={<Building2 className="w-6 h-6" />} label="Properties" />
                <MobileNavButton icon={<MessageSquare className="w-6 h-6" />} label="AI Chat" />
                <MobileNavButton icon={<FileText className="w-6 h-6" />} label="Billing" />
                <MobileNavButton icon={<User className="w-6 h-6" />} label="Profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileStatCard({ 
  icon, 
  label, 
  value, 
  change, 
  positive = false 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  change: string;
  positive?: boolean;
}) {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="w-8 h-8 bg-orange-500/10 border border-orange-500/30 rounded-lg flex items-center justify-center text-orange-400">
          {icon}
        </div>
        {positive ? (
          <TrendingUp className="w-4 h-4 text-green-400" />
        ) : (
          <TrendingDown className="w-4 h-4 text-red-400" />
        )}
      </div>
      <p className="text-slate-400 text-xs mb-1">{label}</p>
      <p className="text-white">{value}</p>
      <span className={`text-xs ${positive ? 'text-green-400' : 'text-red-400'}`}>
        {change}
      </span>
    </div>
  );
}

function QuickActionButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="bg-slate-900/50 border border-slate-600 rounded-xl p-3 hover:bg-slate-900 transition-colors flex flex-col items-center gap-2">
      <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/30 rounded-lg flex items-center justify-center text-orange-400">
        {icon}
      </div>
      <span className="text-white text-xs">{label}</span>
    </button>
  );
}

function MobileActivityItem({ 
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
    <div className="flex items-center gap-3 p-3">
      <div className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-white text-sm mb-0.5">{title}</h4>
        <p className="text-slate-400 text-xs truncate">{description}</p>
      </div>
      <span className="text-slate-500 text-xs">{time}</span>
    </div>
  );
}

function MobileNavButton({ 
  icon, 
  label, 
  active = false, 
  badge = false 
}: { 
  icon: React.ReactNode; 
  label: string; 
  active?: boolean;
  badge?: boolean;
}) {
  return (
    <button className="flex flex-col items-center gap-1 relative">
      <div className={active ? 'text-orange-400' : 'text-slate-500'}>
        {icon}
        {badge && (
          <span className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full" />
        )}
      </div>
      <span className={`text-xs ${active ? 'text-orange-400' : 'text-slate-500'}`}>
        {label}
      </span>
    </button>
  );
}

function MobileChatMessage({ 
  type, 
  message, 
  time 
}: { 
  type: 'user' | 'assistant'; 
  message: string; 
  time: string;
}) {
  return (
    <div className={`flex flex-col ${type === 'user' ? 'items-end' : 'items-start'}`}>
      <div
        className={`max-w-[80%] rounded-2xl p-3 ${
          type === 'user'
            ? 'bg-orange-500 text-white rounded-br-sm'
            : 'bg-slate-800/50 border border-slate-700 text-slate-200 rounded-bl-sm'
        }`}
      >
        <p className="text-sm whitespace-pre-line">{message}</p>
      </div>
      <span className="text-xs text-slate-500 mt-1 px-1">{time}</span>
    </div>
  );
}

function SuggestionChip({ text }: { text: string }) {
  return (
    <button className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 text-slate-300 text-xs rounded-full hover:bg-slate-800 transition-colors">
      {text}
    </button>
  );
}

function MeterCard({ 
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
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-3">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-slate-900/50 border border-slate-700 rounded-lg flex items-center justify-center">
            <Droplets className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h4 className="text-white text-sm">{unit}</h4>
            <p className="text-slate-400 text-xs">{id}</p>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs ${
          alert 
            ? 'bg-orange-500/10 text-orange-400 border border-orange-500/30' 
            : 'bg-green-500/10 text-green-400 border border-green-500/30'
        }`}>
          {status}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-xs">Last Reading</p>
          <p className="text-white text-sm">{reading}</p>
        </div>
        <div className="text-right">
          <p className="text-slate-400 text-xs">Usage</p>
          <p className="text-white text-sm">{usage}</p>
        </div>
        <button className="px-3 py-1.5 bg-orange-500 text-white rounded-lg text-xs">
          Record
        </button>
      </div>
    </div>
  );
}

function MaintenanceCard({ 
  unit, 
  issue, 
  priority, 
  time, 
  status 
}: { 
  unit: string; 
  issue: string; 
  priority: string; 
  time: string;
  status: string;
}) {
  const priorityColors = {
    Urgent: 'text-red-400 bg-red-500/10 border-red-500/30',
    High: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    Medium: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
    Low: 'text-blue-400 bg-blue-500/10 border-blue-500/30'
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-3">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-slate-900/50 border border-slate-700 rounded-lg flex items-center justify-center">
            <Wrench className="w-5 h-5 text-orange-400" />
          </div>
          <div className="flex-1">
            <h4 className="text-white text-sm">{unit}</h4>
            <p className="text-slate-400 text-xs">{issue}</p>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs border ${priorityColors[priority as keyof typeof priorityColors]}`}>
          {priority}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-slate-500 text-xs">{time}</span>
        <span className="px-2 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-full text-xs">
          {status}
        </span>
      </div>
    </div>
  );
}