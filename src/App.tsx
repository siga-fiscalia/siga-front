import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as SonnerToaster } from '@/components/ui/sonner'
import Layout from '@/components/layout/Layout'
import Dashboard from '@/pages/Dashboard'
import Inventory from '@/pages/Inventory'
import Products from '@/pages/Products'
import Reports from '@/pages/Reports'
import Settings from '@/pages/Settings'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="inventory-theme">
      <TooltipProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/products" element={<Products />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
        <Toaster />
        <SonnerToaster />
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default App