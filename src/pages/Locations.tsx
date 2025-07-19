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
import NewLocationModal from "@/components/NewLocationModal";
import EditLocationModal from "@/components/EditLocationModal";
import DeleteLocationModal from "@/components/DeleteLocationModal";
import {
  Search,
  Filter,
  MapPin,
  Plus,
  Edit,
  Trash2,
  Building2,
  Calendar,
  Users,
  Package,
  FileText,
} from "lucide-react";

interface PhysicalLocation {
  id: number;
  tipo: string;
  subTipo: string;
  descripcion: string;
  estado: "ACTIVO" | "INACTIVO";
  fechaRegistro: string;
}

function StatusBadge({ estado }: { estado: PhysicalLocation["estado"] }) {
  const styles = {
    ACTIVO: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    INACTIVO: "bg-red-100 text-red-700 border border-red-200",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[estado]}`}
    >
      {estado}
    </span>
  );
}

export default function Locations() {
  const [search, setSearch] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [editingLocation, setEditingLocation] =
    useState<PhysicalLocation | null>(null);
  const [deletingLocation, setDeletingLocation] =
    useState<PhysicalLocation | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);

  const [locationsList, setLocationsList] = useState<PhysicalLocation[]>([
    {
      id: 1,
      tipo: "22",
      subTipo: "06",
      descripcion: "OF. DE COORDINACION DE DD.HH.",
      estado: "ACTIVO",
      fechaRegistro: "07/12/2023",
    },
    {
      id: 2,
      tipo: "22",
      subTipo: "07",
      descripcion: "OF. DE FISCALES ADJUNTOS 1ER PISO",
      estado: "ACTIVO",
      fechaRegistro: "07/12/2023",
    },
    {
      id: 3,
      tipo: "22",
      subTipo: "08",
      descripcion: "OF. DE FISCALES ADJUNTOS 2DO PISO",
      estado: "ACTIVO",
      fechaRegistro: "07/12/2023",
    },
    {
      id: 4,
      tipo: "12",
      subTipo: "09",
      descripcion: "DATA CENTER - INFORMATICA",
      estado: "ACTIVO",
      fechaRegistro: "07/12/2023",
    },
    {
      id: 5,
      tipo: "22",
      subTipo: "10",
      descripcion: "SALA DE REUNIONES 2DO PISO",
      estado: "ACTIVO",
      fechaRegistro: "07/12/2023",
    },
    {
      id: 6,
      tipo: "12",
      subTipo: "11",
      descripcion: "ALMACEN 2DO PISO",
      estado: "ACTIVO",
      fechaRegistro: "07/12/2023",
    },
    {
      id: 7,
      tipo: "12",
      subTipo: "12",
      descripcion: "PASADIZO 3ER PISO",
      estado: "ACTIVO",
      fechaRegistro: "14/12/2023",
    },
    {
      id: 8,
      tipo: "12",
      subTipo: "13",
      descripcion: "PASADIZO 2DO PISO",
      estado: "ACTIVO",
      fechaRegistro: "15/12/2023",
    },
    {
      id: 9,
      tipo: "12",
      subTipo: "14",
      descripcion: "OF. ASISTENTE DE COORDINACION 2DO PISO",
      estado: "ACTIVO",
      fechaRegistro: "21/12/2023",
    },
    {
      id: 10,
      tipo: "12",
      subTipo: "15",
      descripcion: "ABAJO DE LA MESA DE REUNIONES",
      estado: "ACTIVO",
      fechaRegistro: "25/06/2024",
    },
    {
      id: 11,
      tipo: "12",
      subTipo: "16",
      descripcion: "COORDINACION FISC. C/BENELIC.INCUENCIA 3ER PISO",
      estado: "INACTIVO",
      fechaRegistro: "25/06/2024",
    },
    {
      id: 12,
      tipo: "12",
      subTipo: "17",
      descripcion:
        "OFICINA ASISTENTE DE COORDINACION C/BENELIC.INCUENCIA 3ER PISO",
      estado: "ACTIVO",
      fechaRegistro: "25/06/2024",
    },
    {
      id: 13,
      tipo: "12",
      subTipo: "18",
      descripcion: "DESPACHOS FISCALES DE C/BENELIC.INCUENCIA 3ER PISO",
      estado: "ACTIVO",
      fechaRegistro: "25/06/2024",
    },
    {
      id: 14,
      tipo: "12",
      subTipo: "19",
      descripcion: "SALA DE REUNIONES 1ER PISO",
      estado: "ACTIVO",
      fechaRegistro: "03/12/2024",
    },
    {
      id: 15,
      tipo: "12",
      subTipo: "20",
      descripcion: "ASIST. DE COORDINACION C/BENELIC.INCUENCIA OF. 301",
      estado: "ACTIVO",
      fechaRegistro: "03/12/2024",
    },
    {
      id: 16,
      tipo: "12",
      subTipo: "21",
      descripcion: "SALA DE VIDEO VIGILANCIA",
      estado: "ACTIVO",
      fechaRegistro: "03/12/2024",
    },
    {
      id: 17,
      tipo: "23",
      subTipo: "00",
      descripcion: "FISCALIA DE FLAGRANCIA DE LA LIBERTAD",
      estado: "ACTIVO",
      fechaRegistro: "29/10/2024",
    },
    {
      id: 18,
      tipo: "23",
      subTipo: "01",
      descripcion: "VIGILANCIA - FISC. FLAGRANCIA",
      estado: "ACTIVO",
      fechaRegistro: "29/10/2024",
    },
    {
      id: 19,
      tipo: "23",
      subTipo: "02",
      descripcion: "PASILLO 1ER PISO - FLAGRANCIA",
      estado: "ACTIVO",
      fechaRegistro: "29/11/2024",
    },
    {
      id: 20,
      tipo: "23",
      subTipo: "03",
      descripcion: "DESPACHO FISCAL PROVINCIAL 1ER PISO",
      estado: "ACTIVO",
      fechaRegistro: "29/11/2024",
    },
  ]);

  const filteredLocations = locationsList.filter((location) => {
    const matchesSearch =
      location.descripcion.toLowerCase().includes(search.toLowerCase()) ||
      location.tipo.includes(search) ||
      location.subTipo.includes(search);

    const matchesStatus =
      statusFilter === "all" || location.estado === statusFilter;

    const matchesType = typeFilter === "all" || location.tipo === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const activeCount = locationsList.filter((l) => l.estado === "ACTIVO").length;
  const inactiveCount = locationsList.filter(
    (l) => l.estado === "INACTIVO"
  ).length;
  const uniqueTypes = Array.from(
    new Set(locationsList.map((l) => l.tipo))
  ).length;

  const handleEdit = (location: PhysicalLocation) => {
    setEditingLocation(location);
    setIsEditModalOpen(true);
  };

  const handleDelete = (location: PhysicalLocation) => {
    setDeletingLocation(location);
    setIsDeleteModalOpen(true);
  };

  const handleSave = (updatedLocation: PhysicalLocation) => {
    setLocationsList((prev) =>
      prev.map((location) =>
        location.id === updatedLocation.id ? updatedLocation : location
      )
    );
  };

  const handleConfirmDelete = (locationId: number) => {
    setLocationsList((prev) =>
      prev.filter((location) => location.id !== locationId)
    );
    console.log(`Ubicación ${locationId} eliminada exitosamente`);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setEditingLocation(null);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeletingLocation(null);
  };

  const handleOpenNewModal = () => {
    setIsNewModalOpen(true);
  };

  const handleCloseNewModal = () => {
    setIsNewModalOpen(false);
  };

  const handleSaveNewLocation = (newLocation: PhysicalLocation) => {
    setLocationsList((prev) => [...prev, newLocation]);
    console.log("Nueva ubicación agregada:", newLocation);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header Principal */}
      <div className="text-white shadow-xl bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white shadow-lg rounded-xl">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Ubicación Física</h1>
                <p className="text-sm text-blue-100">
                  Gestión de Ubicaciones Físicas - Ministerio Público
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                className="text-blue-600 bg-white border-0 shadow-lg hover:bg-blue-50"
                size="lg"
                onClick={handleOpenNewModal}
              >
                <Plus className="w-5 h-5 mr-2" />
                Nueva Ubicación
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Estadísticas de Ubicaciones */}
      <div className="px-8 py-6">
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-4">
          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900">
                  {locationsList.length}
                </p>
                <p className="text-sm text-blue-600">Total Ubicaciones</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <Building2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-900">
                  {activeCount}
                </p>
                <p className="text-sm text-emerald-600">Ubicaciones Activas</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-red-100 rounded-xl">
                <Package className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-red-900">
                  {inactiveCount}
                </p>
                <p className="text-sm text-red-600">Ubicaciones Inactivas</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-900">
                  {uniqueTypes}
                </p>
                <p className="text-sm text-purple-600">Tipos de Ubicación</p>
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
                  Buscar Ubicación
                </label>
                <div className="relative">
                  <Search className="absolute w-4 h-4 text-blue-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <Input
                    type="text"
                    placeholder="Descripción, tipo o subtipo..."
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
                  Filtrar por Tipo
                </label>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Todos los tipos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los tipos</SelectItem>
                    <SelectItem value="22">Tipo 22</SelectItem>
                    <SelectItem value="12">Tipo 12</SelectItem>
                    <SelectItem value="23">Tipo 23</SelectItem>
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
                <h3 className="text-xl font-bold">
                  Lista de Ubicaciones Físicas
                </h3>
                <p className="mt-1 text-sm text-blue-100">
                  Registro completo de ubicaciones físicas del Ministerio
                  Público
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-100">Ubicaciones encontradas</p>
                <p className="text-2xl font-bold">{filteredLocations.length}</p>
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
                      Sub Tipo
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Descripción
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Estado
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Fecha Registro
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredLocations.map((location, index) => (
                    <tr
                      key={location.id}
                      className={`hover:bg-blue-50 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <span className="text-sm font-semibold text-blue-600">
                              {location.tipo}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <span className="text-sm font-semibold text-gray-600">
                              {location.subTipo}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-purple-100 rounded-full">
                            <MapPin className="w-4 h-4 text-purple-600" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">
                              {location.descripcion}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge estado={location.estado} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {location.fechaRegistro}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(location)}
                            className="text-blue-700 border-blue-200 hover:bg-blue-50"
                          >
                            <Edit className="w-3 h-3 mr-1" />
                            Editar
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(location)}
                            className="text-red-700 border-red-200 hover:bg-red-50"
                          >
                            <Trash2 className="w-3 h-3 mr-1" />
                            Eliminar
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredLocations.length === 0 && (
                    <tr>
                      <td className="px-6 py-12 text-center" colSpan={6}>
                        <div className="flex flex-col items-center space-y-3">
                          <div className="p-4 bg-blue-100 rounded-full">
                            <Search className="w-8 h-8 text-blue-400" />
                          </div>
                          <div>
                            <p className="text-lg font-medium text-gray-900">
                              No se encontraron ubicaciones
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
      {editingLocation && (
        <EditLocationModal
          location={editingLocation}
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          onSave={handleSave}
        />
      )}

      <DeleteLocationModal
        location={deletingLocation}
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
      />

      <NewLocationModal
        isOpen={isNewModalOpen}
        onClose={handleCloseNewModal}
        onSave={handleSaveNewLocation}
      />
    </div>
  );
}