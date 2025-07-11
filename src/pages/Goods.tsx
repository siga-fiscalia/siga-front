import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Good {
    code: string;
    description: string;
    brandModel: string;
    serial: string;
    status: "Bueno" | "Regular" | "Malo";
    responsible: string;
    center: string;
    value: number;
}

const goodsList: Good[] = [
    {
        code: "112282820002",
        description: "Laptop Dell Inspiron 15",
        brandModel: "Dell Inspiron 15 3000",
        serial: "DL123456789",
        status: "Bueno",
        responsible: "Juan Pérez",
        center: "Sede Principal",
        value: 2500,
    },
    {
        code: "112282820003",
        description: "Impresora HP LaserJet",
        brandModel: "HP LaserJet Pro M404n",
        serial: "HP987654321",
        status: "Regular",
        responsible: "María García",
        center: "Sede Norte",
        value: 800,
    },
];

function getStatusBadge(status: Good["status"]) {
    const color =
        status === "Bueno"
            ? "bg-green-100 text-green-700"
            : status === "Regular"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700";
    return (
        <span
            className={`px-2 py-0.5 rounded text-xs font-semibold ${color}`}
            style={{ display: "inline-block", minWidth: 60, textAlign: "center" }}
        >
            {status}
        </span>
    );
}

export default function Goods() {
    const [search, setSearch] = useState<string>("");

    const filteredGoods = goodsList.filter((good) => good.code.includes(search));

    return (
        <div className="flex flex-col flex-1 min-h-screen px-10 py-6 bg-muted">
            {/* Título y filtro arriba */}
            <div className="flex flex-row items-center justify-between mt-2 mb-4">
                <h2 className="text-2xl font-bold tracking-tight">Gestión de Bienes</h2>
                <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">
                        Filtrar por Código Patrimonial:
                    </label>
                    <Input
                        type="text"
                        placeholder="Ingrese código"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-52"
                    />
                </div>
            </div>

            {/* Card con tabla */}
            <Card className="w-full">
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-0.5">
                        Lista de Bienes Patrimoniales
                    </h3>
                    <p className="mt-0 mb-2 text-muted-foreground">
                        Gestión completa del inventario de bienes del Ministerio Público
                    </p>

                    <div className="overflow-auto bg-white border rounded-md">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-muted">
                                    <th className="px-4 py-2 font-semibold text-left">Código</th>
                                    <th className="px-4 py-2 font-semibold text-left">
                                        Descripción
                                    </th>
                                    <th className="px-4 py-2 font-semibold text-left">
                                        Marca/Modelo
                                    </th>
                                    <th className="px-4 py-2 font-semibold text-left">Serie</th>
                                    <th className="px-4 py-2 font-semibold text-left">Estado</th>
                                    <th className="px-4 py-2 font-semibold text-left">
                                        Responsable
                                    </th>
                                    <th className="px-4 py-2 font-semibold text-left">Centro</th>
                                    <th className="px-4 py-2 font-semibold text-left">Valor</th>
                                    <th className="px-4 py-2 font-semibold text-left">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredGoods.map((good) => (
                                    <tr
                                        key={good.code}
                                        className="border-t last:border-b-0 hover:bg-gray-50"
                                    >
                                        <td className="px-4 py-2">{good.code}</td>
                                        <td className="px-4 py-2">{good.description}</td>
                                        <td className="px-4 py-2">{good.brandModel}</td>
                                        <td className="px-4 py-2">{good.serial}</td>
                                        <td className="px-4 py-2">{getStatusBadge(good.status)}</td>
                                        <td className="px-4 py-2">{good.responsible}</td>
                                        <td className="px-4 py-2">{good.center}</td>
                                        <td className="px-4 py-2">S/ {good.value.toFixed(2)}</td>
                                        <td className="flex gap-1 px-4 py-2">
                                            <Button size="sm" variant="outline">
                                                Editar
                                            </Button>
                                            <Button size="sm" variant="destructive">
                                                Eliminar
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                                {filteredGoods.length === 0 && (
                                    <tr>
                                        <td className="px-4 py-3 text-center" colSpan={9}>
                                            No se encontraron bienes con ese código.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Card>
        </div>
    );
}