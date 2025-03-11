import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import { useState } from "react";

import { View } from "./Themed";
import Label from "./Label";
import Colors from "../constants/Colors";
import { useColorScheme } from './useColorScheme';

type CustomPicker = {
    label?: string;
    required?: boolean;
    styleContainer?: object;
}

export default function CustomPicker({
    label,
    required = false,
    styleContainer,
}: CustomPicker) {
    
    const theme = useColorScheme() ?? 'light';
    const labelColor = Colors[theme]["labelColor"];
    const borderInputColor = Colors[theme]["borderInputColor"];
    const [selectedEmpresa, setSelectedEmpresa] = useState("java");

    return (
        <View style={[styles.container, styleContainer]}>
            {label ? 
                (
                    <Label 
                        label={label}
                        style={[styles.label, {color: labelColor}]} 
                        required={required}
                    />
                ) : null
            }
            <Picker
                selectedValue={selectedEmpresa}
                onValueChange={(itemValue) => setSelectedEmpresa(itemValue)}
                style={[styles.picker, {borderColor: borderInputColor}]}
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="Python" value="python" />
                <Picker.Item label="JavaScript" value="javascript" />
            </Picker>
        </View>
        				// style={[
                        //     {
                        //         borderColor: errors ? errorColor: borderInputColor
                        //     },
                        //     editable ? styleInput: styles.disabledInput, 
                        //     styleInput
                        // ]}
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        paddingBottom:8,
        paddingTop: 10,
        marginBottom: 5,
        marginTop: 5,
        backgroundColor:"transparent"
    },
    picker: {
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        color: "#333",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 0,
        padding: 12,
    },
    label: {
        position: "absolute",
        left: 4,
        top: -6,
        fontSize: 12,
        fontWeight: "600",
    },
});
