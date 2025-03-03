import { StyleSheet, Platform } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

import { View, Text } from "@/src/components/Themed";
import SignInForm from '@/src/components/forms/auth/SignInForm';
import { LoginUsuarioRequest } from "@/src/types/auth";
import loginService from "@/src/services/auth/login";
import Message from '@/src/components/Message';

export default function LoginScreen() {

    const [message, setMessage] = useState("")
    const [isError, setIsError] = useState(true);

    const handleLogin = async (credentials: LoginUsuarioRequest): Promise<boolean> => {
        let isSuccesLogin = false;
        try
        {
            const oResponse = await loginService.login(credentials);
            if(oResponse?.data){
                const {isSuccess} = oResponse.data;
                if (isSuccess) {
                    isSuccesLogin = isSuccess
                    router.navigate("/home")   
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
        return isSuccesLogin;
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Text style={styles.logoText}>
                    AUDITA
                </Text>
            </View>
            <View style={styles.containerLogin}>
                <Message message={message} isError={isError} onClose={() => setMessage("")} />
                <SignInForm handleLogin={handleLogin} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: Platform.OS === "web" ? "center": undefined,
    },
    containerLogo: {
        alignItems: "center",
        justifyContent: "center",
        height: Platform.OS === "web" ? "20%" : "25%" ,
    },
    logoText: {
        color: "#5964E8",
        fontSize: 50,
        fontWeight: "bold",
    },
    containerLogin: {
        flex: 1,
        marginHorizontal:15,
    }
});
