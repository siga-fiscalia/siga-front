export interface Good {
  code: string;
  description: string;
  brandModel: string;
  serial: string;
  status: "Bueno" | "Regular" | "Malo";
  responsible: string;
  center: string;
  value: number;
}
