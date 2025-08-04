import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Users,
  Building2,
  ArrowDown,
  ArrowUp,
  Shield,
  Printer,
} from "lucide-react";

import InstitutionalDischargesTab from "./tabs/InstitutionalDischargesTab";
import NonInstitutionalDischargesTab from "./tabs/NonInstitutionalDischargesTab";
import ReturnsTab from "./tabs/ReturnsTab";
import DischargesTab from "./tabs/DischargesTab";
import CustodyAssetsTab from "./tabs/CustodyAssetsTab";

// Componente ReportsModal inline para evitar problemas de importación
const ReportsModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
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
    console.log("Generando reporte con datos:", reportData);
    alert("Reporte generado exitosamente");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="w-full max-w-2xl overflow-hidden bg-white border border-gray-200 shadow-2xl rounded-xl">
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
                <h2 className="text-xl font-bold">Reporte</h2>
                <p className="text-sm text-blue-100">
                  Sistema Integral de Gestion de Almacenes
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-blue-500"
            >
              ✕
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-blue-800">
                  Año
                </label>
                <select
                  className="w-full p-2 border border-blue-200 rounded-lg focus:border-blue-500"
                  value={reportData.año}
                  onChange={(e) => handleInputChange("año", e.target.value)}
                >
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-blue-800">
                  Nro Inventario
                </label>
                <select
                  className="w-full p-2 border border-blue-200 rounded-lg focus:border-blue-500"
                  value={reportData.nroInventario}
                  onChange={(e) =>
                    handleInputChange("nroInventario", e.target.value)
                  }
                >
                  <option value="INVENTARIO DE BIENES MUEBLES PATRIMONIALES">
                    INVENTARIO DE BIENES MUEBLES PATRIMONIALES
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-blue-800">
                Sede
              </label>
              <select
                className="w-full p-2 border border-blue-200 rounded-lg focus:border-blue-500"
                value={reportData.sede}
                onChange={(e) => handleInputChange("sede", e.target.value)}
              >
                <option value="NEW YORK - AREAS ADMINISTRATIVA">
                  NEW YORK - AREAS ADMINISTRATIVA
                </option>
                <option value="SEDE PRINCIPAL - LIMA">
                  SEDE PRINCIPAL - LIMA
                </option>
                <option value="SEDE NORTE - TRUJILLO">
                  SEDE NORTE - TRUJILLO
                </option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-blue-800">
                Centro de Costo
              </label>
              <input
                type="text"
                className="w-full p-2 border border-blue-200 rounded-lg focus:border-blue-500"
                value={reportData.centroCosto}
                onChange={(e) =>
                  handleInputChange("centroCosto", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-blue-800">
                Responsable
              </label>
              <input
                type="text"
                className="w-full p-2 border border-blue-200 rounded-lg focus:border-blue-500"
                value={reportData.responsable}
                onChange={(e) =>
                  handleInputChange("responsable", e.target.value)
                }
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-blue-800">
                Usuario
              </label>
              <input
                type="text"
                className="w-full p-2 border border-blue-200 rounded-lg focus:border-blue-500"
                value={reportData.usuario}
                onChange={(e) => handleInputChange("usuario", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="text-gray-700 border-gray-300 hover:bg-gray-100"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleGenerateReport}
              className="text-white bg-blue-600 hover:bg-blue-700"
            >
              Guardar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PatrimonyTabsProps {
  className?: string;
}

const PATRIMONY_TABS = [
  {
    id: "institutional-discharges",
    name: "Altas Institucionales",
    icon: Building2,
    component: InstitutionalDischargesTab,
  },
  {
    id: "non-institutional-discharges",
    name: "Altas No Institucionales",
    icon: Users,
    component: NonInstitutionalDischargesTab,
  },
  {
    id: "returns",
    name: "Devoluciones",
    icon: ArrowUp,
    component: ReturnsTab,
  },
  {
    id: "discharges",
    name: "Bajas",
    icon: ArrowDown,
    component: DischargesTab,
  },
  {
    id: "custody-assets",
    name: "Bienes en Custodia",
    icon: Shield,
    component: CustodyAssetsTab,
  },
];

export default function PatrimonyTabs({ className }: PatrimonyTabsProps) {
  const [activeTab, setActiveTab] = useState(PATRIMONY_TABS[0].id);
  const [isReportsModalOpen, setIsReportsModalOpen] = useState(false);

  const activeTabData = PATRIMONY_TABS.find((tab) => tab.id === activeTab);
  const ActiveComponent = activeTabData?.component;

  const handleOpenReportsModal = () => {
    setIsReportsModalOpen(true);
  };

  const handleCloseReportsModal = () => {
    setIsReportsModalOpen(false);
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 ${className}`}
    >
      {/* Header Principal */}
      <div className="text-white shadow-xl bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white shadow-lg rounded-xl">
                <img
                  src="/19.07 Logo02.png"
                  alt="Logo Ministerio Público"
                  className="object-contain w-8 h-8"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">
                  Gestión de Bienes Patrimoniales
                </h1>
                <p className="text-sm text-blue-100">
                  Sistema Integral de Gestion de Almacenes - Ministerio Público
                </p>
              </div>
            </div>
            {/* Icono de Impresora para Reportes */}
            <div className="flex items-center space-x-3">
              <Button
                onClick={handleOpenReportsModal}
                className="text-white transition-all duration-200 bg-white border-0 shadow-lg bg-opacity-20 hover:bg-opacity-30"
                size="lg"
              >
                <Printer className="w-5 h-5 mr-2" />
                Generar Reporte
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="px-8 py-4 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex space-x-1 overflow-x-auto">
          {PATRIMONY_TABS.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="text-sm font-medium">{tab.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1">{ActiveComponent && <ActiveComponent />}</div>

      {/* Reports Modal */}
      <ReportsModal
        isOpen={isReportsModalOpen}
        onClose={handleCloseReportsModal}
      />
    </div>
  );
}