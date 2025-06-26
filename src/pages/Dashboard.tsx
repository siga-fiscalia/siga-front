import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Package, TrendingUp, AlertTriangle, DollarSign } from 'lucide-react'

const stats = [
  {
    title: 'Total Products',
    value: '1,234',
    description: '+20.1% from last month',
    icon: Package,
    trend: 'up'
  },
  {
    title: 'Low Stock Items',
    value: '23',
    description: 'Requires attention',
    icon: AlertTriangle,
    trend: 'warning'
  },
  {
    title: 'Total Value',
    value: '$45,231.89',
    description: '+15.3% from last month',
    icon: DollarSign,
    trend: 'up'
  },
  {
    title: 'Monthly Sales',
    value: '$12,234',
    description: '+8.2% from last month',
    icon: TrendingUp,
    trend: 'up'
  }
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Overview of your inventory management system
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest inventory movements and updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Product #{item} stock updated
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Quantity changed from 50 to 45 units
                    </p>
                  </div>
                  <Badge variant="outline">2 hours ago</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <button className="w-full text-left p-3 rounded-lg border hover:bg-accent transition-colors">
                <div className="font-medium">Add New Product</div>
                <div className="text-sm text-muted-foreground">Create a new inventory item</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border hover:bg-accent transition-colors">
                <div className="font-medium">Update Stock</div>
                <div className="text-sm text-muted-foreground">Modify existing quantities</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border hover:bg-accent transition-colors">
                <div className="font-medium">Generate Report</div>
                <div className="text-sm text-muted-foreground">Create inventory reports</div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}