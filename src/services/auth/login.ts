import config from "../../utils/config";
import { LoginUsuarioRequest } from "../../types/auth";
import { handleApiError } from "@/src/utils/errorHandler";

const login = async (credentials: LoginUsuarioRequest) => {
    try 
    {
        const response = await fetch(`${config.API_URL}api/Auth/login`,{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(credentials)
        });

        if (!response.ok) {
            const errorData = await response.json();
            handleApiError(errorData); 
        }

        const data = await response.json();
        return data;
        
    }
    catch(error)
    {
        console.error(error);
        throw error;
    }
}

export default { login }