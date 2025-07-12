import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  X,
  Package,
  Calendar,
  Search,
  Building2,
  MapPin,
  User,
  FileText,
  Edit,
} from "lucide-react";

interface InventoryItem {
  id: number;
  codigo: string;
  codigoBarra: string;
  descripcion: string;
  sede: string;
  centroCosto: string;
  ubicacion: string;
  responsable: string;
  selected: boolean;
}

interface SelectInventoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (selectedItems: InventoryItem[]) => void;
}

export default function SelectInventoryModal({
  isOpen,
  onClose,
  onSave,
}: SelectInventoryModalProps) {
  const [formData, setFormData] = useState({
    anoInventario: "2024",
    numeroInventario: "INVENTARIO DE BIENES MUEBLES PATRIMONIO",
    fechaRegistro: "17/01/2025",
    tipoInventario: "OTROS",
    tipoRegistro: "Institucional",
    busqueda: "Descripción",
    termino: "",
    todosVerifFisica: false,
    todosVerifDigital: false,
  });

  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([
    {
      id: 1,
      codigo: "112282820002",
      codigoBarra: "P14293",
      descripcion: "DESHUMEDECEDOR PARA AMBIENTE TIPO COMERCIAL",
      sede: "ARCHIVO CENTRAL",
      centroCosto: "01-06-ARCHIVO",
      ubicacion: "2004-ARCHIVO -PISO 2",
      responsable: "GUERRERO ESCOBEDO JHONY GERHARD",
      selected: false,
    },
    {
      id: 2,
      codigo: "112221164001",
      codigoBarra: "000363",
      descripcion: "EQUIPO DE AIRE ACONDICIONADO DE PRECISION 24000 BTU",
      sede: "ASCOPE",
      centroCosto: "02-06-ASCOPE",
      ubicacion: "OFICINA 100",
      responsable: "MARIA RODRIGUEZ SILVA",
      selected: false,
    },
  ]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleItemSelect = (id: number) => {
    setInventoryItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleSave = () => {
    const selectedItems = inventoryItems.filter((item) => item.selected);
    onSave(selectedItems);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-7xl h-[90vh] flex flex-col overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="p-6 text-white border-b bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white rounded-lg">
                <img
                  src="/19.07 Logo02.png"
                  alt="Logo Ministerio Público"
                  className="object-contain w-8 h-8"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  Seleccionar Inventario Físico
                </h2>
                <p className="text-sm text-blue-100">
                  Ministerio Público - Sistema Integral de Gestion de Almacenes
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-blue-500 hover:text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Configuración del Inventario */}
          <div className="p-6 border-b border-gray-200 bg-blue-50">
            <div className="flex items-center pb-2 mb-4 space-x-2 border-b border-blue-200">
              <Package className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-900">
                Configuración del Inventario
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <Label
                  htmlFor="ano-inventario"
                  className="font-medium text-blue-800"
                >
                  Año Inventario
                </Label>
                <Select
                  value={formData.anoInventario}
                  onValueChange={(value) =>
                    handleInputChange("anoInventario", value)
                  }
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="numero-inventario"
                  className="font-medium text-blue-800"
                >
                  Número Inventario
                </Label>
                <Select
                  value={formData.numeroInventario}
                  onValueChange={(value) =>
                    handleInputChange("numeroInventario", value)
                  }
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="INVENTARIO DE BIENES MUEBLES PATRIMONIO">
                      INVENTARIO DE BIENES MUEBLES PATRIMONIO
                    </SelectItem>
                    <SelectItem value="INVENTARIO GENERAL">
                      INVENTARIO GENERAL
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="fecha-registro"
                  className="font-medium text-blue-800"
                >
                  Fecha Registro
                </Label>
                <Input
                  id="fecha-registro"
                  value={formData.fechaRegistro}
                  onChange={(e) =>
                    handleInputChange("fechaRegistro", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500 bg-blue-50"
                  readOnly
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="tipo-inventario"
                  className="font-medium text-blue-800"
                >
                  Tipo Inventario
                </Label>
                <Select
                  value={formData.tipoInventario}
                  onValueChange={(value) =>
                    handleInputChange("tipoInventario", value)
                  }
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="OTROS">OTROS</SelectItem>
                    <SelectItem value="PRINCIPAL">PRINCIPAL</SelectItem>
                    <SelectItem value="ESPECIAL">ESPECIAL</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="tipo-registro"
                  className="font-medium text-blue-800"
                >
                  Tipo Registro
                </Label>
                <Select
                  value={formData.tipoRegistro}
                  onValueChange={(value) =>
                    handleInputChange("tipoRegistro", value)
                  }
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Institucional">Institucional</SelectItem>
                    <SelectItem value="Departamental">Departamental</SelectItem>
                    <SelectItem value="Local">Local</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Listado de Items */}
          <div className="p-6">
            <div className="flex items-center pb-2 mb-4 space-x-2 border-b border-blue-200">
              <FileText className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-900">
                [ Listado de Items ]
              </h3>
            </div>

            {/* Filtros de Búsqueda */}
            <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="busqueda" className="font-medium text-blue-800">
                  Búsqueda
                </Label>
                <Select
                  value={formData.busqueda}
                  onValueChange={(value) =>
                    handleInputChange("busqueda", value)
                  }
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Descripción">Descripción</SelectItem>
                    <SelectItem value="Código">Código</SelectItem>
                    <SelectItem value="Responsable">Responsable</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="termino" className="font-medium text-blue-800">
                  Término de búsqueda
                </Label>
                <div className="relative">
                  <Search className="absolute w-4 h-4 text-blue-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <Input
                    id="termino"
                    placeholder="Ingrese término de búsqueda"
                    value={formData.termino}
                    onChange={(e) =>
                      handleInputChange("termino", e.target.value)
                    }
                    className="pl-10 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex items-end space-x-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="todos-verif-fisica"
                    checked={formData.todosVerifFisica}
                    onCheckedChange={(checked) =>
                      handleInputChange("todosVerifFisica", checked)
                    }
                    className="border-blue-400 data-[state=checked]:bg-blue-600"
                  />
                  <Label
                    htmlFor="todos-verif-fisica"
                    className="text-sm font-medium text-blue-800"
                  >
                    Todos Verific. Física
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="todos-verif-digital"
                    checked={formData.todosVerifDigital}
                    onCheckedChange={(checked) =>
                      handleInputChange("todosVerifDigital", checked)
                    }
                    className="border-blue-400 data-[state=checked]:bg-blue-600"
                  />
                  <Label
                    htmlFor="todos-verif-digital"
                    className="text-sm font-medium text-blue-800"
                  >
                    Todos Verific. Digital
                  </Label>
                </div>
              </div>
            </div>

            {/* Tabla de Items */}
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full">
                <thead className="text-white bg-blue-600">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-left">
                      Sel
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-left">
                      Código Patrimonial
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-left">
                      Código Barra
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-left">
                      Descripción
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-left">
                      Verific. Física
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-left">
                      Verific. Digital
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-left">
                      Editar
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-left">
                      Sede
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-left">
                      Centro de Costo
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-left">
                      Ubicación
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-left">
                      Responsable
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {inventoryItems.map((item, index) => (
                    <tr
                      key={item.id}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-3">
                        <Checkbox
                          checked={item.selected}
                          onCheckedChange={() => handleItemSelect(item.id)}
                          className="border-blue-400 data-[state=checked]:bg-blue-600"
                        />
                      </td>
                      <td className="px-4 py-3 font-mono text-sm font-semibold text-blue-900">
                        {item.codigo}
                      </td>
                      <td className="px-4 py-3 font-mono text-sm text-gray-700">
                        {item.codigoBarra}
                      </td>
                      <td className="max-w-xs px-4 py-3 text-sm font-medium text-gray-900">
                        <div className="truncate" title={item.descripcion}>
                          {item.descripcion}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Checkbox className="border-blue-400" />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Checkbox className="border-blue-400" />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-blue-700 border-blue-200 hover:bg-blue-50"
                        >
                          <Edit className="w-3 h-3 mr-1" />
                          Editar
                        </Button>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-2">
                          <Building2 className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-700">
                            {item.sede}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {item.centroCosto}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-700">
                            {item.ubicacion}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-700">
                            {item.responsable}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              <p>
                Items seleccionados:{" "}
                {inventoryItems.filter((item) => item.selected).length} de{" "}
                {inventoryItems.length}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={onClose}
                className="text-gray-700 border-gray-300 hover:bg-gray-100"
              >
                Salir
              </Button>
              <Button
                onClick={handleSave}
                className="text-white bg-blue-600 shadow-lg hover:bg-blue-700"
              >
                <Package className="w-4 h-4 mr-2" />
                Guardar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
