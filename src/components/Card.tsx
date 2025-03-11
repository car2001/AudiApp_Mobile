import { StyleSheet } from "react-native";

import { ViewProps, View } from "./Themed"

export default function Card(props: ViewProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    
    return <View style={[styles.card, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
    card: { 
        backgroundColor: '#F7F7F7', 
        padding: 15, 
        marginBottom: 20, 
        borderRadius: 10,  
        shadowColor: '#000', 
        shadowOpacity: 0.1, 
        shadowRadius: 5, 
        elevation: 3 
    }
});