import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";
import { Loading } from "./Loading";

export function ProtectedRoute({children}){
    const {isLogged, loading} = useAuth();
    if(loading) return <Loading/>
    if(!isLogged) return <Navigate to="/login"/>
    return children;
}