"use client"
import {useState} from 'react';
import Image from 'next/image';
import "../shop/style.css"
import Paypal from "@/src/component/shop/Paypal";

export default function Shop() {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
    };

    return (
        <>
            <div className={'container col-12 col-md-6 col-lg-4 pt-4'}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-jaim">Checkout</h5>
                        <div className={"card p-2 mt-3"}>
                            <p className={"fw-bolder"}>Detalle de compra</p>
                            <p>Curso - Botox tercio superior + botox tercio medio</p>
                            <p>Subtotal - U$D 80</p>
                            <p>Descuento - 64%</p>
                            <p className={"text-jaim fw-bolder fs-2"}>Precio final: U$D 45</p>
                        </div>
                        <h6 className="card-subtitle mb-2 text-body-secondary pt-3">
                            Haga click en su país para comenzar
                        </h6>
                        <div className={'row justify-content-center'}>
                            <div className={"col-12 pt-3"}>
                                <div className={"d-flex justify-content-around"}>
                                    <a
                                        href="#"
                                        onClick={() => handleCountryClick('arg')}
                                        className={selectedCountry === 'arg' ? 'selected' : ''}
                                    >
                                        <Image src={'/images/country/arg.jpg'} alt={'Arg'} width={'45'} height={'30'}/>
                                    </a>

                                    <a
                                        href="#"
                                        onClick={() => handleCountryClick('chl')}
                                        className={selectedCountry === 'chl' ? 'selected' : ''}
                                    >
                                        <Image src={'/images/country/chile.png'} alt={'Chl'} width={'45'}
                                               height={'30'}/>
                                    </a>

                                    <a
                                        href="#"
                                        onClick={() => handleCountryClick('col')}
                                        className={selectedCountry === 'col' ? 'selected' : ''}
                                    >
                                        <Image src={'/images/country/col.png'} alt={'Col'} width={'45'} height={'30'}/>
                                    </a>

                                    <a
                                        href="#"
                                        onClick={() => handleCountryClick('eeuu')}
                                        className={selectedCountry === 'eeuu' ? 'selected' : ''}
                                    >
                                        <Image src={'/images/country/eeuu.webp'} alt={'EEUU'} width={'45'}
                                               height={'30'}/>
                                    </a>
                                </div>
                            </div>
                            <div className={"col-12 pt-3"}>
                                <div className={"d-flex justify-content-around"}>
                                    <a
                                        href="#"
                                        onClick={() => handleCountryClick('mex')}
                                        className={selectedCountry === 'mex' ? 'selected' : ''}
                                    >
                                        <Image src={'/images/country/mex.png'} alt={'Mex'} width={'45'} height={'30'}/>
                                    </a>

                                    <a
                                        href="#"
                                        onClick={() => handleCountryClick('par')}
                                        className={selectedCountry === 'par' ? 'selected' : ''}
                                    >
                                        <Image src={'/images/country/par.png'} alt={'Par'} width={'45'} height={'30'}/>
                                    </a>

                                    <a
                                        href="#"
                                        onClick={() => handleCountryClick('pr')}
                                        className={selectedCountry === 'pr' ? 'selected' : ''}
                                    >
                                        <Image src={'/images/country/pr.png'} alt={'Puerto Rico'} width={'45'}
                                               height={'30'}/>
                                    </a>

                                    <a
                                        href="#"
                                        onClick={() => handleCountryClick('otro')}
                                        className={selectedCountry === 'otro' ? 'selected' : ''}
                                    >
                                        <Image src={'/images/country/otro.png'} alt={'Otro'} width={'45'}
                                               height={'30'}/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className={"d-flex justify-content-around text-center p-4"}>
                            <div style={{display: selectedCountry ? 'block' : 'none'}}>
                                <p className={"fw-bolder pb-1"}>
                                    Metodo de pago
                                </p>
                                <Paypal/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                a {
                    filter: grayscale(${selectedCountry ? '100%' : '0%'});
                }

                a.selected {
                    filter: grayscale(0%);
                }
            `}</style>
        </>
    );
}