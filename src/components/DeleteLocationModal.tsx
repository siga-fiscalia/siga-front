import React from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, X, MapPin, Trash2 } from "lucide-react";

interface PhysicalLocation {
  id: number;
  tipo: string;
  subTipo: string;
  descripcion: string;
  estado: "ACTIVO" | "INACTIVO";
  fechaRegistro: string;
}

interface DeleteLocationModalProps {
  location: PhysicalLocation | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (locationId: number) => void;
}

export default function DeleteLocationModal({
  location,
  isOpen,
  onClose,
  onConfirm,
}: DeleteLocationModalProps) {
  const handleConfirm = () => {
    if (location) {
      onConfirm(location.id);
      onClose();
    }
  };

  if (!isOpen || !location) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="w-full max-w-lg overflow-hidden bg-white border border-gray-200 shadow-2xl rounded-xl max-h-[90vh] flex flex-col">
        {/* Header de Advertencia */}
        <div className="p-6 text-white border-b bg-gradient-to-r from-red-600 to-red-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white rounded-lg">
              <img
                src="/19.07 Logo02.png"
                alt="Logo Ministerio Público"
                className="object-contain w-6 h-6"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold">Confirmar Eliminación</h2>
              <p className="text-sm text-red-100">
                Ministerio Público - Sistema Integral de Gestion de Almacenes
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-red-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Contenido del Modal */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Icono de Advertencia */}
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-red-100 rounded-full">
              <AlertTriangle className="w-12 h-12 text-red-600" />
            </div>
          </div>

          {/* Mensaje de Advertencia */}
          <div className="mb-4 text-center">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              ¿Está seguro de eliminar esta ubicación física?
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Esta acción no se puede deshacer. La ubicación física será
              eliminada permanentemente del sistema.
            </p>
          </div>

          {/* Información de la Ubicación a Eliminar */}
          <div className="p-3 mb-4 border border-red-200 rounded-lg bg-red-50">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 p-2 bg-red-100 rounded-lg">
                <MapPin className="w-4 h-4 text-red-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="grid grid-cols-1 gap-1 text-xs">
                  <div>
                    <span className="font-medium text-red-900">Tipo:</span>
                    <span className="ml-2 font-mono text-red-700">
                      {location.tipo}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-red-900">Sub Tipo:</span>
                    <span className="ml-2 font-mono text-red-700">
                      {location.subTipo}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-red-900">
                      Descripción:
                    </span>
                    <span className="ml-2 text-red-700">
                      {location.descripcion}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-red-900">Estado:</span>
                    <span
                      className={`ml-2 font-semibold ${
                        location.estado === "ACTIVO"
                          ? "text-green-700"
                          : "text-red-700"
                      }`}
                    >
                      {location.estado}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-red-900">
                      Fecha Registro:
                    </span>
                    <span className="ml-2 text-red-700">
                      {location.fechaRegistro}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advertencia sobre Bienes Asignados */}
          <div className="p-3 mb-4 border border-orange-200 rounded-lg bg-orange-50">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-orange-800">
                <p className="mb-1 font-medium">¡Atención!</p>
                <p>
                  Verifique que no existan bienes patrimoniales asignados a esta
                  ubicación física antes de proceder con la eliminación. La
                  eliminación de ubicaciones con bienes asignados puede afectar
                  el control patrimonial.
                </p>
              </div>
            </div>
          </div>

          {/* Advertencia Legal */}
          <div className="p-3 mb-4 border border-yellow-200 rounded-lg bg-yellow-50">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-yellow-800">
                <p className="mb-1 font-medium">Advertencia Legal:</p>
                <p>
                  La eliminación de ubicaciones físicas debe cumplir con los
                  procedimientos establecidos por la normativa de administración
                  pública. Asegúrese de tener la autorización correspondiente.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer con Botones */}
        <div className="flex-shrink-0 px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="text-xs text-gray-500">
              <p>Acción registrada: {new Date().toLocaleString("es-PE")}</p>
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
                onClick={handleConfirm}
                className="text-white bg-red-600 shadow-lg hover:bg-red-700"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Eliminar Ubicación
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}