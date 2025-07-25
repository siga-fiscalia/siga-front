import { useState, useEffect } from "react";
import {
  AssetMovement,
  AssetReturn,
  AssetDischarge,
  CustodyAsset,
} from "@/types/patrimony";

interface UsePatrimonyDataReturn {
  movements: AssetMovement[];
  returns: AssetReturn[];
  discharges: AssetDischarge[];
  custodyAssets: CustodyAsset[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function usePatrimonyData(): UsePatrimonyDataReturn {
  const [movements, setMovements] = useState<AssetMovement[]>([]);
  const [returns, setReturns] = useState<AssetReturn[]>([]);
  const [discharges, setDischarges] = useState<AssetDischarge[]>([]);
  const [custodyAssets, setCustodyAssets] = useState<CustodyAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Simular llamadas a API
      const mockMovements: AssetMovement[] = [
        {
          id: "1",
          movementNumber: "MOV001",
          type: "Compra",
          orderNumber: "OC-2024-001",
          movementDate: "2024-01-15",
          actions: ["Ver", "Editar"],
        },
        {
          id: "2",
          movementNumber: "MOV002",
          type: "Donación",
          orderNumber: "OC-2024-002",
          movementDate: "2024-01-20",
          actions: ["Ver", "Editar"],
        },
      ];

      const mockReturns: AssetReturn[] = [
        {
          id: "1",
          movementNumber: "DEV001",
          movementDate: "2024-01-15",
          resolutionNumber: "RES-2024-001",
          resolutionDate: "2024-01-10",
          status: "En Proceso",
          actions: ["Ver Detalle"],
        },
        {
          id: "2",
          movementNumber: "DEV002",
          movementDate: "2024-01-20",
          resolutionNumber: "RES-2024-002",
          resolutionDate: "2024-01-18",
          status: "En Proceso",
          actions: ["Ver Detalle"],
        },
      ];

      const mockDischarges: AssetDischarge[] = [
        {
          id: "1",
          movementNumber: "BAJ001",
          movementDate: "2024-01-15",
          resolutionNumber: "RES-BAJ-001",
          resolutionDate: "2024-01-10",
          status: "En Proceso",
          actions: ["Ver Detalle"],
        },
        {
          id: "2",
          movementNumber: "BAJ002",
          movementDate: "2024-01-20",
          resolutionNumber: "RES-BAJ-002",
          resolutionDate: "2024-01-18",
          status: "En Proceso",
          actions: ["Ver Detalle"],
        },
      ];

      const mockCustodyAssets: CustodyAsset[] = [
        {
          id: "1",
          code: "CUST001",
          barCodeInventory: "CB123456789",
          description: "Laptop Dell Inspiron 15 en custodia temporal",
          status: "Bueno",
          date: "2024-01-15",
          actions: ["Ver", "Asignar", "Transferir"],
        },
        {
          id: "2",
          code: "CUST002",
          barCodeInventory: "CB987654321",
          description: "Impresora HP LaserJet en proceso de verificación",
          status: "Regular",
          date: "2024-01-20",
          actions: ["Ver", "Asignar", "Transferir"],
        },
      ];

      // Simular delay de red
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMovements(mockMovements);
      setReturns(mockReturns);
      setDischarges(mockDischarges);
      setCustodyAssets(mockCustodyAssets);
    } catch (err) {
      setError("Error al cargar los datos del patrimonio");
      console.error("Error fetching patrimony data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return {
    movements,
    returns,
    discharges,
    custodyAssets,
    loading,
    error,
    refetch,
  };
}
