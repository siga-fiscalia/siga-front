import React, { useState, useRef } from "react";
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
  Upload,
  Download,
  FileText,
  Database,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  Calendar,
  User,
  Package,
  Building2,
  Users,
  RefreshCw,
  FileSpreadsheet,
  File,
} from "lucide-react";

interface ImportExportRecord {
  id: number;
  type: "IMPORT" | "EXPORT";
  operation: string;
  description: string;
  format: "XLSX" | "PDF" | "TXT";
  status: "EXITOSO" | "PROCESANDO" | "ERROR" | "PENDIENTE";
  fileName: string;
  fileSize?: string;
  recordsCount?: number;
  processedDate: string;
  processedBy: string;
  source?: string;
  destination?: string;
  errorMessage?: string;
}

interface ImportTemplate {
  id: number;
  name: string;
  description: string;
  module: "BIENES" | "PERSONAL" | "CENTROS" | "INVENTARIO";
  format: "XLSX";
  icon: any;
  sampleFile?: string;
  requiredFields: string[];
}

interface ExportTemplate {
  id: number;
  name: string;
  description: string;
  module: "BIENES" | "PERSONAL" | "CENTROS" | "INVENTARIO";
  format: "PDF" | "XLSX" | "TXT";
  icon: any;
  estimatedSize: string;
  parameters?: string[];
}

function StatusBadge({ status }: { status: ImportExportRecord["status"] }) {
  const styles = {
    EXITOSO: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    PROCESANDO: "bg-blue-100 text-blue-700 border border-blue-200",
    ERROR: "bg-red-100 text-red-700 border border-red-200",
    PENDIENTE: "bg-yellow-100 text-yellow-700 border border-yellow-200",
  };

  const icons = {
    EXITOSO: CheckCircle,
    PROCESANDO: Clock,
    ERROR: XCircle,
    PENDIENTE: AlertTriangle,
  };

  const IconComponent = icons[status];

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}
    >
      <IconComponent className="w-3 h-3 mr-1" />
      {status}
    </span>
  );
}

function ModuleBadge({ module }: { module: string }) {
  const styles = {
    BIENES: "bg-green-100 text-green-700 border border-green-200",
    PERSONAL: "bg-purple-100 text-purple-700 border border-purple-200",
    CENTROS: "bg-orange-100 text-orange-700 border border-orange-200",
    INVENTARIO: "bg-blue-100 text-blue-700 border border-blue-200",
  };

  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${
        styles[module as keyof typeof styles] || "bg-gray-100 text-gray-700"
      }`}
    >
      {module}
    </span>
  );
}

export default function ImportExport() {
  const [search, setSearch] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [moduleFilter, setModuleFilter] = useState<string>("all");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [importTemplates] = useState<ImportTemplate[]>([
    {
      id: 1,
      name: "Importar desde SIGA",
      description:
        "Importar datos de bienes patrimoniales desde el sistema SIGA",
      module: "BIENES",
      format: "XLSX",
      icon: Package,
      sampleFile: "template_siga_bienes.xlsx",
      requiredFields: [
        "Código Patrimonial",
        "Descripción",
        "Estado",
        "Responsable",
      ],
    },
    {
      id: 2,
      name: "Importar Personal",
      description: "Cargar listado de personal desde archivo Excel",
      module: "PERSONAL",
      format: "XLSX",
      icon: Users,
      sampleFile: "template_personal.xlsx",
      requiredFields: ["DNI", "Apellidos", "Nombres", "Cargo", "Departamento"],
    },
    {
      id: 3,
      name: "Importar Centros de Costo",
      description: "Cargar información de centros de costo",
      module: "CENTROS",
      format: "XLSX",
      icon: Building2,
      sampleFile: "template_centros.xlsx",
      requiredFields: ["Código", "Descripción", "Dirección", "Distrito"],
    },
    {
      id: 4,
      name: "Importar Inventario",
      description: "Cargar resultados de inventario físico",
      module: "INVENTARIO",
      format: "XLSX",
      icon: Database,
      sampleFile: "template_inventario.xlsx",
      requiredFields: ["Código", "Estado Físico", "Ubicación", "Observaciones"],
    },
  ]);

  const [exportTemplates] = useState<ExportTemplate[]>([
    {
      id: 1,
      name: "Exportar Bienes a TXT",
      description:
        "Exportar listado de bienes patrimoniales para sistemas externos",
      module: "BIENES",
      format: "TXT",
      icon: FileText,
      estimatedSize: "2-5 MB",
      parameters: ["Centro de costo", "Estado", "Fecha corte"],
    },
    {
      id: 2,
      name: "Exportar Personal a Excel",
      description: "Exportar base de datos completa del personal",
      module: "PERSONAL",
      format: "XLSX",
      icon: FileSpreadsheet,
      estimatedSize: "1-3 MB",
      parameters: ["Departamento", "Estado", "Tipo empleado"],
    },
    {
      id: 3,
      name: "Exportar Inventario a Excel",
      description: "Exportar datos de inventario para análisis",
      module: "INVENTARIO",
      format: "XLSX",
      icon: FileSpreadsheet,
      estimatedSize: "5-10 MB",
      parameters: ["Año", "Centro de costo", "Estado conservación"],
    },
    {
      id: 4,
      name: "Exportar Reporte PDF",
      description: "Generar reporte completo en formato PDF",
      module: "BIENES",
      format: "PDF",
      icon: File,
      estimatedSize: "10-20 MB",
      parameters: ["Tipo reporte", "Periodo", "Filtros"],
    },
    {
      id: 5,
      name: "Exportar Centros a PDF",
      description: "Reporte de centros de costo en formato PDF",
      module: "CENTROS",
      format: "PDF",
      icon: File,
      estimatedSize: "2-5 MB",
      parameters: ["Distrito", "Estado", "Fecha corte"],
    },
    {
      id: 6,
      name: "Exportar Personal a TXT",
      description: "Listado de personal en formato texto plano",
      module: "PERSONAL",
      format: "TXT",
      icon: FileText,
      estimatedSize: "500 KB - 1 MB",
      parameters: ["Departamento", "Estado", "Formato"],
    },
  ]);

  const [operationHistory] = useState<ImportExportRecord[]>([
    {
      id: 1,
      type: "IMPORT",
      operation: "Importar desde SIGA",
      description: "Bienes patrimoniales - Actualización enero 2024",
      format: "XLSX",
      status: "EXITOSO",
      fileName: "inventario_siga_enero_2024.xlsx",
      fileSize: "3.2 MB",
      recordsCount: 247,
      processedDate: "2024-01-15",
      processedBy: "GARCIA LOPEZ, MARIA",
      source: "Sistema SIGA",
    },
    {
      id: 2,
      type: "EXPORT",
      operation: "Exportar Bienes a TXT",
      description: "Exportación completa para backup",
      format: "TXT",
      status: "EXITOSO",
      fileName: "export_bienes_backup_2024.txt",
      fileSize: "4.8 MB",
      recordsCount: 1247,
      processedDate: "2024-01-14",
      processedBy: "RODRIGUEZ SILVA, CARLOS",
      destination: "Backup Server",
    },
    {
      id: 3,
      type: "IMPORT",
      operation: "Importar Personal",
      description: "Actualización personal nuevo ingreso",
      format: "XLSX",
      status: "PROCESANDO",
      fileName: "personal_nuevo_2024.xlsx",
      fileSize: "1.1 MB",
      recordsCount: 45,
      processedDate: "2024-01-13",
      processedBy: "FERNANDEZ TORRES, ANA",
      source: "RRHH Sistema",
    },
    {
      id: 4,
      type: "IMPORT",
      operation: "Importar desde SIGA",
      description: "Importación diciembre 2023",
      format: "XLSX",
      status: "ERROR",
      fileName: "inventario_siga_diciembre_2023.xlsx",
      fileSize: "2.9 MB",
      recordsCount: 0,
      processedDate: "2024-01-10",
      processedBy: "MORALES CASTRO, JUAN",
      source: "Sistema SIGA",
      errorMessage: "Formato de columnas incorrecto",
    },
    {
      id: 5,
      type: "EXPORT",
      operation: "Exportar Personal a PDF",
      description: "Listado completo personal activo",
      format: "PDF",
      status: "PENDIENTE",
      fileName: "personal_activo_2024.pdf",
      processedDate: "2024-01-08",
      processedBy: "VARGAS MENDEZ, LUIS",
      destination: "Sistema Planillas",
    },
  ]);

  const filteredOperations = operationHistory.filter((operation) => {
    const matchesSearch =
      operation.operation.toLowerCase().includes(search.toLowerCase()) ||
      operation.description.toLowerCase().includes(search.toLowerCase()) ||
      operation.fileName.toLowerCase().includes(search.toLowerCase()) ||
      operation.processedBy.toLowerCase().includes(search.toLowerCase());

    const matchesType = typeFilter === "all" || operation.type === typeFilter;

    const matchesStatus =
      statusFilter === "all" || operation.status === statusFilter;

    const matchesModule =
      moduleFilter === "all" ||
      (() => {
        const operationModule =
          operation.operation.includes("SIGA") ||
          operation.operation.includes("Bienes")
            ? "BIENES"
            : operation.operation.includes("Personal")
            ? "PERSONAL"
            : operation.operation.includes("Centro")
            ? "CENTROS"
            : "INVENTARIO";
        return operationModule === moduleFilter;
      })();

    return matchesSearch && matchesType && matchesStatus && matchesModule;
  });

  const successCount = operationHistory.filter(
    (op) => op.status === "EXITOSO"
  ).length;
  const processingCount = operationHistory.filter(
    (op) => op.status === "PROCESANDO"
  ).length;
  const totalRecords = operationHistory
    .filter((op) => op.status === "EXITOSO")
    .reduce((sum, op) => sum + (op.recordsCount || 0), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header Principal */}
      <div className="text-white shadow-xl bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white shadow-lg rounded-xl">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">
                  Importar y Exportar Datos
                </h1>
                <p className="text-sm text-blue-100">
                  Gestión de Importación (Excel) y Exportación (Excel/PDF/TXT) -
                  Ministerio Público
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Actualizar Estado
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Estadísticas de Operaciones */}
      <div className="px-8 py-6">
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-4">
          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900">
                  {operationHistory.length}
                </p>
                <p className="text-sm text-blue-600">Total Operaciones</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-900">
                  {successCount}
                </p>
                <p className="text-sm text-emerald-600">Operaciones Exitosas</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-orange-100 rounded-xl">
                <Clock className="w-6 h-6 text-orange-600" />
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
                <Package className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-900">
                  {totalRecords.toLocaleString()}
                </p>
                <p className="text-sm text-purple-600">Registros Procesados</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Sección de Importación - Solo Excel */}
        <Card className="mb-6 border-0 shadow-lg">
          <div className="p-6 text-white rounded-t-lg bg-gradient-to-r from-green-600 to-green-700">
            <div className="flex items-center space-x-3">
              <Upload className="w-6 h-6" />
              <div>
                <h3 className="text-xl font-bold">
                  Importar Datos - Solo Excel
                </h3>
                <p className="text-sm text-green-100">
                  Cargar información desde archivos Excel (.xlsx) únicamente
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {importTemplates.map((template) => {
                const IconComponent = template.icon;
                return (
                  <Card
                    key={template.id}
                    className="transition-shadow border border-gray-200 hover:shadow-lg"
                  >
                    <div className="p-6">
                      <div className="flex items-start mb-4 space-x-3">
                        <div className="p-3 bg-green-100 rounded-lg">
                          <IconComponent className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-sm font-semibold text-gray-900">
                              {template.name}
                            </h4>
                            <ModuleBadge module={template.module} />
                          </div>
                          <p className="mb-3 text-xs text-gray-600">
                            {template.description}
                          </p>
                          <div className="mb-3 text-xs text-gray-500">
                            <span className="font-medium">Formato:</span>{" "}
                            <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded">
                              XLSX
                            </span>
                          </div>
                          <div className="mb-4 text-xs text-gray-500">
                            <span className="font-medium">
                              Campos requeridos:
                            </span>{" "}
                            {template.requiredFields.length}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full text-green-700 border-green-200 hover:bg-green-50"
                        >
                          <Download className="w-3 h-3 mr-2" />
                          Descargar Plantilla Excel
                        </Button>
                        <Button
                          size="sm"
                          className="w-full text-white bg-green-600 hover:bg-green-700"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <Upload className="w-3 h-3 mr-2" />
                          Seleccionar Archivo Excel
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept=".xlsx"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  if (!file.name.endsWith(".xlsx")) {
                    alert("Solo se permiten archivos Excel (.xlsx)");
                    e.target.value = "";
                    return;
                  }
                  console.log("Archivo Excel seleccionado:", file.name);
                }
              }}
            />
          </div>
        </Card>

        {/* Sección de Exportación - Excel, PDF y TXT */}
        <Card className="mb-6 border-0 shadow-lg">
          <div className="p-6 text-white rounded-t-lg bg-gradient-to-r from-orange-600 to-orange-700">
            <div className="flex items-center space-x-3">
              <Download className="w-6 h-6" />
              <div>
                <h3 className="text-xl font-bold">
                  Exportar Datos - Excel, PDF y TXT
                </h3>
                <p className="text-sm text-orange-100">
                  Generar archivos en formatos Excel, PDF o texto plano
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {exportTemplates.map((template) => {
                const IconComponent = template.icon;
                const formatColors = {
                  XLSX: "bg-green-100 text-green-700 border-green-200",
                  PDF: "bg-red-100 text-red-700 border-red-200",
                  TXT: "bg-blue-100 text-blue-700 border-blue-200",
                };
                return (
                  <Card
                    key={template.id}
                    className="transition-shadow border border-gray-200 hover:shadow-lg"
                  >
                    <div className="p-6">
                      <div className="flex items-start mb-4 space-x-3">
                        <div className="p-3 bg-orange-100 rounded-lg">
                          <IconComponent className="w-5 h-5 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-sm font-semibold text-gray-900">
                              {template.name}
                            </h4>
                            <ModuleBadge module={template.module} />
                          </div>
                          <p className="mb-3 text-xs text-gray-600">
                            {template.description}
                          </p>
                          <div className="mb-3 text-xs text-gray-500">
                            <span className="font-medium">Formato:</span>{" "}
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded border ${
                                formatColors[
                                  template.format as keyof typeof formatColors
                                ]
                              }`}
                            >
                              {template.format}
                            </span>
                          </div>
                          <div className="mb-4 text-xs text-gray-500">
                            <span className="font-medium">Tamaño est.:</span>{" "}
                            {template.estimatedSize}
                          </div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="w-full text-white bg-orange-600 hover:bg-orange-700"
                      >
                        <Download className="w-3 h-3 mr-2" />
                        Exportar como {template.format}
                      </Button>
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
                  Buscar Operación
                </label>
                <div className="relative">
                  <Search className="absolute w-4 h-4 text-blue-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <Input
                    type="text"
                    placeholder="Operación, archivo o usuario..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-blue-900">
                  Tipo Operación
                </label>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Todos los tipos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los tipos</SelectItem>
                    <SelectItem value="IMPORT">Importación (Excel)</SelectItem>
                    <SelectItem value="EXPORT">
                      Exportación (Excel/PDF/TXT)
                    </SelectItem>
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
                    <SelectItem value="EXITOSO">Exitoso</SelectItem>
                    <SelectItem value="PROCESANDO">Procesando</SelectItem>
                    <SelectItem value="ERROR">Error</SelectItem>
                    <SelectItem value="PENDIENTE">Pendiente</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-blue-900">
                  Módulo
                </label>
                <Select value={moduleFilter} onValueChange={setModuleFilter}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Todos los módulos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los módulos</SelectItem>
                    <SelectItem value="BIENES">Bienes</SelectItem>
                    <SelectItem value="PERSONAL">Personal</SelectItem>
                    <SelectItem value="CENTROS">Centros</SelectItem>
                    <SelectItem value="INVENTARIO">Inventario</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Card>

        {/* Tabla de Historial */}
        <Card className="overflow-hidden border-0 shadow-xl">
          <div className="p-6 text-white bg-gradient-to-r from-blue-600 to-blue-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">Historial de Operaciones</h3>
                <p className="mt-1 text-sm text-blue-100">
                  Registro de importaciones (Excel) y exportaciones
                  (Excel/PDF/TXT)
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-100">Operaciones encontradas</p>
                <p className="text-2xl font-bold">
                  {filteredOperations.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-blue-100 bg-blue-50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Tipo
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Operación
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Archivo
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Registros
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Procesado por
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Fecha
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredOperations.map((operation, index) => (
                    <tr
                      key={operation.id}
                      className={`hover:bg-blue-50 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          {operation.type === "IMPORT" ? (
                            <div className="p-2 bg-green-100 rounded-lg">
                              <Upload className="w-4 h-4 text-green-600" />
                            </div>
                          ) : (
                            <div className="p-2 bg-orange-100 rounded-lg">
                              <Download className="w-4 h-4 text-orange-600" />
                            </div>
                          )}
                          <span className="text-sm font-medium text-gray-900">
                            {operation.type === "IMPORT"
                              ? "Importar"
                              : "Exportar"}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-semibold text-gray-900">
                            {operation.operation}
                          </div>
                          <div className="text-xs text-gray-600">
                            {operation.description}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {operation.fileName}
                          </div>
                          <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <span>{operation.fileSize || "-"}</span>
                            <span>•</span>
                            <span
                              className={`px-2 py-1 rounded text-xs font-medium ${
                                operation.format === "XLSX"
                                  ? "bg-green-100 text-green-700"
                                  : operation.format === "PDF"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-blue-100 text-blue-700"
                              }`}
                            >
                              {operation.format}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={operation.status} />
                        {operation.errorMessage && (
                          <div className="mt-1 text-xs text-red-600">
                            {operation.errorMessage}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <Package className="w-4 h-4 text-blue-500" />
                          <span className="text-sm font-semibold text-blue-700">
                            {operation.recordsCount?.toLocaleString() || "-"}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-700">
                            {operation.processedBy}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {new Date(
                              operation.processedDate
                            ).toLocaleDateString("es-PE")}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          {operation.status === "EXITOSO" &&
                            operation.type === "EXPORT" && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-blue-700 border-blue-200 hover:bg-blue-50"
                              >
                                <Download className="w-3 h-3 mr-1" />
                                Descargar
                              </Button>
                            )}
                          {operation.status === "ERROR" && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-orange-700 border-orange-200 hover:bg-orange-50"
                            >
                              <RefreshCw className="w-3 h-3 mr-1" />
                              Reintentar
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-gray-700 border-gray-200 hover:bg-gray-50"
                          >
                            <FileText className="w-3 h-3 mr-1" />
                            Detalles
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredOperations.length === 0 && (
                    <tr>
                      <td className="px-6 py-12 text-center" colSpan={8}>
                        <div className="flex flex-col items-center space-y-3">
                          <div className="p-4 bg-blue-100 rounded-full">
                            <Search className="w-8 h-8 text-blue-400" />
                          </div>
                          <div>
                            <p className="text-lg font-medium text-gray-900">
                              No se encontraron operaciones
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

        {/* Sección de Ayuda Actualizada */}
        <Card className="border-0 shadow-lg">
          <div className="p-6 text-white rounded-t-lg bg-gradient-to-r from-purple-600 to-purple-700">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-6 h-6" />
              <div>
                <h3 className="text-xl font-bold">Información Importante</h3>
                <p className="text-sm text-purple-100">
                  Formatos soportados y mejores prácticas
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Upload className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-green-900">
                      Importación - Solo Excel
                    </h4>
                    <ul className="space-y-1 text-sm text-green-700">
                      <li>• Solo archivos .xlsx permitidos</li>
                      <li>• Usar siempre las plantillas oficiales</li>
                      <li>• Verificar formato de columnas</li>
                      <li>• Máximo 10,000 registros por archivo</li>
                      <li>• Realizar copias de seguridad previas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 border border-orange-200 rounded-lg bg-orange-50">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Download className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-orange-900">
                      Exportación - Multi-formato
                    </h4>
                    <ul className="space-y-1 text-sm text-orange-700">
                      <li>• Excel (.xlsx) - Para análisis de datos</li>
                      <li>• PDF - Para reportes oficiales</li>
                      <li>• TXT - Para sistemas externos</li>
                      <li>• Configurar filtros según necesidad</li>
                      <li>• Considerar el tamaño del archivo</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 border border-purple-200 rounded-lg bg-purple-50">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-purple-900">
                      Consideraciones Técnicas
                    </h4>
                    <ul className="space-y-1 text-sm text-purple-700">
                      <li>• Importar solo en horarios de baja actividad</li>
                      <li>• Validar datos antes de procesar</li>
                      <li>• Mantener historial de operaciones</li>
                      <li>• Verificar permisos de usuario</li>
                      <li>• Cumplir normativa de protección de datos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}