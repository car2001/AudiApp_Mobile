import { createContext, ReactElement, useContext } from "react";


const AuthContext = createContext<any>(null);

const AuthProvider = ({children}: {children:ReactElement}) => {

    const contextData = {};

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => {
    return useContext(AuthContext);
}