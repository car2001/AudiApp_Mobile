import config from "@/src/utils/config"
import { RESULT_TYPES } from "@/src/constants/ResulTypesConstants"
import { CreateUsuarioRequest } from "@/src/types/auth";

const register = async (usuario: CreateUsuarioRequest) => {
    try 
    {
        const response = await fetch(`${config.API_URL}api/Auth/register`,{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(usuario)
        });
        const data = await response.json();
        if(!response.ok){
            if(data?.resultType === RESULT_TYPES.ERROR){
                throw new Error(data?.error?.message)
            }
            if(data?.message){
                throw new Error(data?.message);
            }
        }
        else{
            return data;
        }
    }
    catch(error)
    {
        console.log(error);
        throw error;
    }
}


export default { register }