import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../components/AuthContext";
import PropTypes from "prop-types";
import logo from "../static/logo.svg";
import "../theme/theme.css";

async function loginUser(credentials) {
    const response = await axios.get("https://634c7474317dc96a30989f63.mockapi.io/api/v1/users");
    const user = response.data.find(user => user.email === credentials.email && user.password === credentials.password);
    if(user){
        delete user.password;
        localStorage.setItem("token", JSON.stringify(user.document));
        return user;
    }else{
        return false;
    }
}

export function Login({setToken}) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await loginUser({
            email,
            password
        });
        console.log(data.document);
        setToken(data.document);
    }
    return (
        <>
        <div className='imageBackground'></div>
        <div className="centered mb-3 container">
            <div className="form row justify-content-center align-self-center formcontainer">
            <img src={logo} style={{width: "120px",height: "120px"}} alt=""/>
            <h4>Iniciar Sesion</h4>
                <form onSubmit={handleSubmit}>
                    <label className="form-label" htmlFor="email">Correo</label>
                    <input className="input form-control" type="text" id="email" name="email" onChange={e => setEmail(e.target.value)}/>
                    <label className="form-label" htmlFor="password">Contraseña</label>
                    <input className="input form-control" type="password" id="password" name="password" onChange={e => setPassword(e.target.value)}/>
                    <br />
                    <button className="btn buttonprimary btn-primary" type="submit">Entrar</button>
                    <p>Registrarse a la Clinica Who</p>
                </form>
            </div>
        </div>
        
        </>
    )
}

Login.protoTypes = {
    setToken: PropTypes.func.isRequired
}