import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function Inventory() {
  const [filter, setFilter] = useState('')
  const [search, setSearch] = useState('')

  const items = [
    {
      id: 1,
      codigo: '112230000001',
      barra: 'P14254',
      descripcion: 'DESHUMEDECEDOR PARA AMBIENTE TIPO COMERCIAL',
      tipoVerif: 'F'
    },
    {
      id: 2,
      codigo: '112230000002',
      barra: 'P14255',
      descripcion: 'EQUIPO DE AIRE ACONDICIONADO DE PRECISION 24000 BTU - UNIDAD 1',
      tipoVerif: 'F'
    },
    {
      id: 3,
      codigo: '112230000003',
      barra: 'P14256',
      descripcion: 'EQUIPO DE AIRE ACONDICIONADO DE PRECISION 24000 BTU - UNIDAD 2',
      tipoVerif: 'F'
    },
    {
      id: 4,
      codigo: '112230000004',
      barra: 'P14257',
      descripcion: 'EQUIPO DE AIRE ACONDICIONADO DE PRECISION 24000 BTU - UNIDAD 3',
      tipoVerif: 'F'
    },
    {
      id: 5,
      codigo: '112230000005',
      barra: 'P14258',
      descripcion: 'EQUIPO DE AIRE ACONDICIONADO DE PRECISION 24000 BTU - UNIDAD 4',
      tipoVerif: 'F'
    },
  ]

  return (
    <div className="space-y-6">
      {/* Cabecera de módulo */}
      <div className="px-4 py-2 text-sm font-semibold text-white bg-blue-700 rounded-md">
        Módulo de Patrimonio - Ejecutora: MINISTERIO PÚBLICO - GERENCIA ADMINISTRATIVA DE LA LIBERTAD
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Listado del Inventario Físico</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Filtros superiores */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <label className="text-sm font-medium">Año Inventario</label>
              <Select defaultValue="2024">
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione año" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium">Número Inventario</label>
              <Select defaultValue="1">
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">INVENTARIO DE BIENES MUEBLES PATRIMONIO</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium">Fecha Registro</label>
              <Input type="date" value="2025-06-23" readOnly />
            </div>

            <div>
              <label className="text-sm font-medium">Tipo Registro</label>
              <Select defaultValue="Institucional">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Institucional">Institucional</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline">Seleccionar Inventario</Button>
            <Button className="text-white bg-black">Registrar Inventario</Button>
          </div>

          {/* Filtro búsqueda */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Filtrar por:</label>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Descripción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="codigo">Código Patrimonial</SelectItem>
                <SelectItem value="descripcion">Descripción</SelectItem>
              </SelectContent>
            </Select>

            <Input
              placeholder="Ingrese valor a buscar (ej: 01)"
              className="w-80"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Tabla de resultados */}
          <div className="overflow-auto border rounded-md">
            <table className="w-full text-sm">
              <thead className="text-left text-white bg-blue-600">
                <tr>
                  <th className="px-4 py-2">Item</th>
                  <th className="px-4 py-2">Código Patrimonial</th>
                  <th className="px-4 py-2">Código Barra/Inv Anterior</th>
                  <th className="px-4 py-2">Descripción</th>
                  <th className="px-4 py-2">Tipo Verif</th>
                  <th className="px-4 py-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">{item.id}</td>
                    <td className="px-4 py-2">{item.codigo}</td>
                    <td className="px-4 py-2">{item.barra}</td>
                    <td className="px-4 py-2">{item.descripcion}</td>
                    <td className="px-4 py-2">{item.tipoVerif}</td>
                    <td className="px-4 py-2">
                      <Button size="sm" variant="outline">
                        Ver Activo Fijo
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}