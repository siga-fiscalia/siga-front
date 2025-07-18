import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  BarChart3,
  Package,
  Users,
  Building2,
  MapPin,
  FileText,
  Database,
  ChevronRight,
} from "lucide-react";

export default function AppSidebar() {
  const location = useLocation();

  const isActive = (url: string) => location.pathname === url;

  const menuItems = [
    {
      section: "Principal",
      items: [
        {
          title: "Dashboard",
          url: "/",
          icon: BarChart3,
          description: "Panel de control principal",
        },
      ],
    },
    {
      section: "Módulo de Control y Administración",
      subtitle: "Bienes Muebles Patrimoniales",
      items: [
        {
          title: "Gestión de Bienes",
          url: "/bienes",
          icon: Package,
          description: "Administrar bienes patrimoniales",
        },
      ],
    },
    {
      section: "Módulo de Inventario",
      items: [
        {
          title: "Gestión de Inventario",
          url: "/inventario",
          icon: BarChart3,
          description: "Control de inventario físico",
        },
      ],
    },
    {
      section: "Módulo de Configuración",
      items: [
        {
          title: "Gestión de Personal",
          url: "/personal",
          icon: Users,
          description: "Administrar recursos humanos",
        },
        {
          title: "Centro de Costo",
          url: "/centros",
          icon: Building2,
          description: "Gestionar centros de costo",
        },
        {
          title: "Ubicación Física",
          url: "/ubicacion",
          icon: MapPin,
          description: "Administrar ubicaciones",
        },
      ],
    },
    {
      section: "Otros Módulos",
      items: [
        {
          title: "Reportes",
          url: "/reportes",
          icon: FileText,
          description: "Generar reportes del sistema",
        },
        {
          title: "Importar y Exportar",
          url: "/importar",
          icon: Database,
          description: "Gestión de datos externos",
        },
      ],
    },
  ];

  return (
    <Sidebar className="bg-white border-r border-gray-200">
      {/* Header Mejorado */}
      <SidebarHeader className="border-b border-gray-100 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white rounded-lg shadow-md">
              <img
                src="/19.07 Logo03.png"
                alt="Logo Ministerio Público"
                className="object-contain w-8 h-8"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-sm font-bold leading-tight text-white">
                Sistema Integral de
                <br />
                Gestión de Almacenes
              </h1>
              <p className="text-xs text-blue-100 mt-0.5">
                Ministerio Público - Trujillo
              </p>
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-gray-50">
        {menuItems.map((section, sectionIndex) => (
          <SidebarGroup key={sectionIndex} className="mb-2">
            {/* Label de Sección Mejorado */}
            <div className="px-4 py-3">
              <SidebarGroupLabel className="text-xs font-semibold tracking-wider text-blue-900 uppercase">
                {section.section}
              </SidebarGroupLabel>
              {section.subtitle && (
                <p className="text-xs text-blue-600 mt-0.5 font-medium">
                  {section.subtitle}
                </p>
              )}
            </div>

            <SidebarGroupContent>
              <SidebarMenu className="px-2 space-y-1">
                {section.items.map((item, itemIndex) => {
                  const IconComponent = item.icon;
                  const active = isActive(item.url);

                  return (
                    <SidebarMenuItem key={itemIndex}>
                      <SidebarMenuButton
                        asChild
                        className={`
                          group relative transition-all duration-200 ease-in-out rounded-lg mx-2 h-auto p-0
                          ${
                            active
                              ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                              : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                          }
                        `}
                      >
                        <Link
                          to={item.url}
                          className="flex items-center w-full p-3"
                        >
                          <div
                            className={`
                            p-2 rounded-lg mr-3 transition-colors
                            ${
                              active
                                ? "bg-white bg-opacity-20"
                                : "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
                            }
                          `}
                          >
                            <IconComponent className="w-4 h-4" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div
                              className={`
                              text-sm font-semibold
                              ${
                                active
                                  ? "text-white"
                                  : "text-gray-900 group-hover:text-blue-900"
                              }
                            `}
                            >
                              {item.title}
                            </div>
                            <div
                              className={`
                              text-xs mt-0.5 leading-tight
                              ${
                                active
                                  ? "text-blue-100"
                                  : "text-gray-500 group-hover:text-blue-600"
                              }
                            `}
                            >
                              {item.description}
                            </div>
                          </div>

                          {/* Indicador de elemento activo */}
                          {active && (
                            <div className="flex-shrink-0">
                              <ChevronRight className="w-4 h-4 text-white" />
                            </div>
                          )}

                          {/* Indicador hover para elementos no activos */}
                          {!active && (
                            <div className="flex-shrink-0 transition-opacity opacity-0 group-hover:opacity-100">
                              <ChevronRight className="w-4 h-4 text-blue-600" />
                            </div>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        {/* Footer de la Sidebar */}
        <div className="p-4 mt-auto bg-white border-t border-gray-200">
          <div className="text-center">
            <div className="mb-1 text-xs text-gray-500">
              Sistema Versión 1.0
            </div>
            <div className="text-xs font-medium text-blue-600">
              © 2024 Ministerio Público
            </div>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}