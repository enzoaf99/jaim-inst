function JaimInfo() {
    return (
        <>
            <div className={"container-fluid pt-4 pb-4 pe-0 ps-0 bg-jaim-primary text-center"}>
                <div className={"row justify-content-center m-0 text-center"}>
                    <div className={"col-4 text-center text-white"}>
                        <img src={"/images/graduate-cap.png"} alt={"Graduate cap"} width="50" height="50"></img>
                        <p className={"m-0 text-center"}>+35.000 Alumnos</p>
                        <p className={"fw-light md-none"}>Instituto internacional con presencia en mas de 25
                            paises</p>
                    </div>
                    <div className={"col-4 text-center text-white"}>
                        <img src={"/images/library.png"} alt={"library"} width="50" height="50"></img>
                        <p className={"m-0 text-center"}>Docentes expertas</p>
                        <p className={"fw-light md-none"}>Docentes con más de 30 años de experiencia</p>
                    </div>
                    <div className={"col-4 text-center text-white"}>
                        <img src={"/images/diploma.png"} alt={"diploma"} width="50" height="50"></img>
                        <p className={"m-0 text-center"}>Diploma internacional</p>
                        <p className={"fw-light md-none"}>Certificate internacionalmente</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JaimInfo