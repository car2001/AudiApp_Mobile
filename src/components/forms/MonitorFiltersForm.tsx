import { StyleSheet } from "react-native"
import { useState } from "react"

import { View, Text } from "../Themed"
import CustomPicker from "../CustomPicker"
import CustomButton from "../CustomButton"
import MainStyles from "@/src/styles/styles"
import { DatePickerInput } from "react-native-paper-dates";

export default function MonitorFiltersForm() {
    const [date, setDate] = useState(undefined);
    return(
        <View style={styles.container}>
            <CustomPicker 
                label='Empresa'
                required={true}
            />
            <CustomPicker 
                label='Periodo'
                required={true}
            />
            <View style={styles.container}>
                {/* <DatePickerComponent /> */}
            </View>
            <CustomButton
                text="Actualizar"
                styleButton={[MainStyles.mainButton]}
                styleButtonText={MainStyles.mainButtonText}>
            </CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    }
})