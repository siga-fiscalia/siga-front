import React from "react";
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
  Package,
  Calendar,
  Building2,
  User,
  DollarSign,
} from "lucide-react";

interface AssetData {
  item: string;
  correlativo: string;
  codigoPatrimonial: string;
  codigoBarra: string;
  descripcion: string;
  sede: string;
  centroCosto: string;
  ubicacionFisica: string;
  responsable: string;
  usuarioFinal: string;
  tipoIngreso: string;
  verificacionFisica: boolean;
  etiquetado: boolean;
  tipoPatrimonio: string;
  mueblesEnseres: string;
  numeroSerie: string;
  fechaIngreso: string;
  estado: string;
  estadoConservacion: string;
  estadoUso: string;
  marca: string;
  modelo: string;
  medidas: string;
  caracteristicas: string;
  observaciones: string;
  ctaContable: string;
}

interface ViewAssetModalProps {
  isOpen: boolean;
  onClose: () => void;
  assetData?: AssetData;
}

export default function ViewAssetModal({
  isOpen,
  onClose,
  assetData,
}: ViewAssetModalProps) {
  // Datos de ejemplo basados en la imagen
  const defaultData: AssetData = {
    item: "112282820002",
    correlativo: "00003547",
    codigoPatrimonial: "112282820002",
    codigoBarra: "P148265",
    descripcion: "DESHUMIDIFICADOR PARA AMBIENTE TIPO COMERCIAL",
    sede: "ARCHIVO CENTRAL",
    centroCosto: "01-06-ARCHIVO CENTRAL",
    ubicacionFisica: "2004-ARCHIVO CENTRAL",
    responsable: "GUERRERO ESCOBEDO, JHONY GERHARD",
    usuarioFinal: "GUERRERO ESCOBEDO, JHONY GERHARD",
    tipoIngreso: "INVENTARIO INICIAL",
    verificacionFisica: false,
    etiquetado: false,
    tipoPatrimonio: "Bienes Muebles",
    mueblesEnseres: "Muebles y Enseres",
    numeroSerie: "59E0122QJ16",
    fechaIngreso: "01/01/2019",
    estado: "Activo Fijo",
    estadoConservacion: "BUENO",
    estadoUso: "S",
    marca: "LG",
    modelo: "SM",
    medidas: "",
    caracteristicas: "DESHUMIDIFICADOR PARA AMBIENTE TIPO COMERCIAL M...",
    observaciones: "LIB-009458-24",
    ctaContable: "150020090-AIRE ACONDICIONADO Y REFRIGERACION",
  };

  const data = assetData || defaultData;

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
                <h2 className="text-xl font-bold">Datos del Activo Fijo</h2>
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

        {/* Información del activo en header */}
        <div className="p-4 border-b border-blue-100 bg-blue-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-blue-900">
                  Código: {data.codigoPatrimonial}
                </p>
                <p className="text-sm text-blue-700">{data.descripcion}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-600">Estado</p>
              <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 border border-green-200 rounded-full">
                {data.estado}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {/* Columna 1 */}
            <div className="space-y-4">
              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Item
                </Label>
                <div className="p-2 mt-1 text-sm border rounded bg-gray-50">
                  {data.item}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Cód. Patrimonial
                </Label>
                <div className="p-2 mt-1 font-mono text-sm font-semibold text-blue-900 border rounded bg-blue-50">
                  {data.codigoPatrimonial}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Código Barra/Inv Anterior
                </Label>
                <div className="p-2 mt-1 font-mono text-sm border rounded bg-gray-50">
                  {data.codigoBarra}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Descripción
                </Label>
                <div className="mt-1 p-2 bg-gray-50 rounded border text-sm min-h-[60px]">
                  {data.descripcion}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Sede
                </Label>
                <div className="p-2 mt-1 text-sm border rounded bg-gray-50">
                  {data.sede}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Centro Costo
                </Label>
                <div className="p-2 mt-1 text-sm border rounded bg-gray-50">
                  {data.centroCosto}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Ubic. Física
                </Label>
                <div className="p-2 mt-1 text-sm border rounded bg-gray-50">
                  {data.ubicacionFisica}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Responsable
                </Label>
                <div className="p-2 mt-1 text-sm border rounded bg-gray-50">
                  {data.responsable}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Usuario Final
                </Label>
                <div className="p-2 mt-1 text-sm border rounded bg-gray-50">
                  {data.usuarioFinal}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Tipo Ingreso
                </Label>
                <div className="p-2 mt-1 text-sm border rounded bg-gray-50">
                  {data.tipoIngreso}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="block mb-2 text-xs font-medium text-blue-800">
                  Verificaciones
                </Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={data.verificacionFisica}
                      disabled
                      className="border-blue-400"
                    />
                    <span className="text-xs">Verif Física/Digital</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      checked={data.etiquetado}
                      disabled
                      className="border-blue-400"
                    />
                    <span className="text-xs">Etiquetado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna 2 */}
            <div className="space-y-4">
              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Correlativo
                </Label>
                <div className="p-2 mt-1 text-sm border rounded bg-gray-50">
                  {data.correlativo}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Estado
                </Label>
                <div className="p-2 mt-1 text-sm font-medium text-green-700 border rounded bg-green-50">
                  {data.estado}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Fecha Ingreso
                </Label>
                <div className="p-2 mt-1 text-sm border rounded bg-gray-50">
                  {data.fechaIngreso}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Marca
                </Label>
                <div className="p-2 mt-1 text-sm border rounded bg-gray-50">
                  {data.marca}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Medidas
                </Label>
                <div className="p-2 mt-1 text-sm border rounded bg-gray-50">
                  {data.medidas || "No especificado"}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Características
                </Label>
                <div className="mt-1 p-2 bg-gray-50 rounded border text-sm min-h-[60px]">
                  {data.caracteristicas}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Observaciones
                </Label>
                <div className="p-2 mt-1 text-sm border rounded bg-gray-50">
                  {data.observaciones}
                </div>
              </div>
            </div>

            {/* Columna 3 */}
            <div className="space-y-4">
              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Tipo Patrimonio
                </Label>
                <div className="p-2 mt-1 text-sm border rounded bg-gray-50">
                  {data.tipoPatrimonio}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Muebles y Enseres
                </Label>
                <div className="p-2 mt-1 text-sm border rounded bg-gray-50">
                  {data.mueblesEnseres}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Nro Serie
                </Label>
                <div className="p-2 mt-1 font-mono text-sm border rounded bg-gray-50">
                  {data.numeroSerie}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Estado Conserv
                </Label>
                <div className="mt-1">
                  <Select value={data.estadoConservacion} disabled>
                    <SelectTrigger className="border-gray-300 bg-gray-50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BUENO">BUENO</SelectItem>
                      <SelectItem value="REGULAR">REGULAR</SelectItem>
                      <SelectItem value="MALO">MALO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Estado Uso
                </Label>
                <div className="mt-1">
                  <Select value={data.estadoUso} disabled>
                    <SelectTrigger className="border-gray-300 bg-gray-50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="S">S</SelectItem>
                      <SelectItem value="N">N</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Modelo
                </Label>
                <div className="p-2 mt-1 text-sm border rounded bg-gray-50">
                  {data.modelo}
                </div>
              </div>
            </div>

            {/* Columna 4 */}
            <div className="space-y-4">
              <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <Label className="text-xs font-medium text-blue-800">
                  Cta Contable
                </Label>
                <div className="p-2 mt-1 text-sm border rounded bg-gray-50">
                  {data.ctaContable}
                </div>
              </div>

              {/* Espacio para más campos si es necesario */}
              <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                <div className="text-center">
                  <Package className="w-12 h-12 mx-auto mb-2 text-blue-400" />
                  <p className="text-sm font-medium text-blue-700">
                    Activo Patrimonial
                  </p>
                  <p className="mt-1 text-xs text-blue-600">
                    Ministerio Público
                  </p>
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
                Consulta realizada: {new Date().toLocaleDateString("es-PE")}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="text-blue-700 border-blue-200 hover:bg-blue-50"
              >
                <FileText className="w-4 h-4 mr-2" />
                Imprimir
              </Button>
              <Button
                onClick={onClose}
                className="text-white bg-blue-600 shadow-lg hover:bg-blue-700"
              >
                Cerrar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
