import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Filter,
  Plus,
  Eye,
  ArrowUp,
  FileText,
  Calendar,
  AlertCircle,
} from "lucide-react";

type StatusType = "En Proceso" | "Completado" | "Pendiente";

function StatusBadge({ status }: { status: string }) {
  const styles: Record<StatusType, string> = {
    "En Proceso": "bg-yellow-100 text-yellow-700 border border-yellow-200",
    Completado: "bg-green-100 text-green-700 border border-green-200",
    Pendiente: "bg-red-100 text-red-700 border border-red-200",
  };

  const statusKey = status as StatusType;
  const statusClass =
    styles[statusKey] || "bg-gray-100 text-gray-700 border border-gray-200";

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${statusClass}`}>
      {status}
    </span>
  );
}

export default function ReturnsTab() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedMonth, setSelectedMonth] = useState("Enero");
  const [selectedRegistryType, setSelectedRegistryType] =
    useState("Seleccionar");

  const returns = [
    {
      id: 1,
      movementNumber: "DEV001",
      movementDate: "2024-01-15",
      resolutionNumber: "RES-2024-001",
      resolutionDate: "2024-01-10",
      status: "En Proceso",
    },
    {
      id: 2,
      movementNumber: "DEV002",
      movementDate: "2024-01-20",
      resolutionNumber: "RES-2024-002",
      resolutionDate: "2024-01-18",
      status: "En Proceso",
    },
  ];

  return (
    <div className="p-8">
      {/* Filtros */}
      <Card className="mb-6 border-0 shadow-lg">
        <div className="p-4 text-white rounded-t-lg bg-gradient-to-r from-orange-600 to-orange-700">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <h3 className="font-semibold">Filtros de Búsqueda</h3>
          </div>
        </div>
        <div className="p-6 bg-white">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-orange-900">
                Año
              </label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="border-orange-200 focus:border-orange-500 focus:ring-orange-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-orange-900">
                Mes
              </label>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="border-orange-200 focus:border-orange-500 focus:ring-orange-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Enero">Enero</SelectItem>
                  <SelectItem value="Febrero">Febrero</SelectItem>
                  <SelectItem value="Marzo">Marzo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-orange-900">
                Tipo Registro
              </label>
              <Select
                value={selectedRegistryType}
                onValueChange={setSelectedRegistryType}
              >
                <SelectTrigger className="border-orange-200 focus:border-orange-500 focus:ring-orange-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Seleccionar">Seleccionar</SelectItem>
                  <SelectItem value="Devolución">Devolución</SelectItem>
                  <SelectItem value="Retorno">Retorno</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button className="w-full text-white bg-orange-600 hover:bg-orange-700">
                <Plus className="w-4 h-4 mr-2" />
                Nueva Devolución
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Contenido Principal */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Lista de Devoluciones */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-lg">
            <div className="p-6 text-white rounded-t-lg bg-gradient-to-r from-orange-600 to-orange-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <ArrowUp className="w-6 h-6" />
                  <div>
                    <h3 className="text-xl font-bold">Lista de Devoluciones</h3>
                    <p className="text-sm text-orange-100">
                      Movimientos de devolución de bienes
                    </p>
                  </div>
                </div>
                <Button
                  className="text-orange-600 bg-white border-0 shadow-lg hover:bg-orange-50"
                  size="sm"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Nueva Devolución
                </Button>
              </div>
            </div>

            <div className="bg-white">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-orange-100 bg-orange-50">
                    <tr>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-orange-900 uppercase">
                        Nro Mov
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-orange-900 uppercase">
                        Fecha Mov
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-orange-900 uppercase">
                        Nro Resolución
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-orange-900 uppercase">
                        Fecha Resolución
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-orange-900 uppercase">
                        Estado
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-orange-900 uppercase">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {returns.map((returnItem, index) => (
                      <tr
                        key={returnItem.id}
                        className={`hover:bg-orange-50 transition-colors ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-semibold text-orange-900">
                            {returnItem.movementNumber}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">
                              {returnItem.movementDate}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-700">
                            {returnItem.resolutionNumber}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">
                              {returnItem.resolutionDate}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <StatusBadge status={returnItem.status} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-orange-700 border-orange-200 hover:bg-orange-50"
                          >
                            <Eye className="w-3 h-3 mr-1" />
                            Ver Detalle
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-orange-900 text-center">
              Devolución de Activos
            </h4>
          </div>
        </div>

        {/* Detalle de Movimiento */}
        <div className="lg:col-span-1">
          <Card className="border-0 shadow-lg">
            <div className="p-6 text-white rounded-t-lg bg-gradient-to-r from-green-600 to-green-700">
              <div className="flex items-center space-x-3">
                <FileText className="w-6 h-6" />
                <div>
                  <h3 className="text-xl font-bold">Detalle de Movimiento</h3>
                  <p className="text-sm text-green-100">
                    Información del movimiento seleccionado
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white">
              <div className="text-center text-gray-500">
                <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p className="text-sm">
                  Seleccione un movimiento para ver los detalles
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
