import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter, Search } from "lucide-react";

interface PatrimonyFiltersProps {
  title?: string;
  colorScheme?: "blue" | "purple" | "orange" | "red" | "green";
  filters: {
    label: string;
    value: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
  }[];
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  actionButton?: {
    label: string;
    icon: React.ComponentType<any>;
    onClick: () => void;
  };
  children?: React.ReactNode;
}

export default function PatrimonyFilters({
  title = "Filtros de Búsqueda",
  colorScheme = "blue",
  filters,
  searchPlaceholder,
  onSearch,
  actionButton,
  children,
}: PatrimonyFiltersProps) {
  const colorClasses = {
    blue: {
      bg: "bg-gradient-to-r from-blue-600 to-blue-700",
      text: "text-blue-900",
      border: "border-blue-200 focus:border-blue-500 focus:ring-blue-500",
      button: "bg-blue-600 hover:bg-blue-700",
    },
    purple: {
      bg: "bg-gradient-to-r from-purple-600 to-purple-700",
      text: "text-purple-900",
      border: "border-purple-200 focus:border-purple-500 focus:ring-purple-500",
      button: "bg-purple-600 hover:bg-purple-700",
    },
    orange: {
      bg: "bg-gradient-to-r from-orange-600 to-orange-700",
      text: "text-orange-900",
      border: "border-orange-200 focus:border-orange-500 focus:ring-orange-500",
      button: "bg-orange-600 hover:bg-orange-700",
    },
    red: {
      bg: "bg-gradient-to-r from-red-600 to-red-700",
      text: "text-red-900",
      border: "border-red-200 focus:border-red-500 focus:ring-red-500",
      button: "bg-red-600 hover:bg-red-700",
    },
    green: {
      bg: "bg-gradient-to-r from-green-600 to-green-700",
      text: "text-green-900",
      border: "border-green-200 focus:border-green-500 focus:ring-green-500",
      button: "bg-green-600 hover:bg-green-700",
    },
  };

  const colors = colorClasses[colorScheme];

  return (
    <Card className="mb-6 border-0 shadow-lg">
      <div className={`p-4 text-white rounded-t-lg ${colors.bg}`}>
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5" />
          <h3 className="font-semibold">{title}</h3>
        </div>
      </div>
      <div className="p-6 bg-white">
        <div
          className={`grid grid-cols-1 gap-6 ${
            actionButton ? "md:grid-cols-4" : "md:grid-cols-3"
          }`}
        >
          {filters.map((filter, index) => (
            <div key={index} className="space-y-2">
              <label className={`block text-sm font-medium ${colors.text}`}>
                {filter.label}
              </label>
              <Select value={filter.value} onValueChange={filter.onChange}>
                <SelectTrigger className={colors.border}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {filter.options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ))}

          {searchPlaceholder && onSearch && (
            <div className="space-y-2">
              <label className={`block text-sm font-medium ${colors.text}`}>
                Búsqueda
              </label>
              <div className="relative">
                <Search
                  className={`absolute w-4 h-4 transform -translate-y-1/2 left-3 top-1/2 ${colors.text
                    .replace("text-", "text-")
                    .replace("-900", "-400")}`}
                />
                <Input
                  placeholder={searchPlaceholder}
                  onChange={(e) => onSearch(e.target.value)}
                  className={`pl-10 ${colors.border}`}
                />
              </div>
            </div>
          )}

          {actionButton && (
            <div className="flex items-end">
              <Button
                className={`w-full text-white ${colors.button}`}
                onClick={actionButton.onClick}
              >
                <actionButton.icon className="w-4 h-4 mr-2" />
                {actionButton.label}
              </Button>
            </div>
          )}
        </div>
        {children}
      </div>
    </Card>
  );
}
