import { StyleSheet } from "react-native";
import { Stack , router} from "expo-router";
import { useState } from "react";

import { ScrollView, View } from "@/src/components/Themed";
import SignUpForm from "@/src/components/forms/auth/SignUpForm";
import { CreateUsuarioRequest } from "@/src/types/auth";
import Message from "@/src/components/Message";
import { useAuth } from "@/src/context/AuthContext";

const SignUpScreen = () => {
    
    const {onRegister} = useAuth();
    const [message, setMessage] = useState("")
    const [isError, setIsError] = useState(true);

    const handleRegister = async(usuario: CreateUsuarioRequest): Promise<boolean> => {
        let isSuccessRegister = false;
        try
        {
            const oResponse = await onRegister(usuario);
            if (oResponse?.data){
                const {isSuccess} = oResponse.data;
                isSuccessRegister = isSuccess;
                if(isSuccessRegister){
                    router.navigate("/MiEmpresa");   
                }
            }
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
        return isSuccessRegister;
    }
    
    return (
        <>
            <Stack.Screen options={{ title: '' }} />
            <ScrollView style={styles.screen}>
                <View style={{ flex: 1, marginTop: 30, alignSelf:"center" }}>
                    <Message message={message} isError={isError} onClose={() => setMessage("")} />
                    <SignUpForm handleRegister={handleRegister}/>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});


export default SignUpScreen;