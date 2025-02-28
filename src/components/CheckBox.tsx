import { StyleSheet, TouchableOpacity, StyleProp, TextStyle } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { useColorScheme } from './useColorScheme';

import { View, Text } from "./Themed"
import Colors from "../constants/Colors";

type Option = {
    label: string,
    value: string
}

type CheckBoxProps = {
    options: Option[],
    checkedValues: string[],
    onChange : React.Dispatch<React.SetStateAction<string[]>>,
    style?: StyleProp<TextStyle>
}

export default function CheckBox ({options, checkedValues, onChange, style}: CheckBoxProps) {

    const theme = useColorScheme() ?? 'light';
    const backgroundColor = Colors[theme]["backgroundCheckBoxColor"];
    const activeColor = Colors[theme]["activeCheckBoxColor"];
    const textColor = Colors[theme]["textCheckBoxColor"];
    const iconColor = Colors[theme]["iconCheckBoxColor"];

    let updatedCheckedValues = [...checkedValues];

    return (
        <View style={[styles.container, style]}>
            {options.map((option) => {
                let active = updatedCheckedValues.includes(option.value);
                return (
                    <TouchableOpacity
                        style={[
                            styles.checkBox,
                            active ? { backgroundColor: activeColor } : { backgroundColor: backgroundColor }
                        ]}
                        onPress={() => {
                            if (active) {
                                updatedCheckedValues = updatedCheckedValues.filter(
                                    (checkedValue) => checkedValue !== option.value
                                );
                                return onChange(updatedCheckedValues);
                            }
                            updatedCheckedValues.push(option.value);
                            onChange(updatedCheckedValues);
                        }}
                        accessibilityLabel={option.label}
                        accessibilityState={{ checked: active }}
                    >
                        <MaterialIcons
                            name={active ? "check-box" : "check-box-outline-blank"}
                            size={16}
                            color={active ? "#fff" : iconColor}
                        />
                        <Text
                            style={[
                                styles.text,
                                { color: active ? "#fff" : textColor }
                            ]}
                        >
                            {option.label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    checkBox: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5,
    },
    text: {
        marginLeft: 10,
    }
});