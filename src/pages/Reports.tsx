import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";

const reportCards = [
  {
    id: 1,
    title: "Asignación de Bienes",
    description: "Reporte de bienes patrimoniales por usuario final",
  },
  {
    id: 2,
    title: "Inventario Físico",
    description: "Inventario físico de activos fijos",
  },
  {
    id: 3,
    title: "Faltantes de Inventario",
    description: "Reporte de bienes faltantes en inventario",
  },
];

const historyReports = [
  {
    id: 1,
    title: "Reporte de Asignación de Bienes",
    date: "15/01/2024 - 14:30",
  },
  {
    id: 2,
    title: "Inventario Físico - Sede Principal",
    date: "12/01/2024 - 09:15",
  },
  {
    id: 3,
    title: "Faltantes de Inventario",
    date: "10/01/2024 - 16:45",
  },
];

export default function Reports() {
  return (
    <div className="p-8">
      <h1 className="mb-2 text-lg font-semibold">Reportes</h1>
      {/* Tarjetas de generación de reporte */}
      <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-3">
        {reportCards.map((card) => (
          <Card
            key={card.id}
            className="flex flex-col justify-between p-6 shadow-sm"
          >
            <div>
              <div className="mb-1 font-bold">{card.title}</div>
              <div className="mb-4 text-xs text-muted-foreground">
                {card.description}
              </div>
            </div>
            <Button className="w-full mt-auto font-medium text-white bg-black h-9">
              Generar Reporte
            </Button>
          </Card>
        ))}
      </div>
      {/* Historial de reportes */}
      <Card className="p-4">
        <div>
          <div className="font-bold mb-0.5">Historial de Reportes</div>
          <div className="mb-3 text-xs text-muted-foreground">
            Últimos reportes generados en el sistema
          </div>
          <div>
            {historyReports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between py-2 border-b last:border-b-0"
              >
                <div>
                  <div className="text-sm font-medium">{report.title}</div>
                  <div className="text-xs text-muted-foreground">
                    Generado el {report.date}
                  </div>
                </div>
                <Button
                  size="sm"
                  className="flex items-center gap-1 font-medium text-black bg-gray-100 hover:bg-black hover:text-white"
                >
                  <Download className="w-4 h-4" />
                  Descargar
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
