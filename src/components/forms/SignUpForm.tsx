import { StyleSheet, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";

import { View, Text } from "../Themed";
import { SignUpScehema, signUpScehema } from "@/src/lib/forms/signUpValidationSchema";
import MainStyles from "@/src/styles/styles";
import CustomTextInput from "@/src/components/CustomTextInput";
import { CreateUsuarioRequest } from "@/src/types/auth";

interface SignUpFormProps {
  handleRegister: (usuario: CreateUsuarioRequest) => Promise<boolean>;
}

export default function SignUpForm ({ handleRegister }: SignUpFormProps ) {

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
      const isSuccess = await handleRegister(data);
      if(isSuccess) handleReset();
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Usuario</Text>
      <Controller
        control={control}
        name="nombre"
        render={({field:{onChange, value}})=> (
          <CustomTextInput 
            placeholder="Nombres"
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
            placeholder="Apellidos"
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
            placeholder="Teléfono"
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
            placeholder="DNI (Usuario de Acceso)"
            value={value}
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
            placeholder="Contraseña"
            value={value}
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
            placeholder="Confirmar Contraseña"
            value={value}
            errors={errors?.passwordConfirm}
            onChangeText={onChange}
            secureTextEntry
          />
        )}
      />
      <TouchableOpacity style={MainStyles.mainButton} onPress={handleSubmit(onSubmit)}>
          <Text style={MainStyles.mainButtonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf:"center",
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 30
  },
  cancelButton: {
    
  }
});