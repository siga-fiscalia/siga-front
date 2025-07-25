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
  Shield,
  FileText,
  Calendar,
  Search,
  Package,
  BarChart3,
} from "lucide-react";

type AssetStatusType = "Bueno" | "Regular" | "Malo";

function AssetStatusBadge({ status }: { status: string }) {
  const styles: Record<AssetStatusType, string> = {
    Bueno: "bg-green-100 text-green-700 border border-green-200",
    Regular: "bg-yellow-100 text-yellow-700 border border-yellow-200",
    Malo: "bg-red-100 text-red-700 border border-red-200",
  };

  const statusKey = status as AssetStatusType;
  const statusClass =
    styles[statusKey] || "bg-gray-100 text-gray-700 border border-gray-200";

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${statusClass}`}>
      {status}
    </span>
  );
}

export default function CustodyAssetsTab() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedFamily, setSelectedFamily] = useState("Todas las familias");

  const custodyAssets = [
    {
      id: 1,
      code: "CUST001",
      barCodeInventory: "CB123456789",
      description: "Laptop Dell Inspiron 15 en custodia temporal",
      status: "Bueno",
      date: "2024-01-15",
    },
    {
      id: 2,
      code: "CUST002",
      barCodeInventory: "CB987654321",
      description: "Impresora HP LaserJet en proceso de verificación",
      status: "Regular",
      date: "2024-01-20",
    },
    {
      id: 3,
      code: "CUST003",
      barCodeInventory: "CB456789123",
      description: 'Monitor Samsung 24" en revisión técnica',
      status: "Bueno",
      date: "2024-01-25",
    },
    {
      id: 4,
      code: "CUST004",
      barCodeInventory: "CB789123456",
      description: "Escritorio de oficina pendiente de asignación",
      status: "Malo",
      date: "2024-01-30",
    },
  ];

  const statusCounts = {
    bueno: custodyAssets.filter((asset) => asset.status === "Bueno").length,
    regular: custodyAssets.filter((asset) => asset.status === "Regular").length,
    malo: custodyAssets.filter((asset) => asset.status === "Malo").length,
  };

  return (
    <div className="p-8">
      {/* Estadísticas */}
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-4">
        <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-xl">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-green-900">
                {custodyAssets.length}
              </p>
              <p className="text-sm text-green-600">Total en Custodia</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-900">
                {statusCounts.bueno}
              </p>
              <p className="text-sm text-blue-600">Estado Bueno</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-yellow-100 rounded-xl">
              <Package className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-900">
                {statusCounts.regular}
              </p>
              <p className="text-sm text-yellow-600">Estado Regular</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-red-100 rounded-xl">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-red-900">
                {statusCounts.malo}
              </p>
              <p className="text-sm text-red-600">Estado Malo</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filtros */}
      <Card className="mb-6 border-0 shadow-lg">
        <div className="p-4 text-white rounded-t-lg bg-gradient-to-r from-green-600 to-green-700">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <h3 className="font-semibold">Filtros de Búsqueda</h3>
          </div>
        </div>
        <div className="p-6 bg-white">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-green-900">
                Año
              </label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="border-green-200 focus:border-green-500 focus:ring-green-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-green-900">
                Familia
              </label>
              <Select value={selectedFamily} onValueChange={setSelectedFamily}>
                <SelectTrigger className="border-green-200 focus:border-green-500 focus:ring-green-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Todas las familias">
                    Todas las familias
                  </SelectItem>
                  <SelectItem value="Equipos de Cómputo">
                    Equipos de Cómputo
                  </SelectItem>
                  <SelectItem value="Mobiliario">Mobiliario</SelectItem>
                  <SelectItem value="Vehículos">Vehículos</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-green-900">
                Búsqueda
              </label>
              <div className="relative">
                <Search className="absolute w-4 h-4 text-green-400 transform -translate-y-1/2 left-3 top-1/2" />
                <Input
                  placeholder="Filtro: Descripción"
                  className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Lista de Bienes en Custodia */}
      <Card className="border-0 shadow-lg">
        <div className="p-6 text-white rounded-t-lg bg-gradient-to-r from-green-600 to-green-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6" />
              <div>
                <h3 className="text-xl font-bold">
                  Lista de Bienes en Custodia
                </h3>
                <p className="text-sm text-green-100">
                  4 bienes - Control de activos bajo custodia institucional
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button
                className="text-green-600 bg-white border-0 shadow-lg hover:bg-green-50"
                size="sm"
              >
                <Eye className="w-4 h-4 mr-2" />
                Asignar
              </Button>
              <Button
                className="text-green-600 bg-white border-0 shadow-lg hover:bg-green-50"
                size="sm"
              >
                <FileText className="w-4 h-4 mr-2" />
                Transferir
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-green-100 bg-green-50">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-green-900 uppercase">
                    Código
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-green-900 uppercase">
                    Cód Barra / Inv. Anterior
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-green-900 uppercase">
                    Descripción
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-green-900 uppercase">
                    Estado
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-green-900 uppercase">
                    Fecha
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-green-900 uppercase">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {custodyAssets.map((asset, index) => (
                  <tr
                    key={asset.id}
                    className={`hover:bg-green-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-green-900">
                        {asset.code}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="px-2 py-1 font-mono text-sm text-gray-700 bg-gray-100 rounded">
                        {asset.barCodeInventory}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {asset.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <AssetStatusBadge status={asset.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {asset.date}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-green-700 border-green-200 hover:bg-green-50"
                        >
                          <Eye className="w-3 h-3 mr-1" />
                          Ver
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-blue-700 border-blue-200 hover:bg-blue-50"
                        >
                          <Package className="w-3 h-3 mr-1" />
                          Asignar
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-orange-700 border-orange-200 hover:bg-orange-50"
                        >
                          <FileText className="w-3 h-3 mr-1" />
                          Transferir
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
}
