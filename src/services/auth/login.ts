import config from "../../utils/config";
import { LoginUsuarioRequest } from "../../types/auth";
import { RESULT_TYPES } from "../../constants/ResulTypesConstants";

const login = async (credentials: LoginUsuarioRequest) => {
    try 
    {
        const response = await fetch(`${config.API_URL}api/Auth/login`,{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(credentials)
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
        console.error("Error login", error);
        throw error;
    }
}

export default { login }