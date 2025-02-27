import { FieldError } from "react-hook-form";
import { StyleSheet } from "react-native";

import { View, TextInput, Text, TextError } from "./Themed"
import PasswordInput from "./PasswordInput";
import { useColorScheme } from './useColorScheme';
import MainStyles from "../styles/styles";
import Colors from "../constants/Colors";

type CustomTextInputProps = {
	placeholder: string;
	value: string;
	errors?: FieldError;
	onChangeText: (...event: any[]) => void;
	secureTextEntry?: boolean;
}

const CustomTextInput = ({
	placeholder,
	value,
	errors,
	onChangeText,
	secureTextEntry = false,
}: CustomTextInputProps) => {



  const theme = useColorScheme() ?? 'light';
  const errorColor = Colors[theme]["errorColor"];
  const borderInputColor = Colors[theme]["borderInputColor"];
  const labelColor = Colors[theme]["labelColor"];

  return(
    <View style={styles.container}>
		<Text style={[styles.label, {color: labelColor}]}>
			{placeholder}:
		</Text>
		{!secureTextEntry ? (
			<TextInput
				value={value || ""}
				onChangeText={onChangeText}
				// placeholder={placeholder}
				secureTextEntry={secureTextEntry}
				style={{borderColor: errors ? errorColor: borderInputColor}}
			/>
		): (
			<PasswordInput
				value={value || ""}
				onChangeText={onChangeText}
				// placeholder={placeholder}
				style={{borderColor: errors ? errorColor: borderInputColor}}
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
		marginBottom: 15,
		marginTop: 5
	},
	label: {
		position: "absolute",
		left: 4,
		top: -6,
		fontSize: 12,
		fontWeight: "bold",
	}
});

export default CustomTextInput