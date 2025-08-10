import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import Layout from "@/components/layout/Layout";

import ImportExport from "@/pages/ImportExport";
import Personnel from "@/pages/Personnel";
import Locations from "@/pages/Locations";
import CostCenters from "@/pages/CostCenters";
import Dashboard from "@/pages/Dashboard";
import Inventory from "@/pages/Inventory";
import Products from "@/pages/Products";
import Settings from "@/pages/Settings";
import Goods from "@/pages/Goods";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="inventory-theme">
      <TooltipProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventario" element={<Inventory />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/configuracion" element={<Settings />} />

            <Route path="/bienes" element={<Goods />} />
            <Route path="/personal" element={<Personnel />} />
            <Route path="/centros" element={<CostCenters />} />
            <Route path="/ubicacion" element={<Locations />} />
            <Route path="/importar" element={<ImportExport />} />
          </Routes>
        </Layout>
        <Toaster />
        <SonnerToaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;