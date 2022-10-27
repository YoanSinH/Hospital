import { User } from "../../views/User";
import { Loading } from "../../components/Loading";

export function UserHome(params) {
    if (!params) return (<Loading/>)
    const data = params.data;
    console.log(data);//flag
    return (
        <>
            <h2>Buen día, {data.fullname}</h2>
            <div className="row mt-2">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body cardbody">
                            <div>
                                <h4 className="card-title">Correo</h4>
                                <p className="card-text">{data.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body cardbody">
                            <div>
                                <h4 className="card-title">Documento</h4>
                                <p className="card-text">{data.document}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/*home content*/}
            <div className="mt-3">
                <div className="card">
                    <div className="card-body cardbody">
                        <div className="rowa">
                            <h4 className="card-title">Información General</h4>
                            <div className="row">
                                <div className="col">
                                    <div className="card-body cardbody">
                                        <div>
                                            <h5 className="card-title">Peso</h5>
                                            <p className="card-text">{data.general_information.weight}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card-body cardbody">
                                        <div>
                                            <h5 className="card-title">Altura</h5>
                                            <p className="card-text">{data.general_information.height}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card-body cardbody">
                                        <div>
                                            <h5 className="card-title">Genero</h5>
                                            <p className="card-text">{data.general_information.gender}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card-body cardbody">
                                        <div>
                                            <h5 className="card-title">RH</h5>
                                            <p className="card-text">{data.general_information.rh}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card-body cardbody">
                                        <div>
                                            <h5 className="card-title">Edad</h5>
                                            <p className="card-text">{data.general_information.birthdate}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}