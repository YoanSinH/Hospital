import { Loading } from "../../components/Loading";
export function DoctorHome(params) {
    if (!params) return (<Loading/>)
    const data = params.data;
    console.log(data);
    return(
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
            </div>
        </>
    )
}