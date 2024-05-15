function Gallery() {
    return <div className="bg-slate-900 dark:bg-gray-800 h-screen h-full py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                <div className="flex items-center gap-12">
                    <h2 className="text-2xl font-bold text-white lg:text-3xl dark:text-white">Gallery</h2>

                    <p className="hidden max-w-screen-sm text-gray-500  md:block">
                        En esta Galeria Podras ver nuestros Momentos mas relevantes como Grupo Estudiantil Asi como algunos Eventos que hemos Organizado
                    </p>
                </div>


            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">

                <a href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                    <img src="https://websitesecuritystore.com/wp-content/uploads/2021/07/what-happens-when-your-site-gets-hacked.svg" loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                    <img src="./src/assets/img/challengeImg/petcybersecurity_hacked.jpg" className="hidden"></img>
                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                    </div>

                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Congreso de Ciberseguridad</span>
                </a>



                <a href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                    <img src="https://websitesecuritystore.com/wp-content/uploads/2021/07/what-happens-when-your-site-gets-hacked.svg" loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    <img src="./src/assets/img/challengeImg/congresocyber_hacked.jpg" className="hidden"></img>



                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                    </div>

                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Cursos Realizados</span>
                </a>



                <a href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                    <img src="https://websitesecuritystore.com/wp-content/uploads/2021/07/what-happens-when-your-site-gets-hacked.svg" loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    <img src="./src/assets/img/challengeImg/teamcyber_hacked.jpg" className="hidden"></img>


                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                    </div>

                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Primera Junta</span>
                </a>



                <a href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                    <img src="https://websitesecuritystore.com/wp-content/uploads/2021/07/what-happens-when-your-site-gets-hacked.svg" loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    <img src="./src/assets/img/challengeImg/ctfcyber_hacked.jpg" className="hidden"></img>

                    <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                    </div>

                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Primer CTF</span>
                </a>

            </div>
        </div>
    </div>
}
export default Gallery;