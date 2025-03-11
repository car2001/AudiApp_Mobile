import { StyleSheet } from "react-native";
import { ColorValue } from "react-native";

import { View, Text } from "./Themed";

export default function Indicator({
    textIndicator,
    colorIndicator
}: {
    textIndicator: string;
    colorIndicator: ColorValue | undefined;
}){
    return(
        <View style={styles.container}>
            <View style={[styles.indicator, { backgroundColor: colorIndicator }]} />
            <Text>{textIndicator}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "transparent",
        gap: 5
    },
    indicator: { 
        width: 20, 
        height: 20, 
        borderRadius: 5 
    },
});