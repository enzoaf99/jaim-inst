import paypal from "@paypal/checkout-server-sdk"
import {NextResponse} from "next/server";

const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
const secretId = process.env.PAYPAL_CLIENT_SECRET

const enviroment = new paypal.core.SandboxEnvironment(clientId, secretId)
const client = new paypal.core.PayPalHttpClient(enviroment)

export async function POST() {
    const request = new paypal.orders.OrdersCreateRequest()
    request.requestBody({
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: "USD",
                    value: "45.00",
                    breakdown: {
                        item_total: {
                            currency_code: "USD",
                            value: "45.00"
                        }
                    }
                },
                items: [
                    {
                        name: "Promo botox",
                        description: "Curso botox tercio superior + botox tercio medio",
                        quantity: "1",
                        unit_amount: {
                            currency_code: "USD",
                            value: "45.00",
                        }
                    }
                ]
            }
        ]
    })

    const response = await client.execute(request)
    console.log(response)

    return NextResponse.json({
        id: response.result.id,
    })
}