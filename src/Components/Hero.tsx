function Hero() {
    return <div className="relative bg-gradient-to-r  h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
            <img src="https://images.pexels.com/photos/5380607/pexels-photo-5380607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Background Image" className="object-cover object-center w-full h-full" />
            <div className="absolute inset-0 bg-slate-900 opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-5xl font-bold leading-tight mb-4">Este Sitio Web Ha Sido Hackeado</h1>
            <p className="text-lg text-gray-300 mb-8"> En la vasta red de la telaraña,
                hay lugares secretos, donde el sol no baña.
                Aunque ocultos a la vista, pueden ser hallados,
                por aquellos que el camino han Encontrado.</p>
            <a href="#" className="bg-slate-800 text-white hover:bg-slate-900 py-2 px-6 rounded-md text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Sobre Nostros</a>
        </div>
    </div>
}

export default Hero;