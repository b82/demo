import { ArrowUp, ArrowDown, DollarSign, ShoppingBag, TrendingUp, CreditCard, Download } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const kpiData = [
  { 
    title: "Total Revenue", 
    value: "€54,239", 
    change: "+12.5%", 
    isPositive: true,
    icon: DollarSign,
    color: "green"
  },
  { 
    title: "Orders", 
    value: "1,429", 
    change: "+8.2%", 
    isPositive: true,
    icon: ShoppingBag,
    color: "blue"
  },
  { 
    title: "Conversion Rate", 
    value: "3.24%", 
    change: "-2.1%", 
    isPositive: false,
    icon: TrendingUp,
    color: "purple"
  },
  { 
    title: "Avg Order Value", 
    value: "€142.80", 
    change: "+5.3%", 
    isPositive: true,
    icon: CreditCard,
    color: "orange"
  },
];

const salesData = [
  { day: "Day 1", sales: 4200 },
  { day: "Day 5", sales: 5100 },
  { day: "Day 10", sales: 4800 },
  { day: "Day 15", sales: 6200 },
  { day: "Day 20", sales: 7800 },
  { day: "Day 25", sales: 7200 },
  { day: "Day 30", sales: 8500 },
];

const topProducts = [
  { 
    id: "TRX-001234",
    product: "Premium Wireless Headphones", 
    date: "2025-11-22", 
    amount: "€299.99", 
    status: "Delivered" 
  },
  { 
    id: "TRX-001235",
    product: "Smart Watch Series 5", 
    date: "2025-11-22", 
    amount: "€449.99", 
    status: "Pending" 
  },
  { 
    id: "TRX-001236",
    product: "Laptop Stand Pro", 
    date: "2025-11-21", 
    amount: "€89.99", 
    status: "Delivered" 
  },
  { 
    id: "TRX-001237",
    product: "4K Webcam", 
    date: "2025-11-21", 
    amount: "€159.99", 
    status: "Failed" 
  },
  { 
    id: "TRX-001238",
    product: "Mechanical Keyboard", 
    date: "2025-11-20", 
    amount: "€189.99", 
    status: "Delivered" 
  },
];

const heatmapData = [
  { day: "Mon", value: 23 },
  { day: "Tue", value: 45 },
  { day: "Wed", value: 67 },
  { day: "Thu", value: 89 },
  { day: "Fri", value: 56 },
  { day: "Sat", value: 34 },
  { day: "Sun", value: 28 },
];

// Format numbers to K notation (e.g., 10000 -> 10K, 7500 -> 7.5K)
const formatToK = (value: number) => {
  if (value >= 1000) {
    const kValue = value / 1000;
    return kValue % 1 === 0 ? `${kValue}K` : `${kValue.toFixed(1).replace('.', ',')}K`;
  }
  return value.toString();
};

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <h1 className="tracking-tight mb-1 text-[var(--dashboard-text-primary)]">Dashboard</h1>
          <p className="text-[var(--dashboard-text-muted)]">Welcome back, John! Here's your sales overview.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <Button variant="outline" className="border-[var(--dashboard-border)] w-full sm:w-auto">Last 30 days</Button>
          <Button className="bg-green-500 hover:bg-green-600 text-black w-full sm:w-auto">
            <Download className="w-4 h-4 mr-2" />
            Download Report
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <Card key={index} className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-${kpi.color}-500/10 flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 text-${kpi.color}-500`} />
                  </div>
                  <div className="text-[var(--dashboard-text-muted)] text-sm">{kpi.title}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl mb-1 text-[var(--dashboard-text-primary)]">{kpi.value}</div>
                  <div className={`flex items-center gap-1 justify-end ${kpi.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {kpi.isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                    <span className="text-sm">{kpi.change}</span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Trend Chart */}
        <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6 lg:col-span-2 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="tracking-tight mb-1 text-[var(--dashboard-text-primary)]">Sales Trend</h2>
              <p className="text-sm text-[var(--dashboard-text-muted)]">Last 30 days performance</p>
            </div>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-[var(--dashboard-text-muted)]">Revenue</span>
              </div>
            </div>
          </div>
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <defs>
                  <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--dashboard-chart-grid)" />
                <XAxis 
                  dataKey="day" 
                  stroke="var(--dashboard-text-muted)" 
                  tick={{ fontSize: 12, fill: 'var(--dashboard-text-muted)' }} 
                />
                <YAxis 
                  stroke="var(--dashboard-text-muted)" 
                  tickFormatter={formatToK} 
                  tick={{ fontSize: 12, fill: 'var(--dashboard-text-muted)' }} 
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--dashboard-surface)', 
                    border: '1px solid var(--dashboard-border)',
                    borderRadius: '8px',
                    color: 'var(--dashboard-text-primary)'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="#22c55e" 
                  strokeWidth={2}
                  fill="url(#salesGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Right Side Widgets */}
        <div className="space-y-4">
          {/* Payment Widget */}
          <Card className="bg-gradient-to-br from-green-500 to-green-600 border-0 p-6 text-black">
            <div className="mb-4">
              <div className="text-sm opacity-80 mb-1">Available Balance</div>
              <div className="text-3xl">€12,847.50</div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="bg-black/20 hover:bg-black/30 text-white border-0 flex-1">
                Withdraw
              </Button>
              <Button size="sm" className="bg-black text-white hover:bg-black/90 flex-1">
                Payment
              </Button>
            </div>
          </Card>

          {/* KPI Summary */}
          <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
            <h3 className="tracking-tight mb-4 text-[var(--dashboard-text-primary)]">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--dashboard-text-muted)]">Total Products</span>
                <span className="text-[var(--dashboard-text-primary)]">243</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--dashboard-text-muted)]">Total Collection</span>
                <span className="text-[var(--dashboard-text-primary)]">€184,293</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--dashboard-text-muted)]">Active Clients</span>
                <span className="text-[var(--dashboard-text-primary)]">1,429</span>
              </div>
            </div>
          </Card>

          {/* Mini Heatmap */}
          <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
            <h3 className="tracking-tight mb-4 text-[var(--dashboard-text-primary)]">Weekly Activity</h3>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={heatmapData}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#a855f7" 
                  strokeWidth={2}
                  dot={{ fill: '#a855f7', r: 4 }}
                />
                <XAxis dataKey="day" stroke="var(--dashboard-text-muted)" tick={{ fontSize: 12, fill: 'var(--dashboard-text-muted)' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'var(--dashboard-surface)', 
                    border: '1px solid var(--dashboard-border)',
                    borderRadius: '8px',
                    color: 'var(--dashboard-text-primary)'
                  }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>

      {/* Top Selling Products Table */}
      <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6 p-[16px]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="tracking-tight text-[var(--dashboard-text-primary)]">Recent Transactions</h2>
          <Button variant="ghost" size="sm">View All</Button>
        </div>
        
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--dashboard-border)]">
                <th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Transaction ID</th>
                <th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Product</th>
                <th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Date</th>
                <th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Amount</th>
                <th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Status</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product) => (
                <tr key={product.id} className="border-b border-[var(--dashboard-border)] hover:bg-[var(--dashboard-hover)] transition">
                  <td className="py-4 text-sm text-[var(--dashboard-text-muted)]">{product.id}</td>
                  <td className="py-4 text-[var(--dashboard-text-primary)]">{product.product}</td>
                  <td className="py-4 text-sm text-[var(--dashboard-text-muted)]">{product.date}</td>
                  <td className="py-4 text-[var(--dashboard-text-primary)]">{product.amount}</td>
                  <td className="py-4">
                    <Badge 
                      variant={product.status === "Delivered" ? "default" : product.status === "Pending" ? "secondary" : "destructive"}
                      className={
                        product.status === "Delivered" 
                          ? "bg-green-500/10 text-green-500 border-green-500/20" 
                          : product.status === "Pending"
                          ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                          : "bg-red-500/10 text-red-500 border-red-500/20"
                      }
                    >
                      {product.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {topProducts.map((product) => (
            <div key={product.id} className="p-4 bg-[var(--dashboard-bg)] border border-[var(--dashboard-border)] rounded-lg space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-[var(--dashboard-text-muted)] mb-1">Transaction ID</div>
                  <div className="text-sm text-[var(--dashboard-text-primary)]">{product.id}</div>
                </div>
                <Badge 
                  variant={product.status === "Delivered" ? "default" : product.status === "Pending" ? "secondary" : "destructive"}
                  className={
                    product.status === "Delivered" 
                      ? "bg-green-500/10 text-green-500 border-green-500/20" 
                      : product.status === "Pending"
                      ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                      : "bg-red-500/10 text-red-500 border-red-500/20"
                  }
                >
                  {product.status}
                </Badge>
              </div>
              <div>
                <div className="text-sm text-[var(--dashboard-text-muted)] mb-1">Product</div>
                <div className="text-[var(--dashboard-text-primary)]">{product.product}</div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-[var(--dashboard-text-muted)] mb-1">Date</div>
                  <div className="text-sm text-[var(--dashboard-text-primary)]">{product.date}</div>
                </div>
                <div>
                  <div className="text-sm text-[var(--dashboard-text-muted)] mb-1">Amount</div>
                  <div className="text-[var(--dashboard-text-primary)]">{product.amount}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}