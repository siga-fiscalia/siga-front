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
import { X, Package, Calendar, FileText, Building2, Save } from "lucide-react";

interface NewInventoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (inventoryData: any) => void;
}

export default function NewInventoryModal({
  isOpen,
  onClose,
  onSave,
}: NewInventoryModalProps) {
  const [formData, setFormData] = useState({
    numero: "",
    fecha: "18/06/2025",
    nombre: "",
    tipoInventario: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // Validaciones básicas
    if (!formData.numero || !formData.nombre || !formData.tipoInventario) {
      alert("Por favor complete todos los campos obligatorios");
      return;
    }

    const inventoryData = {
      numero: formData.numero,
      fecha: formData.fecha,
      nombre: formData.nombre,
      tipoInventario: formData.tipoInventario,
      fechaCreacion: new Date().toLocaleDateString("es-PE"),
    };

    onSave(inventoryData);
    onClose();

    // Resetear formulario
    setFormData({
      numero: "",
      fecha: "18/06/2025",
      nombre: "",
      tipoInventario: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="flex flex-col w-full max-w-2xl overflow-hidden bg-white border border-gray-200 shadow-2xl rounded-xl">
        {/* Header Profesional */}
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
                <h2 className="text-xl font-bold">Generar Inventario Físico</h2>
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
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
          {/* Sección: Datos de Inventario */}
          <div className="p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-center pb-3 mb-4 space-x-2 border-b border-blue-200">
              <Package className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-900">
                [ Datos de Inventario ]
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Número */}
              <div className="space-y-2">
                <Label htmlFor="numero" className="font-medium text-blue-800">
                  Número *
                </Label>
                <Input
                  id="numero"
                  value={formData.numero}
                  onChange={(e) => handleInputChange("numero", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ingrese número"
                  required
                />
              </div>

              {/* Fecha */}
              <div className="space-y-2">
                <Label htmlFor="fecha" className="font-medium text-blue-800">
                  Fecha
                </Label>
                <Input
                  id="fecha"
                  value={formData.fecha}
                  onChange={(e) => handleInputChange("fecha", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="DD/MM/YYYY"
                />
              </div>

              {/* Nombre - Campo completo de 2 columnas */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="nombre" className="font-medium text-blue-800">
                  Nombre *
                </Label>
                <Input
                  id="nombre"
                  value={formData.nombre}
                  onChange={(e) => handleInputChange("nombre", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ingrese nombre del inventario"
                  required
                />
              </div>

              {/* Tipo Inventario - Campo completo de 2 columnas */}
              <div className="space-y-2 md:col-span-2">
                <Label
                  htmlFor="tipo-inventario"
                  className="font-medium text-blue-800"
                >
                  Tipo Inventario *
                </Label>
                <Select
                  value={formData.tipoInventario}
                  onValueChange={(value) =>
                    handleInputChange("tipoInventario", value)
                  }
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Seleccione tipo de inventario" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PRINCIPAL">Principal</SelectItem>
                    <SelectItem value="ESPECIAL">Especial</SelectItem>
                    <SelectItem value="OTROS">Otros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Footer profesional */}
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
                <Save className="w-4 h-4 mr-2" />
                Generar Inventario
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}