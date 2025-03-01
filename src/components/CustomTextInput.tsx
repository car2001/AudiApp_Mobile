import { FieldError } from "react-hook-form";
import { StyleSheet, StyleProp, TextStyle } from "react-native";

import { View, TextInput, Text, TextError } from "./Themed"
import PasswordInput from "./PasswordInput";
import { useColorScheme } from './useColorScheme';
import MainStyles from "../styles/styles";
import Colors from "../constants/Colors";
import Label from "./Label";

type CustomTextInputProps = {
	label?: string;
	placeholder?:string;
	value: string;
	required?: boolean;
	errors?: FieldError;
	onChangeText: (...event: any[]) => void;
	secureTextEntry?: boolean;
	styleInput?: StyleProp<TextStyle>;
	styleContainer?: object;
}

const CustomTextInput = ({
	label,
	placeholder,
	value,
	required = false,
	errors,
	onChangeText,
	secureTextEntry = false,
	styleInput,
	styleContainer,
}: CustomTextInputProps) => {

  const theme = useColorScheme() ?? 'light';
  const errorColor = Colors[theme]["errorColor"];
  const borderInputColor = Colors[theme]["borderInputColor"];
  const labelColor = Colors[theme]["labelColor"];

  
//   const handleChange = (text: string) => {
//     // Validación: solo permitir números y el punto decimal
//     if (/^\d*\.?\d*$/.test(text)) {
//       onChangeText(text);  // Llama a onChange de React Hook Form
//     }
//   };

  return(
	<View style={[styles.container, styleContainer]}>
		{label ? 
			(
				<Label 
					label={label}
					style={[styles.label, {color: labelColor}]} 
					required={required}
				/>
			) : null}
		{!secureTextEntry ? (
			<TextInput
			value={value || ""}
			onChangeText={onChangeText}
			placeholder={placeholder}
			// editable={false}
			// onKeyPress={handleKeyPress}
			// keyboardType="numeric"
			secureTextEntry={secureTextEntry}
			style={[{borderColor: errors ? errorColor: borderInputColor}, styleInput]}
			/>
		): (
			<PasswordInput
				value={value || ""}
				onChangeText={onChangeText}
				placeholder={placeholder}
				style={[{borderColor: errors ? errorColor: borderInputColor}, styleInput]}
			/>
		)}
		{!!errors?.message && (
			<View style={MainStyles.errorMessageContainer}>
				<TextError>
					{errors?.message}
				</TextError>
			</View>
		)}
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
		position: "relative",
		paddingBottom:8,
		paddingTop: 10,
		marginBottom: 5,
		marginTop: 5,
	},
	label: {
		position: "absolute",
		left: 4,
		top: -6,
		fontSize: 12,
		fontWeight: "600",
	}
});

export default CustomTextInput