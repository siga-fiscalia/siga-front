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
import { Filter, Plus, Eye, Users, FileText } from "lucide-react";

export default function NonInstitutionalDischargesTab() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedMonth, setSelectedMonth] = useState("Enero");
  const [selectedRegistryType, setSelectedRegistryType] =
    useState("Seleccionar");

  const discharges = [
    {
      id: 1,
      movementNumber: "MNI001",
      registryType: "Donación",
      entity: "ONG Educativa",
    },
    {
      id: 2,
      movementNumber: "MNI002",
      registryType: "Transferencia",
      entity: "Municipalidad",
    },
  ];

  return (
    <div className="p-8">
      {/* Filtros */}
      <Card className="mb-6 border-0 shadow-lg">
        <div className="p-4 text-white rounded-t-lg bg-gradient-to-r from-purple-600 to-purple-700">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <h3 className="font-semibold">Filtros de Búsqueda</h3>
          </div>
        </div>
        <div className="p-6 bg-white">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-900">
                Año
              </label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="border-purple-200 focus:border-purple-500 focus:ring-purple-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-900">
                Mes
              </label>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="border-purple-200 focus:border-purple-500 focus:ring-purple-500">
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
              <label className="block text-sm font-medium text-purple-900">
                Tipo Movimiento
              </label>
              <Select
                value={selectedRegistryType}
                onValueChange={setSelectedRegistryType}
              >
                <SelectTrigger className="border-purple-200 focus:border-purple-500 focus:ring-purple-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Seleccionar">Seleccionar</SelectItem>
                  <SelectItem value="Donación">Donación</SelectItem>
                  <SelectItem value="Transferencia">Transferencia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button className="w-full text-white bg-purple-600 hover:bg-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Nueva Devolución
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
            <div className="p-6 text-white rounded-t-lg bg-gradient-to-r from-purple-600 to-purple-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6" />
                  <div>
                    <h3 className="text-xl font-bold">Lista de Ingresos</h3>
                    <p className="text-sm text-purple-100">
                      Movimientos de altas no institucionales
                    </p>
                  </div>
                </div>
                <Button
                  className="text-purple-600 bg-white border-0 shadow-lg hover:bg-purple-50"
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
                  <thead className="border-b border-purple-100 bg-purple-50">
                    <tr>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-purple-900 uppercase">
                        Nro Mov
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-purple-900 uppercase">
                        Tipo Registro
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-purple-900 uppercase">
                        Entidad
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-purple-900 uppercase">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {discharges.map((discharge, index) => (
                      <tr
                        key={discharge.id}
                        className={`hover:bg-purple-50 transition-colors ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-semibold text-purple-900">
                            {discharge.movementNumber}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded">
                            {discharge.registryType}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-700">
                            {discharge.entity}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-purple-700 border-purple-200 hover:bg-purple-50"
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
        </div>

        {/* Detalle de Movimiento */}
        <div className="lg:col-span-1">
          <Card className="border-0 shadow-lg">
            <div className="p-6 text-white rounded-t-lg bg-gradient-to-r from-orange-600 to-orange-700">
              <div className="flex items-center space-x-3">
                <FileText className="w-6 h-6" />
                <div>
                  <h3 className="text-xl font-bold">Detalle de Movimiento</h3>
                  <p className="text-sm text-orange-100">
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
