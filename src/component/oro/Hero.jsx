import Image from "next/image";
import { useEffect, useState } from 'react';

const CounterAnimation = ({ endValue }) => {
    const [count, setCount] = useState(0);
    const duration = 1.5; // Duración total de la animación en milisegundos
    const steps = Math.ceil(duration / (endValue / 10)); // Calcular el número de intervalos necesarios

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prevCount) => {
                // Aumentar el contador por 10 unidades en cada intervalo
                const newCount = prevCount + 100;

                // Detener la animación cuando alcance o supere el valor final
                if (newCount >= endValue) {
                    clearInterval(intervalId);
                    return endValue;
                }

                return newCount;
            });
        }, duration / steps); // Ajustar el intervalo según el número de pasos

        // Limpiar el intervalo cuando el componente se desmonta
        return () => clearInterval(intervalId);
    }, [endValue, duration, steps]);

    return count.toLocaleString()
};
export default function Hero() {
    return (
        <>
            <div className={"container text-center pt-5"}>
                <div className={"row align-items-center justify-content-center"}>
                    <div className={"col-12"}>
                        <Image src={"/images/icon.png"} alt={"Instituto Jaim"} width="500" height="500"
                               style={{width: '110px', height: '110px'}}></Image>
                    </div>
                    <div className={"col-8"}>
                        <p className={"text-white fw-bold pt-4"}>@instituto_jaim</p>
                        <p className={"text-white fw-bold"}> 📍 ACADEMIA INTERNACIONAL CON PRESENCIA EN +20 PAÍSES</p>
                        <p className={"text-white fw-bold"}>👨‍⚕️👩‍⚕️ <CounterAnimation endValue={32000}/> ALUMNOS NOS
                            ELIGEN</p>
                    </div>
                    <div className={"col-8"}>
                        <div className={"row align-items-center justify-content-center"}>
                            <div className={"col-3 col-md-2 col-lg-1 col-xxl-1"}><a
                                href={"https://www.instagram.com/instituto_jaim/"}><Image
                                src={"/images/Instagram.png"} alt={"Instagram"} width={40} height={40}/></a></div>

                            <div className={"col-3 col-md-2 col-lg-1 col-xxl-1"}><a
                                href={"https://www.instagram.com/instituto_jaim/"}><Image
                                src={"/images/Web.png"} alt={"Web"} width={40} height={40}/></a></div>

                            <div className={"col-3 col-md-2 col-lg-1 col-xxl-1"}><a
                                href={"https://www.instagram.com/instituto_jaim/"}><Image
                                src={"/images/face.png"} alt={"Facebook"} width={40} height={40}/></a></div>

                            <div className={"col-3 col-md-2 col-lg-1 col-xxl-1"}><a
                                href={"https://www.instagram.com/instituto_jaim/"}><Image
                                src={"/images/wpp.png"} alt={"Whatsapp"} width={40} height={40}/></a></div>
                        </div>
                    </div>
                    <div className={"col-11 pt-5 rounded-3"}>
                        <div className="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/Kutz0UJExSU?rel=0&controls=0"
                                    title="YouTube video"
                                    allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className={"col-10 col-md-7 col-lg-5 col-xl-5 col-xxl-5 pt-5 text-white"}>
                        <div className={"row justify-content-center align-items-center contact-row mb-3"}>
                            <div className={"col-2"}>
                                <Image className={"icon-contact"} src={"/images/prueba1.webp"} alt={"Reserve"}
                                       width={50} height={50}/>
                            </div>
                            <div className={"col-10"}>
                                <p className={"m-0 fw-light text-contact"}>RESERVA UNA REUNION TOTALMENTE GRATIS CON
                                    NOSOTROS</p>
                            </div>
                        </div>
                        <div className={"row justify-content-center align-items-center contact-row mb-3"}>
                            <div className={"col-2"}>
                                <Image className={"icon-contact"} src={"/images/prueba1.webp"} alt={"Reserve"}
                                       width={50} height={50}/>
                            </div>
                            <div className={"col-10"}>
                                <p className={"m-0 fw-light text-contact"}>APRENDE ARMONIZACÓN ORO FACIAL CON 7 TÉCNICAS
                                    COMBINADAS</p>
                            </div>
                        </div>
                        <div className={"row justify-content-center align-items-center contact-row mb-3"}>
                            <div className={"col-2"}>
                                <Image className={"icon-contact"} src={"/images/prueba1.webp"} alt={"Reserve"}
                                       width={50} height={50}/>
                            </div>
                            <div className={"col-10"}>
                                <p className={"m-0 fw-light text-contact"}>APRENDE DE LA #1 EN ARMONIZACIÓN</p>
                            </div>
                        </div>
                        <div className={"row justify-content-center align-items-center contact-row mb-3"}>
                            <div className={"col-2"}>
                                <Image className={"icon-contact"} src={"/images/prueba1.webp"} alt={"Reserve"}
                                       width={50} height={50}/>
                            </div>
                            <div className={"col-10"}>
                                <p className={"m-0 fw-light text-contact"}>QUIERO INFORMACIÓN SOBRE CURSOS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-5">
                    <iframe src="https://tiktok.com/embed/7174782741010009387" scrolling="no" style={{borderRadius: "15px", height: "580px"}} ></iframe>
                </div>
            </div>
        </>
    )
}