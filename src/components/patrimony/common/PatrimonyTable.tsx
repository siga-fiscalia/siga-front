import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
  className?: string;
}

interface PatrimonyTableProps {
  title: string;
  subtitle?: string;
  icon: React.ComponentType<any>;
  columns: Column[];
  data: any[];
  colorScheme?: "blue" | "purple" | "orange" | "red" | "green";
  headerActions?: {
    label: string;
    icon: React.ComponentType<any>;
    onClick: () => void;
    variant?: "primary" | "secondary";
  }[];
  emptyMessage?: string;
  loading?: boolean;
}

export default function PatrimonyTable({
  title,
  subtitle,
  icon: IconComponent,
  columns,
  data,
  colorScheme = "blue",
  headerActions = [],
  emptyMessage = "No hay datos disponibles",
  loading = false,
}: PatrimonyTableProps) {
  const colorClasses = {
    blue: {
      bg: "bg-gradient-to-r from-blue-600 to-blue-700",
      text: "text-blue-100",
      headerBg: "bg-blue-50",
      headerText: "text-blue-900",
      hover: "hover:bg-blue-50",
    },
    purple: {
      bg: "bg-gradient-to-r from-purple-600 to-purple-700",
      text: "text-purple-100",
      headerBg: "bg-purple-50",
      headerText: "text-purple-900",
      hover: "hover:bg-purple-50",
    },
    orange: {
      bg: "bg-gradient-to-r from-orange-600 to-orange-700",
      text: "text-orange-100",
      headerBg: "bg-orange-50",
      headerText: "text-orange-900",
      hover: "hover:bg-orange-50",
    },
    red: {
      bg: "bg-gradient-to-r from-red-600 to-red-700",
      text: "text-red-100",
      headerBg: "bg-red-50",
      headerText: "text-red-900",
      hover: "hover:bg-red-50",
    },
    green: {
      bg: "bg-gradient-to-r from-green-600 to-green-700",
      text: "text-green-100",
      headerBg: "bg-green-50",
      headerText: "text-green-900",
      hover: "hover:bg-green-50",
    },
  };

  const colors = colorClasses[colorScheme];

  if (loading) {
    return (
      <Card className="border-0 shadow-lg">
        <div className={`p-6 text-white rounded-t-lg ${colors.bg}`}>
          <div className="flex items-center space-x-3">
            <IconComponent className="w-6 h-6" />
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              {subtitle && (
                <p className={`text-sm ${colors.text}`}>{subtitle}</p>
              )}
            </div>
          </div>
        </div>
        <div className="p-12 bg-white">
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-4 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
            <p className="text-gray-500">Cargando datos...</p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-lg">
      <div className={`p-6 text-white rounded-t-lg ${colors.bg}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <IconComponent className="w-6 h-6" />
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              {subtitle && (
                <p className={`text-sm ${colors.text}`}>{subtitle}</p>
              )}
            </div>
          </div>
          {headerActions.length > 0 && (
            <div className="flex space-x-3">
              {headerActions.map((action, index) => (
                <Button
                  key={index}
                  className={`border-0 shadow-lg ${
                    action.variant === "secondary"
                      ? "text-white bg-opacity-20 hover:bg-opacity-30"
                      : "text-blue-600 bg-white hover:bg-blue-50"
                  }`}
                  size="sm"
                  onClick={action.onClick}
                >
                  <action.icon className="w-4 h-4 mr-2" />
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-white">
        {data.length === 0 ? (
          <div className="p-12 text-center">
            <IconComponent className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-gray-500">{emptyMessage}</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={`border-b ${colors.headerBg}`}>
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      className={`px-6 py-4 text-xs font-semibold tracking-wider text-left uppercase ${
                        colors.headerText
                      } ${column.className || ""}`}
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.map((row, index) => (
                  <tr
                    key={row.id || index}
                    className={`transition-colors ${colors.hover} ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        className={`px-6 py-4 ${column.className || ""}`}
                      >
                        {column.render
                          ? column.render(row[column.key], row)
                          : row[column.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Card>
  );
}
