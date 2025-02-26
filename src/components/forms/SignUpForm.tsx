import { StyleSheet, TouchableOpacity } from "react-native";

import { TextInput, View, Text } from "../Themed";
import MainStyles from "@/src/styles/styles";

export default function SignUpForm () {

    const handleSubmit = () => {

    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Registrar un Usuario</Text>
            <TextInput
                placeholder="Nombres"
            />
            <TextInput
                placeholder="Apellidos"
            />
            <TextInput
                placeholder="Teléfono"
            />
            <TextInput
                placeholder="DNI (Usuario de Acceso)"
            />
            <TextInput
                placeholder="Contraseña"
                secureTextEntry
            />
            <TextInput
                placeholder="Confirmar Contraseña"
                secureTextEntry
            />
            <View style={{ flexDirection: "row", justifyContent:"space-evenly", gap: 20, } }>
                <TouchableOpacity style={MainStyles.mainButton} onPress={handleSubmit}>
                    <Text style={MainStyles.mainButtonText}>Registrarse</Text>
                </TouchableOpacity>
                <TouchableOpacity style={MainStyles.mainButton} onPress={handleSubmit}>
                    <Text style={MainStyles.mainButtonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent:"center",
        alignSelf:"center",
        justifyContent:"center"
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        padding: 10
    }
});