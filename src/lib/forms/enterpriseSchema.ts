import { z } from "zod";

export const enterpiseSchema = z.object({
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
        .string({required_error: "La Razón Social es obligatoria"})
        .min(1, {message: "La Razón Social es obligatoria"}),
    email: z
        .string({required_error: "El Correo Electrónico es obligatorio"})
        .min(1,{message:"El Correo Electrónico es obligatorio"}),
    primera_notificacion_vencimiento: z
        .string({required_error:"La Primera notificación antes del vencimiento es obligatoria"})
        .min(1,{message:"La Primera notificación antes del vencimiento es obligatoria"}),
    segunda_notificacion_vencimiento: z
        .string({required_error:"La Segunda notificación antes del vencimiento es obligatoria"})
        .min(1,{message:"La Segunda notificación antes del vencimiento es obligatoria"}),
    dia_despues_vencimiento: z
        .string({required_error:"El Día despúes de vencimiento es obligatorio"})
        .min(1,{message:"El Día despúes de vencimiento es obligatorio"}),
});

export type EnterpriseSchema = z.infer<typeof enterpiseSchema>