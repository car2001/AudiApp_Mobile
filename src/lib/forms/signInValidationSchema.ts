import { z } from "zod"

export const signInSchema = z.object({
  dni: z
    .string({required_error: "El DNI es obligatorio"})
    .min(1, {message: "El DNI es obligatorio"})
    .regex(/^\d{8}$/, "El DNI debe tener 8 caracteres númericos"),
  password: z
    .string({required_error: "La Contraseña es obligatoria"})
    .min(1, {message: "La Contraseña es obligatoria"})
})

export type SignInSchema = z.infer<typeof signInSchema>;
