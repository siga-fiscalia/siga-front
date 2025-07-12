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
import { X, Building2, MapPin, Calendar, Phone, Globe } from "lucide-react";

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

interface EditCostCenterModalProps {
  costCenter: CostCenter;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedCostCenter: CostCenter) => void;
}

export default function EditCostCenterModal({
  costCenter,
  isOpen,
  onClose,
  onSave,
}: EditCostCenterModalProps) {
  const [formData, setFormData] = useState({
    codigo: costCenter.code.toString(),
    descripcion: costCenter.description,
    direccion: costCenter.address,
    referencia: "CERCA AL PARQUE",
    pais: "PERU",
    departamento: "LA LIBERTAD",
    provincia: "TRUJILLO",
    distrito: costCenter.district,
    telefonoAnexo: "044-123456",
    fechaRegistro: costCenter.registrationDate,
    ambito: "REGIONAL",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    const updatedCostCenter: CostCenter = {
      ...costCenter,
      code: parseInt(formData.codigo),
      description: formData.descripcion,
      address: formData.direccion,
      district: formData.distrito,
      registrationDate: formData.fechaRegistro,
    };
    onSave(updatedCostCenter);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[85vh] flex overflow-hidden border border-gray-200">
        {/* Panel Izquierdo - Lista de Centros */}
        <div className="w-1/3 border-r border-gray-200 bg-gray-50">
          <div className="p-4 text-white bg-blue-600">
            <h3 className="font-semibold">Editar Centro de Costo</h3>
          </div>

          <div className="p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-white bg-blue-600">
                  <th className="px-2 py-2 text-left">Código</th>
                  <th className="px-2 py-2 text-left">Descripción</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b">
                  <td className="px-2 py-2">2</td>
                  <td className="px-2 py-2">SAN LUIS</td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-2">3</td>
                  <td className="px-2 py-2">NEW YORK - AREAS ADMINISTRATIVA</td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-2">4</td>
                  <td className="px-2 py-2">COVICORTI</td>
                </tr>
                <tr className="bg-blue-100 border-b border-blue-200">
                  <td className="px-2 py-2 font-semibold">{costCenter.code}</td>
                  <td className="px-2 py-2 font-semibold">
                    {costCenter.description}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-2 py-2">24</td>
                  <td className="px-2 py-2">UNIDAD DE FLAGRANCIA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Panel Derecho - Formulario */}
        <div className="flex flex-col flex-1">
          {/* Header */}
          <div className="flex items-center justify-between p-4 text-white border-b bg-gradient-to-r from-blue-600 to-blue-700">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white rounded-lg">
                <img
                  src="/19.07 Logo02.png"
                  alt="Logo Ministerio Público"
                  className="object-contain w-6 h-6"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold">Editar Centro de Costo</h2>
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

          {/* Formulario */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="space-y-6">
              {/* Información Básica */}
              <div className="space-y-4">
                <div className="flex items-center pb-2 space-x-2 border-b border-blue-200">
                  <Building2 className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-blue-900">
                    Información Básica
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="codigo"
                      className="font-medium text-blue-800"
                    >
                      Código
                    </Label>
                    <Input
                      id="codigo"
                      value={formData.codigo}
                      onChange={(e) =>
                        handleInputChange("codigo", e.target.value)
                      }
                      className="border-blue-200 focus:border-blue-500 focus:ring-blue-500 bg-blue-50"
                      readOnly
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="descripcion"
                      className="font-medium text-blue-800"
                    >
                      Descripción
                    </Label>
                    <Input
                      id="descripcion"
                      value={formData.descripcion}
                      onChange={(e) =>
                        handleInputChange("descripcion", e.target.value)
                      }
                      className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label
                      htmlFor="direccion"
                      className="font-medium text-blue-800"
                    >
                      Dirección
                    </Label>
                    <Input
                      id="direccion"
                      value={formData.direccion}
                      onChange={(e) =>
                        handleInputChange("direccion", e.target.value)
                      }
                      className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label
                      htmlFor="referencia"
                      className="font-medium text-blue-800"
                    >
                      Referencia
                    </Label>
                    <Input
                      id="referencia"
                      value={formData.referencia}
                      onChange={(e) =>
                        handleInputChange("referencia", e.target.value)
                      }
                      className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Ubicación Geográfica */}
              <div className="space-y-4">
                <div className="flex items-center pb-2 space-x-2 border-b border-blue-200">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-blue-900">
                    Ubicación Geográfica
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="pais" className="font-medium text-blue-800">
                      País
                    </Label>
                    <Select
                      value={formData.pais}
                      onValueChange={(value) =>
                        handleInputChange("pais", value)
                      }
                    >
                      <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PERU">PERU</SelectItem>
                        <SelectItem value="COLOMBIA">COLOMBIA</SelectItem>
                        <SelectItem value="ECUADOR">ECUADOR</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="departamento"
                      className="font-medium text-blue-800"
                    >
                      Departamento
                    </Label>
                    <Select
                      value={formData.departamento}
                      onValueChange={(value) =>
                        handleInputChange("departamento", value)
                      }
                    >
                      <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="LA LIBERTAD">LA LIBERTAD</SelectItem>
                        <SelectItem value="LIMA">LIMA</SelectItem>
                        <SelectItem value="AREQUIPA">AREQUIPA</SelectItem>
                        <SelectItem value="CUSCO">CUSCO</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="provincia"
                      className="font-medium text-blue-800"
                    >
                      Provincia
                    </Label>
                    <Select
                      value={formData.provincia}
                      onValueChange={(value) =>
                        handleInputChange("provincia", value)
                      }
                    >
                      <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="TRUJILLO">TRUJILLO</SelectItem>
                        <SelectItem value="ASCOPE">ASCOPE</SelectItem>
                        <SelectItem value="PACASMAYO">PACASMAYO</SelectItem>
                        <SelectItem value="CHEPEN">CHEPEN</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="distrito"
                      className="font-medium text-blue-800"
                    >
                      Distrito
                    </Label>
                    <Select
                      value={formData.distrito}
                      onValueChange={(value) =>
                        handleInputChange("distrito", value)
                      }
                    >
                      <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="TRUJILLO">TRUJILLO</SelectItem>
                        <SelectItem value="LA ESPERANZA">
                          LA ESPERANZA
                        </SelectItem>
                        <SelectItem value="EL PORVENIR">EL PORVENIR</SelectItem>
                        <SelectItem value="FLORENCIA DE MORA">
                          FLORENCIA DE MORA
                        </SelectItem>
                        <SelectItem value="HUANCHACO">HUANCHACO</SelectItem>
                        <SelectItem value="LAREDO">LAREDO</SelectItem>
                        <SelectItem value="MOCHE">MOCHE</SelectItem>
                        <SelectItem value="POROTO">POROTO</SelectItem>
                        <SelectItem value="SALAVERRY">SALAVERRY</SelectItem>
                        <SelectItem value="SIMBAL">SIMBAL</SelectItem>
                        <SelectItem value="VICTOR LARCO HERRERA">
                          VICTOR LARCO HERRERA
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Información Adicional */}
              <div className="space-y-4">
                <div className="flex items-center pb-2 space-x-2 border-b border-blue-200">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-blue-900">
                    Información Adicional
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="telefono-anexo"
                      className="font-medium text-blue-800"
                    >
                      Teléfono-Anexo
                    </Label>
                    <Input
                      id="telefono-anexo"
                      value={formData.telefonoAnexo}
                      onChange={(e) =>
                        handleInputChange("telefonoAnexo", e.target.value)
                      }
                      className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
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
                      type="date"
                      value={formData.fechaRegistro}
                      onChange={(e) =>
                        handleInputChange("fechaRegistro", e.target.value)
                      }
                      className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label
                      htmlFor="ambito"
                      className="font-medium text-blue-800"
                    >
                      Ámbito
                    </Label>
                    <Select
                      value={formData.ambito}
                      onValueChange={(value) =>
                        handleInputChange("ambito", value)
                      }
                    >
                      <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="REGIONAL">REGIONAL</SelectItem>
                        <SelectItem value="NACIONAL">NACIONAL</SelectItem>
                        <SelectItem value="LOCAL">LOCAL</SelectItem>
                        <SelectItem value="DISTRITAL">DISTRITAL</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex-shrink-0 px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <p>
                  Última modificación: {new Date().toLocaleDateString("es-PE")}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="text-gray-700 border-gray-300 hover:bg-gray-100"
                >
                  Cancelar
                </Button>
                <Button
                  onClick={handleSave}
                  className="text-white bg-blue-600 shadow-lg hover:bg-blue-700"
                >
                  <Building2 className="w-4 h-4 mr-2" />
                  Actualizar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}