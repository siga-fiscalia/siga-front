import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Package,
  Users,
  Building2,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Calendar,
  Activity,
  Database,
  Eye,
  Download,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

interface DashboardStat {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: any;
  color: string;
}

interface RecentActivity {
  id: number;
  type: "IMPORT" | "EXPORT" | "ASSIGNMENT" | "INVENTORY" | "REPORT";
  title: string;
  description: string;
  user: string;
  timestamp: string;
  status: "SUCCESS" | "ERROR" | "PENDING";
}

interface QuickAccess {
  id: number;
  title: string;
  description: string;
  icon: any;
  color: string;
  route: string;
}

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState<string>("week");

  const stats: DashboardStat[] = [
    {
      title: "Total de Bienes",
      value: "1,247",
      change: "+12% desde el mes pasado",
      trend: "up",
      icon: Package,
      color: "blue",
    },
    {
      title: "Personal Activo",
      value: "89",
      change: "+3 nuevos ingresos",
      trend: "up",
      icon: Users,
      color: "green",
    },
    {
      title: "Centros de Costo",
      value: "24",
      change: "+2 nuevos centros",
      trend: "up",
      icon: Building2,
      color: "purple",
    },
    {
      title: "Bienes Asignados",
      value: "1,089",
      change: "87% del total",
      trend: "neutral",
      icon: CheckCircle,
      color: "emerald",
    },
    {
      title: "Bienes Disponibles",
      value: "158",
      change: "13% del total",
      trend: "neutral",
      icon: Clock,
      color: "orange",
    },
    {
      title: "Faltantes",
      value: "23",
      change: "-5 desde último inventario",
      trend: "down",
      icon: AlertTriangle,
      color: "red",
    },
  ];

  const recentActivities: RecentActivity[] = [
    {
      id: 1,
      type: "IMPORT",
      title: "Importación de datos SIGA",
      description: "Se importaron 247 registros de bienes patrimoniales",
      user: "GARCIA LOPEZ, MARIA",
      timestamp: "2024-01-15 14:30",
      status: "SUCCESS",
    },
    {
      id: 2,
      type: "ASSIGNMENT",
      title: "Asignación de laptop",
      description: "Laptop Dell Inspiron asignada a RODRIGUEZ SILVA, CARLOS",
      user: "FERNANDEZ TORRES, ANA",
      timestamp: "2024-01-15 11:20",
      status: "SUCCESS",
    },
    {
      id: 3,
      type: "INVENTORY",
      title: "Inventario físico completado",
      description: "Inventario de Sede Norte - 156 bienes verificados",
      user: "MORALES CASTRO, JUAN",
      timestamp: "2024-01-14 16:45",
      status: "SUCCESS",
    },
    {
      id: 4,
      type: "REPORT",
      title: "Reporte de valorización generado",
      description: "Reporte financiero Q4 2023 - Total S/ 2,450,000",
      user: "VARGAS MENDEZ, LUIS",
      timestamp: "2024-01-14 09:15",
      status: "SUCCESS",
    },
    {
      id: 5,
      type: "EXPORT",
      title: "Exportación de personal",
      description: "Error al exportar listado de personal activo",
      user: "GUERRERO ESCOBEDO, JHONY",
      timestamp: "2024-01-13 15:30",
      status: "ERROR",
    },
  ];

  const quickAccess: QuickAccess[] = [
    {
      id: 1,
      title: "Gestión de Bienes",
      description: "Administrar bienes patrimoniales",
      icon: Package,
      color: "blue",
      route: "/bienes",
    },
    {
      id: 2,
      title: "Inventario Físico",
      description: "Realizar inventario y verificaciones",
      icon: BarChart3,
      color: "green",
      route: "/inventario",
    },
    {
      id: 3,
      title: "Personal",
      description: "Gestionar personal y asignaciones",
      icon: Users,
      color: "purple",
      route: "/personal",
    },
    {
      id: 4,
      title: "Centros de Costo",
      description: "Administrar centros y ubicaciones",
      icon: Building2,
      color: "orange",
      route: "/centros",
    },
    {
      id: 5,
      title: "Reportes",
      description: "Generar reportes y análisis",
      icon: FileText,
      color: "indigo",
      route: "/reportes",
    },
    {
      id: 6,
      title: "Importar/Exportar",
      description: "Gestionar datos externos",
      icon: Database,
      color: "pink",
      route: "/importar",
    },
  ];

  const getStatusIcon = (status: RecentActivity["status"]) => {
    switch (status) {
      case "SUCCESS":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "ERROR":
        return <AlertTriangle className="w-4 h-4 text-red-600" />;
      case "PENDING":
        return <Clock className="w-4 h-4 text-yellow-600" />;
    }
  };

  const getActivityIcon = (type: RecentActivity["type"]) => {
    switch (type) {
      case "IMPORT":
        return <Database className="w-5 h-5 text-blue-600" />;
      case "EXPORT":
        return <Download className="w-5 h-5 text-orange-600" />;
      case "ASSIGNMENT":
        return <Users className="w-5 h-5 text-purple-600" />;
      case "INVENTORY":
        return <BarChart3 className="w-5 h-5 text-green-600" />;
      case "REPORT":
        return <FileText className="w-5 h-5 text-indigo-600" />;
    }
  };

  const formatTimeAgo = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffHours < 1) return "Hace menos de 1 hora";
    if (diffHours === 1) return "Hace 1 hora";
    if (diffHours < 24) return `Hace ${diffHours} horas`;

    const diffDays = Math.floor(diffHours / 24);
    if (diffDays === 1) return "Hace 1 día";
    return `Hace ${diffDays} días`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header Principal */}
      <div className="text-white shadow-xl bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white shadow-lg rounded-xl">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Panel de Control</h1>
                <p className="text-sm text-blue-100">
                  Sistema Integral de Gestion de Almacenes - Ministerio Público
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-sm text-right">
                <p className="text-blue-100">Última actualización</p>
                <p className="font-semibold">
                  {new Date().toLocaleString("es-PE")}
                </p>
              </div>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Actualizar
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-6">
        {/* Estadísticas Principales */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const colorClasses = {
              blue: "bg-blue-100 text-blue-600",
              green: "bg-emerald-100 text-emerald-600",
              purple: "bg-purple-100 text-purple-600",
              emerald: "bg-emerald-100 text-emerald-600",
              orange: "bg-orange-100 text-orange-600",
              red: "bg-red-100 text-red-600",
            };

            return (
              <Card
                key={index}
                className="p-6 transition-all bg-white border-0 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2 space-x-3">
                      <div
                        className={`p-3 rounded-xl ${
                          colorClasses[stat.color as keyof typeof colorClasses]
                        }`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex items-center space-x-2">
                        {stat.trend === "up" && (
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        )}
                        {stat.trend === "down" && (
                          <TrendingDown className="w-4 h-4 text-red-600" />
                        )}
                        {stat.trend === "neutral" && (
                          <Activity className="w-4 h-4 text-gray-600" />
                        )}
                      </div>
                    </div>
                    <h3 className="mb-1 text-sm font-medium text-gray-600">
                      {stat.title}
                    </h3>
                    <p className="mb-1 text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <p
                      className={`text-xs ${
                        stat.trend === "up"
                          ? "text-green-600"
                          : stat.trend === "down"
                          ? "text-red-600"
                          : "text-gray-600"
                      }`}
                    >
                      {stat.change}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Actividad Reciente */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <div className="p-6 text-white rounded-t-lg bg-gradient-to-r from-blue-600 to-blue-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Activity className="w-6 h-6" />
                    <div>
                      <h3 className="text-xl font-bold">Actividad Reciente</h3>
                      <p className="text-sm text-blue-100">
                        Últimas operaciones realizadas en el sistema
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-white hover:bg-white hover:text-blue-600"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Todo
                  </Button>
                </div>
              </div>

              <div className="p-6 bg-white">
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start p-4 space-x-4 transition-colors border border-gray-100 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 p-2 bg-gray-100 rounded-lg">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="text-sm font-semibold text-gray-900 truncate">
                            {activity.title}
                          </h4>
                          <div className="flex items-center ml-2 space-x-2">
                            {getStatusIcon(activity.status)}
                            <span className="text-xs text-gray-500">
                              {formatTimeAgo(activity.timestamp)}
                            </span>
                          </div>
                        </div>
                        <p className="mb-2 text-sm text-gray-600">
                          {activity.description}
                        </p>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Users className="w-3 h-3" />
                          <span>{activity.user}</span>
                          <span>•</span>
                          <Calendar className="w-3 h-3" />
                          <span>{activity.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Acceso Rápido */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg">
              <div className="p-6 text-white rounded-t-lg bg-gradient-to-r from-purple-600 to-purple-700">
                <div className="flex items-center space-x-3">
                  <Package className="w-6 h-6" />
                  <div>
                    <h3 className="text-xl font-bold">Acceso Rápido</h3>
                    <p className="text-sm text-purple-100">
                      Módulos principales del sistema
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white">
                <div className="space-y-3">
                  {quickAccess.map((item) => {
                    const IconComponent = item.icon;
                    const colorClasses = {
                      blue: "bg-blue-100 text-blue-600 hover:bg-blue-200",
                      green:
                        "bg-emerald-100 text-emerald-600 hover:bg-emerald-200",
                      purple:
                        "bg-purple-100 text-purple-600 hover:bg-purple-200",
                      orange:
                        "bg-orange-100 text-orange-600 hover:bg-orange-200",
                      indigo:
                        "bg-indigo-100 text-indigo-600 hover:bg-indigo-200",
                      pink: "bg-pink-100 text-pink-600 hover:bg-pink-200",
                    };

                    return (
                      <button
                        key={item.id}
                        className="w-full p-4 text-left transition-all border border-gray-100 rounded-lg hover:shadow-md group"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-2 rounded-lg transition-colors ${
                              colorClasses[
                                item.color as keyof typeof colorClasses
                              ]
                            }`}
                          >
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h4 className="mb-1 text-sm font-semibold text-gray-900">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {item.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 transition-colors group-hover:text-gray-600" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Resumen por Centros de Costo */}
        <Card className="mt-8 border-0 shadow-lg">
          <div className="p-6 text-white rounded-t-lg bg-gradient-to-r from-green-600 to-green-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Building2 className="w-6 h-6" />
                <div>
                  <h3 className="text-xl font-bold">
                    Distribución por Centros de Costo
                  </h3>
                  <p className="text-sm text-green-100">
                    Resumen de bienes asignados por ubicación
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="text-white border-white hover:bg-white hover:text-green-600"
              >
                <FileText className="w-4 h-4 mr-2" />
                Ver Reporte
              </Button>
            </div>
          </div>

          <div className="p-6 bg-white">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Sede Principal",
                  bienes: 456,
                  porcentaje: 37,
                  color: "blue",
                },
                {
                  name: "Sede Norte",
                  bienes: 321,
                  porcentaje: 26,
                  color: "green",
                },
                {
                  name: "Sede Sur",
                  bienes: 289,
                  porcentaje: 23,
                  color: "purple",
                },
                {
                  name: "Sede Este",
                  bienes: 181,
                  porcentaje: 14,
                  color: "orange",
                },
              ].map((centro, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-semibold text-gray-900">
                      {centro.name}
                    </h4>
                    <span className="text-xs text-gray-500">
                      {centro.porcentaje}%
                    </span>
                  </div>
                  <p className="mb-2 text-2xl font-bold text-gray-900">
                    {centro.bienes}
                  </p>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className={`h-2 rounded-full ${
                        centro.color === "blue"
                          ? "bg-blue-600"
                          : centro.color === "green"
                          ? "bg-emerald-600"
                          : centro.color === "purple"
                          ? "bg-purple-600"
                          : "bg-orange-600"
                      }`}
                      style={{ width: `${centro.porcentaje}%` }}
                    ></div>
                  </div>
                  <p className="mt-1 text-xs text-gray-600">bienes asignados</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
