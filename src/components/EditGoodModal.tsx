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
import { Checkbox } from "@/components/ui/checkbox";
import {
  X,
  FileText,
  Building2,
  User,
  Package,
  Calendar,
  DollarSign,
} from "lucide-react";
import { Good } from "@/types/good";

interface EditGoodModalProps {
  good: Good;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedGood: Good) => void;
}

export default function EditGoodModal({
  good,
  isOpen,
  onClose,
  onSave,
}: EditGoodModalProps) {
  const [formData, setFormData] = useState({
    item: "MPO01234",
    correlativo: "00003547",
    codigoPatrimonial: good.code,
    codigoBarra: good.code,
    descripcion: good.description,
    sede: "SEDE PRINCIPAL",
    centroCosto: "01-06-PRINCIPAL",
    ubicacionFisica: "Oficina 201",
    responsable: good.responsible,
    usuarioFinal: good.responsible,
    numeroSerie: good.serial,
    estadoConservacion:
      good.status === "Bueno" ? "Bueno" : good.status === "Regular" ? "S" : "M",
    estadoUso: "S",
    marca: "Dell",
    modelo: "Inspiron 15 3000",
    medidas: "35x25x2 cm",
    caracteristicas: "Laptop para trabajo de oficina",
    observaciones: "Equipo en buen estado",
    paisProcedencia: "PERU",
    tipoPatrimonio: "Bienes Muebles",
    sbn: false,
    activo: false,
    depreciable: true,
    salida: false,
    inst: true,
    tipoIngreso: "COMPRA",
    fechaIngreso: "2024-01-15",
    verificacionFisicaDigital: true,
    etiquetado: false,
    ingresoDelBienPor: "OIC",
    fecha: "15/03/2008",
    nea: "",
    proveedor: "DELL PERU SAC",
    valorCompra: good.value.toString(),
    garantia: false,
    fechaGarantia: "09/09/2000",
    numeroContrato: "CON-2024-001",
    alia: "Recibo - Comprobante de Salida (PECOSA)",
    tipoDoc: "",
    numeroDoc: "005600",
    fechaDoc: "15/03/2008",
    almacen: "ALMACEN CENTRAL",
    ctaContable: "",
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    const updatedGood: Good = {
      ...good,
      description: formData.descripcion,
      brandModel: `${formData.marca} ${formData.modelo}`,
      serial: formData.numeroSerie,
      status:
        formData.estadoConservacion === "Bueno"
          ? "Bueno"
          : formData.estadoConservacion === "S"
          ? "Regular"
          : "Malo",
      responsible: formData.responsable,
      value: parseInt(formData.valorCompra) || good.value,
    };
    onSave(updatedGood);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden border border-gray-200">
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
                <h2 className="text-xl font-bold">Editar Activo Fijo</h2>
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

        {/* Información del bien en header */}
        <div className="p-4 border-b border-blue-100 bg-blue-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-blue-900">
                  Código: {good.code}
                </p>
                <p className="text-sm text-blue-700">{good.description}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-600">Estado Actual</p>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  good.status === "Bueno"
                    ? "bg-green-100 text-green-700"
                    : good.status === "Regular"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {good.status}
              </span>
            </div>
          </div>
        </div>

        {/* Content con secciones organizadas */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Sección 1: Información Básica */}
          <div className="mb-8">
            <div className="flex items-center pb-2 mb-4 space-x-2 border-b border-blue-200">
              <FileText className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-900">
                Información Básica
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="item" className="font-medium text-blue-800">
                  Item
                </Label>
                <Input
                  id="item"
                  value={formData.item}
                  onChange={(e) => handleInputChange("item", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="correlativo"
                  className="font-medium text-blue-800"
                >
                  Correlativo
                </Label>
                <Input
                  id="correlativo"
                  value={formData.correlativo}
                  onChange={(e) =>
                    handleInputChange("correlativo", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="codigo-patrimonial"
                  className="font-medium text-blue-800"
                >
                  Código Patrimonial
                </Label>
                <Input
                  id="codigo-patrimonial"
                  value={formData.codigoPatrimonial}
                  onChange={(e) =>
                    handleInputChange("codigoPatrimonial", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500 bg-blue-50"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="codigo-barra"
                  className="font-medium text-blue-800"
                >
                  Código Barra
                </Label>
                <Input
                  id="codigo-barra"
                  value={formData.codigoBarra}
                  onChange={(e) =>
                    handleInputChange("codigoBarra", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label
                  htmlFor="descripcion"
                  className="font-medium text-blue-800"
                >
                  Descripción
                </Label>
                <Textarea
                  id="descripcion"
                  value={formData.descripcion}
                  onChange={(e) =>
                    handleInputChange("descripcion", e.target.value)
                  }
                  rows={3}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Sección 2: Ubicación y Responsabilidad */}
          <div className="mb-8">
            <div className="flex items-center pb-2 mb-4 space-x-2 border-b border-blue-200">
              <Building2 className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-900">
                Ubicación y Responsabilidad
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="sede" className="font-medium text-blue-800">
                  Sede
                </Label>
                <Input
                  id="sede"
                  value={formData.sede}
                  onChange={(e) => handleInputChange("sede", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="centro-costo"
                  className="font-medium text-blue-800"
                >
                  Centro de Costo
                </Label>
                <Input
                  id="centro-costo"
                  value={formData.centroCosto}
                  onChange={(e) =>
                    handleInputChange("centroCosto", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="ubicacion-fisica"
                  className="font-medium text-blue-800"
                >
                  Ubicación Física
                </Label>
                <Input
                  id="ubicacion-fisica"
                  value={formData.ubicacionFisica}
                  onChange={(e) =>
                    handleInputChange("ubicacionFisica", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
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
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="usuario-final"
                  className="font-medium text-blue-800"
                >
                  Usuario Final
                </Label>
                <Input
                  id="usuario-final"
                  value={formData.usuarioFinal}
                  onChange={(e) =>
                    handleInputChange("usuarioFinal", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Sección 3: Características Técnicas */}
          <div className="mb-8">
            <div className="flex items-center pb-2 mb-4 space-x-2 border-b border-blue-200">
              <Package className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-900">
                Características Técnicas
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="marca" className="font-medium text-blue-800">
                  Marca
                </Label>
                <Input
                  id="marca"
                  value={formData.marca}
                  onChange={(e) => handleInputChange("marca", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="modelo" className="font-medium text-blue-800">
                  Modelo
                </Label>
                <Input
                  id="modelo"
                  value={formData.modelo}
                  onChange={(e) => handleInputChange("modelo", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="numero-serie"
                  className="font-medium text-blue-800"
                >
                  N° Serie
                </Label>
                <Input
                  id="numero-serie"
                  value={formData.numeroSerie}
                  onChange={(e) =>
                    handleInputChange("numeroSerie", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="estado-conservacion"
                  className="font-medium text-blue-800"
                >
                  Estado
                </Label>
                <Select
                  value={formData.estadoConservacion}
                  onValueChange={(value) =>
                    handleInputChange("estadoConservacion", value)
                  }
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bueno">Bueno</SelectItem>
                    <SelectItem value="S">Regular</SelectItem>
                    <SelectItem value="M">Malo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label
                  htmlFor="caracteristicas"
                  className="font-medium text-blue-800"
                >
                  Características
                </Label>
                <Textarea
                  id="caracteristicas"
                  value={formData.caracteristicas}
                  onChange={(e) =>
                    handleInputChange("caracteristicas", e.target.value)
                  }
                  rows={2}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
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
                  rows={2}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Sección 4: Información Financiera */}
          <div className="mb-8">
            <div className="flex items-center pb-2 mb-4 space-x-2 border-b border-blue-200">
              <DollarSign className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-900">
                Información Financiera y Adquisición
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <Label
                  htmlFor="valor-compra"
                  className="font-medium text-blue-800"
                >
                  Valor de Compra
                </Label>
                <div className="relative">
                  <span className="absolute font-medium text-blue-600 transform -translate-y-1/2 left-3 top-1/2">
                    S/
                  </span>
                  <Input
                    id="valor-compra"
                    value={formData.valorCompra}
                    onChange={(e) =>
                      handleInputChange("valorCompra", e.target.value)
                    }
                    className="pl-10 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="proveedor"
                  className="font-medium text-blue-800"
                >
                  Proveedor
                </Label>
                <Input
                  id="proveedor"
                  value={formData.proveedor}
                  onChange={(e) =>
                    handleInputChange("proveedor", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="fecha-ingreso"
                  className="font-medium text-blue-800"
                >
                  Fecha de Ingreso
                </Label>
                <Input
                  id="fecha-ingreso"
                  type="date"
                  value={formData.fechaIngreso}
                  onChange={(e) =>
                    handleInputChange("fechaIngreso", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Estados y checkboxes con mejor diseño */}
            <div className="p-4 mt-6 border border-blue-200 rounded-lg bg-blue-50">
              <h4 className="mb-3 font-medium text-blue-900">
                Estados del Activo
              </h4>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="sbn"
                    checked={formData.sbn}
                    onCheckedChange={(checked) =>
                      handleInputChange("sbn", checked)
                    }
                    className="border-blue-400 data-[state=checked]:bg-blue-600"
                  />
                  <Label htmlFor="sbn" className="font-medium text-blue-800">
                    SBN
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="activo"
                    checked={formData.activo}
                    onCheckedChange={(checked) =>
                      handleInputChange("activo", checked)
                    }
                    className="border-blue-400 data-[state=checked]:bg-blue-600"
                  />
                  <Label htmlFor="activo" className="font-medium text-blue-800">
                    Activo
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="depreciable"
                    checked={formData.depreciable}
                    onCheckedChange={(checked) =>
                      handleInputChange("depreciable", checked)
                    }
                    className="border-blue-400 data-[state=checked]:bg-blue-600"
                  />
                  <Label
                    htmlFor="depreciable"
                    className="font-medium text-blue-800"
                  >
                    Depreciable
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="verif-fisica"
                    checked={formData.verificacionFisicaDigital}
                    onCheckedChange={(checked) =>
                      handleInputChange("verificacionFisicaDigital", checked)
                    }
                    className="border-blue-400 data-[state=checked]:bg-blue-600"
                  />
                  <Label
                    htmlFor="verif-fisica"
                    className="font-medium text-blue-800"
                  >
                    Verif. Física
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="etiquetado"
                    checked={formData.etiquetado}
                    onCheckedChange={(checked) =>
                      handleInputChange("etiquetado", checked)
                    }
                    className="border-blue-400 data-[state=checked]:bg-blue-600"
                  />
                  <Label
                    htmlFor="etiquetado"
                    className="font-medium text-blue-800"
                  >
                    Etiquetado
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer profesional */}
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
                <FileText className="w-4 h-4 mr-2" />
                Guardar Cambios
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
