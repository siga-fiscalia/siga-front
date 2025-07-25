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
  Filter,
  Plus,
  Eye,
  ArrowDown,
  FileText,
  Calendar,
  Search,
} from "lucide-react";

export default function DischargesTab() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedMonth, setSelectedMonth] = useState("Enero");
  const [selectedMovementType, setSelectedMovementType] =
    useState("Seleccionar");
  const [selectedRegistryType, setSelectedRegistryType] =
    useState("Seleccionar");

  const discharges = [
    {
      id: 1,
      movementNumber: "BAJ001",
      movementDate: "2024-01-15",
      resolutionNumber: "RES-BAJ-001",
      resolutionDate: "2024-01-10",
      status: "En Proceso",
    },
    {
      id: 2,
      movementNumber: "BAJ002",
      movementDate: "2024-01-20",
      resolutionNumber: "RES-BAJ-002",
      resolutionDate: "2024-01-18",
      status: "En Proceso",
    },
  ];

  return (
    <div className="p-8">
      {/* Filtros */}
      <Card className="mb-6 border-0 shadow-lg">
        <div className="p-4 text-white rounded-t-lg bg-gradient-to-r from-red-600 to-red-700">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <h3 className="font-semibold">Filtros de Búsqueda</h3>
          </div>
        </div>
        <div className="p-6 bg-white">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-red-900">
                Año
              </label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="border-red-200 focus:border-red-500 focus:ring-red-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-red-900">
                Mes
              </label>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="border-red-200 focus:border-red-500 focus:ring-red-500">
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
              <label className="block text-sm font-medium text-red-900">
                Tipo Movimiento
              </label>
              <Select
                value={selectedMovementType}
                onValueChange={setSelectedMovementType}
              >
                <SelectTrigger className="border-red-200 focus:border-red-500 focus:ring-red-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Seleccionar">Seleccionar</SelectItem>
                  <SelectItem value="Baja">Baja</SelectItem>
                  <SelectItem value="Transferencia">Transferencia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-red-900">
                Tipo Registro
              </label>
              <Select
                value={selectedRegistryType}
                onValueChange={setSelectedRegistryType}
              >
                <SelectTrigger className="border-red-200 focus:border-red-500 focus:ring-red-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Seleccionar">Seleccionar</SelectItem>
                  <SelectItem value="Institucional">Institucional</SelectItem>
                  <SelectItem value="No Institucional">
                    No Institucional
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button className="w-full text-white bg-red-600 hover:bg-red-700">
                <Plus className="w-4 h-4 mr-2" />
                Nueva Baja
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Contenido Principal */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Resoluciones de Bajas */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-lg">
            <div className="p-6 text-white rounded-t-lg bg-gradient-to-r from-red-600 to-red-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <ArrowDown className="w-6 h-6" />
                  <div>
                    <h3 className="text-xl font-bold">Resoluciones de Bajas</h3>
                    <p className="text-sm text-red-100">
                      Movimientos de baja de bienes patrimoniales
                    </p>
                  </div>
                </div>
                <Button
                  className="text-red-600 bg-white border-0 shadow-lg hover:bg-red-50"
                  size="sm"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Nueva Baja
                </Button>
              </div>
            </div>

            <div className="bg-white">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-red-100 bg-red-50">
                    <tr>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-red-900 uppercase">
                        Nro Mov
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-red-900 uppercase">
                        Fecha Mov
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-red-900 uppercase">
                        Nro Resolución
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-red-900 uppercase">
                        Fecha Resolución
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-red-900 uppercase">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {discharges.map((discharge, index) => (
                      <tr
                        key={discharge.id}
                        className={`hover:bg-red-50 transition-colors ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-semibold text-red-900">
                            {discharge.movementNumber}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">
                              {discharge.movementDate}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-700">
                            {discharge.resolutionNumber}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">
                              {discharge.resolutionDate}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-700 border-red-200 hover:bg-red-50"
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
            <h4 className="text-lg font-semibold text-center text-red-900">
              Bajas de Activos
            </h4>
          </div>
        </div>

        {/* Detalle de Baja */}
        <div className="lg:col-span-1">
          <Card className="border-0 shadow-lg">
            <div className="p-6 text-white rounded-t-lg bg-gradient-to-r from-indigo-600 to-indigo-700">
              <div className="flex items-center space-x-3">
                <FileText className="w-6 h-6" />
                <div>
                  <h3 className="text-xl font-bold">Detalle de Baja</h3>
                  <p className="text-sm text-indigo-100">
                    Información de la baja seleccionada
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white">
              <div className="text-center text-gray-500">
                <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p className="text-sm">
                  Seleccione una resolución para ver los detalles
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
