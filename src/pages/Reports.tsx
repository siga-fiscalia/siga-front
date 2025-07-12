import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  FileText,
  Download,
  Calendar,
  BarChart3,
  TrendingUp,
  Users,
  Package,
  Building2,
  Eye,
  Printer,
  RefreshCw,
} from "lucide-react";

interface Report {
  id: number;
  title: string;
  description: string;
  category: "INVENTARIO" | "PERSONAL" | "CENTROS" | "BIENES";
  format: "PDF" | "EXCEL" | "CSV";
  status: "GENERADO" | "PROCESANDO" | "ERROR";
  generatedDate: string;
  generatedBy: string;
  fileSize?: string;
  downloadCount?: number;
}

interface ReportTemplate {
  id: number;
  name: string;
  description: string;
  category: "INVENTARIO" | "PERSONAL" | "CENTROS" | "BIENES";
  icon: any;
  estimatedTime: string;
  parameters?: string[];
}

function StatusBadge({ status }: { status: Report["status"] }) {
  const styles = {
    GENERADO: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    PROCESANDO: "bg-blue-100 text-blue-700 border border-blue-200",
    ERROR: "bg-red-100 text-red-700 border border-red-200",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function CategoryBadge({ category }: { category: Report["category"] }) {
  const styles = {
    INVENTARIO: "bg-blue-100 text-blue-700 border border-blue-200",
    PERSONAL: "bg-purple-100 text-purple-700 border border-purple-200",
    CENTROS: "bg-orange-100 text-orange-700 border border-orange-200",
    BIENES: "bg-green-100 text-green-700 border border-green-200",
  };

  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${styles[category]}`}
    >
      {category}
    </span>
  );
}

export default function Reports() {
  const [search, setSearch] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<string>("all");

  const [reportTemplates] = useState<ReportTemplate[]>([
    {
      id: 1,
      name: "Asignación de Bienes",
      description: "Reporte detallado de bienes patrimoniales por usuario final y centro de costo",
      category: "BIENES",
      icon: Package,
      estimatedTime: "2-3 min",
      parameters: ["Centro de costo", "Fecha inicio", "Fecha fin"]
    },
    {
      id: 2,
      name: "Inventario Físico",
      description: "Inventario físico completo de activos fijos con estado y ubicación",
      category: "INVENTARIO",
      icon: BarChart3,
      estimatedTime: "5-7 min",
      parameters: ["Año inventario", "Estado conservación"]
    },
    {
      id: 3,
      name: "Faltantes de Inventario",
      description: "Reporte de bienes faltantes detectados en inventario físico",
      category: "INVENTARIO",
      icon: TrendingUp,
      estimatedTime: "1-2 min",
      parameters: ["Periodo", "Centro de costo"]
    },
    {
      id: 4,
      name: "Personal por Departamento",
      description: "Listado completo de personal activo agrupado por departamento",
      category: "PERSONAL",
      icon: Users,
      estimatedTime: "1 min",
      parameters: ["Estado", "Departamento"]
    },
    {
      id: 5,
      name: "Centros de Costo Activos",
      description: "Reporte de todos los centros de costo con sus bienes asignados",
      category: "CENTROS",
      icon: Building2,
      estimatedTime: "1 min",
      parameters: ["Distrito", "Estado"]
    },
    {
      id: 6,
      name: "Valorización de Activos",
      description: "Reporte financiero con valorización total de activos por centro",
      category: "BIENES",
      icon: TrendingUp,
      estimatedTime: "3-4 min",
      parameters: ["Año", "Tipo bien", "Centro costo"]
    }
  ]);

  const [reportHistory] = useState<Report[]>([
    {
      id: 1,
      title: "Reporte de Asignación de Bienes",
      description: "Bienes patrimoniales por usuario - Enero 2024",
      category: "BIENES",
      format: "PDF",
      status: "GENERADO",
      generatedDate: "2024-01-15",
      generatedBy: "GARCIA LOPEZ, MARIA",
      fileSize: "2.4 MB",
      downloadCount: 12
    },
    {
      id: 2,
      title: "Inventario Físico - Sede Principal",
      description: "Inventario completo sede principal - Diciembre 2023",
      category: "INVENTARIO",
      format: "EXCEL",
      status: "GENERADO",
      generatedDate: "2024-01-12",
      generatedBy: "RODRIGUEZ SILVA, CARLOS",
      fileSize: "5.8 MB",
      downloadCount: 8
    },
    {
      id: 3,
      title: "Personal Activo por Departamento",
      description: "Listado personal activo - Enero 2024",
      category: "PERSONAL",
      format: "PDF",
      status: "PROCESANDO",
      generatedDate: "2024-01-10",
      generatedBy: "FERNANDEZ TORRES, ANA",
      fileSize: "",
      downloadCount: 0
    },
    {
      id: 4,
      title: "Faltantes de Inventario",
      description: "Bienes faltantes detectados - Diciembre 2023",
      category: "INVENTARIO",
      format: "CSV",
      status: "ERROR",
      generatedDate: "2024-01-08",
      generatedBy: "MORALES CASTRO, JUAN",
      fileSize: "",
      downloadCount: 0
    },
    {
      id: 5,
      title: "Centros de Costo - La Libertad",
      description: "Todos los centros de costo departamento La Libertad",
      category: "CENTROS",
      format: "PDF",
      status: "GENERADO",
      generatedDate: "2024-01-05",
      generatedBy: "VARGAS MENDEZ, LUIS",
      fileSize: "1.2 MB",
      downloadCount: 5
    }
  ]);

  const filteredReports = reportHistory.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(search.toLowerCase()) ||
      report.description.toLowerCase().includes(search.toLowerCase()) ||
      report.generatedBy.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "all" || report.category === categoryFilter;

    const matchesStatus =
      statusFilter === "all" || report.status === statusFilter;

    const matchesDate = dateFilter === "all" || (() => {
      const reportDate = new Date(report.generatedDate);
      const now = new Date();
      
      switch (dateFilter) {
        case "today":
          return reportDate.toDateString() === now.toDateString();
        case "week":
          const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          return reportDate >= weekAgo;
        case "month":
          const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          return reportDate >= monthAgo;
        default:
          return true;
      }
    })();

    return matchesSearch && matchesCategory && matchesStatus && matchesDate;
  });

  const generatedCount = reportHistory.filter((r) => r.status === "GENERADO").length;
  const processingCount = reportHistory.filter((r) => r.status === "PROCESANDO").length;
  const totalDownloads = reportHistory.reduce((sum, report) => sum + (report.downloadCount || 0), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header Principal */}
      <div className="text-white shadow-xl bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white shadow-lg rounded-xl">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Módulo de Reportes</h1>
                <p className="text-sm text-blue-100">
                  Generación y Gestión de Reportes - Ministerio Público
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Actualizar Lista
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Estadísticas de Reportes */}
      <div className="px-8 py-6">
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-4">
          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900">
                  {reportHistory.length}
                </p>
                <p className="text-sm text-blue-600">Total Reportes</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <Download className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-900">
                  {generatedCount}
                </p>
                <p className="text-sm text-emerald-600">Reportes Generados</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-orange-100 rounded-xl">
                <RefreshCw className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-900">
                  {processingCount}
                </p>
                <p className="text-sm text-orange-600">En Proceso</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-900">
                  {totalDownloads}
                </p>
                <p className="text-sm text-purple-600">Total Descargas</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Sección de Generación de Reportes */}
        <Card className="mb-6 border-0 shadow-lg">
          <div className="p-6 text-white rounded-t-lg bg-gradient-to-r from-blue-600 to-blue-700">
            <div className="flex items-center space-x-3">
              <BarChart3 className="w-6 h-6" />
              <div>
                <h3 className="text-xl font-bold">Generar Nuevos Reportes</h3>
                <p className="text-sm text-blue-100">
                  Selecciona el tipo de reporte que deseas generar
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reportTemplates.map((template) => {
                const IconComponent = template.icon;
                return (
                  <Card key={template.id} className="transition-shadow border border-gray-200 hover:shadow-lg">
                    <div className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{template.name}</h4>
                            <CategoryBadge category={template.category} />
                          </div>
                          <p className="mb-3 text-sm text-gray-600">{template.description}</p>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {template.estimatedTime}
                            </span>
                            <span>{template.parameters?.length || 0} parámetros</span>
                          </div>
                          <Button
                            className="w-full mt-4 text-white bg-blue-600 hover:bg-blue-700"
                            size="sm"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Generar Reporte
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Panel de Filtros */}
        <Card className="mb-6 border-0 shadow-lg">
          <div className="p-4 text-white rounded-t-lg bg-gradient-to-r from-blue-600 to-blue-700">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5" />
              <h3 className="font-semibold">Filtros de Búsqueda</h3>
            </div>
          </div>
          <div className="p-6 bg-white">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-blue-900">
                  Buscar Reporte
                </label>
                <div className="relative">
                  <Search className="absolute w-4 h-4 text-blue-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <Input
                    type="text"
                    placeholder="Título, descripción o generado por..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-blue-900">
                  Categoría
                </label>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Todas las categorías" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las categorías</SelectItem>
                    <SelectItem value="INVENTARIO">Inventario</SelectItem>
                    <SelectItem value="PERSONAL">Personal</SelectItem>
                    <SelectItem value="CENTROS">Centros</SelectItem>
                    <SelectItem value="BIENES">Bienes</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-blue-900">
                  Estado
                </label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Todos los estados" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los estados</SelectItem>
                    <SelectItem value="GENERADO">Generado</SelectItem>
                    <SelectItem value="PROCESANDO">Procesando</SelectItem>
                    <SelectItem value="ERROR">Error</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-blue-900">
                  Fecha
                </label>
                <Select value={dateFilter} onValueChange={setDateFilter}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Todas las fechas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las fechas</SelectItem>
                    <SelectItem value="today">Hoy</SelectItem>
                    <SelectItem value="week">Última semana</SelectItem>
                    <SelectItem value="month">Último mes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Card>

        {/* Tabla de Historial de Reportes */}
        <Card className="overflow-hidden border-0 shadow-xl">
          <div className="p-6 text-white bg-gradient-to-r from-blue-600 to-blue-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">Historial de Reportes</h3>
                <p className="mt-1 text-sm text-blue-100">
                  Reportes generados en el sistema con estado y descargas
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-100">Reportes encontrados</p>
                <p className="text-2xl font-bold">{filteredReports.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-blue-100 bg-blue-50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Reporte
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Categoría
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Formato
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Generado por
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Fecha
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Tamaño
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Descargas
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredReports.map((report, index) => (
                    <tr
                      key={report.id}
                      className={`hover:bg-blue-50 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <FileText className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">
                              {report.title}
                            </div>
                            <div className="text-xs text-gray-600">
                              {report.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <CategoryBadge category={report.category} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded">
                          {report.format}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={report.status} />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-700">
                            {report.generatedBy}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {new Date(report.generatedDate).toLocaleDateString("es-PE")}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-600">
                          {report.fileSize || "-"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <Download className="w-4 h-4 text-green-500" />
                          <span className="text-sm font-semibold text-green-700">
                            {report.downloadCount || 0}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            disabled={report.status !== "GENERADO"}
                            className="text-blue-700 border-blue-200 hover:bg-blue-50 disabled:opacity-50"
                          >
                            <Download className="w-3 h-3 mr-1" />
                            Descargar
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-gray-700 border-gray-200 hover:bg-gray-50"
                          >
                            <Eye className="w-3 h-3 mr-1" />
                            Ver
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredReports.length === 0 && (
                    <tr>
                      <td className="px-6 py-12 text-center" colSpan={9}>
                        <div className="flex flex-col items-center space-y-3">
                          <div className="p-4 bg-blue-100 rounded-full">
                            <Search className="w-8 h-8 text-blue-400" />
                          </div>
                          <div>
                            <p className="text-lg font-medium text-gray-900">
                              No se encontraron reportes
                            </p>
                            <p className="text-gray-500">
                              Intenta ajustar los filtros de búsqueda
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}