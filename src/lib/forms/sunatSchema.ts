import { z } from "zod";

export const sunatSchema = z.object({
    usuarioSunat: z
        .string({required_error:"El Usuario SUNAT es obligatorio"})
        .min(1,{message:"El Usuario SUNAT es obligatorio"}),
    claveSunat: z
        .string({required_error:"La Clave SUNAT es obligatoria"})
        .min(1, {message:"La Clave SUNAT es obligatoria" }),
    ruc: z
        .string({required_error:"El RUC es obligatorio"})
        .min(1, {message:"El RUC es obligatorio"})
        .regex(/^\d{10,11}$/, { message: "El RUC debe tener 10 o 11 dígitos" })
        .refine(value => value.length === 10 || value.length === 11, {
            message: "El RUC debe tener 10 o 11 dígitos",
          }),
    razonSocial: z
        .string()
        .optional()
});

export type SunatSchema = z.infer<typeof sunatSchema>