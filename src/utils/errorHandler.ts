import { RESULT_TYPES } from "@/src/constants/ResulTypesConstants";

export const handleApiError = (errorData: any) => {
    if (errorData?.resultType === RESULT_TYPES.ERROR) {
        throw new Error(errorData?.error?.message || "Ocurrio un error desconocido.");
    }

    if (errorData?.message) {
        throw new Error(errorData?.message);
    }

    throw new Error("Ocurrio un error desconocido.");
};

export const handleError = (exception: unknown) => {
    const errorMessage =
        exception instanceof Error
            ? exception.message
            : typeof exception === "string"
            ? exception
            : "Error desconocido. Inténtalo de nuevo.";

    return errorMessage;
};