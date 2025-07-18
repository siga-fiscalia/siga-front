import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  X,
  User,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Building2,
  Calendar,
  FileText,
} from "lucide-react";

interface NewPersonnelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (personnelData: any) => void;
}

export default function NewPersonnelModal({
  isOpen,
  onClose,
  onSave,
}: NewPersonnelModalProps) {
  const [formData, setFormData] = useState({
    // Datos Generales
    codigo: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    nombres: "",

    // Documento - Solo DNI
    numeroDocumento: "",

    // Estado Civil y Personal
    estadoCivil: "SOLTERO",
    sexo: "M",
    fechaNacimiento: "",
    peso: "",

    // Números de identificación
    numeroRuc: "",
    numeroLibretaMilitar: "",
    numeroPasaporte: "",
    numeroSSPAFP: "",

    // Datos Laborales
    fechaIngreso: new Date().toISOString().split("T")[0],
    tipoEmpleado: "NOMBRADO",
    destacado: false,
    escala: "SP-ES",
    ejecutoria: "",

    // Datos Profesionales
    profesion: "",
    profesionINEI: "",
    gradoInstruccion: "UNIVERSITARIO",
    numeroColegatura: "",

    // Datos Complementarios - Estado
    estado: "ACTIVO",
    activo: true,

    // Datos Complementarios - Ubicación
    departamento: "LA LIBERTAD",
    provincia: "TRUJILLO",
    distrito: "TRUJILLO",
    direccion: "",
    interior: "",
    manzana: "",
    lote: "",

    // Habitación
    habitacion: "",

    // Contacto
    email: "",
    telefono: "",
    telefonoFax: "",

    // Usuario
    usuario: "",
    ciaDeposito: "",

    // Autorizaciones
    autorizadoEntregaPedidos: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Auto-generar código de usuario basado en nombres
    if (field === "nombres" || field === "apellidoPaterno") {
      const nombres = field === "nombres" ? value : formData.nombres;
      const apellido =
        field === "apellidoPaterno" ? value : formData.apellidoPaterno;
      if (
        typeof nombres === "string" &&
        typeof apellido === "string" &&
        nombres &&
        apellido
      ) {
        const usuario = (nombres.split(" ")[0] + "." + apellido).toLowerCase();
        setFormData((prev) => ({ ...prev, usuario }));
      }
    }

    // Auto-generar ejecutoria basado en código
    if (field === "codigo" && typeof value === "string") {
      setFormData((prev) => ({ ...prev, ejecutoria: value }));
    }
  };

  const handleSave = () => {
    // Validaciones básicas
    if (
      !formData.apellidoPaterno ||
      !formData.nombres ||
      !formData.numeroDocumento
    ) {
      alert(
        "Por favor complete los campos obligatorios: Apellido Paterno, Nombres y DNI"
      );
      return;
    }

    const personnelData = {
      code:
        formData.codigo ||
        `00${Math.floor(Math.random() * 100)
          .toString()
          .padStart(2, "0")}`,
      fullName: `${formData.apellidoPaterno} ${formData.apellidoMaterno}, ${formData.nombres}`,
      dni: formData.numeroDocumento,
      profession: formData.profesion,
      status: formData.estado as "ACTIVO" | "INACTIVO",
      email: formData.email,
      phone: formData.telefono,
      department: formData.departamento,
    };

    onSave(personnelData);
    onClose();

    // Resetear formulario
    setFormData({
      codigo: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      nombres: "",
      numeroDocumento: "",
      estadoCivil: "SOLTERO",
      sexo: "M",
      fechaNacimiento: "",
      peso: "",
      numeroRuc: "",
      numeroLibretaMilitar: "",
      numeroPasaporte: "",
      numeroSSPAFP: "",
      fechaIngreso: new Date().toISOString().split("T")[0],
      tipoEmpleado: "NOMBRADO",
      destacado: false,
      escala: "SP-ES",
      ejecutoria: "",
      profesion: "",
      profesionINEI: "",
      gradoInstruccion: "UNIVERSITARIO",
      numeroColegatura: "",
      estado: "ACTIVO",
      activo: true,
      departamento: "LA LIBERTAD",
      provincia: "TRUJILLO",
      distrito: "TRUJILLO",
      direccion: "",
      interior: "",
      manzana: "",
      lote: "",
      habitacion: "",
      email: "",
      telefono: "",
      telefonoFax: "",
      usuario: "",
      ciaDeposito: "",
      autorizadoEntregaPedidos: false,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden border border-gray-200">
        {/* Header Profesional */}
        <div className="p-6 text-white border-b bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white rounded-lg">
                <img
                  src="/19.07 Logo02.png"
                  alt="Logo Ministerio Público"
                  className="object-contain w-8 h-8"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  Nuevo registro de personal
                </h2>
                <p className="text-sm text-blue-100">
                  Ministerio Público - Sistema Integral de Gestion de Almacenes
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-blue-500 hover:text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-blue-50">
          <div className="px-6 py-3 text-sm font-medium text-blue-900 bg-white border-b-2 border-blue-600">
            Datos Generales
          </div>
          <div className="px-6 py-3 text-sm font-medium text-blue-700">
            Otros Datos
          </div>
          <div className="px-6 py-3 text-sm font-medium text-blue-700">
            Movimientos
          </div>
        </div>

        {/* Content con secciones organizadas */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Sección 1: Datos Generales */}
          <div className="mb-8">
            <div className="flex items-center pb-2 mb-4 space-x-2 border-b border-blue-200">
              <User className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-900">
                Datos Generales
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="codigo" className="font-medium text-blue-800">
                  Código
                </Label>
                <Input
                  id="codigo"
                  value={formData.codigo}
                  onChange={(e) => handleInputChange("codigo", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Auto-generado"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="apellido-paterno"
                  className="font-medium text-blue-800"
                >
                  Apellido Paterno *
                </Label>
                <Input
                  id="apellido-paterno"
                  value={formData.apellidoPaterno}
                  onChange={(e) =>
                    handleInputChange("apellidoPaterno", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="apellido-materno"
                  className="font-medium text-blue-800"
                >
                  Apellido Materno
                </Label>
                <Input
                  id="apellido-materno"
                  value={formData.apellidoMaterno}
                  onChange={(e) =>
                    handleInputChange("apellidoMaterno", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nombres" className="font-medium text-blue-800">
                  Nombres *
                </Label>
                <Input
                  id="nombres"
                  value={formData.nombres}
                  onChange={(e) => handleInputChange("nombres", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="numero-documento"
                  className="font-medium text-blue-800"
                >
                  DNI *
                </Label>
                <Input
                  id="numero-documento"
                  value={formData.numeroDocumento}
                  onChange={(e) =>
                    handleInputChange("numeroDocumento", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="12345678"
                  maxLength={8}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="estado-civil"
                  className="font-medium text-blue-800"
                >
                  Estado Civil
                </Label>
                <Select
                  value={formData.estadoCivil}
                  onValueChange={(value) =>
                    handleInputChange("estadoCivil", value)
                  }
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SOLTERO">Soltero</SelectItem>
                    <SelectItem value="CASADO">Casado</SelectItem>
                    <SelectItem value="DIVORCIADO">Divorciado</SelectItem>
                    <SelectItem value="VIUDO">Viudo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sexo" className="font-medium text-blue-800">
                  Sexo
                </Label>
                <Select
                  value={formData.sexo}
                  onValueChange={(value) => handleInputChange("sexo", value)}
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="M">Masculino</SelectItem>
                    <SelectItem value="F">Femenino</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="fecha-nacimiento"
                  className="font-medium text-blue-800"
                >
                  Fec. Nacimiento
                </Label>
                <Input
                  id="fecha-nacimiento"
                  type="date"
                  value={formData.fechaNacimiento}
                  onChange={(e) =>
                    handleInputChange("fechaNacimiento", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="peso" className="font-medium text-blue-800">
                  Peso (kg)
                </Label>
                <Input
                  id="peso"
                  value={formData.peso}
                  onChange={(e) => handleInputChange("peso", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="70"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="numero-ruc"
                  className="font-medium text-blue-800"
                >
                  No. RUC
                </Label>
                <Input
                  id="numero-ruc"
                  value={formData.numeroRuc}
                  onChange={(e) =>
                    handleInputChange("numeroRuc", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="libreta-militar"
                  className="font-medium text-blue-800"
                >
                  Libreta Militar
                </Label>
                <Input
                  id="libreta-militar"
                  value={formData.numeroLibretaMilitar}
                  onChange={(e) =>
                    handleInputChange("numeroLibretaMilitar", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Sección 2: Datos Laborales */}
          <div className="mb-8">
            <div className="flex items-center pb-2 mb-4 space-x-2 border-b border-blue-200">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-900">
                Datos Laborales
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <Label
                  htmlFor="fecha-ingreso"
                  className="font-medium text-blue-800"
                >
                  Fecha Ingreso
                </Label>
                <Input
                  id="fecha-ingreso"
                  type="date"
                  value={formData.fechaIngreso}
                  onChange={(e) =>
                    handleInputChange("fechaIngreso", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="tipo-empleado"
                  className="font-medium text-blue-800"
                >
                  Tipo Empleado
                </Label>
                <Select
                  value={formData.tipoEmpleado}
                  onValueChange={(value) =>
                    handleInputChange("tipoEmpleado", value)
                  }
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NOMBRADO">Nombrado</SelectItem>
                    <SelectItem value="CONTRATADO">Contratado</SelectItem>
                    <SelectItem value="PRACTICANTE">Practicante</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2 mt-7">
                <Checkbox
                  id="destacado"
                  checked={formData.destacado}
                  onCheckedChange={(checked) =>
                    handleInputChange("destacado", checked)
                  }
                  className="border-blue-400 data-[state=checked]:bg-blue-600"
                />
                <Label
                  htmlFor="destacado"
                  className="font-medium text-blue-800"
                >
                  Destacado
                </Label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="escala" className="font-medium text-blue-800">
                  Escala
                </Label>
                <Input
                  id="escala"
                  value={formData.escala}
                  onChange={(e) => handleInputChange("escala", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="SP-ES"
                />
              </div>
            </div>
          </div>

          {/* Sección 3: Datos Profesionales */}
          <div className="mb-8">
            <div className="flex items-center pb-2 mb-4 space-x-2 border-b border-blue-200">
              <FileText className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-900">
                Datos Profesionales
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <Label
                  htmlFor="profesion"
                  className="font-medium text-blue-800"
                >
                  Profesión
                </Label>
                <Input
                  id="profesion"
                  value={formData.profesion}
                  onChange={(e) =>
                    handleInputChange("profesion", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="ABOGADO"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="grado-instruccion"
                  className="font-medium text-blue-800"
                >
                  Grado Instruc.
                </Label>
                <Input
                  id="grado-instruccion"
                  value={formData.gradoInstruccion}
                  onChange={(e) =>
                    handleInputChange("gradoInstruccion", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="UNIVERSITARIO"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="numero-colegiatura"
                  className="font-medium text-blue-800"
                >
                  Nro Colegiatura
                </Label>
                <Input
                  id="numero-colegiatura"
                  value={formData.numeroColegatura}
                  onChange={(e) =>
                    handleInputChange("numeroColegatura", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Sección 4: Datos de Contacto */}
          <div className="mb-8">
            <div className="flex items-center pb-2 mb-4 space-x-2 border-b border-blue-200">
              <Phone className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-900">
                Datos de Contacto
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-medium text-blue-800">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="ejemplo@mp.gob.pe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono" className="font-medium text-blue-800">
                  Teléfono
                </Label>
                <Input
                  id="telefono"
                  value={formData.telefono}
                  onChange={(e) =>
                    handleInputChange("telefono", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="987654321"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="usuario" className="font-medium text-blue-800">
                  Usuario
                </Label>
                <Input
                  id="usuario"
                  value={formData.usuario}
                  onChange={(e) => handleInputChange("usuario", e.target.value)}
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500 bg-blue-50"
                  placeholder="Auto-generado"
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Sección 5: Ubicación */}
          <div className="mb-8">
            <div className="flex items-center pb-2 mb-4 space-x-2 border-b border-blue-200">
              <MapPin className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-blue-900">Ubicación</h3>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <Label
                  htmlFor="departamento"
                  className="font-medium text-blue-800"
                >
                  Departamento
                </Label>
                <Select
                  value={formData.departamento}
                  onValueChange={(value) =>
                    handleInputChange("departamento", value)
                  }
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="LA LIBERTAD">La Libertad</SelectItem>
                    <SelectItem value="LIMA">Lima</SelectItem>
                    <SelectItem value="AREQUIPA">Arequipa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="provincia"
                  className="font-medium text-blue-800"
                >
                  Provincia
                </Label>
                <Select
                  value={formData.provincia}
                  onValueChange={(value) =>
                    handleInputChange("provincia", value)
                  }
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TRUJILLO">Trujillo</SelectItem>
                    <SelectItem value="ASCOPE">Ascope</SelectItem>
                    <SelectItem value="PACASMAYO">Pacasmayo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="distrito" className="font-medium text-blue-800">
                  Distrito
                </Label>
                <Select
                  value={formData.distrito}
                  onValueChange={(value) =>
                    handleInputChange("distrito", value)
                  }
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TRUJILLO">Trujillo</SelectItem>
                    <SelectItem value="LA ESPERANZA">La Esperanza</SelectItem>
                    <SelectItem value="VICTOR LARCO">Víctor Larco</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="direccion"
                  className="font-medium text-blue-800"
                >
                  Dirección
                </Label>
                <Input
                  id="direccion"
                  value={formData.direccion}
                  onChange={(e) =>
                    handleInputChange("direccion", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="AV. AMERICA 123"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer profesional */}
        <div className="flex-shrink-0 px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              <p>Fecha de registro: {new Date().toLocaleDateString("es-PE")}</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={onClose}
                className="text-gray-700 border-gray-300 hover:bg-gray-100"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleSave}
                className="text-white bg-blue-600 shadow-lg hover:bg-blue-700"
              >
                <User className="w-4 h-4 mr-2" />
                Guardar Personal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}