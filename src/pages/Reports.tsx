import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FileText, Download, Calendar, TrendingUp } from 'lucide-react'

const reports = [
  {
    id: 1,
    name: 'Inventory Summary',
    description: 'Complete overview of current inventory levels',
    type: 'Summary',
    lastGenerated: '2024-01-15',
    status: 'Ready'
  },
  {
    id: 2,
    name: 'Low Stock Alert',
    description: 'Items that are below minimum stock levels',
    type: 'Alert',
    lastGenerated: '2024-01-14',
    status: 'Ready'
  },
  {
    id: 3,
    name: 'Monthly Sales Report',
    description: 'Sales performance and trends for the month',
    type: 'Sales',
    lastGenerated: '2024-01-10',
    status: 'Generating'
  },
  {
    id: 4,
    name: 'Product Performance',
    description: 'Analysis of best and worst performing products',
    type: 'Analytics',
    lastGenerated: '2024-01-08',
    status: 'Ready'
  }
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Ready':
      return <Badge className="bg-green-100 text-green-800">Ready</Badge>
    case 'Generating':
      return <Badge className="bg-blue-100 text-blue-800">Generating</Badge>
    case 'Error':
      return <Badge className="bg-red-100 text-red-800">Error</Badge>
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
          <p className="text-muted-foreground">
            Generate and download inventory reports
          </p>
        </div>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Create Report
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Reports
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              +3 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Downloads
            </CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Scheduled
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Active schedules
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Automation
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95%</div>
            <p className="text-xs text-muted-foreground">
              Success rate
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
          <CardDescription>
            Generate and download various inventory reports
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium">{report.name}</h3>
                    <Badge variant="outline">{report.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{report.description}</p>
                  <p className="text-xs text-muted-foreground">
                    Last generated: {report.lastGenerated}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusBadge(report.status)}
                  <Button variant="outline" size="sm" disabled={report.status !== 'Ready'}>
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}