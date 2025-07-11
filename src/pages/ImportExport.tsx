import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const importHistory = [
  {
    id: 1,
    filename: "inventario_siga_enero_2024.xlsx",
    date: "15/01/2024",
    records: 247,
    status: "Exitoso",
  },
  {
    id: 2,
    filename: "inventario_siga_diciembre_2023.xlsx",
    date: "02/01/2024",
    records: 198,
    status: "Exitoso",
  },
];

export default function ImportExport() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="p-8">
      <h1 className="mb-5 text-lg font-semibold">Importar/Exportar Datos</h1>
      {/* Contenedores superior */}
      <div className="grid gap-5 mb-8 md:grid-cols-2">
        {/* Importar */}
        <Card className="p-6">
          <div className="mb-2 text-base font-bold">Importar desde SIGA</div>
          <div className="mb-4 text-xs text-muted-foreground">
            Importar archivo XLS obtenido del sistema SIGA
          </div>
          <label
            className="block mb-1 text-sm font-medium"
            htmlFor="import-xls"
          >
            Seleccionar archivo XLS
          </label>
          <div className="flex items-center gap-2 mb-4">
            <input
              id="import-xls"
              type="file"
              accept=".xls,.xlsx"
              ref={fileInputRef}
              className="block w-full px-2 py-1 text-xs border rounded"
            />
          </div>
          <Button className="w-full mt-2 font-medium text-white bg-black h-9">
            Importar Datos
          </Button>
        </Card>
        {/* Exportar */}
        <Card className="p-6">
          <div className="mb-2 text-base font-bold">Exportar Datos</div>
          <div className="mb-3 text-xs text-muted-foreground">
            Exportar inventario actual a archivo TXT
          </div>
          <div className="mb-5 text-xs">
            <span className="font-bold">Datos a exportar:</span>
            <ul className="pl-5 list-disc">
              <li>Código de bien patrimonial</li>
              <li>Descripción del bien</li>
              <li>Estado y ubicación</li>
              <li>Responsable asignado</li>
              <li>Centro de costo</li>
            </ul>
          </div>
          <Button className="w-full font-medium text-white bg-black h-9">
            Exportar a TXT
          </Button>
        </Card>
      </div>
      {/* Historial */}
      <Card className="p-6">
        <div className="font-bold mb-0.5">Historial de Importaciones</div>
        <div className="mb-3 text-xs text-muted-foreground">
          Registro de las últimas importaciones realizadas
        </div>
        <div className="space-y-3">
          {importHistory.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between px-4 py-2 bg-white border rounded"
            >
              <div>
                <div className="text-sm font-medium">{item.filename}</div>
                <div className="text-xs text-muted-foreground">
                  Importado el {item.date} - {item.records} registros
                </div>
              </div>
              <Badge className="text-green-800 bg-green-100">
                {item.status}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
