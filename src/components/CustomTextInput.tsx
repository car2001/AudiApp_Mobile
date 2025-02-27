import { FieldError } from "react-hook-form";

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

  return(
    <View>
		<Text></Text>
		{!secureTextEntry ? (
			<TextInput
				value={value}
				onChangeText={onChangeText}
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
				style={{borderColor: errors ? errorColor: borderInputColor}}
			/>
		): (
			<PasswordInput
				value={value}
				onChangeText={onChangeText}
				placeholder={placeholder}
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

export default CustomTextInput