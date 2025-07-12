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
import EditCostCenterModal from "@/components/EditCostCenterModal";
import DeleteCostCenterModal from "@/components/DeleteCostCenterModal";
import {
  Search,
  Filter,
  Building2,
  Plus,
  Edit,
  Trash2,
  MapPin,
  Calendar,
  Users,
  Package,
  FileText,
} from "lucide-react";

interface CostCenter {
  code: number;
  description: string;
  address: string;
  district: string;
  registrationDate: string;
  status: "ACTIVO" | "INACTIVO";
  assignedAssets?: number;
  responsiblePerson?: string;
}

function StatusBadge({ status }: { status: CostCenter["status"] }) {
  const styles = {
    ACTIVO: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    INACTIVO: "bg-red-100 text-red-700 border border-red-200",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default function CostCenters() {
  const [search, setSearch] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [districtFilter, setDistrictFilter] = useState<string>("all");
  const [editingCostCenter, setEditingCostCenter] = useState<CostCenter | null>(
    null
  );
  const [deletingCostCenter, setDeletingCostCenter] =
    useState<CostCenter | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [costCentersList, setCostCentersList] = useState<CostCenter[]>([
    {
      code: 2,
      description: "SAN LUIS",
      address: "AV. SAN LUIS 123",
      district: "TRUJILLO",
      registrationDate: "2024-01-15",
      status: "ACTIVO",
      assignedAssets: 125,
      responsiblePerson: "GARCIA LOPEZ, MARIA",
    },
    {
      code: 3,
      description: "NEW YORK - AREAS ADMINISTRATIVA",
      address: "AV. NEW YORK 456",
      district: "TRUJILLO",
      registrationDate: "2024-02-10",
      status: "ACTIVO",
      assignedAssets: 89,
      responsiblePerson: "RODRIGUEZ SILVA, CARLOS",
    },
    {
      code: 4,
      description: "COVICORTI",
      address: "JR. COVICORTI 789",
      district: "TRUJILLO",
      registrationDate: "2024-03-05",
      status: "INACTIVO",
      assignedAssets: 0,
      responsiblePerson: "FERNANDEZ TORRES, ANA",
    },
    {
      code: 24,
      description: "UNIDAD DE FLAGRANCIA",
      address: "LOS GRANADOS",
      district: "TRUJILLO",
      registrationDate: "2025-05-05",
      status: "ACTIVO",
      assignedAssets: 67,
      responsiblePerson: "MORALES CASTRO, JUAN",
    },
    {
      code: 25,
      description: "SEDE ASCOPE",
      address: "AV. GRAU 234",
      district: "ASCOPE",
      registrationDate: "2024-06-20",
      status: "ACTIVO",
      assignedAssets: 45,
      responsiblePerson: "VARGAS MENDEZ, LUIS",
    },
    {
      code: 26,
      description: "ARCHIVO CENTRAL",
      address: "JR. BOLIVAR 567",
      district: "TRUJILLO",
      registrationDate: "2024-07-12",
      status: "ACTIVO",
      assignedAssets: 23,
      responsiblePerson: "GUERRERO ESCOBEDO, JHONY",
    },
  ]);

  const filteredCostCenters = costCentersList.filter((center) => {
    const matchesSearch =
      center.description.toLowerCase().includes(search.toLowerCase()) ||
      center.address.toLowerCase().includes(search.toLowerCase()) ||
      center.code.toString().includes(search);

    const matchesStatus =
      statusFilter === "all" || center.status === statusFilter;

    const matchesDistrict =
      districtFilter === "all" || center.district === districtFilter;

    return matchesSearch && matchesStatus && matchesDistrict;
  });

  const activeCount = costCentersList.filter(
    (c) => c.status === "ACTIVO"
  ).length;
  const inactiveCount = costCentersList.filter(
    (c) => c.status === "INACTIVO"
  ).length;
  const totalAssets = costCentersList.reduce(
    (sum, center) => sum + (center.assignedAssets || 0),
    0
  );

  const handleEdit = (costCenter: CostCenter) => {
    setEditingCostCenter(costCenter);
    setIsEditModalOpen(true);
  };

  const handleDelete = (costCenter: CostCenter) => {
    setDeletingCostCenter(costCenter);
    setIsDeleteModalOpen(true);
  };

  const handleSave = (updatedCostCenter: CostCenter) => {
    setCostCentersList((prev) =>
      prev.map((center) =>
        center.code === updatedCostCenter.code ? updatedCostCenter : center
      )
    );
  };

  const handleConfirmDelete = (costCenterCode: number) => {
    setCostCentersList((prev) =>
      prev.filter((center) => center.code !== costCenterCode)
    );
    console.log(`Centro de costo ${costCenterCode} eliminado exitosamente`);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setEditingCostCenter(null);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeletingCostCenter(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header Principal */}
      <div className="text-white shadow-xl bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white shadow-lg rounded-xl">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">
                  Gestión de Centro de Costo
                </h1>
                <p className="text-sm text-blue-100">
                  Administración de Centros de Costo - Ministerio Público
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                className="text-blue-600 bg-white border-0 shadow-lg hover:bg-blue-50"
                size="lg"
              >
                <Plus className="w-5 h-5 mr-2" />
                Nuevo Centro de Costo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Estadísticas de Centros de Costo */}
      <div className="px-8 py-6">
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-4">
          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900">
                  {costCentersList.length}
                </p>
                <p className="text-sm text-blue-600">Total Centros</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-900">
                  {activeCount}
                </p>
                <p className="text-sm text-emerald-600">Centros Activos</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-red-100 rounded-xl">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-red-900">
                  {inactiveCount}
                </p>
                <p className="text-sm text-red-600">Centros Inactivos</p>
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
                  {totalAssets}
                </p>
                <p className="text-sm text-purple-600">Bienes Asignados</p>
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-blue-900">
                  Buscar Centro de Costo
                </label>
                <div className="relative">
                  <Search className="absolute w-4 h-4 text-blue-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <Input
                    type="text"
                    placeholder="Código, descripción o dirección..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-blue-900">
                  Filtrar por Estado
                </label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Todos los estados" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los estados</SelectItem>
                    <SelectItem value="ACTIVO">Activo</SelectItem>
                    <SelectItem value="INACTIVO">Inactivo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-blue-900">
                  Filtrar por Distrito
                </label>
                <Select
                  value={districtFilter}
                  onValueChange={setDistrictFilter}
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Todos los distritos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los distritos</SelectItem>
                    <SelectItem value="TRUJILLO">Trujillo</SelectItem>
                    <SelectItem value="ASCOPE">Ascope</SelectItem>
                    <SelectItem value="PACASMAYO">Pacasmayo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button
                  variant="outline"
                  className="w-full text-blue-700 border-blue-200 hover:bg-blue-50"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Exportar Lista
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
                <h3 className="text-xl font-bold">Lista de Centros de Costo</h3>
                <p className="mt-1 text-sm text-blue-100">
                  Gestión completa de centros de costo del Ministerio Público
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-100">Centros encontrados</p>
                <p className="text-2xl font-bold">
                  {filteredCostCenters.length}
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
                      Código
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Descripción
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Dirección
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Distrito
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Responsable
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Bienes Asignados
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Fecha Registro
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredCostCenters.map((center, index) => (
                    <tr
                      key={center.code}
                      className={`hover:bg-blue-50 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <span className="text-sm font-semibold text-blue-600">
                              {center.code}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-gray-100 rounded-full">
                            <Building2 className="w-4 h-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">
                              {center.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-700">
                            {center.address}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {center.district}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span className="text-sm text-gray-700">
                            {center.responsiblePerson || "No asignado"}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <Package className="w-4 h-4 text-green-500" />
                          <span className="text-sm font-semibold text-green-700">
                            {center.assignedAssets || 0}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {new Date(
                              center.registrationDate
                            ).toLocaleDateString("es-PE")}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={center.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(center)}
                            className="text-blue-700 border-blue-200 hover:bg-blue-50"
                          >
                            <Edit className="w-3 h-3 mr-1" />
                            Editar
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(center)}
                            className="text-red-700 border-red-200 hover:bg-red-50"
                          >
                            <Trash2 className="w-3 h-3 mr-1" />
                            Eliminar
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredCostCenters.length === 0 && (
                    <tr>
                      <td className="px-6 py-12 text-center" colSpan={9}>
                        <div className="flex flex-col items-center space-y-3">
                          <div className="p-4 bg-blue-100 rounded-full">
                            <Search className="w-8 h-8 text-blue-400" />
                          </div>
                          <div>
                            <p className="text-lg font-medium text-gray-900">
                              No se encontraron centros de costo
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
      {editingCostCenter && (
        <EditCostCenterModal
          costCenter={editingCostCenter}
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          onSave={handleSave}
        />
      )}

      <DeleteCostCenterModal
        costCenter={deletingCostCenter}
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}