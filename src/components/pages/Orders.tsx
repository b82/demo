import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Filter, Search, Upload } from "lucide-react";
import { Card } from "../ui/card";
import { useState } from "react";

const ordersData = [
  { 
    id: "ORD-001234", 
    customer: "Sarah Johnson", 
    date: "2025-11-22", 
    total: "€299.99", 
    status: "Delivered",
    email: "sarah.jemail.com",
    items: 3,
    payment: "Credit Card"
  },
  { 
    id: "ORD-001235", 
    customer: "Michael Chen", 
    date: "2025-11-22", 
    total: "€449.99", 
    status: "Pending",
    email: "m.chenemail.com",
    items: 1,
    payment: "PayPal"
  },
  { 
    id: "ORD-001236", 
    customer: "Emily Davis", 
    date: "2025-11-21", 
    total: "€89.99", 
    status: "Delivered",
    email: "emily.demail.com",
    items: 2,
    payment: "Credit Card"
  },
  { 
    id: "ORD-001237", 
    customer: "James Wilson", 
    date: "2025-11-21", 
    total: "€159.99", 
    status: "Failed",
    email: "j.wilsonemail.com",
    items: 1,
    payment: "Credit Card"
  },
  { 
    id: "ORD-001238", 
    customer: "Amanda Brown", 
    date: "2025-11-20", 
    total: "€189.99", 
    status: "Processing",
    email: "amanda.bemail.com",
    items: 4,
    payment: "Debit Card"
  },
  { 
    id: "ORD-001239", 
    customer: "Robert Taylor", 
    date: "2025-11-20", 
    total: "€549.99", 
    status: "Delivered",
    email: "rob.tayloremail.com",
    items: 2,
    payment: "Credit Card"
  },
  { 
    id: "ORD-001240", 
    customer: "Lisa Martinez", 
    date: "2025-11-19", 
    total: "€329.99", 
    status: "Pending",
    email: "lisa.memail.com",
    items: 3,
    payment: "PayPal"
  },
  { 
    id: "ORD-001241", 
    customer: "David Anderson", 
    date: "2025-11-19", 
    total: "€799.99", 
    status: "Delivered",
    email: "d.andersonemail.com",
    items: 5,
    payment: "Credit Card"
  },
];

export function Orders() {
  const [selectedOrder, setSelectedOrder] = useState<typeof ordersData[0] | null>(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrders = ordersData.filter(order => {
    const matchesStatus = statusFilter === "all" || order.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Processing":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Failed":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <h1 className="tracking-tight mb-1 text-[var(--dashboard-text-primary)]">Orders</h1>
          <p className="text-[var(--dashboard-text-muted)]">Manage and track all customer orders</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <Button variant="outline" className="border-[var(--dashboard-border)] w-full sm:w-auto">
            <Upload className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
        <div className="flex flex-col gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[var(--dashboard-text-muted)]" />
            <Input 
              placeholder="Search by order ID or customer..." 
              className="pl-10 bg-[var(--dashboard-bg)] border-[var(--dashboard-border)]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[200px] bg-[var(--dashboard-bg)] border-[var(--dashboard-border)]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)]">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-[200px] bg-[var(--dashboard-bg)] border-[var(--dashboard-border)]">
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)]">
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">Last 7 days</SelectItem>
                <SelectItem value="month">Last 30 days</SelectItem>
                <SelectItem value="year">Last year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Orders Table */}
      <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6 p-[16px]">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--dashboard-border)]">
                <th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Order ID</th>
                <th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Customer</th>
                <th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Date</th>
                <th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Items</th>
                <th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Total</th>
                <th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Status</th>
                <th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b border-[var(--dashboard-border)] hover:bg-[var(--dashboard-hover)] transition">
                  <td className="py-4 text-sm text-[var(--dashboard-text-primary)]">{order.id}</td>
                  <td className="py-4 text-[var(--dashboard-text-primary)]">{order.customer}</td>
                  <td className="py-4 text-sm text-[var(--dashboard-text-muted)]">{order.date}</td>
                  <td className="py-4 text-sm text-[var(--dashboard-text-muted)]">{order.items}</td>
                  <td className="py-4 text-[var(--dashboard-text-primary)]">{order.total}</td>
                  <td className="py-4">
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </td>
                  <td className="py-4">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setSelectedOrder(order)}
                    >
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {filteredOrders.map((order) => (
            <div key={order.id} className="p-4 bg-[var(--dashboard-bg)] border border-[var(--dashboard-border)] rounded-lg space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-[var(--dashboard-text-muted)] mb-1">Order ID</div>
                  <div className="text-sm text-[var(--dashboard-text-primary)]">{order.id}</div>
                </div>
                <Badge className={getStatusColor(order.status)}>
                  {order.status}
                </Badge>
              </div>
              <div>
                <div className="text-sm text-[var(--dashboard-text-muted)] mb-1">Customer</div>
                <div className="text-[var(--dashboard-text-primary)]">{order.customer}</div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-[var(--dashboard-text-muted)] mb-1">Date</div>
                  <div className="text-sm text-[var(--dashboard-text-primary)]">{order.date}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-[var(--dashboard-text-muted)] mb-1">Items</div>
                  <div className="text-sm text-[var(--dashboard-text-primary)]">{order.items}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-[var(--dashboard-text-muted)] mb-1">Total</div>
                  <div className="text-[var(--dashboard-text-primary)]">{order.total}</div>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-[var(--dashboard-border)]"
                onClick={() => setSelectedOrder(order)}
              >
                View Details
              </Button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col gap-4 mt-6 pt-4 border-t border-[var(--dashboard-border)]">
          <div className="flex gap-2 justify-center">
            <Button variant="outline" size="sm" className="border-[var(--dashboard-border)]">Previous</Button>
            <Button variant="outline" size="sm" className="border-[var(--dashboard-border)] bg-green-500/10 text-green-500">1</Button>
            <Button variant="outline" size="sm" className="border-[var(--dashboard-border)]">2</Button>
            <Button variant="outline" size="sm" className="border-[var(--dashboard-border)]">3</Button>
            <Button variant="outline" size="sm" className="border-[var(--dashboard-border)]">Next</Button>
          </div>
          <div className="text-sm text-[var(--dashboard-text-muted)] text-center">
            Showing {filteredOrders.length} of {ordersData.length} orders
          </div>
        </div>
      </Card>

      {/* Order Detail Sheet */}
      <Sheet open={!!selectedOrder} onOpenChange={(open) => !open && setSelectedOrder(null)}>
        <SheetContent className="bg-[var(--dashboard-surface)] border-l border-[var(--dashboard-border)] w-full sm:w-[400px] sm:max-w-[540px] overflow-y-auto p-0 [&>button]:mt-[24px] [&>button]:sm:mt-0">
          {selectedOrder && (
            <>
              <SheetHeader className="mt-[24px] mr-[0px] mb-[0px] ml-[0px]">
                <SheetTitle className="text-[var(--dashboard-text-primary)]">Order Details</SheetTitle>
              </SheetHeader>
              <div className="space-y-6 pb-6 px-4">
                <div>
                  <div className="text-sm text-[var(--dashboard-text-muted)] mb-2">Order ID</div>
                  <div className="text-lg break-words text-[var(--dashboard-text-primary)]">{selectedOrder.id}</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-[var(--dashboard-text-muted)]">Status</div>
                  <Badge className={getStatusColor(selectedOrder.status)}>
                    {selectedOrder.status}
                  </Badge>
                </div>

                <div className="border-t border-[var(--dashboard-border)] pt-4">
                  <h3 className="mb-4 text-[var(--dashboard-text-primary)]">Customer Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between gap-4">
                      <span className="text-[var(--dashboard-text-muted)] flex-shrink-0">Name</span>
                      <span className="text-right break-words text-[var(--dashboard-text-primary)]">{selectedOrder.customer}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-[var(--dashboard-text-muted)] flex-shrink-0">Email</span>
                      <span className="text-sm text-right break-all text-[var(--dashboard-text-primary)]">{selectedOrder.email}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[var(--dashboard-border)] pt-4">
                  <h3 className="mb-4 text-[var(--dashboard-text-primary)]">Order Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[var(--dashboard-text-muted)]">Date</span>
                      <span className="text-[var(--dashboard-text-primary)]">{selectedOrder.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--dashboard-text-muted)]">Items</span>
                      <span className="text-[var(--dashboard-text-primary)]">{selectedOrder.items}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-[var(--dashboard-text-muted)] flex-shrink-0">Payment Method</span>
                      <span className="text-right text-[var(--dashboard-text-primary)]">{selectedOrder.payment}</span>
                    </div>
                    <div className="flex justify-between border-t border-[var(--dashboard-border)] pt-3">
                      <span className="text-[var(--dashboard-text-primary)]">Total</span>
                      <span className="text-[var(--dashboard-text-primary)]">{selectedOrder.total}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-4">
                  <Button className="flex-1 bg-green-500 hover:bg-green-600 text-black">
                    Update Status
                  </Button>
                  <Button variant="outline" className="flex-1 border-[var(--dashboard-border)]">
                    Print Invoice
                  </Button>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}