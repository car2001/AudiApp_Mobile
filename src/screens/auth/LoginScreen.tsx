import { StyleSheet, Platform } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

import { View, Text } from "@/src/components/Themed";
import SignInForm from '@/src/components/forms/auth/SignInForm';
import { LoginUsuarioRequest } from "@/src/types/auth";
import Message from '@/src/components/Message';
import { useAuth } from '@/src/context/AuthContext';
import { handleError } from '@/src/utils/errorHandler';

export default function LoginScreen() {

    const {authState, onLogin} = useAuth();
    const [message, setMessage] = useState("")
    const [isError, setIsError] = useState(false);

    const handleLogin = async (credentials: LoginUsuarioRequest): Promise<boolean> => {
        try {
            const oResponse = await onLogin(credentials);
            
            if (oResponse?.data?.isSuccess) {
                router.navigate("/home");
                return true;
            }
        } catch (exception: unknown) {
            const errorMessage = handleError(exception);
            setMessage(errorMessage);
            setIsError(true);
            setTimeout(() => setMessage(""), 5000);
        }
        return false;
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
        width:"90%",
        maxWidth:400
    }
});
