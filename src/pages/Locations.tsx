import React from "react";

const locations = [
    {
        id: 1,
        name: "Oficina Central",
        description: "Edificio A – Piso 1",
        center: "Sede Principal",
    },
    {
        id: 2,
        name: "Depósito Norte",
        description: "Almacén 4",
        center: "Sede Norte",
    },
    {
        id: 3,
        name: "Almacén Sur",
        description: "Nave Industrial",
        center: "Sede Sur",
    },
];

export default function Locations() {
    return (
        <div className="w-full min-h-screen bg-[#f8f9fb] px-6 py-8">
            <div className="max-w-6xl mx-auto">
                {/* Título */}
                <h2 className="mb-2 text-2xl font-bold">Ubicación Física</h2>
                {/* Header del card */}
                <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-semibold">Lista de Ubicaciones</h3>
                    <button className="px-4 py-2 text-sm font-medium text-white transition bg-black rounded-lg hover:bg-zinc-800">
                        Nueva Ubicación
                    </button>
                </div>
                {/* Subtítulo */}
                <p className="mb-4 text-sm text-gray-400">
                    Definición de puntos físicos donde se almacenan los bienes
                </p>
                {/* Card con tabla */}
                <div className="px-6 py-4 bg-white border shadow-none rounded-xl">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b">
                                <th className="py-2 font-bold text-left text-gray-700">ID</th>
                                <th className="py-2 font-bold text-left text-gray-700">
                                    Nombre
                                </th>
                                <th className="py-2 font-bold text-left text-gray-700">
                                    Descripción
                                </th>
                                <th className="py-2 font-bold text-left text-gray-700">
                                    Centro
                                </th>
                                <th className="py-2 font-bold text-left text-gray-700">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {locations.map((loc) => (
                                <tr key={loc.id} className="border-b last:border-0">
                                    <td className="py-2">{loc.id}</td>
                                    <td className="py-2">{loc.name}</td>
                                    <td className="py-2">{loc.description}</td>
                                    <td className="py-2">{loc.center}</td>
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
