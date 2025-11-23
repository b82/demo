/**
 * Clients Page Component Module
 * 
 * Displays and manages client/customer information with search, filtering,
 * and detailed client views. Includes customer distribution analytics.
 * 
 * @module components/pages/Clients
 */

import React, { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { Users, UserPlus, TrendingUp, Search, Upload, Plus } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

/**
 * Mock client data for demonstration
 * 
 * @constant {Array<Object>}
 * @private
 */
const clientsData = [
  { id: "CLT-001", name: "Sarah Johnson", email: "sarah.jemail.com", totalOrders: 12, totalSpent: "€3,589.88", type: "Returning", lastOrder: "2025-11-22", status: "Active" },
  { id: "CLT-002", name: "Michael Chen", email: "m.chenemail.com", totalOrders: 8, totalSpent: "€2,234.92", type: "Returning", lastOrder: "2025-11-20", status: "Active" },
  { id: "CLT-003", name: "Emily Davis", email: "emily.demail.com", totalOrders: 1, totalSpent: "€89.99", type: "New", lastOrder: "2025-11-21", status: "Active" },
  { id: "CLT-004", name: "James Wilson", email: "j.wilsonemail.com", totalOrders: 25, totalSpent: "€8,945.50", type: "VIP", lastOrder: "2025-11-22", status: "Active" },
  { id: "CLT-005", name: "Amanda Brown", email: "amanda.bemail.com", totalOrders: 5, totalSpent: "€1,234.95", type: "Returning", lastOrder: "2025-11-19", status: "Active" },
  { id: "CLT-006", name: "Robert Taylor", email: "rob.tayloremail.com", totalOrders: 3, totalSpent: "€789.97", type: "New", lastOrder: "2025-11-18", status: "Inactive" },
  { id: "CLT-007", name: "Lisa Martinez", email: "lisa.memail.com", totalOrders: 18, totalSpent: "€5,678.82", type: "VIP", lastOrder: "2025-11-21", status: "Active" },
  { id: "CLT-008", name: "David Anderson", email: "d.andersonemail.com", totalOrders: 7, totalSpent: "€1,899.93", type: "Returning", lastOrder: "2025-11-20", status: "Active" },
];

/**
 * Customer type distribution data for pie chart
 * 
 * @constant {Array<{name: string, value: number, color: string}>}
 * @private
 */
const customerTypeData = [
  { name: "New Customers", value: 432, color: "#22c55e" },
  { name: "Returning", value: 789, color: "#a855f7" },
  { name: "VIP", value: 208, color: "#3b82f6" },
];

/**
 * Clients Page Component
 * 
 * @description Main page component for managing and viewing client information.
 * Provides search functionality, client filtering, detailed client views,
 * and customer distribution analytics.
 * 
 * @returns {JSX.Element} Clients management page with search, table, and analytics
 * 
 * @example
 * ```tsx
 * import { Clients } from './components/pages/Clients';
 * 
 * <Clients />
 * ```
 * 
 * @remarks
 * - Uses local state for search and client selection
 * - Includes responsive design with mobile card view
 * - Displays customer distribution via pie chart
 * - Supports client detail view in side sheet
 */
export function Clients(): JSX.Element {
  /** Currently selected client for detail view */
  const [selectedClient, setSelectedClient] = useState<typeof clientsData[0] | null>(null);
  /** Search query for filtering clients */
  const [searchQuery, setSearchQuery] = useState<string>("");
  /** Controls add client dialog visibility */
  const [showAddClient, setShowAddClient] = useState<boolean>(false);

  /**
   * Filters clients based on search query
   * 
   * @description Filters clients by name or email matching the search query.
   * Case-insensitive search.
   * 
   * @constant {Array}
   */
  const filteredClients = clientsData.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  /**
   * Gets badge color class based on client type
   * 
   * @description Returns Tailwind CSS classes for styling badges
   * based on client type (VIP, Returning, New).
   * 
   * @param {string} type - Client type identifier
   * @returns {string} Tailwind CSS classes for badge styling
   * 
   * @private
   */
  const getTypeColor = (type: string): string => {
    switch (type) {
      case "VIP": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Returning": return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "New": return "bg-green-500/10 text-green-500 border-green-500/20";
      default: return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <h1 className="tracking-tight mb-1 text-[var(--dashboard-text-primary)]">Clients</h1>
          <p className="text-[var(--dashboard-text-muted)]">Manage your customer relationships</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <Button variant="outline" className="border-[var(--dashboard-border)] w-full sm:w-auto"><Upload className="w-4 h-4 mr-2" />Export</Button>
          <Button className="bg-green-500 hover:bg-green-600 text-black w-full sm:w-auto" onClick={() => setShowAddClient(true)}><Plus className="w-4 h-4 mr-2" />Add Client</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6 px-[16px] py-[24px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0"><Users className="w-5 h-5 text-green-500" /></div><div className="text-[var(--dashboard-text-muted)] text-sm">Total Clients</div></div>
            <div className="text-right"><div className="text-2xl mb-1 text-[var(--dashboard-text-primary)]">1,429</div><div className="text-sm text-green-500">+127 this month</div></div>
          </div>
        </Card>
        <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6 px-[16px] py-[24px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0"><UserPlus className="w-5 h-5 text-purple-500" /></div><div className="text-[var(--dashboard-text-muted)] text-sm">New This Month</div></div>
            <div className="text-right"><div className="text-2xl mb-1 text-[var(--dashboard-text-primary)]">432</div><div className="text-sm text-purple-500">30.2% of total</div></div>
          </div>
        </Card>
        <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6 px-[16px] py-[24px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0"><TrendingUp className="w-5 h-5 text-blue-500" /></div><div className="text-[var(--dashboard-text-muted)] text-sm">Avg Lifetime Value</div></div>
            <div className="text-right"><div className="text-2xl mb-1 text-[var(--dashboard-text-primary)]">€2,847</div><div className="text-sm text-blue-500">+18.7% vs last month</div></div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6 lg:col-span-2 px-[16px] py-[24px]">
          <div className="flex flex-col gap-4 mb-6">
            <h2 className="tracking-tight text-[var(--dashboard-text-primary)]">All Clients</h2>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[var(--dashboard-text-muted)]" />
              <Input placeholder="Search clients..." className="pl-10 bg-[var(--dashboard-bg)] border-[var(--dashboard-border)]" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
          </div>
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead><tr className="border-b border-[var(--dashboard-border)]"><th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Name</th><th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Email</th><th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Orders</th><th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Total Spent</th><th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Type</th><th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Action</th></tr></thead>
              <tbody>{filteredClients.map((client) => (<tr key={client.id} className="border-b border-[var(--dashboard-border)] hover:bg-[var(--dashboard-hover)] transition"><td className="py-4 text-[var(--dashboard-text-primary)]">{client.name}</td><td className="py-4 text-sm text-[var(--dashboard-text-muted)]">{client.email}</td><td className="py-4 text-sm text-[var(--dashboard-text-primary)]">{client.totalOrders}</td><td className="py-4 text-[var(--dashboard-text-primary)]">{client.totalSpent}</td><td className="py-4"><Badge className={getTypeColor(client.type)}>{client.type}</Badge></td><td className="py-4"><Button variant="ghost" size="sm" onClick={() => setSelectedClient(client)}>View</Button></td></tr>))}</tbody>
            </table>
          </div>
          <div className="md:hidden space-y-4">{filteredClients.map((client) => (<div key={client.id} className="p-4 bg-[var(--dashboard-bg)] border border-[var(--dashboard-border)] rounded-lg space-y-3"><div className="flex items-start justify-between"><div><div className="text-[var(--dashboard-text-primary)]">{client.name}</div><div className="text-xs text-[var(--dashboard-text-muted)] mt-1">{client.email}</div></div><Badge className={getTypeColor(client.type)}>{client.type}</Badge></div><div className="flex items-center justify-between"><div><div className="text-sm text-[var(--dashboard-text-muted)] mb-1">Orders</div><div className="text-sm text-[var(--dashboard-text-primary)]">{client.totalOrders}</div></div><div><div className="text-sm text-[var(--dashboard-text-muted)] mb-1">Total Spent</div><div className="text-[var(--dashboard-text-primary)]">{client.totalSpent}</div></div></div><Button variant="outline" size="sm" className="w-full border-[var(--dashboard-border)]" onClick={() => setSelectedClient(client)}>View Details</Button></div>))}</div>
        </Card>

        <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
          <h2 className="tracking-tight mb-6 text-[var(--dashboard-text-primary)]">Customer Distribution</h2>
          <ResponsiveContainer width="100%" height={250}><PieChart><Pie data={customerTypeData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">{customerTypeData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}</Pie><Tooltip contentStyle={{ backgroundColor: 'var(--dashboard-surface)', border: '1px solid var(--dashboard-border)', borderRadius: '8px', color: 'var(--dashboard-text-primary)' }} /></PieChart></ResponsiveContainer>
          <div className="mt-6 space-y-3">{customerTypeData.map((item) => (<div key={item.name} className="flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div><span className="text-sm text-[var(--dashboard-text-muted)]">{item.name}</span></div><span className="text-[var(--dashboard-text-primary)]">{item.value}</span></div>))}</div>
          <div className="mt-6 pt-6 border-t border-[var(--dashboard-border)]"><h3 className="text-sm mb-3 text-[var(--dashboard-text-primary)]">Insights</h3><div className="space-y-2 text-sm"><div className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"></div><span className="text-[var(--dashboard-text-muted)]">55% are returning customers</span></div><div className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div><span className="text-[var(--dashboard-text-muted)]">VIP customers spend 3.2x more</span></div></div></div>
        </Card>
      </div>

      <Sheet open={!!selectedClient} onOpenChange={(open) => !open && setSelectedClient(null)}>
        <SheetContent className="bg-[var(--dashboard-surface)] border-l border-[var(--dashboard-border)] w-full sm:w-[400px] sm:max-w-[540px] overflow-y-auto p-0 [&>button]:mt-6 sm:[&>button]:mt-0">
          {selectedClient && (<><SheetHeader className="mt-[24px] mr-[0px] mb-[0px] ml-[0px]"><SheetTitle className="text-[var(--dashboard-text-primary)]">Client Details</SheetTitle></SheetHeader><div className="space-y-6 pb-[24px] px-4 pt-[0px] pr-[24px] pl-[24px]"><div className="flex items-center gap-4"><div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-purple-600 flex items-center justify-center text-2xl flex-shrink-0">{selectedClient.name.split(' ').map(n => n[0]).join('')}</div><div className="min-w-0 flex-1"><h3 className="text-lg break-words text-[var(--dashboard-text-primary)]">{selectedClient.name}</h3><p className="text-sm text-[var(--dashboard-text-muted)] break-all">{selectedClient.email}</p></div></div><div className="flex items-center justify-between"><div className="text-sm text-[var(--dashboard-text-muted)]">Customer Type</div><Badge className={getTypeColor(selectedClient.type)}>{selectedClient.type}</Badge></div><div className="border-t border-[var(--dashboard-border)] pt-4"><h3 className="mb-4 text-[var(--dashboard-text-primary)]">Purchase History</h3><div className="space-y-3"><div className="flex justify-between"><span className="text-[var(--dashboard-text-muted)]">Total Orders</span><span className="text-[var(--dashboard-text-primary)]">{selectedClient.totalOrders}</span></div><div className="flex justify-between"><span className="text-[var(--dashboard-text-muted)]">Total Spent</span><span className="text-[var(--dashboard-text-primary)]">{selectedClient.totalSpent}</span></div><div className="flex justify-between"><span className="text-[var(--dashboard-text-muted)]">Last Order</span><span className="text-[var(--dashboard-text-primary)]">{selectedClient.lastOrder}</span></div><div className="flex justify-between"><span className="text-[var(--dashboard-text-muted)]">Avg Order Value</span><span className="text-[var(--dashboard-text-primary)]">€{(parseFloat(selectedClient.totalSpent.replace(/[€,]/g, '')) / selectedClient.totalOrders).toFixed(2)}</span></div></div></div><div className="border-t border-[var(--dashboard-border)] pt-4"><h3 className="mb-4 text-[var(--dashboard-text-primary)]">Recent Orders</h3><div className="space-y-3"><div className="flex justify-between items-center p-3 bg-[var(--dashboard-bg)] rounded-lg gap-3"><div className="min-w-0"><div className="text-sm text-[var(--dashboard-text-primary)]">ORD-001234</div><div className="text-xs text-[var(--dashboard-text-muted)]">2025-11-22</div></div><div className="flex-shrink-0 text-[var(--dashboard-text-primary)]">€299.99</div></div><div className="flex justify-between items-center p-3 bg-[var(--dashboard-bg)] rounded-lg gap-3"><div className="min-w-0"><div className="text-sm text-[var(--dashboard-text-primary)]">ORD-001198</div><div className="text-xs text-[var(--dashboard-text-muted)]">2025-11-18</div></div><div className="flex-shrink-0 text-[var(--dashboard-text-primary)]">€449.99</div></div><div className="flex justify-between items-center p-3 bg-[var(--dashboard-bg)] rounded-lg gap-3"><div className="min-w-0"><div className="text-sm text-[var(--dashboard-text-primary)]">ORD-001145</div><div className="text-xs text-[var(--dashboard-text-muted)]">2025-11-12</div></div><div className="flex-shrink-0 text-[var(--dashboard-text-primary)]">€189.99</div></div></div></div><div className="flex flex-col sm:flex-row gap-2 pt-4"><Button className="flex-1 bg-green-500 hover:bg-green-600 text-black">Contact Client</Button><Button variant="outline" className="flex-1 border-[var(--dashboard-border)]">View All Orders</Button></div></div></>)}
        </SheetContent>
      </Sheet>
    </div>
  );
}