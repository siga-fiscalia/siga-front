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
import {
  X,
  FileText,
  Building2,
  User,
  Calendar,
  Download,
  Printer,
  ChevronDown,
} from "lucide-react";

interface ReportsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReportsModal({ isOpen, onClose }: ReportsModalProps) {
  const [reportData, setReportData] = useState({
    año: "2024",
    nroInventario: "INVENTARIO DE BIENES MUEBLES PATRIMONIALES",
    sede: "NEW YORK - AREAS ADMINISTRATIVA",
    centroCosto: "AREA DE CONTROL PATRIMONIAL Y BIENES INCAUTADOS",
    responsable: "BUITRON ASUMAT KARLA PAOLA",
    usuario: "OBREG050 PAREDES LUIS ENRIQUE",
  });

  const handleInputChange = (field: string, value: string) => {
    setReportData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleGenerateReport = () => {
    // Aquí iría la lógica para generar el reporte
    console.log("Generando reporte con datos:", reportData);
    // Simular descarga del reporte
    alert("Reporte generado exitosamente");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="w-full max-w-2xl overflow-hidden bg-white border border-gray-200 shadow-2xl rounded-xl">
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
                <h2 className="text-xl font-bold">Reporte</h2>
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
        <div className="p-6">
          <div className="space-y-6">
            {/* Año y Tipo de Inventario */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="año" className="font-medium text-blue-800">
                  Año
                </Label>
                <Select
                  value={reportData.año}
                  onValueChange={(value) => handleInputChange("año", value)}
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue />
                    <ChevronDown className="w-4 h-4" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="nroInventario"
                  className="font-medium text-blue-800"
                >
                  Nro Inventario
                </Label>
                <Select
                  value={reportData.nroInventario}
                  onValueChange={(value) =>
                    handleInputChange("nroInventario", value)
                  }
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue />
                    <ChevronDown className="w-4 h-4" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="INVENTARIO DE BIENES MUEBLES PATRIMONIALES">
                      INVENTARIO DE BIENES MUEBLES PATRIMONIALES
                    </SelectItem>
                    <SelectItem value="INVENTARIO DE BIENES INMUEBLES">
                      INVENTARIO DE BIENES INMUEBLES
                    </SelectItem>
                    <SelectItem value="INVENTARIO DE VEHICULOS">
                      INVENTARIO DE VEHICULOS
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Sede */}
            <div className="space-y-2">
              <Label htmlFor="sede" className="font-medium text-blue-800">
                <div className="flex items-center space-x-2">
                  <Building2 className="w-4 h-4" />
                  <span>Sede</span>
                </div>
              </Label>
              <Select
                value={reportData.sede}
                onValueChange={(value) => handleInputChange("sede", value)}
              >
                <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue />
                  <ChevronDown className="w-4 h-4" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="NEW YORK - AREAS ADMINISTRATIVA">
                    NEW YORK - AREAS ADMINISTRATIVA
                  </SelectItem>
                  <SelectItem value="SEDE PRINCIPAL - LIMA">
                    SEDE PRINCIPAL - LIMA
                  </SelectItem>
                  <SelectItem value="SEDE NORTE - TRUJILLO">
                    SEDE NORTE - TRUJILLO
                  </SelectItem>
                  <SelectItem value="SEDE SUR - AREQUIPA">
                    SEDE SUR - AREQUIPA
                  </SelectItem>
                  <SelectItem value="SEDE ESTE - HUANCAYO">
                    SEDE ESTE - HUANCAYO
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Centro de Costo */}
            <div className="space-y-2">
              <Label
                htmlFor="centroCosto"
                className="font-medium text-blue-800"
              >
                Centro de Costo
              </Label>
              <Input
                id="centroCosto"
                value={reportData.centroCosto}
                onChange={(e) =>
                  handleInputChange("centroCosto", e.target.value)
                }
                className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Ingrese el centro de costo"
              />
            </div>

            {/* Responsable */}
            <div className="space-y-2">
              <Label
                htmlFor="responsable"
                className="font-medium text-blue-800"
              >
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Responsable</span>
                </div>
              </Label>
              <Input
                id="responsable"
                value={reportData.responsable}
                onChange={(e) =>
                  handleInputChange("responsable", e.target.value)
                }
                className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Nombre del responsable"
              />
            </div>

            {/* Usuario */}
            <div className="space-y-2">
              <Label htmlFor="usuario" className="font-medium text-blue-800">
                Usuario
              </Label>
              <Input
                id="usuario"
                value={reportData.usuario}
                onChange={(e) => handleInputChange("usuario", e.target.value)}
                className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Usuario del sistema"
              />
            </div>

            {/* Información del Reporte */}
            <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
              <div className="flex items-center mb-3 space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <h4 className="font-medium text-blue-900">
                  Información del Reporte
                </h4>
              </div>
              <div className="grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
                <div>
                  <span className="font-medium text-blue-800">
                    Fecha de generación:
                  </span>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700">
                      {new Date().toLocaleDateString("es-PE")}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="font-medium text-blue-800">Formato:</span>
                  <span className="ml-2 text-blue-700">PDF / Excel</span>
                </div>
                <div>
                  <span className="font-medium text-blue-800">Estado:</span>
                  <span className="px-2 py-1 ml-2 text-xs text-green-700 bg-green-100 rounded">
                    Listo para generar
                  </span>
                </div>
                <div>
                  <span className="font-medium text-blue-800">Tipo:</span>
                  <span className="ml-2 text-blue-700">
                    Inventario Patrimonial
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer con Botones */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="text-xs text-gray-500">
              <p>Sistema Integral de Gestion de Almacenes v1.0</p>
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
                onClick={handleGenerateReport}
                className="text-white bg-blue-600 shadow-lg hover:bg-blue-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Guardar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}