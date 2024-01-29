import {useEffect} from "react";
import Image from "next/image";

function Offer() {
    useEffect(() => {
        let totalTime = 10800;

        function updateClock() {
            let hours = Math.floor(totalTime / 3600); // Obtener las horas
            let minutes = Math.floor((totalTime % 3600) / 60); // Obtener los minutos
            let seconds = totalTime % 60; // Obtener los segundos

            // Actualizar todos los elementos con la clase 'countdown-minutes'
            let minuteElements = document.getElementsByClassName('countdown-minutes');
            for (let i = 0; i < minuteElements.length; i++) {
                minuteElements[i].innerHTML = minutes.toString().padStart(2, '0');
            }

            // Actualizar todos los elementos con la clase 'countdown-seconds'
            let secondElements = document.getElementsByClassName('countdown-seconds');
            for (let j = 0; j < secondElements.length; j++) {
                secondElements[j].innerHTML = seconds.toString().padStart(2, '0');
            }

            // Actualizar todos los elementos con la clase 'countdown-hours'
            let hoursElements = document.getElementsByClassName('countdown-hours');
            for (let j = 0; j < hoursElements.length; j++) {
                hoursElements[j].innerHTML = hours.toString().padStart(2, '0');
            }

            if (totalTime === 0) {
            } else {
                totalTime -= 1;
                setTimeout(updateClock, 1000);
            }
        }

        updateClock();
    })
    return (
        <>
            <div className={"container-fluid bg-black text-center text-white pe-0 ps-0 pt-2 pb-1 mt-1 mb-1"}>
                <p className={"fw-bold fs-1"}>SUPER OFERTA</p>
                <p className={"fw-light fs-6"}>Válido por tiempo limitado!</p>
            </div>

            <div className={"row justify-content-center pb-1 m-0"}>
                <div className={"col-md-7 col-xl-4 col-xxl-3 p-0"}>
                    <Image src="/images/service3.jpg" alt="Servicio" width={1280} height={720}
                           style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                </div>
                <div id={"offer"} className={"col-md-7 col-xl-4 col-xxl-3 bg-jaim-primary p-4 text-center text-white"}>
                    <h3 className={"text-white fw-bold"}>CURSO BOTOX TERCIÓ SUPERIOR</h3>
                    <p className={"text-white fs-5"}>Comprando hoy también recibís GRATIS</p>
                    <h3 className={"text-white fw-bold"}>CURSO BOTOX TERCIÓ MEDIO</h3>
                    <p className={"text-white fw-light text-uppercase bg-danger"}>
                        ACCESO INMEDIATO CON 64% de descuento
                    </p>

                    <p className={"fw-light fs-6"}>ÚLTIMO DÍA CON DESCUENTO DE 80 dólares</p>
                    <p className={"text-decoration-line-through fw-normal"}>Antes U$D 80</p>
                    <p className={"fw-bold fs-3"}>Ahora U$D 45</p>
                    <p className={"fw-light"}>Amplía tus conocimientos sobre la aplicación del <strong
                        className={"fw-bold"}>botóx</strong>. Curso dictado por <strong
                        className={"fw-bold"}>especialista</strong>,
                        100% online y con <strong className={"fw-bold"}>diploma</strong>.
                    </p>
                    <div className="d-flex justify-content-center pb-4">
                        <div className="m-2 ps-3 pe-3 bg-jaim-primary text-center rounded-1">
                            <span className="fs-1 text-white countdown-hours"></span>
                            <p className="text-white fw-bolder">Hrs</p>
                        </div>
                        <div className="m-2 ps-3 pe-3 bg-jaim-primary text-center rounded-1">
                            <span className="fs-1 text-white countdown-minutes"></span>
                            <p className="text-white fw-bolder">Min</p>
                        </div>
                        <div className="m-2 ps-3 pe-3 bg-jaim-primary text-center rounded-1">
                            <span className="fs-1 text-white countdown-seconds"></span>
                            <p className="text-white fw-bolder">Seg</p>
                        </div>
                    </div>
                    <button className={"btn-jaim pulse fs-6 fw-medium m-2 p-3"} onClick={() => {
                        window.location.href = 'https://wa.link/c69io0'; // Reemplaza con la URL externa a la que deseas redirigir
                    }}>¡Quiero adquirir los cursos ahora mismo!
                    </button>
                </div>
            </div>
        </>
    )
}

export default Offer