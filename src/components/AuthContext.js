import { createContext, useContext, useEffect, useState } from "react";
//

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if(!context) throw new Error("No Auth Provider");
    return context;
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [rolUser, setRolUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isLogged, setIsLogged] = useState(null);

    const login = async (email, password) => {
        const credentials = await axios.get("https://634c7474317dc96a30989f63.mockapi.io/api/v1/users");
        const user = credentials.data.find(user => user.email === email && user.password === password);
        if(user){
            setUser(user);
            setRolUser(user.rol);
            setIsLogged(true);
            setLoading(false);
            return true;
        }else{
            setLoading(false);
            console.log("no pai");//FLAG
            return false;
        }
    }

    const logout = () => {
        setIsLogged(false);
        console.log("delogeao");//flag
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
            setIsLogged(true);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    return (
        <authContext.Provider value={{user, rolUser, login, logout, isLogged, loading}}>
            {!loading && children}
        </authContext.Provider>
    );
}