export const PATRIMONY_PERMISSIONS = {
  VIEW_INSTITUTIONAL_DISCHARGES: "patrimony:view:institutional-discharges",
  CREATE_INSTITUTIONAL_DISCHARGES: "patrimony:create:institutional-discharges",
  EDIT_INSTITUTIONAL_DISCHARGES: "patrimony:edit:institutional-discharges",
  DELETE_INSTITUTIONAL_DISCHARGES: "patrimony:delete:institutional-discharges",

  VIEW_NON_INSTITUTIONAL_DISCHARGES:
    "patrimony:view:non-institutional-discharges",
  CREATE_NON_INSTITUTIONAL_DISCHARGES:
    "patrimony:create:non-institutional-discharges",
  EDIT_NON_INSTITUTIONAL_DISCHARGES:
    "patrimony:edit:non-institutional-discharges",
  DELETE_NON_INSTITUTIONAL_DISCHARGES:
    "patrimony:delete:non-institutional-discharges",

  VIEW_RETURNS: "patrimony:view:returns",
  CREATE_RETURNS: "patrimony:create:returns",
  EDIT_RETURNS: "patrimony:edit:returns",
  DELETE_RETURNS: "patrimony:delete:returns",

  VIEW_DISCHARGES: "patrimony:view:discharges",
  CREATE_DISCHARGES: "patrimony:create:discharges",
  EDIT_DISCHARGES: "patrimony:edit:discharges",
  DELETE_DISCHARGES: "patrimony:delete:discharges",

  VIEW_CUSTODY_ASSETS: "patrimony:view:custody-assets",
  ASSIGN_CUSTODY_ASSETS: "patrimony:assign:custody-assets",
  TRANSFER_CUSTODY_ASSETS: "patrimony:transfer:custody-assets",

  EXPORT_DATA: "patrimony:export:data",
  IMPORT_DATA: "patrimony:import:data",
} as const;

export const PATRIMONY_ROUTES = {
  MAIN: "/bienes",
  INSTITUTIONAL_DISCHARGES: "/bienes?tab=institutional-discharges",
  NON_INSTITUTIONAL_DISCHARGES: "/bienes?tab=non-institutional-discharges",
  RETURNS: "/bienes?tab=returns",
  DISCHARGES: "/bienes?tab=discharges",
  CUSTODY_ASSETS: "/bienes?tab=custody-assets",
} as const;

export const PATRIMONY_MESSAGES = {
  LOADING: "Cargando datos...",
  NO_DATA: "No hay datos disponibles",
  ERROR_LOADING: "Error al cargar los datos",
  SUCCESS_CREATE: "Registro creado exitosamente",
  SUCCESS_UPDATE: "Registro actualizado exitosamente",
  SUCCESS_DELETE: "Registro eliminado exitosamente",
  CONFIRM_DELETE: "¿Está seguro de eliminar este registro?",
  VALIDATION_REQUIRED: "Este campo es requerido",
  VALIDATION_INVALID_DATE: "Fecha inválida",
  VALIDATION_INVALID_FORMAT: "Formato inválido",
} as const;
