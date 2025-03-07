import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
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
import { SunatConnectionRequest, SaveEnterpriseRequest } from "@/src/types/enterprise";
import { useAuth } from "@/src/context/AuthContext";

interface EnterpriseFormProps {
    handleValidateAccess: ({access, token}: {access:SunatConnectionRequest; token:string;}) => Promise<void>;
    razonSocial: string;
    isValidConnection: boolean;
    handleSaveEnterprise: ({enterprise, token}: {enterprise:SaveEnterpriseRequest, token:string}) => Promise<void>;
}

export default function EnterpriseForm({handleValidateAccess, razonSocial, isValidConnection, handleSaveEnterprise}: EnterpriseFormProps){

    const { authState } = useAuth();
    const token = authState.token || "";
    const [isLoadingSave, setIsLoadingSave] = useState(false);
    const [isLoadingValidate, setIsLoadingValidate] = useState(false);

    const enterpriseDefaultValues = {
        primera_notificacion_vencimiento: "3"
    };

    const {
        control, 
        handleSubmit, 
        reset,
        getValues,
        formState: {errors}
    } = useForm<EnterpriseSchema>({
        resolver: zodResolver(enterpiseSchema),
        defaultValues: enterpriseDefaultValues
    });

    const {
        control: sunatControl, 
        handleSubmit: sunatHandleSubmit, 
        reset: sunatReset, 
        formState:{errors: sunatErrors }
    } = useForm<SunatSchema>({
        resolver: zodResolver(sunatSchema)
    });

    const onSaveEmpresa = async (data: EnterpriseSchema) => {
        setIsLoadingSave(true);
        const enterprise: SaveEnterpriseRequest = {
            ...data,
            razonSocial,
            PrimeraNotificacionVencimiento: Number(data.primera_notificacion_vencimiento),
            SegundaNotificacionVencimiento: Number(data.segunda_notificacion_vencimiento),
            DiaDespuesVencimiento: Number(data.dia_despues_vencimiento),
        }
        await handleSaveEnterprise({enterprise, token})
        setIsLoadingSave(false);
    }

    const onValidateSUNAT = async (access: SunatSchema) => {
        setIsLoadingValidate(true);
        await handleValidateAccess({access:access, token});
        const sunatValues = {
            usuarioSunat: access.usuarioSunat,
            claveSunat: access.claveSunat,
            ruc: access.ruc,
        };
        reset(sunatValues);
        setIsLoadingValidate(false);
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
                                editable={!isValidConnection}
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
                                editable={!isValidConnection}
                                label="Clave SUNAT"
                                value={value}
                                secureTextEntry
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
                                editable={!isValidConnection}
                                label="RUC"
                                keyboardType="numeric"
                                value={value}
                                onChangeText={onChange}
                                required={true}
                                styleContainer={styles.inputContainer}
                                errors={sunatErrors.ruc}
                            />
                        )}
                    />
                    <CustomTextInput 
                        label="Razón Social"
                        value={razonSocial}
                        editable={false}
                        styleContainer={styles.inputContainer}
                    />
                </View>
                <CustomButton
                    isLoading={isLoadingValidate}
                    disabled={isValidConnection}
                    onPress={sunatHandleSubmit(onValidateSUNAT)}
                    text="Validar acceso a SUNAT"
                    styleButton={[MainStyles.mainButton]}
                    styleButtonText={MainStyles.mainButtonText}>
                    <MaterialCommunityIcons 
                        name="connection" 
                        size={16} 
                    />
                </CustomButton>
                <Controller
                    control={control}
                    name="email"
                    render={({field:{onChange,value}}) => (
                        <CustomTextInput 
                            label="Correo Electrónico"
                            value={value}
                            keyboardType="email-address"
                            onChangeText={onChange}
                            required={true}
                            errors={errors.email}
                        />
                    )}
                />
            </View>
            <View>
                <Text style={styles.subtitle}>
                    Seleccionar Declaraciones a Monitorear
                </Text>
                {/* <CheckBox
                    options={[
                        {label: "PLANILLA ELECTRÓNICA", value: "PLANILLA ELECTRÓNICA"},
                        {label: "PDT IGV-RENTA MENSUAL-IEV", value: "PDT IGV-RENTA MENSUAL-IEV"}
                    ]}
                    checkedValues={declarations}
                    onChange={setDeclarations}
                /> */}
                <Controller
                    control={control}
                    name="declaraciones"
                    render={({ field: { onChange, value } }) => (
                        <View>
                            <CheckBox
                                options={[
                                    { label: "PLANILLA ELECTRÓNICA", value: "601" },
                                    { label: "PDT IGV-RENTA MENSUAL-IEV", value: "621" }
                                ]}
                                checkedValues={value || []}
                                onChange={onChange}
                            />
                            {errors.declaraciones && (
                                <Text style={{ color: 'red', marginTop: 5 }}>
                                    {errors.declaraciones.message}
                                </Text>
                            )}
                        </View>
                    )}
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
                                    keyboardType="numeric"
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
                                    keyboardType="numeric"
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
                                    keyboardType="numeric"
                                    onChangeText={onChange}
                                    placeholder="Nro. de días"
                                    errors={errors.dia_despues_vencimiento}
                                />
                            )}
                        />
                    </View>
                </View>
                <CustomButton
                    isLoading={isLoadingSave}
                    disabled={!isValidConnection}
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
        alignSelf:"center",
        width: "100%"
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