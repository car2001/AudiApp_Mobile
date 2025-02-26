import { z } from "zod"

export const signUpScehema = z.object({
    nombre: z
        .string({required_error: "Los Nombres son obligatorios"})
        .min(1, {message: "Los Nombres son obligatorios"}),
    apellidos: z
        .string({required_error: "Los Apellidos son obligatorios"})
        .min(1, {message: "Los Apellidos son obligatorios"}),
    telefono: z
        .string({required_error: "El Teléfono es obligatorio"})
        .min(1,{message: "El Teléfono es obligatorio"}),
    dni: z
        .string({required_error: "El DNI es obligatorio"})
        .min(1,{message: "El DNI es obligatorio"})
        .regex(/^\d{8}$/, "El DNI debe tener 8 caracteres númericos"),
    password: z
        .string({required_error: "La Contraseña es obligatoria"})
        .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])(?=^\S*$)[0-9a-zA-Z\W]{8,}$/, 
            {message: "La Contraseña debe tener 8+ caracteres, mayúsculas, minúsculas, número y especial"}
        ),
    passwordConfirm: z
        .string({required_error: "Confirmar Contraseña es obligatorio"})
        .min(1,{message:"Confirmar Contraseña es obligatorio"})
        .regex(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])(?=^\S*$)[0-9a-zA-Z\W]{8,}$/, 
            {message: "Confirmar Contraseña debe tener 8+ caracteres, mayúsculas, minúsculas, número y especial"}
        )
})

export type SignUpScehema = z.infer<typeof signUpScehema>;
