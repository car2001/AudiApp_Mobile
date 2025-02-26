import { FieldError } from "react-hook-form";

import { View, TextInput, Text, TextInputProps } from "./Themed"
import MainStyles from "../styles/styles"

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
  return(
    <View>
			<Text></Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
				secureTextEntry={secureTextEntry}
        style={{borderColor: errors ? "#a61414": "transparent"}}
      />
      {!!errors?.message && (
				<View style={MainStyles.errorMessageContainer}>
					<Text style={MainStyles.errorMessage}>
          	{errors?.message}
        	</Text>
				</View>
      )}
    </View>
  )
}

export default CustomTextInput