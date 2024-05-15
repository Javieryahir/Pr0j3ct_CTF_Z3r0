import React, { useState } from 'react';

const Elemento = ({ numero }: { numero: number }) => {
    return (
        <div className="bg-slate-800 p-6 m-4 text-white rounded-md">
            <h2 className="text-2xl">Dinero: {numero}</h2>
        </div>
    );
};

const Game: React.FC = () => {
    const [numeros, setNumeros] = useState<number[]>([0, 0, 0, 0]);

    const generarNumeros = () => {
        const nuevosNumeros = numeros.map(() => Math.floor(Math.random() * 1000) + 1);
        setNumeros(nuevosNumeros);

        if (sonIguales(nuevosNumeros)) {
            window.alert("CST{CHALLENGE_G4M3}");
        }
    };

    const sonIguales = (arr: number[]) => {
        return arr.every((val, _i, arr) => val === arr[0]);
    };

    return (
        <div className="flex flex-wrap justify-center items-center h-screen bg-slate-900">
            {numeros.map((numero, index) => (
                <Elemento key={index} numero={numero} />
            ))}
            <button className="bg-slate-700 text-white font-bold py-2 px-4 rounded-md" onClick={generarNumeros}>
                Generar Números
            </button>
        </div>
    );
};

export default Game;

