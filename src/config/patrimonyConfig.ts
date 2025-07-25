export const PATRIMONY_CONFIG = {
  TABS: {
    INSTITUTIONAL_DISCHARGES: {
      id: "institutional-discharges",
      name: "Altas Institucionales",
      description: "Movimientos de altas institucionales",
      colorScheme: "blue" as const,
    },
    NON_INSTITUTIONAL_DISCHARGES: {
      id: "non-institutional-discharges",
      name: "Altas No Institucionales",
      description: "Movimientos de altas no institucionales",
      colorScheme: "purple" as const,
    },
    RETURNS: {
      id: "returns",
      name: "Devoluciones",
      description: "Movimientos de devolución de bienes",
      colorScheme: "orange" as const,
    },
    DISCHARGES: {
      id: "discharges",
      name: "Bajas",
      description: "Movimientos de baja de bienes patrimoniales",
      colorScheme: "red" as const,
    },
    CUSTODY_ASSETS: {
      id: "custody-assets",
      name: "Bienes en Custodia",
      description: "Control de activos bajo custodia institucional",
      colorScheme: "green" as const,
    },
  },

  MOVEMENT_TYPES: {
    INSTITUTIONAL: ["Compra", "Donación", "Transferencia", "Fabricación"],
    NON_INSTITUTIONAL: [
      "Donación",
      "Transferencia",
      "Comodato",
      "Afectación en Uso",
    ],
    DISCHARGE: ["Baja", "Transferencia", "Venta", "Destrucción"],
  },

  STATUS_OPTIONS: {
    MOVEMENT: ["En Proceso", "Completado", "Pendiente", "Cancelado"],
    ASSET: ["Bueno", "Regular", "Malo", "Inoperativo"],
  },

  YEAR_OPTIONS: ["2024", "2023", "2022", "2021"],
  MONTH_OPTIONS: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],

  PAGINATION: {
    DEFAULT_PAGE_SIZE: 10,
    PAGE_SIZE_OPTIONS: [10, 25, 50, 100],
  },

  API_ENDPOINTS: {
    MOVEMENTS: "/api/patrimony/movements",
    RETURNS: "/api/patrimony/returns",
    DISCHARGES: "/api/patrimony/discharges",
    CUSTODY_ASSETS: "/api/patrimony/custody-assets",
  },
};
