import Image from "next/image";

function Who() {
    return (
        <>
            <div className={"bg-jaim-primary container-fluid p-3 mt-5"}>
                <h2 className={"text-white fw-bold text-center m-0"}>
                    ¿PARA QUIEN ESTÁ DIRIGIDO EL CURSO?
                </h2>
            </div>

            <div className={"container pt-5"}>
                <div className={"row"}>
                    <div className={"col-md-6 col-xl-4 col-xxl-4 pb-5"}>
                        <div
                            className={"container text-white text-center pt-2 ps-5 pe-5 pb-2 bg-jaim-primary-gradient rounded-2 card-who"}>
                            <Image src="/images/good.png" alt="Good" width={90} height={90} />
                            <h3>
                                PERSONAS QUE SON PRINCIPIANTES EN EL CAMPO
                            </h3>
                            <p>
                                Aprenderas toda la teoría, desde los conceptos básicos del botox y Dermapen hasta los
                                conceptos avanzados de aplicación.
                            </p>
                        </div>
                    </div>

                    <div className={"col-md-6 col-xl-4 col-xxl-4 pb-3"}>
                        <div
                            className={"container text-white text-center pt-2 ps-5 pe-5 pb-2 bg-jaim-primary-gradient rounded-2 card-who"}>
                            <Image src="/images/good.png" alt="Good" width={90} height={90} />
                            <h3>
                                PROFESIONALES QUE YA TRABAJAN EN EL CAMPO
                            </h3>
                            <p>
                                No basta con ser micropigmentador y no saber realizar las técnicas correctamente, por
                                eso si quieres mejorar y dominar las técnicas de Hilos en Tebori y Micropigmentación de
                                Labios, entonces ¡SÍ! Este curso también es para ti
                            </p>
                        </div>
                    </div>

                    <div className={"col-md-6 col-xl-4 col-xxl-4 pb-3"}>
                        <div
                            className={"container text-white text-center pt-2 ps-5 pe-5 pb-2 bg-jaim-primary-gradient rounded-2 card-who"}>
                            <Image src="/images/good.png" alt="Good" width={90} height={90} />
                            <h3>
                                PROFESIONALES QUE YA TRABAJAN EN EL CAMPO
                            </h3>
                            <p>
                                No basta con ser micropigmentador y no saber realizar las técnicas correctamente, por
                                eso si quieres mejorar y dominar las técnicas de Hilos en Tebori y Micropigmentación de
                                Labios, entonces ¡SÍ! Este curso también es para ti
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Who