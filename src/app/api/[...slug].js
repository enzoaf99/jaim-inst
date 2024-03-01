export default async function handler(req, res) {
    const { method } = req;

    if (method === 'POST') {
        // Importa y ejecuta la función POST desde tu archivo route.js
        const { POST } = await import('./checkout/route');

        // Ejecuta la función POST y maneja la respuesta
        try {
            const response = await POST();
            res.status(200).json(response);
        } catch (error) {
            console.error('Error al procesar la solicitud POST:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(404).json({ error: 'Not Found' });
    }
}
