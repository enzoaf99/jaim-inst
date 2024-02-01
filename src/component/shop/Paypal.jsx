import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";

const paypalclientid = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
export default function Paypal() {
    return (
        <>
            <PayPalScriptProvider options={{
                clientId: paypalclientid
            }}>
                <PayPalButtons
                    style={{
                        color: "blue",
                        layout: "horizontal"
                    }}
                    createOrder={async ()=>{
                        const res = await fetch("/api/checkout", {
                            method: "POST"
                        })
                        const order = await res.json()
                        console.log(order)
                        return order.id
                    }}
                    onApprove={(data, actions) =>{
                        console.log("APROVADO")
                        console.log(data)
                    }}
                    onCancel={(data)=>{
                        console.log("COMPRA CANCELADA")
                        console.log(data)
                    }}
                />
            </PayPalScriptProvider>
        </>
    )
}