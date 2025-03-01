import { StyleSheet } from "react-native";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { View, Text } from "../Themed";
import CustomTextInput from "../CustomTextInput";
import CheckBox from "../CheckBox";
import MainStyles from "@/src/styles/styles";
import CustomButton from "../CustomButton";
import Label from "../Label";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

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
                >
                    <MaterialCommunityIcons 
                        name="connection" 
                        size={16} 
                    />
                </CustomButton>
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
                    <View style={{width: "50%"}}>
                        <Label label="Primera notificación antes del vencimiento"/>
                    </View>
                    <View style={{width: "50%"}}>
                        <CustomTextInput
                            value=""
                            onChangeText={()=>{}}
                            placeholder="Nro. de días"
                        />
                    </View>
                </View>
                <View style={styles.containerNotificatons}>
                    <View style={{width: "50%"}}>
                        <Label label="Segunda notificación antes del vencimiento"/>
                    </View>
                    <View style={{width: "50%"}}>
                        <CustomTextInput
                            value=""
                            onChangeText={()=>{}}
                            placeholder="Nro. de días"
                        />
                    </View>
                </View>
                <View style={styles.containerNotificatons}>
                    <View style={{width: "50%"}}>
                        <Label label="Día despúes de vencimiento" required/>
                    </View>
                    <View style={{width: "50%"}}>
                        <CustomTextInput
                            value=""
                            onChangeText={()=>{}}
                            placeholder="Nro. de días"
                        />
                    </View>
                </View>
                <CustomButton
                    isLoading={isLoading}
                    onPress={() => {}}
                    text="Guardar"
                    styleButton={[MainStyles.mainButton, {marginBottom: 15}]}
                    styleButtonText={MainStyles.mainButtonText}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerForm: {
        flex:1,
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