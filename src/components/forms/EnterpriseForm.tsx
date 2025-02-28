import { StyleSheet, Button, Switch } from "react-native";
import { useState } from "react";

import { View, Text, TextInput } from "../Themed";
import CustomTextInput from "../CustomTextInput";
import CheckBox from "../CheckBox";
import MainStyles from "@/src/styles/styles";
import CustomButton from "../CustomButton";
import Label from "../Label";

export default function EnterpriseForm(){

    const [isEnabled, setIsEnabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [declarations, setDeclarations] = useState<string[]>([]);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
        <View style={styles.containerForm}>
            {/* Enterprise Information */}
            <View>
                <Text style={styles.subtitle}>
                    Información de Empresa
                </Text>
                <View style={styles.container}>
                    <CustomTextInput
                        label="Usuario SUNAT"
                        value=""
                        onChangeText={()=>{}}
                        required={true}
                        styleContainer={styles.inputContainer}
                    />
                    <CustomTextInput
                        label="Clave SUNAT"
                        value=""
                        onChangeText={()=>{}}
                        required={true}
                        styleContainer={styles.inputContainer}
                    />
                </View>
                <View style={styles.container}>
                    <CustomTextInput 
                        label="RUC"
                        value=""
                        onChangeText={()=>{}}
                        required={true}
                        styleContainer={styles.inputContainer}
                    />
                    <CustomTextInput 
                        label="Razón Social"
                        value=""
                        onChangeText={()=>{}}
                        required={true}
                        styleContainer={styles.inputContainer}
                    />
                </View>
                <CustomTextInput 
                    label="Correo Electrónico"
                    value=""
                    onChangeText={()=>{}}
                    required={true}
                />
                <CustomButton
                    isLoading={isLoading}
                    onPress={() => {}}
                    text="Validar acceso a SUNAT"
                    styleButton={[MainStyles.mainButton]}
                    styleButtonText={MainStyles.mainButtonText}
                />
            </View>
            <View>
                <Text style={styles.subtitle}>
                    Seleccionar Declaraciones a Monitorear
                </Text>
                <CheckBox
                    options={[
                        {label: "PLANILLA ELECTRÓNICA", value: "PLANILLA ELECTRÓNICA"},
                        {label: "PDT IGV-RENTA MENSUAL-IEV", value: "PDT IGV-RENTA MENSUAL-IEV"}
                    ]}
                    checkedValues={declarations}
                    onChange={setDeclarations}
                />
            </View>
            {/* Set up notifications of declarations */}
            <View>
                <Text style={styles.subtitle}>
                    Configurar Notificaciones de Declaraciones
                </Text>
                <View style={styles.containerNotificatons}>
                    <View style={{width: "60%"}}>
                        <Label label="Primera notificación antes del vencimiento"/>
                    </View>
                    <CustomTextInput
                        value=""
                        onChangeText={()=>{}}
                    />
                </View>
                <View style={styles.containerNotificatons}>
                    <View style={{width: "60%"}}>
                        <Label label="Segunda notificación antes del vencimiento"/>
                    </View>
                    <CustomTextInput
                        value=""
                        onChangeText={()=>{}}
                    />
                </View>
                <View style={styles.containerNotificatons}>
                    <View style={{width: "60%"}}>
                        <Label label="Día despúes de Vencimiento" required/>
                    </View>
                    <CustomTextInput
                        value=""
                        onChangeText={()=>{}}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerForm: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent:"center",
        alignSelf:"center",
    },
    subtitle: {
        fontSize: 14,
        fontWeight: "bold",
        marginVertical: 15
    },
    container: {
        flex: 1,
        flexDirection: "row",
        padding : 5,
        justifyContent:"space-between",
    },
    containerNotificatons: {
        flexDirection: "row",
        padding : 5,
        gap: 10,
        alignItems:"center",
    },
    inputContainer: {
        width: "48%",
    }
})