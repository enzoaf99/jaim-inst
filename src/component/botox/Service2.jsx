import service2img from "@/images/service2img.jpg"

function service2() {
    return (
        <>
            <div className={"container-fluid bg-black"}>
                <p className={"text-uppercase text-center text-white p-4 fs-4"}>
                    Potencia tu aprendizaje con este curso adicional!
                </p>
            </div>
            <div className={"container-fluid"}>
                <div className={"row justify-content-center"}>
                    <div className={"col-12 col-sm-6 pt-4 text-jaim"}>
                        <h2 className={"text-center fw-bold"}>COMPLEMENTA A TU PAQUETE ESTE CURSO DE BOTÓX TERCIO
                            SUPERIOR</h2>
                    </div>
                </div>
                <div className={"row justify-content-center pt-4 pb-4"}>
                    <div className={"col-md-4 col-xl-4 col-xxl-3 bg-jaim-primary p-4"}>
                        <h3 className={"text-white"}>BOTÓX TERCIO SUPERIOR</h3>
                        <p className={"text-white fw-light"}>
                            Durante este curso, nos sumergiremos en el mundo del <strong
                            className={"fw-bold"}>botox</strong> enfocándonos en el <strong className={"fw-bold"}>tercio
                            superior</strong> y su aplicación específica en:
                        </p>

                        <p className={"fw-bold text-white"}>✔Líneas entrecejo</p>
                        <p className={"fw-bold text-white"}>✔Patas de gallo</p>
                        <p className={"fw-bold text-white"}>✔Bonny Lines</p>
                        <p className={"fw-bold text-white"}>✔Líneas frontales</p>
                        <p className={"fw-bold text-white"}>✔Elevación de la cola de la ceja</p>

                        <p className={"fw-light text-white"}>¡Y mucho más! Adquirirás habilidades para la administración
                            manual con <strong className={"fw-bold"}>aguja</strong>  y con <strong className={"fw-bold"}>Dermapen</strong>.</p>

                        <button className={"btn btn-light pulse"}>Cómpralo!</button>
                    </div>
                    <div className={"col-md-4 col-xl-4 col-xxl-3 p-0"}>
                        <img alt={"servcice1img"} src={service2img}
                             style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default service2