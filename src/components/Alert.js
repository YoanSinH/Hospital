import "../theme/theme.css"
import axios from "axios"

export function Alert({setIsOpen, message, data}) {
    //const data = data;

    const meeting = {
        "doctor":{
            "fullname":"doc name",
            "email":data.doctor},
        "pacient":{
            "fullname":"Joe Doe Smith",
            "email":"joe@doe.com"},
        "medicaments":[],
        "date":data.date,
        "general_information":{},
        "medical_history":{}
    }
    // post meeting with axios
    function postMeeting(){
        axios.post("https://634c7474317dc96a30989f63.mockapi.io/api/v1/meeting", meeting)
        .then(res => {
            console.log(res);
            console.log(res.data);
            setIsOpen(false);
            alert("Cita agendada con éxito");
        })
    }


    return (
        <>
         <div className="darkBG" onClick={() => setIsOpen(false)} />
            <div className="centered">
                <div className="modal" style={{display: "block"}}>
                    <div className="modalHeader">
                        <h5 className="heading">{message}</h5>
                    </div>
                    <div className="modalContent">
                        <p><span className="fw-bold">Doctor</span> {data.doctor}</p>
                        <p><span className="fw-bold">Fecha</span> {data.date}</p>
                        <button className="btn btn-secondary me-2" onClick={() => setIsOpen(false)}>Cancelar</button>
                        <button className="btn btn-primary" onClick={() => postMeeting()}>Confirmar</button>
                    </div>
                </div>
            </div>
        </>
    )
}