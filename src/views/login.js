import React from "react";
import "../theme/theme.css";
import logo from "../static/logo.svg";

export function Login() {
    return (
        <>
        <div className='imageBackground'></div>
        <div className="centered mb-3 container">
            <div className="form row justify-content-center align-self-center formcontainer">
            <img src={logo} style={{width: "120px",height: "120px"}} alt=""/>
            <h4>Iniciar Sesion</h4>
                <form>
                    <label className="form-label" htmlFor="email">Correo</label>
                    <input className="input form-control" type="text" id="email" name="email" />
                    <label className="form-label" htmlFor="password">Contraseña</label>
                    <input className="input form-control" type="password" id="password" name="pssword" />
                    <br />
                    <button className="btn buttonprimary btn-primary" type="submit">Entrar</button>
                    <p>Registrarse a la Clinica Who</p>
                </form>
            </div>
        </div>
        
        </>
    )
}