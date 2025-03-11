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
                style={styles.picker}
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="Python" value="python" />
                <Picker.Item label="JavaScript" value="javascript" />
            </Picker>
        </View>
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
        borderColor: "transparent",
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
    },
    label: {
        position: "absolute",
        left: 4,
        top: -6,
        fontSize: 12,
        fontWeight: "600",
    },
});
