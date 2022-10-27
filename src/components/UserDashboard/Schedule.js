import React from "react";
import { Alert } from "../Alert";

export function UserSchedule() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [data, setData] = React.useState({});
    const [doctor, setDoctor] = React.useState("");
    const [date, setDate] = React.useState("");

    const day = new Date();
    function formatDate(date){
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        return [year, month, day].join('-');
    }
    const today = formatDate(day);

    function openAlert (setOpen, msg, data){
        if (!data.doctor || !data.date) {
            setIsOpen(false);
        } else {
            setIsOpen(setOpen);
            setMessage(msg);
            setData(data);
        } 
    }

    return (
        <>
        {isOpen && <Alert setIsOpen={setIsOpen} message={message} data={data} />}
            
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Doctor</label>
                    <select className="form-select" id="exampleFormControlInput1" onChange={e => setDoctor(e.target.value)}>
                        <option value={null}>Seleccionar --</option>
                        <option value={"garcia@gmail.com"}>Dr. Garcia</option>
                        <option value={{"fullname":"Dr. Who","email":"who@gmail.com"}} >Dr. Who</option>
                        <option value={{"fullname":"Dr. Juan Alberto","email":"juan@gmail.com"}}>Dr. Juan</option>
                    </select>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Fecha</label>
                        <input type="date" className="form-control" id="exampleFormControlInput1" min={today} onChange={e => setDate(e.target.value)}/>
                    </div>
                    <button className="btn btn-primary buttonprimary" onClick={() => openAlert(true,"Agendar Cita",{doctor,date})}>Agendar</button>
                </div>
            
        </>
    )
}