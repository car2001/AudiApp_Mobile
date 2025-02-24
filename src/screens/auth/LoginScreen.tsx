import { View, Text } from "@/src/components/Themed";
import LoginForm from '@/src/components/forms/LoginForm';
import { StyleSheet, Platform } from 'react-native';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Text style={styles.logoText}>
                    FINEFIS
                </Text>
            </View>
            <View style={styles.containerLogin}>
                <LoginForm />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F7F7",
        justifyContent: "center",
        alignItems: Platform.OS === "web" ? "center": undefined,
    },
    containerLogo: {
        backgroundColor: "#F7F7F7",
        alignItems: "center",
        justifyContent: "center",
        height: "25%",
    },
    logoText: {
        color: "#5964E8",
        fontSize: 50,
        fontWeight: "bold"
    },
    containerLogin: {
        flex:1,
        borderRadius: 20,
        height: "auto",
        backgroundColor: "#F7F7F7",
    }
});
