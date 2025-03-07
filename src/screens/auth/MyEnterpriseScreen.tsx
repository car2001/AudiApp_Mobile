import { useState } from "react";
import { StyleSheet } from "react-native";

import { ScrollView, View } from "@/src/components/Themed";
import EnterpriseForm from "@/src/components/forms/EnterpriseForm";
import enterpriseService from "@/src/services/enterprise/enterprise";
import Message from "@/src/components/Message";
import { SunatConnectionRequest } from "@/src/types/enterprise";
import { handleError } from "@/src/utils/errorHandler";
import { SaveEnterpriseRequest } from "@/src/types/enterprise";


export default function MyEnterpriseScreen(){

    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [razonSocial, setRazonSocial] = useState("");
    const [isValidConnection, setIsValidConnection] = useState(false);

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
            if(response?.data?.isSuccesLogin){
                const {data: {isSuccesLogin, razonSocial }, message} = response;
                setRazonSocial(razonSocial);
                setIsValidConnection(isSuccesLogin);
                setIsError(false);
                setMessage(message)
                setTimeout(() => setMessage(""), 5000);
            }
        }
        catch(exception: any)
        {
            const errorMessage = handleError(exception);
            setMessage(errorMessage);
            setIsError(true);
            setTimeout(() => setMessage(""), 5000);
        }
    };

    const handleSaveEnterprise = async({
        enterprise, 
        token
    }: {
        enterprise:SaveEnterpriseRequest, 
        token:string
    }) => {

        try 
        {
            const response = await enterpriseService.saveEnterprise({enterprise, token});
            const {message, data: {}} = response;
            setIsError(false);
            setMessage(message)
            setTimeout(() => setMessage(""), 5000);
        } 
        catch(exception: any) 
        {
            const errorMessage = handleError(exception);
            setMessage(errorMessage);
            setIsError(true);
            setTimeout(() => setMessage(""), 5000);
        }

    };

    return(
        <ScrollView style={styles.screen}>
            <View style={styles.containerLogin}>
                <Message 
                    message={message} 
                    isError={isError} 
                    onClose={() => setMessage("")} 
                />
                <EnterpriseForm 
                    handleValidateAccess={handleValidateAccess}
                    razonSocial={razonSocial}
                    isValidConnection={isValidConnection}
                    handleSaveEnterprise={handleSaveEnterprise}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    containerLogin: {
        width: "90%",
        maxWidth: 800,
        flex: 1, 
        marginTop: 30, 
        alignSelf:"center"
    }
});