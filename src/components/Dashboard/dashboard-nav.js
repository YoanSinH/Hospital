import React from "react";
import { Dashboard } from "../Dashboard";

export function DashboardNav(props) {
    const [active, setActive] = React.useState("1");

    const handleClick = (e) => {
        setActive(e.target.id);
        console.log("id",e.target.id);
    };

    return (
        <div>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark formwidth">
                <span>Who Clinic</span>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="#home" id={"1"} onClick={handleClick} className={`customli nav-link text-white ${active === '1' ? 'active' : undefined}`}><svg className="iconstyle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg> Home</a>
                    </li>
                    <li>
                        <a href="#patiens" id={"2"} onClick={handleClick}  className={`customli nav-link text-white ${active === '2' ? 'active' : undefined}`}><svg className="iconstyle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" /></svg> Pacientes</a>
                    </li>
                    <li>
                        <a href="#" id={"3"} onClick={handleClick}  className={`customli nav-link text-white ${active === '3' ? 'active' : undefined}`}><svg className="iconstyle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zM329 305c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 305z" /></svg> Citas Previas</a>
                    </li>
                    <li>
                        <a href="#" className="customli nav-link text-white">??</a>
                    </li>
                    <li>
                        <a href="#" className="customli nav-link text-white">???</a>
                    </li>
                    <li>
                        <a href="#" id={"6"} onClick={handleClick}  className="customli nav-link text-white"><svg className="iconstyle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z" /></svg> Cerrar Sesión</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}