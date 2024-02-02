"use client"
import {useEffect, useState} from 'react';
import emailjs from '@emailjs/browser';
import {PayPalScriptProvider, PayPalButtons} from '@paypal/react-paypal-js';

const paypalclientid = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const emailServiceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
const emailTemplateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
const emialPublicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

export default function Shop() {
    const [billingInfo, setBillingInfo] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
    });

    const [paymentApproved, setPaymentApproved] = useState(false);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setBillingInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
        console.log(billingInfo)
    };

    useEffect(() => {
        if (paymentApproved) {
            const templateParams = {
                user_name: billingInfo.fullName,
                user_email: billingInfo.email,
                user_phone: billingInfo.phoneNumber,
                message: `¡Hola ${billingInfo.fullName}!\n\nTu pago ha sido aprobado. Gracias por tu compra.`,
            };

            emailjs
                .send(
                    emailServiceId,
                    emailTemplateId,
                    templateParams,
                    emialPublicKey
                )
                .then((response) => {
                    console.log('Correo electrónico enviado con éxito:', response);
                    // Redirige a la URL de WhatsApp después de completar todo el proceso
                    window.location.href = 'https://api.whatsapp.com/send?phone=5491160573504&text=Hola,%20acabo%20de%20adquirir%20el%20curso%20de%20promo%20de%20BOTOX!';
                })
                .catch((error) => {
                    console.error('Error al enviar el correo electrónico:', error);
                });
        }
    }, [paymentApproved, billingInfo]);

    return (
        <>
            <div className={'container pt-3 ps-4 pe-4'}>
                <h4 className={"fw-bold text-uppercase fs-6"}>Detalles de facturación</h4>

                {/* Campos adicionales */}
                <div className={"mt-3"}>
                    <label htmlFor="fullName" className="form-label">
                        Nombre Completo
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        value={billingInfo.fullName}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={"mt-3"}>
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={billingInfo.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={"mt-3"}>
                    <label htmlFor="phoneNumber" className="form-label">
                        Número de Teléfono
                    </label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={billingInfo.phoneNumber}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={"card mt-3"}>
                    <div className={"card-body"}>
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Item</th>
                                <th scope="col">Precio</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Botox tercio superior + botox tercio medio x 1</td>
                                <td>$80</td>
                            </tr>
                            <tr>
                                <td>Descuento promo</td>
                                <td className={"text-success"}>-64%</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className={"fw-bolder fs-5 text-center text-jaim"}>Total: $45</p>
                </div>

                <div className={"d-flex justify-content-around text-center p-4"}>
                    <div>
                        <p className={"fw-bolder pb-1"}>
                            Método de Pago
                        </p>
                        <PayPalScriptProvider options={{clientId: paypalclientid}}>
                            <PayPalButtons
                                style={{color: "blue"}}
                                createOrder={async () => {
                                    const res = await fetch("/api/checkout", {
                                        method: "POST",
                                    });
                                    const order = await res.json();
                                    console.log(order);
                                    return order.id;
                                }}
                                onApprove={(data, actions) => {
                                    setPaymentApproved(true); // Marca el pago como aprobado
                                    actions.order.capture();
                                    console.log('APROVADO');
                                    console.log(data);
                                }}
                                onCancel={(data) => {
                                    console.log("COMPRA CANCELADA");
                                    console.log(data);
                                }}
                            />
                        </PayPalScriptProvider>
                    </div>
                </div>
            </div>
        </>
    );
}
