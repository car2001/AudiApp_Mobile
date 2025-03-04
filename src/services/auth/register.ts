import config from "@/src/utils/config"
import { CreateUsuarioRequest } from "@/src/types/auth";
import { handleApiError } from "@/src/utils/errorHandler";

const register = async (usuario: CreateUsuarioRequest) => {
    try 
    {
        const response = await fetch(`${config.API_URL}api/Auth/register`,{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(usuario)
        });

        if (!response.ok) {
            if(response.status === 401)
            {

            }
            const errorData = await response.json();
            handleApiError(errorData); 
        }

        const data = await response.json();
        return data;
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}


export default { register }