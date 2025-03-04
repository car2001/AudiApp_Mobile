import { useState } from "react";

import { ScrollView } from "@/src/components/Themed";
import EnterpriseForm from "@/src/components/forms/EnterpriseForm";
import enterpriseService from "@/src/services/enterprise/enterprise";
import Message from "@/src/components/Message";
import { SunatConnectionRequest } from "@/src/types/enterprise";


export default function MyEnterpriseScreen(){

    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const handleValidateAccess = async({
        access, 
        token
    }: {
        access:SunatConnectionRequest, 
        token:string;
    }) => {

        try
        {
            const response = await enterpriseService.validateSunatAccess({access,token});
            console.log(response);
        }
        catch(exception: any)
        {
            const errorMessage =
            exception instanceof Error
                ? exception.message
                : typeof exception === "string"
                ? exception
                : "Error desconocido. Inténtalo de nuevo.";
            setMessage(errorMessage)
            setIsError(true);
            setTimeout(() => {
                setMessage("");
            },5000)
        }
    }

    return(
        <ScrollView>
            <Message 
                message={message} 
                isError={isError} 
                onClose={() => setMessage("")} 
            />
            <EnterpriseForm 
                handleValidateAccess={handleValidateAccess} 
            />
        </ScrollView>
    )
}