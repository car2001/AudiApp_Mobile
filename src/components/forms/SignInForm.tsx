import { StyleSheet, TouchableOpacity, Platform, Pressable } from "react-native";
import { Link } from "expo-router";
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignInSchema, signInSchema } from "@/src/lib/forms/signinValidationSchema";

import { LoginUsuarioRequest } from "@/src/types/auth";
import { View, Text, TextInput } from "../Themed";
import MainStyles from "@/src/styles/styles";
import CustomTextInput from "../CustomTextInput";


interface LoginFormProps {
  handleLogin: (credentials: LoginUsuarioRequest) => Promise<void>;
}

const SignInForm = ({ handleLogin }: LoginFormProps) => {

  const {control, handleSubmit, reset, formState: {errors}} = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const handleReset = () => {
    reset({
      dni: "",
      password:""
    })
  }

  const onSubmit = async (data: SignInSchema) => {
    await handleLogin(data);
    handleReset();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <Controller
        control={control}
        name="dni"
        render={({field:{onChange, value}})=> (
          <CustomTextInput 
            placeholder="DNI"
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
          />
        )}
      />
      <Text style={[styles.forgotPasswordText, {marginTop: 10}]}>¿Olvidaste tu contraseña?</Text>
      <Link href="/signup" asChild>
        <Pressable onPress={()=> handleReset()} >
          {({ pressed }) => (
            <Text 
              style={[styles.forgotPasswordText,{opacity: pressed ? 0.5: 1}]}>
                Registrar Nuevo Usuario
            </Text>
          )}
        </Pressable>
      </Link>
      <TouchableOpacity style={MainStyles.mainButton} onPress={handleSubmit(onSubmit)}>
        <Text style={MainStyles.mainButtonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: Platform.OS === "web" ? "100%" : "auto",
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: "#4CABEB",
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});

export default SignInForm;