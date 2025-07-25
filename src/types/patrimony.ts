export interface AssetMovement {
    id: string;
    movementNumber: string;
    type: "Compra" | "Donación" | "Transferencia";
    orderNumber: string;
    movementDate: string;
    actions: string[];
}

export interface InstitutionalDischarge {
    id: string;
    movementNumber: string;
    registryType: string;
    entity: string;
    actions: string[];
}

export interface NonInstitutionalDischarge {
    id: string;
    movementNumber: string;
    registryType: string;
    entity: string;
    actions: string[];
}

export interface AssetReturn {
    id: string;
    movementNumber: string;
    movementDate: string;
    resolutionNumber: string;
    resolutionDate: string;
    status: "En Proceso" | "Completado" | "Pendiente";
    actions: string[];
}

export interface AssetDischarge {
    id: string;
    movementNumber: string;
    movementDate: string;
    resolutionNumber: string;
    resolutionDate: string;
    status: "En Proceso" | "Completado" | "Pendiente";
    actions: string[];
}

export interface CustodyAsset {
    id: string;
    code: string;
    barCodeInventory: string;
    description: string;
    status: "Bueno" | "Regular" | "Malo";
    date: string;
    actions: string[];
}

export interface PatrimonyTabType {
    id: string;
    name: string;
    icon: React.ComponentType<any>;
    component: React.ComponentType<any>;
}