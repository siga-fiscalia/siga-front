import {
  AssetMovement,
  AssetReturn,
  AssetDischarge,
  CustodyAsset,
  InstitutionalDischarge,
  NonInstitutionalDischarge,
} from "@/types/patrimony";
import { PATRIMONY_CONFIG } from "@/config/patrimonyConfig";

class PatrimonyService {
  private baseUrl = process.env.REACT_APP_API_URL || "";

  // Institutional Discharges
  async getInstitutionalDischarges(filters?: {
    year?: string;
    month?: string;
    type?: string;
  }): Promise<InstitutionalDischarge[]> {
    try {
      const queryParams = new URLSearchParams();
      if (filters?.year) queryParams.append("year", filters.year);
      if (filters?.month) queryParams.append("month", filters.month);
      if (filters?.type) queryParams.append("type", filters.type);

      const response = await fetch(
        `${this.baseUrl}${PATRIMONY_CONFIG.API_ENDPOINTS.MOVEMENTS}?${queryParams}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch institutional discharges");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching institutional discharges:", error);
      throw error;
    }
  }

  async createInstitutionalDischarge(
    data: Omit<InstitutionalDischarge, "id">
  ): Promise<InstitutionalDischarge> {
    try {
      const response = await fetch(
        `${this.baseUrl}${PATRIMONY_CONFIG.API_ENDPOINTS.MOVEMENTS}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create institutional discharge");
      }

      return await response.json();
    } catch (error) {
      console.error("Error creating institutional discharge:", error);
      throw error;
    }
  }

  // Returns
  async getReturns(filters?: {
    year?: string;
    month?: string;
    status?: string;
  }): Promise<AssetReturn[]> {
    try {
      const queryParams = new URLSearchParams();
      if (filters?.year) queryParams.append("year", filters.year);
      if (filters?.month) queryParams.append("month", filters.month);
      if (filters?.status) queryParams.append("status", filters.status);

      const response = await fetch(
        `${this.baseUrl}${PATRIMONY_CONFIG.API_ENDPOINTS.RETURNS}?${queryParams}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch returns");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching returns:", error);
      throw error;
    }
  }

  async createReturn(data: Omit<AssetReturn, "id">): Promise<AssetReturn> {
    try {
      const response = await fetch(
        `${this.baseUrl}${PATRIMONY_CONFIG.API_ENDPOINTS.RETURNS}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create return");
      }

      return await response.json();
    } catch (error) {
      console.error("Error creating return:", error);
      throw error;
    }
  }

  // Discharges
  async getDischarges(filters?: {
    year?: string;
    month?: string;
    type?: string;
    registryType?: string;
  }): Promise<AssetDischarge[]> {
    try {
      const queryParams = new URLSearchParams();
      if (filters?.year) queryParams.append("year", filters.year);
      if (filters?.month) queryParams.append("month", filters.month);
      if (filters?.type) queryParams.append("type", filters.type);
      if (filters?.registryType)
        queryParams.append("registryType", filters.registryType);

      const response = await fetch(
        `${this.baseUrl}${PATRIMONY_CONFIG.API_ENDPOINTS.DISCHARGES}?${queryParams}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch discharges");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching discharges:", error);
      throw error;
    }
  }

  // Custody Assets
  async getCustodyAssets(filters?: {
    year?: string;
    family?: string;
    status?: string;
    search?: string;
  }): Promise<CustodyAsset[]> {
    try {
      const queryParams = new URLSearchParams();
      if (filters?.year) queryParams.append("year", filters.year);
      if (filters?.family) queryParams.append("family", filters.family);
      if (filters?.status) queryParams.append("status", filters.status);
      if (filters?.search) queryParams.append("search", filters.search);

      const response = await fetch(
        `${this.baseUrl}${PATRIMONY_CONFIG.API_ENDPOINTS.CUSTODY_ASSETS}?${queryParams}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch custody assets");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching custody assets:", error);
      throw error;
    }
  }

  async assignCustodyAsset(
    assetId: string,
    assigneeData: {
      assigneeName: string;
      assigneeId: string;
      department: string;
      assignmentDate: string;
      notes?: string;
    }
  ): Promise<CustodyAsset> {
    try {
      const response = await fetch(
        `${this.baseUrl}${PATRIMONY_CONFIG.API_ENDPOINTS.CUSTODY_ASSETS}/${assetId}/assign`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(assigneeData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to assign custody asset");
      }

      return await response.json();
    } catch (error) {
      console.error("Error assigning custody asset:", error);
      throw error;
    }
  }

  async transferCustodyAsset(
    assetId: string,
    transferData: {
      fromLocation: string;
      toLocation: string;
      transferDate: string;
      reason: string;
      authorizedBy: string;
    }
  ): Promise<CustodyAsset> {
    try {
      const response = await fetch(
        `${this.baseUrl}${PATRIMONY_CONFIG.API_ENDPOINTS.CUSTODY_ASSETS}/${assetId}/transfer`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transferData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to transfer custody asset");
      }

      return await response.json();
    } catch (error) {
      console.error("Error transferring custody asset:", error);
      throw error;
    }
  }

  // Export functionality
  async exportData(
    tabType: string,
    filters: any,
    format: "excel" | "pdf" | "csv" = "excel"
  ): Promise<Blob> {
    try {
      const response = await fetch(
        `${this.baseUrl}/api/patrimony/export/${tabType}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ filters, format }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to export data");
      }

      return await response.blob();
    } catch (error) {
      console.error("Error exporting data:", error);
      throw error;
    }
  }
}
export const patrimonyService = new PatrimonyService();