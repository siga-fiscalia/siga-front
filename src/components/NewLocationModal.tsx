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
import { Textarea } from "@/components/ui/textarea";
import { X, MapPin, Building2, Calendar, Settings } from "lucide-react";

interface PhysicalLocation {
  id: number;
  tipo: string;
  subTipo: string;
  descripcion: string;
  estado: "ACTIVO" | "INACTIVO";
  fechaRegistro: string;
}

interface NewLocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newLocation: PhysicalLocation) => void;
}

export default function NewLocationModal({
  isOpen,
  onClose,
  onSave,
}: NewLocationModalProps) {
  const [formData, setFormData] = useState({
    tipo: "",
    subTipo: "",
    descripcion: "",
    estado: "ACTIVO" as "ACTIVO" | "INACTIVO",
    observaciones: "",
    responsable: "",
    capacidad: "",
    piso: "",
    edificio: "",
    fechaRegistro: new Date().toISOString().split("T")[0],
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // Validaciones básicas
    if (!formData.tipo || !formData.subTipo || !formData.descripcion) {
      alert(
        "Por favor complete los campos obligatorios: Tipo, Sub Tipo y Descripción"
      );
      return;
    }

    const newLocation: PhysicalLocation = {
      id: Date.now(), // ID temporal para demo
      tipo: formData.tipo,
      subTipo: formData.subTipo,
      descripcion: formData.descripcion,
      estado: formData.estado,
      fechaRegistro: formData.fechaRegistro,
    };

    onSave(newLocation);
    onClose();

    // Resetear formulario
    setFormData({
      tipo: "",
      subTipo: "",
      descripcion: "",
      estado: "ACTIVO",
      observaciones: "",
      responsable: "",
      capacidad: "",
      piso: "",
      edificio: "",
      fechaRegistro: new Date().toISOString().split("T")[0],
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden border border-gray-200">
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
              <h2 className="text-lg font-bold">Nueva Ubicación Física</h2>
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
                <MapPin className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-900">
                  Información Básica
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="tipo" className="font-medium text-blue-800">
                    Tipo *
                  </Label>
                  <Select
                    value={formData.tipo}
                    onValueChange={(value) => handleInputChange("tipo", value)}
                  >
                    <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Seleccione tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12">
                        12 - Áreas Administrativas
                      </SelectItem>
                      <SelectItem value="22">22 - Oficinas Fiscales</SelectItem>
                      <SelectItem value="23">
                        23 - Fiscalía Especializada
                      </SelectItem>
                      <SelectItem value="24">
                        24 - Servicios Generales
                      </SelectItem>
                      <SelectItem value="25">25 - Almacenes</SelectItem>
                      <SelectItem value="26">26 - Archivo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="subTipo"
                    className="font-medium text-blue-800"
                  >
                    Sub Tipo *
                  </Label>
                  <Input
                    id="subTipo"
                    value={formData.subTipo}
                    onChange={(e) =>
                      handleInputChange("subTipo", e.target.value)
                    }
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Ingrese sub tipo (ej: 01, 02, 03...)"
                    required
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label
                    htmlFor="descripcion"
                    className="font-medium text-blue-800"
                  >
                    Descripción *
                  </Label>
                  <Textarea
                    id="descripcion"
                    value={formData.descripcion}
                    onChange={(e) =>
                      handleInputChange("descripcion", e.target.value)
                    }
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Ingrese descripción detallada de la ubicación"
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="estado" className="font-medium text-blue-800">
                    Estado
                  </Label>
                  <Select
                    value={formData.estado}
                    onValueChange={(value) =>
                      handleInputChange(
                        "estado",
                        value as "ACTIVO" | "INACTIVO"
                      )
                    }
                  >
                    <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ACTIVO">Activo</SelectItem>
                      <SelectItem value="INACTIVO">Inactivo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="fechaRegistro"
                    className="font-medium text-blue-800"
                  >
                    Fecha Registro
                  </Label>
                  <Input
                    id="fechaRegistro"
                    type="date"
                    value={formData.fechaRegistro}
                    onChange={(e) =>
                      handleInputChange("fechaRegistro", e.target.value)
                    }
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Información de Ubicación */}
            <div className="space-y-4">
              <div className="flex items-center pb-2 space-x-2 border-b border-blue-200">
                <Building2 className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-900">
                  Detalles de Ubicación
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label
                    htmlFor="edificio"
                    className="font-medium text-blue-800"
                  >
                    Edificio
                  </Label>
                  <Input
                    id="edificio"
                    value={formData.edificio}
                    onChange={(e) =>
                      handleInputChange("edificio", e.target.value)
                    }
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Ej: Edificio Principal"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="piso" className="font-medium text-blue-800">
                    Piso
                  </Label>
                  <Select
                    value={formData.piso}
                    onValueChange={(value) => handleInputChange("piso", value)}
                  >
                    <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Seleccione piso" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SOTANO">Sótano</SelectItem>
                      <SelectItem value="1">1er Piso</SelectItem>
                      <SelectItem value="2">2do Piso</SelectItem>
                      <SelectItem value="3">3er Piso</SelectItem>
                      <SelectItem value="4">4to Piso</SelectItem>
                      <SelectItem value="5">5to Piso</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="capacidad"
                    className="font-medium text-blue-800"
                  >
                    Capacidad (personas)
                  </Label>
                  <Input
                    id="capacidad"
                    type="number"
                    value={formData.capacidad}
                    onChange={(e) =>
                      handleInputChange("capacidad", e.target.value)
                    }
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Ej: 10"
                  />
                </div>
              </div>
            </div>

            {/* Información Adicional */}
            <div className="space-y-4">
              <div className="flex items-center pb-2 space-x-2 border-b border-blue-200">
                <Settings className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-900">
                  Información Adicional
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    htmlFor="responsable"
                    className="font-medium text-blue-800"
                  >
                    Responsable
                  </Label>
                  <Input
                    id="responsable"
                    value={formData.responsable}
                    onChange={(e) =>
                      handleInputChange("responsable", e.target.value)
                    }
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Nombre del responsable"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label
                    htmlFor="observaciones"
                    className="font-medium text-blue-800"
                  >
                    Observaciones
                  </Label>
                  <Textarea
                    id="observaciones"
                    value={formData.observaciones}
                    onChange={(e) =>
                      handleInputChange("observaciones", e.target.value)
                    }
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Observaciones adicionales sobre la ubicación"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              <p>Fecha de registro: {new Date().toLocaleDateString("es-PE")}</p>
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
                <MapPin className="w-4 h-4 mr-2" />
                Crear Ubicación
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}