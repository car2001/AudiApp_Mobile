// import { createContext, ReactElement, useContext, useState } from "react";

// interface AuthProps {
//     authState?: {token:string| null; authenticated: boolean| null};
//     onRegister?: (email:string, password:string) => Promise<any>;
//     onLogin?: (email:string, password:string) => Promise<any>;
//     onLogout?: () => Promise<any>;
// }

// const AuthContext = createContext<AuthProps>({});

// const useAuth = () => {
//     return useContext(AuthContext);
// }

// const AuthProvider = ({children}: any) => {
//     const [authState, setAuthState] = useState<{
//         token: string || null;
//         authenticated: boollean| null;
//     }>({
//         token: null;
//         authenticated: null|;
//     })

//     const contextData = {};

//     return (
//         <AuthContext.Provider value={contextData}>
//             {children}
//         </AuthContext.Provider>
//     );
// }