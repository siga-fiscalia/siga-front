import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  FileText,
  Users,
  Building2,
  ArrowDown,
  ArrowUp,
  Shield,
} from "lucide-react";

import InstitutionalDischargesTab from "./tabs/InstitutionalDischargesTab";
import NonInstitutionalDischargesTab from "./tabs/NonInstitutionalDischargesTab";
import ReturnsTab from "./tabs/ReturnsTab";
import DischargesTab from "./tabs/DischargesTab";
import CustodyAssetsTab from "./tabs/CustodyAssetsTab";

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

  const activeTabData = PATRIMONY_TABS.find((tab) => tab.id === activeTab);
  const ActiveComponent = activeTabData?.component;

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
    </div>
  );
}
