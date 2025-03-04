import { Stack , Redirect} from "expo-router";

import MyEnterpriseScreen from "@/src/screens/auth/MyEnterpriseScreen";
import UserProfileHeader from "@/src/components/UserProfileHeader";
import { useAuth } from "@/src/context/AuthContext";

export default function MiEmpresa(){

    const {authState} = useAuth();
    const authenticated = authState?.authenticated;
    const userStored = authState?.user;

    return !authenticated ? <Redirect href="/" /> : (
        <>
            <Stack.Screen 
                options={{
                    headerShown: true,
                    title: 'Mi Empresa',
                    headerRight: () => <UserProfileHeader usuario={`${userStored?.nombre} ${userStored?.apellidos}`} />,
                    headerLeft: () => <></>
                }} 
            />
            <MyEnterpriseScreen/>
        </>
    )
};