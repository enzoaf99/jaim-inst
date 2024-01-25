import { useState, useEffect } from 'react';

function PopupOffer() {
    const [randomName, setRandomName] = useState('');

    useEffect(() => {
        const names = [
            'Juan', 'María', 'Carlos', 'Laura', 'Diego', 'Enzo', 'Agustin', 'Sofía', 'Juana', 'Leo', 'Carla',
            'Alejandro', 'Valentina', 'José', 'Isabella', 'Miguel', 'Ana', 'Adrián', 'Elena', 'Gabriel', 'Daniela',
            'Lucas', 'Camila', 'Fernando', 'Victoria', 'Javier', 'Paula', 'Andrés', 'Martina', 'Pablo', 'Luna',
            'Raúl', 'Julia', 'Matías', 'Florencia', 'Jorge', 'Antonella', 'Ricardo', 'Clara', 'Emilio', 'Mariana'
        ];

        const showPopup = () => {
            const randomIndex = Math.floor(Math.random() * names.length);
            setRandomName(names[randomIndex]);

            setTimeout(() => {
                setRandomName('');
            }, 5500);
        };

        const intervalId = setInterval(() => {
            showPopup();
        }, 9000);

        // Mostrar el primer popup cuando se monta el componente
        showPopup();

        // Limpiar el intervalo cuando el componente se desmonta
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            {randomName && (
                <div className={"popup-offer fade-out"}>
                    <p className={"m-0"}>
                        <strong>{randomName}</strong> acaba de comprar un curso en <strong>Jaim</strong>
                    </p>
                </div>
            )}
        </>
    );
}

export default PopupOffer;
