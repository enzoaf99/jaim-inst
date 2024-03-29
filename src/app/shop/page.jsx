"use client"
import "../shop/style.css";
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const paypalclientid = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const emailServiceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
const emailTemplateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
const emailPublicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

export default function Shop() {
    const [billingInfo, setBillingInfo] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
    });

    const [paymentApproved, setPaymentApproved] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [fieldsCompleted, setFieldsCompleted] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [emailValid, setEmailValid] = useState(true); // Estado para la validación del correo electrónico

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBillingInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
        // Validar correo electrónico
        if (name === 'email') {
            setEmailValid(validateEmail(value));
        }
    };

    const validateEmail = (email) => {
        // Expresión regular para validar un correo electrónico
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    useEffect(() => {
        // Verifica si los campos obligatorios están completos
        const isFieldsCompleted = Object.values(billingInfo).every(value => value !== "");
        setFieldsCompleted(isFieldsCompleted);
    }, [billingInfo]);

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
                    emailPublicKey
                )
                .then((response) => {
                    setShowConfirmation(true); // Muestra la tarjeta de confirmación
                    setTimeout(() => {
                        const message = `¡Hola! Soy ${billingInfo.fullName}, acabo de adquirir el curso de BOTOX.`;
                        const encodedMessage = encodeURIComponent(message);
                        const whatsappLink = `https://api.whatsapp.com/send?phone=5491160573504&text=${encodedMessage}`;
                        window.open(whatsappLink, '_blank'); // Abre en una nueva pestaña
                    }, 5000); // Redirecciona después de 5 segundos
                })
                .catch((error) => {
                    console.error('Error al enviar el correo electrónico:', error);
                });
        }
    }, [paymentApproved, billingInfo]);

    const handlePayPalClick = () => {
        if (!fieldsCompleted || !emailValid) {
            setShowErrorMessage(true); // Muestra el mensaje de error si los campos no están completos o el correo electrónico no es válido
        } else {
            setShowErrorMessage(false);
            // Continúa con el proceso de pago de PayPal
        }
    };

    useEffect(() => {
        let totalTime = 9000;

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
            <div className={'container pt-3 ps-4 pe-4'}>

                <h4 className={'text-center fw-bold'}>Oferta de tiempo limitado!</h4>
                <div className="d-flex justify-content-center pb-4 mb-4">
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

                <h4 className={"fw-bold text-uppercase fs-6 text-center"}>Detalles de facturación</h4>

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
                        className={`form-control ${!emailValid ? 'is-invalid' : ''}`} // Aplica clase de Bootstrap para indicar un campo inválido si el correo no es válido
                        id="email"
                        name="email"
                        value={billingInfo.email}
                        onChange={handleInputChange}
                    />
                    {!emailValid && (
                        <div className="invalid-feedback">
                            Por favor, introduce un correo electrónico válido.
                        </div>
                    )}
                </div>

                <div className={"mt-3"}>
                    <label htmlFor="phoneNumber" className="form-label">
                        Número de Teléfono
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={billingInfo.phoneNumber}
                        onChange={handleInputChange}
                    />
                </div>

                {showErrorMessage && (
                    <div className={"alert alert-info mt-3"} role="alert">
                        Recuerde completar el formulario correctamente antes de continuar.
                    </div>
                )}

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
                                <td className={"text-success"}>-45%</td>
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
                                    const res = await fetch("https://jaimback-production.up.railway.app/api/checkout", {
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
                                    const orderId = data.orderID;
                                    console.log(data)
                                    console.log(orderId);
                                }}
                                onCancel={(data) => {
                                    console.log("COMPRA CANCELADA");
                                    console.log(data);
                                }}
                                onClick={handlePayPalClick} // Maneja el evento de clic en los botones de PayPal
                                disabled={!fieldsCompleted || !emailValid} // Deshabilita los botones si los campos no están completos o el correo no es válido
                            />
                        </PayPalScriptProvider>
                    </div>
                </div>
            </div>
            {showConfirmation && (
                <div className="overlay">
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <div className="card text-center m-4">
                            <div className="card-body">
                                <h5 className="card-title">Felicitaciones por tu compra {billingInfo.fullName}!</h5>
                                <div className={"card-body"}>
                                    <p>Te redirigimos a nuestro WhatsApp para finalizar con la compra.</p>
                                    <p className={"fw-light"}>(Tambien te enviaremos un correo a <span
                                        className={"text-muted"}>{billingInfo.email}</span>)</p>
                                    <a className={'fw-bold'} href={"https://api.whatsapp.com/send?phone=5491160573504"}>Click aca para contactarnos manualmente</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
