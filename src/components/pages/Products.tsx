import { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../ui/dialog";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Package, TrendingUp, Archive, Plus, Search } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const kpiData = [
  { 
    title: "Total Products", 
    value: "243", 
    change: "+12 this week",
    icon: Package,
    color: "green"
  },
  { 
    title: "Categories", 
    value: "18", 
    change: "+2 new",
    icon: Archive,
    color: "blue"
  },
  { 
    title: "Active Products", 
    value: "218", 
    change: "89.7% active",
    icon: TrendingUp,
    color: "purple"
  },
];

const productsData = [
  { 
    id: "PRD-001", 
    name: "Premium Wireless Headphones", 
    category: "Electronics", 
    price: "€299.99", 
    stock: 45,
    sales: 234,
    status: "Active"
  },
  { 
    id: "PRD-002", 
    name: "Smart Watch Series 5", 
    category: "Electronics", 
    price: "€449.99", 
    stock: 23,
    sales: 189,
    status: "Active"
  },
  { 
    id: "PRD-003", 
    name: "Laptop Stand Pro", 
    category: "Accessories", 
    price: "€89.99", 
    stock: 67,
    sales: 456,
    status: "Active"
  },
  { 
    id: "PRD-004", 
    name: "4K Webcam", 
    category: "Electronics", 
    price: "€159.99", 
    stock: 0,
    sales: 123,
    status: "Out of Stock"
  },
  { 
    id: "PRD-005", 
    name: "Mechanical Keyboard", 
    category: "Accessories", 
    price: "€189.99", 
    stock: 34,
    sales: 298,
    status: "Active"
  },
  { 
    id: "PRD-006", 
    name: "USB-C Hub", 
    category: "Accessories", 
    price: "€49.99", 
    stock: 89,
    sales: 567,
    status: "Active"
  },
  { 
    id: "PRD-007", 
    name: "Wireless Mouse", 
    category: "Accessories", 
    price: "€39.99", 
    stock: 156,
    sales: 789,
    status: "Active"
  },
  { 
    id: "PRD-008", 
    name: "Monitor 27\"", 
    category: "Electronics", 
    price: "€329.99", 
    stock: 12,
    sales: 145,
    status: "Low Stock"
  },
];

const trendingData = [
  { name: "Wireless Mouse", sales: 789 },
  { name: "USB-C Hub", sales: 567 },
  { name: "Laptop Stand", sales: 456 },
  { name: "Keyboard", sales: 298 },
  { name: "Headphones", sales: 234 },
];

export function Products() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = productsData.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Out of Stock":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      case "Low Stock":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <h1 className="tracking-tight mb-1 text-[var(--dashboard-text-primary)]">Products</h1>
          <p className="text-[var(--dashboard-text-muted)]">Manage your product catalog</p>
        </div>
        <Button 
          className="bg-green-500 hover:bg-green-600 text-black w-full md:w-auto"
          onClick={() => setShowAddProduct(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  <div className="text-sm text-[var(--dashboard-text-muted)]">{kpi.change}</div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Products Table */}
        <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6 lg:col-span-2 p-[16px]">
          <div className="flex flex-col gap-4 mb-6">
            <h2 className="tracking-tight text-[var(--dashboard-text-primary)]">All Products</h2>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[var(--dashboard-text-muted)]" />
              <Input 
                placeholder="Search products..." 
                className="pl-10 bg-[var(--dashboard-bg)] border-[var(--dashboard-border)]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--dashboard-border)]">
                  <th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Product</th>
                  <th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Category</th>
                  <th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Price</th>
                  <th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Stock</th>
                  <th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Sales</th>
                  <th className="text-left py-3 text-sm text-[var(--dashboard-text-muted)]">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b border-[var(--dashboard-border)] hover:bg-[var(--dashboard-hover)] transition">
                    <td className="py-4">
                      <div>
                        <div className="text-[var(--dashboard-text-primary)]">{product.name}</div>
                        <div className="text-xs text-[var(--dashboard-text-muted)]">{product.id}</div>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-[var(--dashboard-text-muted)]">{product.category}</td>
                    <td className="py-4 text-[var(--dashboard-text-primary)]">{product.price}</td>
                    <td className="py-4 text-sm">
                      <span className={product.stock === 0 ? "text-red-500" : product.stock < 20 ? "text-yellow-500" : "text-[var(--dashboard-text-primary)]"}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="py-4 text-sm text-[var(--dashboard-text-muted)]">{product.sales}</td>
                    <td className="py-4">
                      <Badge className={getStatusColor(product.status)}>
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
            {filteredProducts.map((product) => (
              <div key={product.id} className="p-4 bg-[var(--dashboard-bg)] border border-[var(--dashboard-border)] rounded-lg space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[var(--dashboard-text-primary)]">{product.name}</div>
                    <div className="text-xs text-[var(--dashboard-text-muted)] mt-1">{product.id}</div>
                  </div>
                  <Badge className={getStatusColor(product.status)}>
                    {product.status}
                  </Badge>
                </div>
                <div>
                  <div className="text-sm text-[var(--dashboard-text-muted)] mb-1">Category</div>
                  <div className="text-sm text-[var(--dashboard-text-primary)]">{product.category}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-[var(--dashboard-text-muted)] mb-1">Price</div>
                    <div className="text-[var(--dashboard-text-primary)]">{product.price}</div>
                  </div>
                  <div>
                    <div className="text-sm text-[var(--dashboard-text-muted)] mb-1">Stock</div>
                    <div className="text-sm">
                      <span className={product.stock === 0 ? "text-red-500" : product.stock < 20 ? "text-yellow-500" : "text-[var(--dashboard-text-primary)]"}>
                        {product.stock}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-[var(--dashboard-text-muted)] mb-1">Sales</div>
                    <div className="text-sm text-[var(--dashboard-text-primary)]">{product.sales}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Trending Products */}
        <Card className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] p-6">
          <h2 className="tracking-tight mb-6 text-[var(--dashboard-text-primary)]">Trending Products</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={trendingData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="var(--dashboard-chart-grid)" />
              <XAxis type="number" stroke="var(--dashboard-text-muted)" tick={{ fill: 'var(--dashboard-text-muted)' }} />
              <YAxis type="category" dataKey="name" stroke="var(--dashboard-text-muted)" width={100} tick={{ fontSize: 12, fill: 'var(--dashboard-text-muted)' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--dashboard-surface)', 
                  border: '1px solid var(--dashboard-border)',
                  borderRadius: '8px',
                  color: 'var(--dashboard-text-primary)'
                }} 
              />
              <Bar dataKey="sales" fill="#a855f7" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-6 pt-6 border-t border-[var(--dashboard-border)]">
            <h3 className="text-sm mb-3 text-[var(--dashboard-text-primary)]">Quick Insights</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-[var(--dashboard-text-muted)]">Accessories growing 24%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-[var(--dashboard-text-muted)]">3 products low in stock</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-[var(--dashboard-text-muted)]">Best seller: Wireless Mouse</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Add Product Dialog */}
      <Dialog open={showAddProduct} onOpenChange={setShowAddProduct}>
        <DialogContent className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)] sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-[var(--dashboard-text-primary)]">Add New Product</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name</Label>
              <Input 
                id="name" 
                placeholder="Enter product name" 
                className="bg-[var(--dashboard-bg)] border-[var(--dashboard-border)]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger className="bg-[var(--dashboard-bg)] border-[var(--dashboard-border)]">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-[var(--dashboard-surface)] border-[var(--dashboard-border)]">
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="home">Home & Garden</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input 
                  id="price" 
                  type="number" 
                  placeholder="0.00" 
                  className="bg-[var(--dashboard-bg)] border-[var(--dashboard-border)]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stock">Stock</Label>
                <Input 
                  id="stock" 
                  type="number" 
                  placeholder="0" 
                  className="bg-[var(--dashboard-bg)] border-[var(--dashboard-border)]"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddProduct(false)} className="border-[var(--dashboard-border)]">
              Cancel
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-black">
              Add Product
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}