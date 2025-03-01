import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método no permitido' }); // 405: Method Not Allowed
    }

    try {

        const response = await fetch('http://localhost:8080/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body),
        });


        if (response.ok) {
            const data = await response.json();
            return res.status(200).json(data);
        } else {
            const errorData = await response.json();
            return res.status(response.status).json({ message: errorData.message || 'Error en la solicitud GraphQL' });
        }

    } catch (error) {

        console.error('Error en la API GraphQL:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}
