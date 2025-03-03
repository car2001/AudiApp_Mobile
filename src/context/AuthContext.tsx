import { createContext, ReactElement, useContext, useEffect, useState } from "react";
import registerService from "../services/auth/register";
import loginService from "../services/auth/login";
import { CreateUsuarioRequest, LoginUsuarioRequest } from "../types/auth";
import * as SecureStore from "expo-secure-store";
import { setItem, getItem, removeItem } from "../utils/storage";

interface AuthProps {
    authState: {token:string| null; authenticated: boolean| null};
    onRegister: (usuario: CreateUsuarioRequest) => Promise<any>;
    onLogin: (credentials: LoginUsuarioRequest) => Promise<any>;
    onLogout: () => Promise<any>;
}

const AuthContext = createContext<AuthProps>({
    onLogin: () => Promise.resolve(),
    onRegister: async () => {},
    onLogout: async () => {},
    authState: { token: null, authenticated: null }
});

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}: any) => {
    const [authState, setAuthState] = useState<{
        token: string | null;
        authenticated: boolean| null;
    }>({
        token: null,
        authenticated: null
    });

    useEffect(() => {
        const loadAuthState = async () => {
        const storedToken = await getItem("authToken");
        if (storedToken) {
            setAuthState({
            token: storedToken,
            authenticated: true,
            });
        }
        };

        loadAuthState();
    }, []);

    const register= async(usuario: CreateUsuarioRequest) => {
        return await registerService.register(usuario);
    };

    const login = async (credentials: LoginUsuarioRequest) => {
        const response = await loginService.login(credentials);
        console.log(response);
        setAuthState({
            token: response.data.token,
            authenticated: response.data.isSuccess
        });

        // await SecureStore.setItemAsync("authToken", response.data.token);
        await setItem("authToken",response.data.token);
        return response;
    }

    const logout = async () => {
        await SecureStore.deleteItemAsync("authToken");
        await removeItem("authToken");
        setAuthState({
            token: null,
            authenticated: false
        })
    }

    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}