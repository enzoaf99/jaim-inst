"use client"
import {useState, useEffect} from 'react';
import Image from 'next/image'

function Hero() {
    const [city, setCity] = useState('');
    const [randomStudents, setRandomStudents] = useState(0);

    useEffect(() => {
        const getCityFromIp = async () => {
            try {
                const response = await fetch('https://ipinfo.io/json?token=23badfc1708cd9');
                const data = await response.json();
                const cityName = data.city || 'tu ciudad';
                setCity(cityName);
            } catch (error) {
                console.error('Error fetching IP information:', error);
            }
        };

        const getRandomStudents = () => {
            const randomStudentCount = Math.floor(Math.random() * (19 - 11 + 1)) + 11;
            setRandomStudents(randomStudentCount);
        };

        getCityFromIp();
        getRandomStudents();
    }, []);

    return (
        <>
            <h2 className={"text-center text-white fs-6 pt-4 m-2"}>
                Usted y otros {randomStudents} estudiantes de <span className={"text-jaim"}>{city}</span> están
                conociendo la oferta de este curso.
            </h2>
            <div className="container pt-4">
                <div className="row justify-content-center align-items-center p-2">
                    <div className="col-sm-7 text-center text-white">
                        <h1 className="text-danger">ESTA ES SU ÚLTIMA OPORTUNIDAD!</h1>
                        <p className="fs-4 text-uppercase">Usted se encuentra a <strong className={"text-jaim"}>UN PASO </strong>
                            de convertirse en un
                            <strong className={"text-jaim"}> ESPECIALISTA</strong> de la estética con nuestras técnicas de botox tercio medio & tercio
                            superior</p>
                    </div>
                    <div className="col-sm-10 pt-4">
                        <div className="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/Kutz0UJExSU?rel=0&controls=0"
                                    title="YouTube video"
                                    allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className={"col-12 pt-4"}>
                        <div className={"d-flex justify-content-center"}>
                            <button
                                className={"btn-jaim pulse fs-6 fw-medium m-2 p-3"}
                                onClick={() => {
                                    const buySection = document.getElementById('offer');
                                    if (buySection) {
                                        buySection.scrollIntoView({behavior: 'smooth'});
                                    }
                                }}
                            >
                                QUIERO ADQUIRIR ESTE CURSO AHORA!
                            </button>
                        </div>
                    </div>
                    <div className={"col-12"}>
                        <div className={"d-flex justify-content-center"}>
                            <Image src={"/images/PaymentMethods.png"} alt={"Metodos de pago"} width="270" height="152"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
