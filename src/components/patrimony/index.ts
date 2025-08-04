export { default as PatrimonyTabs } from "./PatrimonyTabs";
export { default as InstitutionalDischargesTab } from "./tabs/InstitutionalDischargesTab";
export { default as NonInstitutionalDischargesTab } from "./tabs/NonInstitutionalDischargesTab";
export { default as ReturnsTab } from "./tabs/ReturnsTab";
export { default as DischargesTab } from "./tabs/DischargesTab";
export { default as CustodyAssetsTab } from "./tabs/CustodyAssetsTab";

// Common components
export { default as PatrimonyFilters } from "./common/PatrimonyFilters";
export { default as PatrimonyTable } from "./common/PatrimonyTable";
export { default as DetailPanel } from "./common/DetailPanel";
export { default as ReportsModal } from "./common/ReportsModal";

// Hooks
export { usePatrimonyData } from "../../hooks/usePatrimonyData";

// Types
export type {
  AssetMovement,
  InstitutionalDischarge,
  NonInstitutionalDischarge,
  AssetReturn,
  AssetDischarge,
  CustodyAsset,
  PatrimonyTabType,
} from "../../types/patrimony";