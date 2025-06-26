import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Plus, Edit, Trash2 } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Laptop Dell XPS 13',
    description: 'High-performance ultrabook with Intel Core i7',
    category: 'Electronics',
    brand: 'Dell',
    price: 999.99,
    active: true
  },
  {
    id: 2,
    name: 'Office Chair Ergonomic',
    description: 'Comfortable ergonomic office chair with lumbar support',
    category: 'Furniture',
    brand: 'Herman Miller',
    price: 299.99,
    active: true
  },
  {
    id: 3,
    name: 'Wireless Mouse',
    description: 'Bluetooth wireless mouse with precision tracking',
    category: 'Electronics',
    brand: 'Logitech',
    price: 49.99,
    active: false
  }
]

export default function Products() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground">
            Manage your product catalog and information
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Catalog</CardTitle>
          <CardDescription>
            Manage your products and their details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-8" />
            </div>
          </div>

          <div className="space-y-4">
            {products.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <Badge variant={product.active ? "default" : "secondary"}>
                          {product.active ? "Active" : "Inactive"}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{product.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>Category: {product.category}</span>
                        <span>Brand: {product.brand}</span>
                        <span className="font-medium text-foreground">${product.price}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}