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
  Plus,
  Eye,
  Calendar,
  FileText,
  Building2,
} from "lucide-react";

export default function InstitutionalDischargesTab() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedMonth, setSelectedMonth] = useState("Enero");
  const [selectedMovementType, setSelectedMovementType] =
    useState("Seleccionar");

  const movements = [
    {
      id: 1,
      movementNumber: "MOV001",
      type: "Compra",
      orderNumber: "OC-2024-001",
      movementDate: "2024-01-15",
    },
    {
      id: 2,
      movementNumber: "MOV002",
      type: "Donación",
      orderNumber: "OC-2024-002",
      movementDate: "2024-01-20",
    },
  ];

  return (
    <div className="p-8">
      {/* Filtros */}
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
                Año
              </label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-blue-900">
                Mes
              </label>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
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
              <label className="block text-sm font-medium text-blue-900">
                Tipo Movimiento
              </label>
              <Select
                value={selectedMovementType}
                onValueChange={setSelectedMovementType}
              >
                <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Seleccionar">Seleccionar</SelectItem>
                  <SelectItem value="Compra">Compra</SelectItem>
                  <SelectItem value="Donación">Donación</SelectItem>
                  <SelectItem value="Transferencia">Transferencia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button className="w-full text-white bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Nuevo
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Contenido Principal */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Lista de Ingresos */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-lg">
            <div className="p-6 text-white rounded-t-lg bg-gradient-to-r from-blue-600 to-blue-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Building2 className="w-6 h-6" />
                  <div>
                    <h3 className="text-xl font-bold">Lista de Ingresos</h3>
                    <p className="text-sm text-blue-100">
                      Movimientos de altas institucionales
                    </p>
                  </div>
                </div>
                <Button
                  className="text-blue-600 bg-white border-0 shadow-lg hover:bg-blue-50"
                  size="sm"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Nuevo
                </Button>
              </div>
            </div>

            <div className="bg-white">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-blue-100 bg-blue-50">
                    <tr>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                        Nro Mov
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                        Tipo
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                        Nro O/C
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                        Fecha Mov
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {movements.map((movement, index) => (
                      <tr
                        key={movement.id}
                        className={`hover:bg-blue-50 transition-colors ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-semibold text-blue-900">
                            {movement.movementNumber}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded">
                            {movement.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-700">
                            {movement.orderNumber}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">
                              {movement.movementDate}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-blue-700 border-blue-200 hover:bg-blue-50"
                          >
                            <Eye className="w-3 h-3 mr-1" />
                            Ver
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
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-blue-900">
                Detalle de Movimiento
              </h4>
              <h4 className="text-lg font-semibold text-blue-900">
                Detalle de Activos
              </h4>
            </div>
          </div>
        </div>

        {/* Detalle de Movimiento */}
        <div className="lg:col-span-1">
          <Card className="border-0 shadow-lg">
            <div className="p-6 text-white rounded-t-lg bg-gradient-to-r from-purple-600 to-purple-700">
              <div className="flex items-center space-x-3">
                <FileText className="w-6 h-6" />
                <div>
                  <h3 className="text-xl font-bold">Detalle de Movimiento</h3>
                  <p className="text-sm text-purple-100">
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
