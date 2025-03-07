export interface SunatConnectionRequest {
    usuarioSunat: string;
    claveSunat: string;
    ruc: string;
}

export interface SaveEnterpriseRequest {
    usuarioSunat: string;
    claveSunat: string;
    ruc: string;
    razonSocial: string;
    email: string;
    PrimeraNotificacionVencimiento: number;
    SegundaNotificacionVencimiento: number;
    DiaDespuesVencimiento: number;
    declaraciones: string[];
}