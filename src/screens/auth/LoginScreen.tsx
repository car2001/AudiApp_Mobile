import { StyleSheet, Platform } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

import { View, Text } from "@/src/components/Themed";
import SignInForm from '@/src/components/forms/SignInForm';
import { LoginUsuarioRequest } from "@/src/types/auth";
import loginService from "@/src/services/login";
import Message from '@/src/components/Message';

export default function LoginScreen() {

    const [message, setMessage] = useState("")
    const [isError, setIsError] = useState(true);

    const handleLogin = async (credentials: LoginUsuarioRequest) => {
        try
        {
            const oResponse = await loginService.login(credentials);
            console.log(oResponse);
            router.replace("/two")
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
        }
    };

    const handleCloseMessage = () => {
        setMessage(""); // Ocultar mensaje
    };


    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Text style={styles.logoText}>
                    AUDITA
                </Text>
            </View>
            <View style={styles.containerLogin}>
                <Message message={message} isError={isError} onClose={handleCloseMessage} />
                <SignInForm handleLogin={handleLogin} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
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
        textShadowColor: "#5964E8", // Color de la sombra
    },
    containerLogin: {
        flex:1,
        borderRadius: 20,
        height: "auto",
        marginHorizontal:15
    }
});
