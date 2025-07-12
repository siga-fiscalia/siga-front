import React from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, X, Trash2 } from "lucide-react";
import { Good } from "@/types/good";

interface DeleteGoodModalProps {
  good: Good | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (goodCode: string) => void;
}

export default function DeleteGoodModal({
  good,
  isOpen,
  onClose,
  onConfirm,
}: DeleteGoodModalProps) {
  const handleConfirm = () => {
    if (good) {
      onConfirm(good.code);
      onClose();
    }
  };

  if (!isOpen || !good) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="w-full max-w-md overflow-hidden bg-white border border-gray-200 shadow-2xl rounded-xl">
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
        <div className="p-6">
          {/* Icono de Advertencia */}
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-red-100 rounded-full">
              <AlertTriangle className="w-12 h-12 text-red-600" />
            </div>
          </div>

          {/* Mensaje de Advertencia */}
          <div className="mb-6 text-center">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              ¿Está seguro de eliminar este bien?
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Esta acción no se puede deshacer. El bien será eliminado
              permanentemente del sistema.
            </p>
          </div>

          {/* Información del Bien a Eliminar */}
          <div className="p-4 mb-6 border border-red-200 rounded-lg bg-red-50">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 p-2 bg-red-100 rounded-lg">
                <Trash2 className="w-5 h-5 text-red-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div>
                    <span className="font-medium text-red-900">Código:</span>
                    <span className="ml-2 font-mono text-red-700">
                      {good.code}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-red-900">
                      Descripción:
                    </span>
                    <span className="ml-2 text-red-700">
                      {good.description}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-red-900">
                      Responsable:
                    </span>
                    <span className="ml-2 text-red-700">
                      {good.responsible}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-red-900">Valor:</span>
                    <span className="ml-2 font-semibold text-red-700">
                      S/ {good.value.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advertencia Legal */}
          <div className="p-3 mb-6 border border-yellow-200 rounded-lg bg-yellow-50">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-yellow-800">
                <p className="mb-1 font-medium">Advertencia Legal:</p>
                <p>
                  La eliminación de bienes patrimoniales del Estado debe cumplir
                  con los procedimientos establecidos por la normativa vigente.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer con Botones */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
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
                Eliminar Bien
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
