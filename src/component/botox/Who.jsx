import Image from "next/image";

function Who() {
    return (
        <>
            <div className={"bg-jaim-primary container-fluid p-3 mt-5"}>
                <h2 className={"text-white fw-bold text-center m-0"}>
                    ¿PARA QUIEN ESTÁ DIRIGIDO EL CURSO?
                </h2>
                <p className={"text-white fw-light pt-1 text-center"}>
                    En el curso aprenderemos a APLICAR BOTOX de DOS formas distintas
                </p>
            </div>

            <div className={"container pt-5"}>
                <div className={"row justify-content-center"}>
                    <div className={"col-md-6 col-xl-4 col-xxl-4 pb-5"}>
                        <div
                            className={"container text-white text-center pt-2 ps-5 pe-5 pb-2 bg-jaim-primary-gradient rounded-2 card-who"}>
                            <Image src="/images/good.png" alt="Good" width={90} height={90}/>
                            <h3 className={"pt-3"}>
                                INYECTABLE
                            </h3>
                            <p className={"pb-5"}>
                                Para personal habilitado, por ejemplo: Médicos, Cirujanos, Odontólogos
                            </p>
                        </div>
                    </div>

                    <div className={"col-md-6 col-xl-4 col-xxl-4 pb-5"}>
                        <div
                            className={"container text-white text-center pt-2 ps-5 pe-5 pb-2 bg-jaim-primary-gradient rounded-2 card-who"}>
                            <Image src="/images/good.png" alt="Good" width={90} height={90}/>
                            <h3 className={"pt-3"}>
                                DERMAPEN
                            </h3>
                            <p className={"pb-5"}>
                                Apto para cosmetologas, cosmiatras, esteticistas, dermatocosmiatras, mesoterapeutas, enfermeros y mucho más!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Who