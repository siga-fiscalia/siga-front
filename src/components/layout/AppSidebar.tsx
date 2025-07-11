import React from 'react'
import { Link, useLocation } from 'react-router-dom'
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
} from '@/components/ui/sidebar'

export default function AppSidebar() {
  const location = useLocation()

  const isActive = (url: string) => location.pathname === url

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <span role="img" aria-label="logo" className="text-2xl">📊</span>
          <span className="text-base font-semibold leading-tight">
            Sistema de Control de Inventario<br />
            <span className="text-xs text-muted-foreground">Ministerio Público - Trujillo</span>
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Grupo 1 */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive('/')}>
                  <Link to="/">
                    <span role="img" aria-label="dashboard">📋</span>
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

          <SidebarGroupLabel>Módulo de Control y Administración de Bienes Muebles Patrimoniales</SidebarGroupLabel>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive('/bienes')}>
                  <Link to="/bienes">
                    <span role="img" aria-label="bienes">📦</span>
                    <span>Gestión de Bienes</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Grupo 2 */}
        <SidebarGroup>
          <SidebarGroupLabel>Módulo de Inventario</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive('/inventario')}>
                <Link to="/inventario">
                  <span role="img">📋</span>
                  <span>Gestión de Inventario</span>
                </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Grupo 3 */}
        <SidebarGroup>
          <SidebarGroupLabel>Módulo de Configuración</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive('/personal')}>
                  <Link to="/personal">
                    <span role="img" aria-label="personal">🧑‍💼</span>
                    <span>Gestión de Personal</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive('/centros')}>
                  <Link to="/centros">
                    <span role="img" aria-label="centro">📘</span>
                    <span>Gestión de Centro de Costo</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive('/ubicacion')}>
                  <Link to="/ubicacion">
                    <span role="img" aria-label="ubicacion">📍</span>
                    <span>Ubicación Física</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Grupo 4 */}
        <SidebarGroup>
          <SidebarGroupLabel>Otros</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive('/reportes')}>
                  <Link to="/reportes">
                    <span role="img" aria-label="reportes">📁</span>
                    <span>Reportes</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive('/importar')}>
                  <Link to="/importar">
                    <span role="img" aria-label="importar">📤</span>
                    <span>Importar y Exportar</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}