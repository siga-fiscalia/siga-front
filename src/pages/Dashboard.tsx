import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

const stats = [
  {
    title: 'Total de Bienes',
    value: '1,247',
    description: '+12% desde el mes pasado',
    color: 'text-blue-600'
  },
  {
    title: 'Bienes Asignados',
    value: '1,089',
    description: '87% del total',
    color: 'text-green-600'
  },
  {
    title: 'Bienes Disponibles',
    value: '158',
    description: '13% del total',
    color: 'text-orange-500'
  },
  {
    title: 'Faltantes',
    value: '23',
    description: 'Requiere atención',
    color: 'text-red-600'
  }
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      {/* Estadísticas */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Actividades y Centros de Costo */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Últimas Actividades */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Últimas Actividades</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              <div>
                <p>Importación de archivo SIGA</p>
                <p className="text-sm text-muted-foreground">Hace 2 horas</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-600 rounded-full" />
              <div>
                <p>Asignación de laptop a Juan Pérez</p>
                <p className="text-sm text-muted-foreground">Hace 4 horas</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-orange-600 rounded-full" />
              <div>
                <p>Reporte de inventario generado</p>
                <p className="text-sm text-muted-foreground">Ayer</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Centros de Costo */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Centros de Costo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Sede Principal</span>
              <span className="text-sm text-muted-foreground">456 bienes</span>
            </div>
            <div className="flex justify-between">
              <span>Sede Norte</span>
              <span className="text-sm text-muted-foreground">321 bienes</span>
            </div>
            <div className="flex justify-between">
              <span>Sede Sur</span>
              <span className="text-sm text-muted-foreground">289 bienes</span>
            </div>
            <div className="flex justify-between">
              <span>Sede Este</span>
              <span className="text-sm text-muted-foreground">181 bienes</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}