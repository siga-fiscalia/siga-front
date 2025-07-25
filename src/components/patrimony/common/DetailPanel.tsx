import React from "react";
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";

interface DetailPanelProps {
  title: string;
  subtitle?: string;
  icon?: React.ComponentType<any>;
  colorScheme?: "blue" | "purple" | "orange" | "red" | "green";
  children?: React.ReactNode;
  emptyMessage?: string;
  isEmpty?: boolean;
}

export default function DetailPanel({
  title,
  subtitle,
  icon: IconComponent = FileText,
  colorScheme = "blue",
  children,
  emptyMessage = "Seleccione un elemento para ver los detalles",
  isEmpty = true,
}: DetailPanelProps) {
  const colorClasses = {
    blue: "bg-gradient-to-r from-blue-600 to-blue-700 text-blue-100",
    purple: "bg-gradient-to-r from-purple-600 to-purple-700 text-purple-100",
    orange: "bg-gradient-to-r from-orange-600 to-orange-700 text-orange-100",
    red: "bg-gradient-to-r from-red-600 to-red-700 text-red-100",
    green: "bg-gradient-to-r from-green-600 to-green-700 text-green-100",
  };

  return (
    <Card className="border-0 shadow-lg">
      <div
        className={`p-6 text-white rounded-t-lg ${colorClasses[colorScheme]}`}
      >
        <div className="flex items-center space-x-3">
          <IconComponent className="w-6 h-6" />
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            {subtitle && <p className="text-sm opacity-90">{subtitle}</p>}
          </div>
        </div>
      </div>

      <div className="p-6 bg-white">
        {isEmpty ? (
          <div className="text-center text-gray-500">
            <IconComponent className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-sm">{emptyMessage}</p>
          </div>
        ) : (
          children
        )}
      </div>
    </Card>
  );
}