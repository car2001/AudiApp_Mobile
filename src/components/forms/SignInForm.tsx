import { StyleSheet, TouchableOpacity, Platform, Pressable, ActivityIndicator } from "react-native";
import { Link } from "expo-router";
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react";

import { SignInSchema, signInSchema } from "@/src/lib/forms/signinValidationSchema";
import { LoginUsuarioRequest } from "@/src/types/auth";
import { View, Text } from "../Themed";
import MainStyles from "@/src/styles/styles";
import CustomTextInput from "../CustomTextInput";


interface LoginFormProps {
  handleLogin: (credentials: LoginUsuarioRequest) => Promise<boolean>;
}

const  SignInForm = ({ handleLogin }: LoginFormProps) => {

  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    const isSuccess = await handleLogin(data);
    isSuccess && handleReset();
    setIsLoading(false); 
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
            secureTextEntry
          />
        )}
      />
      {/* <PasswordInput /> */}
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
      <TouchableOpacity 
        style={MainStyles.mainButton}
        disabled={isLoading} 
        onPress={handleSubmit(onSubmit)}>
        {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={MainStyles.mainButtonText}>Iniciar Sesión</Text>
          )
        }
      </TouchableOpacity>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Platform.OS === "web" ? "100%" : "auto",
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 50
  },
  forgotPasswordText: {
    color: "#4CABEB",
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 10,
  },
});

export default SignInForm;