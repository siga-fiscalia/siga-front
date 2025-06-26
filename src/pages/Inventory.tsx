import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Plus, Filter } from 'lucide-react'

const inventoryItems = [
  {
    id: 1,
    name: 'Laptop Dell XPS 13',
    sku: 'DELL-XPS-001',
    category: 'Electronics',
    quantity: 25,
    minStock: 10,
    price: 999.99,
    status: 'In Stock'
  },
  {
    id: 2,
    name: 'Office Chair Ergonomic',
    sku: 'CHAIR-ERG-002',
    category: 'Furniture',
    quantity: 8,
    minStock: 15,
    price: 299.99,
    status: 'Low Stock'
  },
  {
    id: 3,
    name: 'Wireless Mouse',
    sku: 'MOUSE-WL-003',
    category: 'Electronics',
    quantity: 0,
    minStock: 20,
    price: 49.99,
    status: 'Out of Stock'
  },
  {
    id: 4,
    name: 'Standing Desk',
    sku: 'DESK-ST-004',
    category: 'Furniture',
    quantity: 12,
    minStock: 5,
    price: 599.99,
    status: 'In Stock'
  }
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'In Stock':
      return <Badge className="bg-green-100 text-green-800">In Stock</Badge>
    case 'Low Stock':
      return <Badge className="bg-yellow-100 text-yellow-800">Low Stock</Badge>
    case 'Out of Stock':
      return <Badge className="bg-red-100 text-red-800">Out of Stock</Badge>
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

export default function Inventory() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Inventory</h2>
          <p className="text-muted-foreground">
            Manage your inventory items and stock levels
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Item
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Inventory Items</CardTitle>
          <CardDescription>
            A list of all inventory items with current stock levels
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search items..." className="pl-8" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="rounded-md border">
            <div className="grid grid-cols-7 gap-4 p-4 font-medium border-b bg-muted/50">
              <div>Name</div>
              <div>SKU</div>
              <div>Category</div>
              <div>Quantity</div>
              <div>Min Stock</div>
              <div>Price</div>
              <div>Status</div>
            </div>
            {inventoryItems.map((item) => (
              <div key={item.id} className="grid grid-cols-7 gap-4 p-4 border-b last:border-b-0 hover:bg-muted/50">
                <div className="font-medium">{item.name}</div>
                <div className="text-muted-foreground">{item.sku}</div>
                <div>{item.category}</div>
                <div>{item.quantity}</div>
                <div>{item.minStock}</div>
                <div>${item.price}</div>
                <div>{getStatusBadge(item.status)}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}