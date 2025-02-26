import { StyleSheet } from "react-native";
import { Stack } from "expo-router";

import { ScrollView } from "@/src/components/Themed";
import SignUpForm from "@/src/components/forms/SignUpForm";

const SignUpScreen = () => {
    return (
        <>
            <Stack.Screen options={{ title: '' }} />
            <ScrollView style={styles.screen}>
                <SignUpForm/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});


export default SignUpScreen;