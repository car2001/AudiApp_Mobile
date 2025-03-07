import config from "@/src/utils/config";
import { SunatConnectionRequest } from "@/src/types/enterprise";
import { handleApiError } from "@/src/utils/errorHandler";
import { SaveEnterpriseRequest } from "@/src/types/enterprise";

const validateSunatAccess = async({access, token} : {access:SunatConnectionRequest, token:string}) => {
    try
    {
        const response = await fetch(`${config.API_URL}api/Enterprise/validateSunatAccess`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(access),
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

const saveEnterprise = async({enterprise, token}: {enterprise:SaveEnterpriseRequest, token:string}) => {
    try
    {
        const response = await fetch(`${config.API_URL}api/Enterprise`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(enterprise)
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

export default {
    validateSunatAccess,
    saveEnterprise
}