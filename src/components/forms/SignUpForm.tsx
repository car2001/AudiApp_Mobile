import { StyleSheet, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";

import { TextInput, View, Text } from "../Themed";
import { SignUpScehema, signUpScehema } from "@/src/lib/forms/signUpValidationSchema";
import MainStyles from "@/src/styles/styles";
import CustomTextInput from "@/src/components/CustomTextInput";

export default function SignUpForm () {

  const {control, handleSubmit, reset, formState:{errors}} = useForm<SignUpScehema>({
    resolver: zodResolver(signUpScehema)
  });

  const onSubmit = (data:SignUpScehema) => {
    // router.navigate("/+not-found")
    console.log(data);
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Registrar un Usuario</Text>
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
    marginTop: 30,
    marginBottom: 10,
  },
  cancelButton: {
    
  }
});