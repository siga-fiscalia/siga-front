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
  Users,
  Plus,
  Edit,
  Trash2,
  UserCheck,
  UserX,
  Building2,
  Phone,
  Mail,
  IdCard,
} from "lucide-react";

interface Personnel {
  code: string;
  fullName: string;
  dni: string;
  profession: string;
  status: "ACTIVO" | "INACTIVO";
  email?: string;
  phone?: string;
  department?: string;
}

function StatusBadge({ status }: { status: Personnel["status"] }) {
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

export default function Personnel() {
  const [search, setSearch] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const [personnelList, setPersonnelList] = useState<Personnel[]>([
    {
      code: "001",
      fullName: "PEREZ GARCIA, JUAN CARLOS",
      dni: "12345678",
      profession: "ABOGADO",
      status: "ACTIVO",
      email: "jperez@mp.gob.pe",
      phone: "987654321",
      department: "FISCALIA PENAL",
    },
    {
      code: "002",
      fullName: "RODRIGUEZ SILVA, MARIA ELENA",
      dni: "87654321",
      profession: "CONTADOR",
      status: "ACTIVO",
      email: "mrodriguez@mp.gob.pe",
      phone: "976543218",
      department: "ADMINISTRACION",
    },
    {
      code: "003",
      fullName: "GUERRERO ESCOBEDO, JHONY GERHARD",
      dni: "11223344",
      profession: "ADMINISTRADOR",
      status: "INACTIVO",
      email: "jguerrero@mp.gob.pe",
      phone: "965432187",
      department: "RECURSOS HUMANOS",
    },
    {
      code: "004",
      fullName: "LOPEZ TORRES, ANA LUCIA",
      dni: "55667788",
      profession: "PSICÓLOGO",
      status: "ACTIVO",
      email: "alopez@mp.gob.pe",
      phone: "954321876",
      department: "FISCALIA FAMILIA",
    },
  ]);

  const filteredPersonnel = personnelList.filter((person) => {
    const matchesSearch =
      person.fullName.toLowerCase().includes(search.toLowerCase()) ||
      person.dni.includes(search) ||
      person.code.includes(search);

    const matchesStatus =
      statusFilter === "all" || person.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const activeCount = personnelList.filter((p) => p.status === "ACTIVO").length;
  const inactiveCount = personnelList.filter(
    (p) => p.status === "INACTIVO"
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header Principal */}
      <div className="text-white shadow-xl bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white shadow-lg rounded-xl">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Gestión de Personal</h1>
                <p className="text-sm text-blue-100">
                  Administración de Recursos Humanos - Ministerio Público
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                className="text-blue-600 bg-white border-0 shadow-lg hover:bg-blue-50"
                size="lg"
              >
                <Plus className="w-5 h-5 mr-2" />
                Nuevo Personal
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Estadísticas del Personal */}
      <div className="px-8 py-6">
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-4">
          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900">
                  {personnelList.length}
                </p>
                <p className="text-sm text-blue-600">Total Personal</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <UserCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-900">
                  {activeCount}
                </p>
                <p className="text-sm text-emerald-600">Personal Activo</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-red-100 rounded-xl">
                <UserX className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-red-900">
                  {inactiveCount}
                </p>
                <p className="text-sm text-red-600">Personal Inactivo</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 transition-shadow bg-white border-0 shadow-lg hover:shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Building2 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-lg font-bold text-purple-900">4</p>
                <p className="text-sm text-purple-600">Departamentos</p>
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-blue-900">
                  Buscar Personal
                </label>
                <div className="relative">
                  <Search className="absolute w-4 h-4 text-blue-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <Input
                    type="text"
                    placeholder="Nombre, DNI o código..."
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

              <div className="flex items-end">
                <Button
                  variant="outline"
                  className="w-full text-blue-700 border-blue-200 hover:bg-blue-50"
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
                <h3 className="text-xl font-bold">Lista de Personal</h3>
                <p className="mt-1 text-sm text-blue-100">
                  Registro completo del personal del Ministerio Público
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-100">Personal encontrado</p>
                <p className="text-2xl font-bold">{filteredPersonnel.length}</p>
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
                      Apellidos y Nombres
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      DNI
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Profesión
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Departamento
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-blue-900 uppercase">
                      Contacto
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
                  {filteredPersonnel.map((person, index) => (
                    <tr
                      key={person.code}
                      className={`hover:bg-blue-50 transition-colors ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <span className="text-sm font-semibold text-blue-600">
                              {person.code}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-gray-100 rounded-full">
                            <Users className="w-4 h-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">
                              {person.fullName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <IdCard className="w-4 h-4 text-gray-400" />
                          <span className="font-mono text-sm text-gray-700">
                            {person.dni}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {person.profession}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <Building2 className="w-4 h-4 text-blue-400" />
                          <span className="text-sm text-gray-700">
                            {person.department || "No asignado"}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          {person.email && (
                            <div className="flex items-center space-x-2">
                              <Mail className="w-3 h-3 text-gray-400" />
                              <span className="text-xs text-gray-600">
                                {person.email}
                              </span>
                            </div>
                          )}
                          {person.phone && (
                            <div className="flex items-center space-x-2">
                              <Phone className="w-3 h-3 text-gray-400" />
                              <span className="text-xs text-gray-600">
                                {person.phone}
                              </span>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={person.status} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-blue-700 border-blue-200 hover:bg-blue-50"
                          >
                            <Edit className="w-3 h-3 mr-1" />
                            Editar
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-700 border-red-200 hover:bg-red-50"
                          >
                            <Trash2 className="w-3 h-3 mr-1" />
                            Eliminar
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredPersonnel.length === 0 && (
                    <tr>
                      <td className="px-6 py-12 text-center" colSpan={8}>
                        <div className="flex flex-col items-center space-y-3">
                          <div className="p-4 bg-blue-100 rounded-full">
                            <Search className="w-8 h-8 text-blue-400" />
                          </div>
                          <div>
                            <p className="text-lg font-medium text-gray-900">
                              No se encontró personal
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
    </div>
  );
}