import { StyleSheet, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { View, Text } from "../../Themed";
import { SignUpScehema, signUpScehema } from "@/src/lib/forms/signUpValidationSchema";
import MainStyles from "@/src/styles/styles";
import CustomTextInput from "@/src/components/CustomTextInput";
import { CreateUsuarioRequest } from "@/src/types/auth";
import CustomButton from "../../CustomButton";

interface SignUpFormProps {
  handleRegister: (usuario: CreateUsuarioRequest) => Promise<boolean>;
}

export default function SignUpForm ({ handleRegister }: SignUpFormProps ) {

  const [isLoading, setIsLoading] = useState(false);

  const {control, handleSubmit, reset, formState:{errors}} = useForm<SignUpScehema>({
    resolver: zodResolver(signUpScehema)
  });

  const handleReset = () => {
    reset({
      nombre: "",
      apellidos: "",
      telefono:"",
      dni: "",
      password:"",
      passwordConfirm:""
    })
  }

  const onSubmit = async (data:SignUpScehema) => {
    setIsLoading(true);
    const isSuccess = await handleRegister(data);
    if(isSuccess) handleReset();
    setIsLoading(false);
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Usuario</Text>
      <Controller
        control={control}
        name="nombre"
        render={({field:{onChange, value}})=> (
          <CustomTextInput 
            label="Nombres"
            required={true}
            value={value}
            errors={errors?.nombre}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="apellidos"
        render={({field:{onChange, value}})=> (
          <CustomTextInput 
            label="Apellidos"
            required={true}
            value={value}
            errors={errors?.apellidos}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="telefono"
        render={({field:{onChange, value}})=> (
          <CustomTextInput 
            label="Teléfono"
            required={true}
            value={value}
            errors={errors?.telefono}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="dni"
        render={({field:{onChange, value}})=> (
          <CustomTextInput 
            label="DNI (Usuario de Acceso)"
            value={value}
            required={true}
            errors={errors?.dni}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({field:{onChange, value}})=> (
          <CustomTextInput 
            label="Contraseña"
            value={value}
            required={true}
            errors={errors?.password}
            onChangeText={onChange}
            secureTextEntry
          />
        )}
      />
      <Controller
        control={control}
        name="passwordConfirm"
        render={({field:{onChange, value}})=> (
          <CustomTextInput 
            label="Confirmar Contraseña"
            value={value}
            required={true}
            errors={errors?.passwordConfirm}
            onChangeText={onChange}
            secureTextEntry
          />
        )}
      />
      <CustomButton
        onPress={handleSubmit(onSubmit)}
        isLoading={isLoading}
        styleButton={MainStyles.mainButton}
        styleButtonText={MainStyles.mainButtonText}
        text="Registrarse"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf:"center",
    width:"100%",
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf:"center"
  },
  cancelButton: {
    
  }
});