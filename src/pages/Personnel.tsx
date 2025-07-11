import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock data
const personnelList = [
  {
    code: "001",
    fullName: "PEREZ GARCIA, JUAN CARLOS",
    dni: "12345678",
    profession: "ABOGADO",
    status: "ACTIVO",
  },
  {
    code: "002",
    fullName: "RODRIGUEZ SILVA, MARIA ELENA",
    dni: "87654321",
    profession: "CONTADOR",
    status: "ACTIVO",
  },
  {
    code: "003",
    fullName: "GUERRERO ESCOBEDO, JHONY GERHARD",
    dni: "11223344",
    profession: "ADMINISTRADOR",
    status: "INACTIVO",
  },
  {
    code: "004",
    fullName: "LOPEZ TORRES, ANA LUCIA",
    dni: "55667788",
    profession: "PSICÓLOGO",
    status: "ACTIVO",
  },
];

function StatusBadge({ status }: { status: string }) {
  const base = "px-2 py-0.5 rounded text-xs font-medium";
  return status === "ACTIVO" ? (
    <span className={`${base} bg-green-100 text-green-700`}>{status}</span>
  ) : (
    <span className={`${base} bg-red-100 text-red-700`}>{status}</span>
  );
}

export default function Personnel() {
  return (
    <div className="w-full">
      {/* Título sección */}
      <h2 className="py-4 text-lg font-semibold pl-7">Gestión de Personal</h2>
      <Card className="w-full max-w-full mx-6 border shadow-none">
        {/* Título y botón arriba, separados */}
        <div className="flex items-center justify-between px-6 pt-5">
          <span className="text-xl font-bold">Lista de Personal</span>
          <Button className="h-8 px-4 text-white transition-all bg-black rounded hover:bg-gray-900">
            Nuevo Registro de Personal
          </Button>
        </div>
        <CardContent className="p-6 pt-2">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 font-semibold text-left">Código</th>
                  <th className="py-2 font-semibold text-left">
                    Apellidos y Nombres
                  </th>
                  <th className="py-2 font-semibold text-left">DNI</th>
                  <th className="py-2 font-semibold text-left">Profesión</th>
                  <th className="py-2 font-semibold text-left">Estado</th>
                  <th className="py-2 font-semibold text-left">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {personnelList.map((p) => (
                  <tr
                    key={p.code}
                    className="border-b last:border-0 hover:bg-gray-50"
                  >
                    <td className="py-2">{p.code}</td>
                    <td className="py-2">{p.fullName}</td>
                    <td className="py-2">{p.dni}</td>
                    <td className="py-2">{p.profession}</td>
                    <td className="py-2">
                      <StatusBadge status={p.status} />
                    </td>
                    <td className="py-2">
                      <button className="px-3 py-1 text-xs transition border rounded-md hover:bg-gray-50">
                        Editar
                      </button>
                      <button className="px-3 py-1 ml-2 text-xs text-red-700 transition bg-red-100 border rounded-md hover:bg-red-200">
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
