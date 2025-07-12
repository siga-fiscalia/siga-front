import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EditGoodModal from "@/components/EditGoodModal";
import DeleteGoodModal from "@/components/DeleteGoodModal";
import { Good } from "@/types/good";
import {
  Search,
  Plus,
  Package,
  Filter,
  FileText,
  Edit,
  Trash2,
  Building2,
  User,
} from "lucide-react";

function getStatusBadge(status: Good["status"]) {
  const styles = {
    Bueno: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    Regular: "bg-amber-100 text-amber-700 border border-amber-200",
    Malo: "bg-red-100 text-red-700 border border-red-200",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default function Goods() {
  const [search, setSearch] = useState<string>("");
  const [editingGood, setEditingGood] = useState<Good | null>(null);
  const [deletingGood, setDeletingGood] = useState<Good | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [goodsList, setGoodsList] = useState<Good[]>([
    {
      code: "112282820002",
      description: "Laptop Dell Inspiron 15",
      brandModel: "Dell Inspiron 15 3000",
      serial: "DL123456789",
      status: "Bueno",
      responsible: "Juan Pérez",
      center: "Sede Principal",
      value: 2500,
    },
    {
      code: "112282820003",
      description: "Impresora HP LaserJet",
      brandModel: "HP LaserJet Pro M404n",
      serial: "HP987654321",
      status: "Regular",
      responsible: "María García",
      center: "Sede Norte",
      value: 800,
    },
  ]);

  const filteredGoods = goodsList.filter((good) => good.code.includes(search));

  const handleEdit = (good: Good) => {
    setEditingGood(good);
    setIsEditModalOpen(true);
  };

  const handleDelete = (good: Good) => {
    setDeletingGood(good);
    setIsDeleteModalOpen(true);
  };

  const handleSave = (updatedGood: Good) => {
    setGoodsList((prev) =>
      prev.map((good) => (good.code === updatedGood.code ? updatedGood : good))
    );
  };

  const handleConfirmDelete = (goodCode: string) => {
    setGoodsList((prev) => prev.filter((good) => good.code !== goodCode));
    console.log(`Bien ${goodCode} eliminado exitosamente`);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setEditingGood(null);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeletingGood(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header Principal */}
      <div className="text-white shadow-xl bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white shadow-lg rounded-xl">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">
                  Gestión de Bienes Patrimoniales
                </h1>
                <p className="text-sm text-blue-100">
                  Sistema Integral de Gestion de Almacenes - Ministerio Público
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                className="text-blue-600 bg-white border-0 shadow-lg hover:bg-blue-50"
                size="lg"
              >
                <Plus className="w-5 h-5 mr-2" />
                Nuevo Bien
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Estadísticas Rápidas */}
      <div className="px-8 py-6">
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-4">
          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900">
                  {goodsList.length}
                </p>
                <p className="text-sm text-blue-600">Total de Bienes</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <FileText className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-900">
                  {goodsList.filter((g) => g.status === "Bueno").length}
                </p>
                <p className="text-sm text-emerald-600">En Buen Estado</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-amber-100 rounded-xl">
                <Building2 className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-900">
                  {goodsList.filter((g) => g.status === "Regular").length}
                </p>
                <p className="text-sm text-amber-600">Estado Regular</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900">
                  S/{" "}
                  {goodsList
                    .reduce((sum, good) => sum + good.value, 0)
                    .toLocaleString()}
                </p>
                <p className="text-sm text-blue-600">Valor Total</p>
              </div>
            </div>
          </Card>
        </div>

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
              <div className="flex-1">
                <label className="block mb-2 text-sm font-medium text-blue-900">
                  Buscar por Código Patrimonial
                </label>
                <div className="relative">
                  <Search className="absolute w-4 h-4 text-blue-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <Input
                    type="text"
                    placeholder="Ingrese código patrimonial..."
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
                  <Filter className="w-4 h-4 mr-2" />
                  Filtros Avanzados
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
                  Lista de Bienes Patrimoniales
                </h3>
                <p className="mt-1 text-sm text-blue-100">
                  Gestión completa del inventario institucional
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-100">Total de registros</p>
                <p className="text-2xl font-bold">{filteredGoods.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-blue-100 bg-blue-50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Código Patrimonial
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Descripción
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Marca/Modelo
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Serie
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Responsable
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Centro
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Valor
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredGoods.map((good, index) => (
                    <tr
                      key={good.code}
                      className={`hover:bg-blue-50 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-mono text-sm font-semibold text-blue-900">
                          {good.code}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {good.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-700">
                          {good.brandModel}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-mono text-sm text-gray-600">
                          {good.serial}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(good.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <div className="p-1 bg-blue-100 rounded-full">
                            <User className="w-3 h-3 text-blue-600" />
                          </div>
                          <span className="text-sm text-gray-900">
                            {good.responsible}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <div className="p-1 bg-gray-100 rounded-full">
                            <Building2 className="w-3 h-3 text-gray-600" />
                          </div>
                          <span className="text-sm text-gray-700">
                            {good.center}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-semibold text-green-700">
                          S/ {good.value.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(good)}
                            className="text-blue-700 border-blue-200 hover:bg-blue-50"
                          >
                            <Edit className="w-3 h-3 mr-1" />
                            Editar
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(good)}
                            className="text-red-700 border-red-200 hover:bg-red-50"
                          >
                            <Trash2 className="w-3 h-3 mr-1" />
                            Eliminar
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredGoods.length === 0 && (
                    <tr>
                      <td className="px-6 py-12 text-center" colSpan={9}>
                        <div className="flex flex-col items-center space-y-3">
                          <div className="p-4 bg-blue-100 rounded-full">
                            <Search className="w-8 h-8 text-blue-400" />
                          </div>
                          <div>
                            <p className="text-lg font-medium text-gray-900">
                              No se encontraron bienes
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

      {/* Modales */}
      {editingGood && (
        <EditGoodModal
          good={editingGood}
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          onSave={handleSave}
        />
      )}

      <DeleteGoodModal
        good={deletingGood}
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
