import React from "react";

const costCenters = [
    {
        code: 2,
        description: "SAN LUIS",
        address: "AV. SAN LUIS 123",
        district: "TRUJILLO",
        registrationDate: "2024-01-15",
    },
    {
        code: 3,
        description: "NEW YORK - AREAS ADMINISTRATIVA",
        address: "AV. NEW YORK 456",
        district: "TRUJILLO",
        registrationDate: "2024-02-10",
    },
    {
        code: 4,
        description: "COVICORTI",
        address: "JR. COVICORTI 789",
        district: "TRUJILLO",
        registrationDate: "2024-03-05",
    },
    {
        code: 24,
        description: "UNIDAD DE FLAGRANCIA",
        address: "LOS GRANADOS",
        district: "TRUJILLO",
        registrationDate: "2025-05-05",
    },
];

export default function CostCenters() {
    return (
        <div className="w-full min-h-screen bg-[#f8f9fb] px-6 py-8">
            <div className="max-w-6xl mx-auto">
                {/* Título */}
                <h2 className="mb-2 text-2xl font-bold">Gestión de Centro de Costo</h2>

                {/* Header del card */}
                <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-semibold">Lista de Centros de Costo</h3>
                    <button className="px-4 py-2 text-sm font-medium text-white transition bg-black rounded-lg hover:bg-zinc-800">
                        Nuevo Centro de Costo
                    </button>
                </div>

                {/* Subtítulo */}
                <p className="mb-4 text-sm text-gray-400">
                    Gestión completa del inventario de bienes del Ministerio Público
                </p>

                {/* Card que contiene la tabla */}
                <div className="px-6 py-4 bg-white border shadow-none rounded-xl">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b">
                                <th className="py-2 font-bold text-left text-gray-700">
                                    Código
                                </th>
                                <th className="py-2 font-bold text-left text-gray-700">
                                    Descripción
                                </th>
                                <th className="py-2 font-bold text-left text-gray-700">
                                    Dirección
                                </th>
                                <th className="py-2 font-bold text-left text-gray-700">
                                    Distrito
                                </th>
                                <th className="py-2 font-bold text-left text-gray-700">
                                    Fecha Registro
                                </th>
                                <th className="py-2 font-bold text-left text-gray-700">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {costCenters.map((center) => (
                                <tr key={center.code} className="border-b last:border-0">
                                    <td className="py-2">{center.code}</td>
                                    <td className="py-2">{center.description}</td>
                                    <td className="py-2">{center.address}</td>
                                    <td className="py-2">{center.district}</td>
                                    <td className="py-2">{center.registrationDate}</td>
                                    <td className="flex py-2 space-x-2">
                                        <button className="px-3 py-1 text-xs transition border rounded-md hover:bg-gray-50">
                                            Editar
                                        </button>
                                        <button className="px-3 py-1 text-xs text-red-700 transition bg-red-100 border rounded-md hover:bg-red-200">
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
