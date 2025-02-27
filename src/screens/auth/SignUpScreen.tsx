import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { useState } from "react";

import { ScrollView, View } from "@/src/components/Themed";
import SignUpForm from "@/src/components/forms/SignUpForm";
import { CreateUsuarioRequest } from "@/src/types/auth";
import registerService from "@/src/services/auth/register";
import Message from "@/src/components/Message";

const SignUpScreen = () => {
    
    const [message, setMessage] = useState("")
    const [isError, setIsError] = useState(true);

    const handleRegister = async(usuario: CreateUsuarioRequest): Promise<boolean> => {
        let isSuccessRegister = false;
        try
        {
            const oResponse = await registerService.register(usuario);
            if(oResponse?.data){
                const {isSuccess} = oResponse.data;
                isSuccessRegister = isSuccess;
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
                <View style={{ flex: 1, marginTop: 30 }}>
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