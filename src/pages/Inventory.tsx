import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ViewAssetModal from "@/components/ViewAssetModal";
import SelectInventoryModal from "@/components/SelectInventoryModal";
import {
  Search,
  Filter,
  FileText,
  Calendar,
  Building2,
  Package,
  Eye,
  Download,
  Plus,
  BarChart3,
} from "lucide-react";

interface InventoryItem {
  id: number;
  codigo: string;
  barra: string;
  descripcion: string;
  tipoVerif: string;
}

export default function Inventory() {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isSelectInventoryModalOpen, setIsSelectInventoryModalOpen] =
    useState(false);
  const [selectedAsset, setSelectedAsset] = useState<InventoryItem | null>(
    null
  );

  const items: InventoryItem[] = [
    {
      id: 1,
      codigo: "112230000001",
      barra: "P14254",
      descripcion: "DESHUMEDECEDOR PARA AMBIENTE TIPO COMERCIAL",
      tipoVerif: "F",
    },
    {
      id: 2,
      codigo: "112230000002",
      barra: "P14255",
      descripcion:
        "EQUIPO DE AIRE ACONDICIONADO DE PRECISION 24000 BTU - UNIDAD 1",
      tipoVerif: "F",
    },
    {
      id: 3,
      codigo: "112230000003",
      barra: "P14256",
      descripcion:
        "EQUIPO DE AIRE ACONDICIONADO DE PRECISION 24000 BTU - UNIDAD 2",
      tipoVerif: "F",
    },
    {
      id: 4,
      codigo: "112230000004",
      barra: "P14257",
      descripcion:
        "EQUIPO DE AIRE ACONDICIONADO DE PRECISION 24000 BTU - UNIDAD 3",
      tipoVerif: "F",
    },
    {
      id: 5,
      codigo: "112230000005",
      barra: "P14258",
      descripcion:
        "EQUIPO DE AIRE ACONDICIONADO DE PRECISION 24000 BTU - UNIDAD 4",
      tipoVerif: "F",
    },
  ];

  const handleViewAsset = (item: InventoryItem) => {
    setSelectedAsset(item);
    setIsViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedAsset(null);
  };

  const handleOpenSelectInventoryModal = () => {
    setIsSelectInventoryModalOpen(true);
  };

  const handleCloseSelectInventoryModal = () => {
    setIsSelectInventoryModalOpen(false);
  };

  const handleSaveSelectedItems = (selectedItems: any[]) => {
    console.log("Items seleccionados:", selectedItems);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header del Módulo de Patrimonio */}
      <div className="text-white shadow-xl bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white shadow-lg rounded-xl">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold">
                  Módulo de Patrimonio - Ejecutora: MINISTERIO PÚBLICO -
                  GERENCIA ADMINISTRATIVA DE LA LIBERTAD
                </h1>
                <p className="text-sm text-blue-100">
                  Sistema Integral de Gestion de Almacenes - Ministerio Público
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Principal */}
      <div className="px-8 py-6">
        {/* Estadísticas del Inventario */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-4">
          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900">
                  {items.length}
                </p>
                <p className="text-sm text-blue-600">Total Items</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <FileText className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-900">2024</p>
                <p className="text-sm text-emerald-600">Año Inventario</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-amber-100 rounded-xl">
                <Calendar className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-900">23/06</p>
                <p className="text-sm text-amber-600">Fecha Registro</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Building2 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-lg font-bold text-purple-900">
                  Institucional
                </p>
                <p className="text-sm text-purple-600">Tipo Registro</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Panel de Configuración del Inventario */}
        <Card className="mb-6 border-0 shadow-lg">
          <div className="p-6 text-white rounded-t-lg bg-gradient-to-r from-blue-600 to-blue-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-6 h-6" />
                <div>
                  <h3 className="text-xl font-bold">
                    Configuración del Inventario Físico
                  </h3>
                  <p className="text-sm text-blue-100">
                    Parámetros de selección y configuración
                  </p>
                </div>
              </div>
              <div className="flex space-x-3">
                <Button className="text-blue-600 bg-white border-0 shadow-lg hover:bg-blue-50">
                  <Plus className="w-4 h-4 mr-2" />
                  Registrar Inventario
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-blue-600"
                  onClick={handleOpenSelectInventoryModal}
                >
                  Seleccionar Inventario
                </Button>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-blue-900">
                  Año Inventario
                </label>
                <Select defaultValue="2024">
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Seleccione año" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-blue-900">
                  Número Inventario
                </label>
                <Select defaultValue="1">
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Seleccione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">
                      INVENTARIO DE BIENES MUEBLES PATRIMONIO
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-blue-900">
                  Fecha Registro
                </label>
                <Input
                  type="date"
                  value="2025-06-23"
                  readOnly
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500 bg-blue-50"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-blue-900">
                  Tipo Registro
                </label>
                <Select defaultValue="Institucional">
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Institucional">Institucional</SelectItem>
                  </SelectContent>
                </Select>
              </div>
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
            <div className="flex items-center space-x-4">
              <div className="w-60">
                <label className="block mb-2 text-sm font-medium text-blue-900">
                  Filtrar por:
                </label>
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Descripción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="codigo">Código Patrimonial</SelectItem>
                    <SelectItem value="descripcion">Descripción</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium text-blue-900">
                  Valor a buscar
                </label>
                <div className="relative">
                  <Search className="absolute w-4 h-4 text-blue-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <Input
                    placeholder="Ingrese valor a buscar (ej: 01)"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex items-end">
                <Button
                  variant="outline"
                  className="text-blue-700 border-blue-200 hover:bg-blue-50"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Tabla Principal */}
        <Card className="overflow-hidden border-0 shadow-xl">
          <div className="p-6 text-white bg-gradient-to-r from-blue-600 to-blue-700">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">
                  Listado del Inventario Físico
                </h3>
                <p className="mt-1 text-sm text-blue-100">
                  Control detallado de bienes patrimoniales institucionales
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-100">Total de registros</p>
                <p className="text-2xl font-bold">{items.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-blue-100 bg-blue-50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Item
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Código Patrimonial
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Código Barra/Inv Anterior
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Descripción
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Tipo Verif
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {items.map((item, index) => (
                    <tr
                      key={item.id}
                      className={`hover:bg-blue-50 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <span className="text-sm font-semibold text-blue-600">
                              {item.id}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-mono text-sm font-semibold text-blue-900">
                          {item.codigo}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="px-2 py-1 font-mono text-sm text-gray-700 bg-gray-100 rounded">
                          {item.barra}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="max-w-md text-sm font-medium text-gray-900">
                          {item.descripcion}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 border border-green-200 rounded-full">
                          {item.tipoVerif}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-blue-700 border-blue-200 hover:bg-blue-50"
                          onClick={() => handleViewAsset(item)}
                        >
                          <Eye className="w-3 h-3 mr-2" />
                          Ver Activo Fijo
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

      {/* Modales */}
      <ViewAssetModal isOpen={isViewModalOpen} onClose={handleCloseViewModal} />

      <SelectInventoryModal
        isOpen={isSelectInventoryModalOpen}
        onClose={handleCloseSelectInventoryModal}
        onSave={handleSaveSelectedItems}
      />
    </div>
  );
}
