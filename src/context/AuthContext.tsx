import { createContext, ReactElement, useContext, useEffect, useState } from "react";
import registerService from "../services/auth/register";
import loginService from "../services/auth/login";
import { CreateUsuarioRequest, LoginUsuarioRequest } from "../types/auth";
import { setItem, getItem, removeItem } from "../utils/storage";
import { UsuarioResponse } from "../types/user";

type AuthStateType = {
    token: string | null;
    authenticated: boolean| null;
    user?: UsuarioResponse | null;
}

interface AuthProps {
    authState: AuthStateType;
    onRegister: (usuario: CreateUsuarioRequest) => Promise<any>;
    onLogin: (credentials: LoginUsuarioRequest) => Promise<any>;
    onLogout: () => Promise<any>;
}

const AuthContext = createContext<AuthProps>({
    onLogin: () => Promise.resolve(),
    onRegister: async () => {},
    onLogout: async () => {},
    authState: { token: null, authenticated: null, user: null }
});

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}: any) => {
    const [authState, setAuthState] = useState<AuthStateType>({
        token: null,
        authenticated: null,
        user: null
    });

    useEffect(() => {
        const loadAuthState = async () => {
            const storedToken = await getItem("authToken");
            const storedUser = await getItem("user");
            if (storedToken && storedUser) {
                setAuthState({
                    token: storedToken,
                    authenticated: true,
                    user: JSON.parse(storedUser)
                });
            }
        };
        loadAuthState();
    }, []);

    const register= async(usuario: CreateUsuarioRequest) => {
        const responseRegister =  await registerService.register(usuario);
        let responseLogin;
        if (responseRegister?.data){
            const {isSuccess} = responseRegister.data;
            if(isSuccess) {
                responseLogin = await login({
                    dni: usuario.dni, 
                    password: usuario.password
                })
            }
        }

        return responseLogin;
    };

    const login = async (credentials: LoginUsuarioRequest) => {
        const response = await loginService.login(credentials);
        setAuthState({
            token: response.data.token,
            authenticated: response.data.isSuccess,
            user: response.data.usuario,
        });

        // await SecureStore.setItemAsync("authToken", response.data.token);
        await setItem("authToken",response.data.token);
        await setItem("user",JSON.stringify(response.data.usuario));
        return response;
    }

    const logout = async () => {
        // await SecureStore.deleteItemAsync("authToken");
        await removeItem("authToken");
        setAuthState({
            token: null,
            authenticated: false,
            user: null
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