import { StyleSheet } from "react-native";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { View, Text } from "../Themed";
import CustomTextInput from "../CustomTextInput";
import CheckBox from "../CheckBox";
import MainStyles from "@/src/styles/styles";
import CustomButton from "../CustomButton";
import Label from "../Label";
import { EnterpriseSchema, enterpiseSchema } from "@/src/lib/forms/enterpriseSchema";
import { SunatSchema, sunatSchema } from "@/src/lib/forms/sunatSchema"; 

export default function EnterpriseForm(){

    const [isLoading, setIsLoading] = useState(false);
    const [declarations, setDeclarations] = useState<string[]>([]);

    const {
        control, 
        handleSubmit, 
        reset, 
        formState: {errors}
    } = useForm<EnterpriseSchema>({
        resolver: zodResolver(enterpiseSchema)
    });

    const {
        control: sunatControl, 
        handleSubmit: sunatHandleSubmit, 
        reset: sunatReset, 
        formState:{errors: sunatErrors }
    } = useForm<SunatSchema>({
        resolver: zodResolver(sunatSchema)
    });

    const onSaveEmpresa = async () => {
        setIsLoading(true);
        setIsLoading(false);
    }

    const onValidateSUNAT = async (data: SunatSchema) => {
        setIsLoading(true);
        setIsLoading(false);
    };

    return(
        <View style={styles.containerForm}>
            {/* Enterprise Information */}
            <View>
                <Text style={styles.subtitle}>
                    Información de Empresa
                </Text>
                <View style={styles.container}>
                    <Controller 
                        control={sunatControl}
                        name="usuarioSunat"
                        render={({field:{onChange, value}}) => (
                            <CustomTextInput
                                label="Usuario SUNAT"
                                value={value}
                                onChangeText={onChange}
                                required={true}
                                styleContainer={styles.inputContainer}
                                errors={sunatErrors.usuarioSunat}
                            />
                        )}
                    />
                    <Controller 
                        control={sunatControl}
                        name="claveSunat"
                        render={({field:{onChange, value}}) => (
                            <CustomTextInput
                                label="Clave SUNAT"
                                value={value}
                                onChangeText={onChange}
                                required={true}
                                styleContainer={styles.inputContainer}
                                errors={sunatErrors.claveSunat}
                            />
                        )}
                    />
                </View>
                <View style={styles.container}>
                    <Controller 
                        control={sunatControl}
                        name="ruc"
                        render={({field:{onChange, value}}) => (
                            <CustomTextInput 
                                label="RUC"
                                value={value}
                                onChangeText={onChange}
                                required={true}
                                styleContainer={styles.inputContainer}
                                errors={sunatErrors.ruc}
                            />
                        )}
                    />
                    <Controller 
                        control={sunatControl}
                        name="razonSocial"
                        render={({field:{onChange, value}}) => (
                            <CustomTextInput 
                                label="Razón Social"
                                value={value}
                                editable={false}
                                onChangeText={onChange}
                                styleContainer={styles.inputContainer}
                            />
                        )}
                    />
                </View>
                <Controller
                    control={sunatControl}
                    name="email"
                    render={({field:{onChange,value}}) => (
                        <CustomTextInput 
                            label="Correo Electrónico"
                            value={value}
                            onChangeText={onChange}
                            required={true}
                            errors={sunatErrors.email}
                        />
                    )}
                />
                <CustomButton
                    isLoading={isLoading}
                    onPress={sunatHandleSubmit(onValidateSUNAT)}
                    text="Validar acceso a SUNAT"
                    styleButton={[MainStyles.mainButton]}
                    styleButtonText={MainStyles.mainButtonText}>
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
                        <Controller 
                            control={control}
                            name="primera_notificacion_vencimiento"
                            render={({field:{onChange,value}}) => (
                                <CustomTextInput
                                    value={value}
                                    onChangeText={onChange}
                                    placeholder="Nro. de días"
                                    errors={errors.primera_notificacion_vencimiento}
                                />
                            )}
                        />
                    </View>
                </View>
                <View style={styles.containerNotificatons}>
                    <View style={{width: "50%"}}>
                        <Label label="Segunda notificación antes del vencimiento"/>
                    </View>
                    <View style={{width: "50%"}}>
                        <Controller 
                            control={control}
                            name="segunda_notificacion_vencimiento"
                            render={({field:{onChange, value}}) => (
                                <CustomTextInput
                                    value={value}
                                    onChangeText={onChange}
                                    placeholder="Nro. de días"
                                    errors={errors.segunda_notificacion_vencimiento}
                                />
                            )}
                        />
                    </View>
                </View>
                <View style={styles.containerNotificatons}>
                    <View style={{width: "50%"}}>
                        <Label label="Día despúes de vencimiento" required/>
                    </View>
                    <View style={{width: "50%"}}>
                        <Controller 
                            control={control}
                            name="dia_despues_vencimiento"
                            render={({field:{onChange,value}})=> (
                                <CustomTextInput
                                    value={value}
                                    onChangeText={onChange}
                                    placeholder="Nro. de días"
                                    errors={errors.dia_despues_vencimiento}
                                />
                            )}
                        />
                    </View>
                </View>
                <CustomButton
                    isLoading={isLoading}
                    onPress={handleSubmit(onSaveEmpresa)}
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