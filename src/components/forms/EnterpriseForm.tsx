import { StyleSheet, Button, Switch } from "react-native";
import { useState } from "react";

import { View, Text, TextInput } from "../Themed";

export default function EnterpriseForm(){

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
        <View style={styles.containerForm}>
            {/* Enterprise Information */}
            <View>
                <Text style={styles.subtitle}>
                    Información de Empresa
                </Text>
                <View style={styles.container}>
                    <TextInput></TextInput>
                    <TextInput></TextInput>
                </View>
                <View style={styles.container}>
                    <TextInput></TextInput>
                    <TextInput></TextInput>
                </View>
                <View style={styles.container}>
                    <TextInput></TextInput>
                </View>
                <View style={styles.container}>
                    <Button title="Validar acceso a SUNAT" />
                    <Switch
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
            {/* Select declarations to monitor */}
            <View>
                <Text style={styles.subtitle}>
                    Seleccionar Declaraciones a Monitorear
                </Text>
                <Text>PLANILLA ELECTRÓNICA</Text>
                <Text>PDT IGV-RENTA MENSUAL-IEV</Text>
            </View>
            {/* Set up notifications of declarations */}
            <View>
                <Text style={styles.subtitle}>
                    Configurar Notificaciones de Declaraciones
                </Text>
                <View style={styles.container}>
                    <Text>Primera notificación antes del vencimiento</Text>
                    <TextInput></TextInput>
                </View>
                <View style={styles.container}>
                    <Text>Segunda notificación antes del vencimiento</Text>
                    <TextInput></TextInput>
                </View>
                <View style={styles.container}>
                    <Text>Día despúes de Vencimiento *</Text>
                    <TextInput></TextInput>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerForm: {
        flex: 1,
        padding: 20,
        justifyContent:"center",
        // alignItems:"center"
    },
    subtitle: {
        fontSize: 14,
        fontWeight: "bold"
    },
    container: {
        flex:1, 
        backgroundColor:"red",
        flexDirection: "row",
        justifyContent:"space-between",
        padding: 10
    }
})