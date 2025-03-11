import { Stack, Redirect } from "expo-router";
import MyEnterpriseScreen from "@/src/screens/auth/MyEnterpriseScreen";
import UserProfileHeader from "@/src/components/UserProfileHeader";
import { useAuth } from "@/src/context/AuthContext";
import useEmpresaStore from "@/src/stores/EnterpriseStore";

export default function MiEmpresa() {
    const { authState } = useAuth();
    const authenticated = authState?.authenticated;
    const { hasEnterprise } = useEmpresaStore();

    if (!authenticated) return <Redirect href="/" />;
    if (hasEnterprise) return <Redirect href="/home" />;

    return (
        <>
            <Stack.Screen 
                options={{
                    headerShown: true,
                    title: 'Mi Empresa',
                    headerRight: () => <UserProfileHeader />,
                    headerLeft: () => null
                }} 
            />
            <MyEnterpriseScreen />
        </>
    );
};
