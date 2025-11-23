import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Upload, FileText, TrendingUp, ArrowUp, ArrowDown } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const monthlyData = [
  { month: "Jan", revenue: 45000, orders: 420 },
  { month: "Feb", revenue: 52000, orders: 510 },
  { month: "Mar", revenue: 48000, orders: 480 },
  { month: "Apr", revenue: 61000, orders: 620 },
  { month: "May", revenue: 55000, orders: 560 },
  { month: "Jun", revenue: 67000, orders: 680 },
  { month: "Jul", revenue: 72000, orders: 750 },
  { month: "Aug", revenue: 68000, orders: 690 },
  { month: "Sep", revenue: 79000, orders: 820 },
  { month: "Oct", revenue: 84000, orders: 890 },
  { month: "Nov", revenue: 91000, orders: 950 },
];

const categoryData = [
  { category: "Electronics", sales: 124500 },
  { category: "Accessories", sales: 89200 },
  { category: "Clothing", sales: 67800 },
  { category: "Home & Garden", sales: 45600 },
  { category: "Sports", sales: 34200 },
];

const insights = [
  {
    title: "Revenue Growth",
    description: "Revenue increased by 12.3% compared to last month",
    value: "+$11,234",
    trend: "up",
    color: "green"
  },
  {
    title: "Top Performer",
    description: "Electronics category generated the most revenue",
    value: "$124.5K",
    trend: "up",
    color: "blue"
  },
  {
    title: "Conversion Improvement",
    description: "Conversion rate improved by 0.8 percentage points",
    value: "+0.8%",
    trend: "up",
    color: "purple"
  },
  {
    title: "Average Order Value",
    description: "AOV decreased slightly due to promotional campaign",
    value: "-$8.50",
    trend: "down",
    color: "orange"
  },
];

export function Reports() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <h1 className="tracking-tight mb-1 text-[var(--dashboard-text-primary)]">Reports & Analytics</h1>
          <p className="text-[var(--dashboard-text-muted)]">Comprehensive insights and data analysis</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <Button variant="outline" className="border-[var(--dashboard-border)] w-full sm:w-auto">
            <FileText className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
          <Button className="bg-green-500 hover:bg-green-600 text-black w-full sm:w-auto">
            <Upload className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Monthly Trend Chart */}
      <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="tracking-tight mb-1 text-[var(--dashboard-text-primary)]">Monthly Revenue & Orders</h2>
            <p className="text-sm text-[var(--dashboard-text-muted)]">Performance trend over the last 11 months</p>
          </div>
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-[var(--dashboard-text-muted)]">Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-[var(--dashboard-text-muted)]">Orders</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--dashboard-chart-grid)" />
            <XAxis dataKey="month" stroke="var(--dashboard-text-muted)" tick={{ fill: 'var(--dashboard-text-muted)' }} />
            <YAxis yAxisId="left" stroke="var(--dashboard-text-muted)" tick={{ fill: 'var(--dashboard-text-muted)' }} />
            <YAxis yAxisId="right" orientation="right" stroke="var(--dashboard-text-muted)" tick={{ fill: 'var(--dashboard-text-muted)' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--dashboard-surface)', 
                border: '1px solid var(--dashboard-border)',
                borderRadius: '8px',
                color: 'var(--dashboard-text-primary)'
              }} 
            />
            <Legend />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="revenue" 
              stroke="#22c55e" 
              strokeWidth={2}
              dot={{ fill: '#22c55e', r: 4 }}
              name="Revenue (€)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="orders" 
              stroke="#a855f7" 
              strokeWidth={2}
              dot={{ fill: '#a855f7', r: 4 }}
              name="Orders"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Category Comparison */}
      <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="tracking-tight mb-1 text-[var(--dashboard-text-primary)]">Sales by Category</h2>
            <p className="text-sm text-[var(--dashboard-text-muted)]">Comparative performance across product categories</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--dashboard-chart-grid)" />
            <XAxis dataKey="category" stroke="var(--dashboard-text-muted)" tick={{ fill: 'var(--dashboard-text-muted)' }} />
            <YAxis stroke="var(--dashboard-text-muted)" tick={{ fill: 'var(--dashboard-text-muted)' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--dashboard-surface)', 
                border: '1px solid var(--dashboard-border)',
                borderRadius: '8px',
                color: 'var(--dashboard-text-primary)'
              }} 
            />
            <Bar dataKey="sales" fill="#22c55e" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Auto-Insights Section */}
      <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-green-500" />
          <h2 className="tracking-tight text-[var(--dashboard-text-primary)]">Auto-Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insights.map((insight, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg bg-[var(--dashboard-bg)] border border-[var(--dashboard-border)] hover:border-[var(--dashboard-text-muted)] transition"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm text-[var(--dashboard-text-primary)]">{insight.title}</h3>
                <div className={`flex items-center gap-1 ${
                  insight.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {insight.trend === 'up' ? (
                    <ArrowUp className="w-4 h-4" />
                  ) : (
                    <ArrowDown className="w-4 h-4" />
                  )}
                  <span className="text-sm">{insight.value}</span>
                </div>
              </div>
              <p className="text-sm text-[var(--dashboard-text-muted)]">{insight.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Key Metrics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
          <div className="text-sm text-[var(--dashboard-text-muted)] mb-2">Total Revenue (YTD)</div>
          <div className="text-2xl mb-1 text-[var(--dashboard-text-primary)]">€723,400</div>
          <div className="text-sm text-green-500">+24.5% vs last year</div>
        </Card>
        <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
          <div className="text-sm text-[var(--dashboard-text-muted)] mb-2">Total Orders (YTD)</div>
          <div className="text-2xl mb-1 text-[var(--dashboard-text-primary)]">7,580</div>
          <div className="text-sm text-green-500">+18.3% vs last year</div>
        </Card>
        <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
          <div className="text-sm text-[var(--dashboard-text-muted)] mb-2">Avg Order Value</div>
          <div className="text-2xl mb-1 text-[var(--dashboard-text-primary)]">€95.40</div>
          <div className="text-sm text-green-500">+3.2% vs last month</div>
        </Card>
        <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
          <div className="text-sm text-[var(--dashboard-text-muted)] mb-2">Customer Retention</div>
          <div className="text-2xl mb-1 text-[var(--dashboard-text-primary)]">68.4%</div>
          <div className="text-sm text-green-500">+5.1% vs last quarter</div>
        </Card>
      </div>

      {/* Additional Insights */}
      <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
        <h2 className="tracking-tight mb-4 text-[var(--dashboard-text-primary)]">Recommendations</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-[var(--dashboard-bg)] rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <div className="text-sm mb-1 text-[var(--dashboard-text-primary)]">Expand Electronics Inventory</div>
              <div className="text-sm text-[var(--dashboard-text-muted)]">Electronics category is showing strong growth. Consider expanding product range to capitalize on demand.</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--dashboard-bg)] rounded-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
            <div>
              <div className="text-sm mb-1 text-[var(--dashboard-text-primary)]">Optimize Pricing Strategy</div>
              <div className="text-sm text-[var(--dashboard-text-muted)]">Average order value declined during promotional period. Review discount strategy for better margins.</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-[var(--dashboard-bg)] rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <div className="text-sm mb-1 text-[var(--dashboard-text-primary)]">Improve Customer Retention</div>
              <div className="text-sm text-[var(--dashboard-text-muted)]">Implement loyalty program to increase repeat purchase rate among new customers.</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}