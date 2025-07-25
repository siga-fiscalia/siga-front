export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-PE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  } catch {
    return dateString;
  }
};

export const getStatusColor = (status: string): string => {
  const statusColors: { [key: string]: string } = {
    "En Proceso": "bg-yellow-100 text-yellow-700 border border-yellow-200",
    Completado: "bg-green-100 text-green-700 border border-green-200",
    Pendiente: "bg-red-100 text-red-700 border border-red-200",
    Bueno: "bg-green-100 text-green-700 border border-green-200",
    Regular: "bg-yellow-100 text-yellow-700 border border-yellow-200",
    Malo: "bg-red-100 text-red-700 border border-red-200",
  };

  return (
    statusColors[status] || "bg-gray-100 text-gray-700 border border-gray-200"
  );
};

export const generateMovementNumber = (prefix: string): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  return `${prefix}${timestamp.toString().slice(-6)}${random}`;
};

export const validateMovementData = (
  data: any
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!data.movementNumber?.trim()) {
    errors.push("El número de movimiento es requerido");
  }

  if (!data.movementDate) {
    errors.push("La fecha de movimiento es requerida");
  }

  if (!data.type?.trim()) {
    errors.push("El tipo de movimiento es requerido");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
