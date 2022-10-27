export function DoctorMeetings(params) {
    const data = params.data;

    return (
        <>
        <h2>Tus Citas</h2>
        <div className="mt-3">
                <div className="card">
                    <div className="card-body cardbody">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Fecha</th>
                        <th scope="col">Paciente</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((meeting) => (
                        <tr key={meeting.id}>
                            <td>{meeting.date}</td>
                            <td>{meeting.doctor.fullname}</td>
                            <td>asa</td>
                        </tr>
                    ))}
                </tbody>
            </table>
                </div>
            </div>
        </div>
        </>
    )
}