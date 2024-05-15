import React from 'react';

const DownloadButton: React.FC<{ filePath: string }> = ({ filePath }) => {
    const handleDownload = () => {
        // Crear un enlace temporal
        const link = document.createElement('a');
        link.href = filePath;

        // Establecer el nombre del archivo
        link.download = filePath.substring(filePath.lastIndexOf('/') + 1);

        // Simular un clic en el enlace para iniciar la descarga
        document.body.appendChild(link);
        link.click();

        // Limpiar el enlace temporal
        document.body.removeChild(link);
    };

    return (
        <button onClick={handleDownload} className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded">
            Descargar App
        </button>
    );
};

export default DownloadButton;
