import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import ReactComment from "../../utils/commentComponent";

function Challenge3() {
    return <div data-comment="No inspecciones esta Pagina" className="h-screen flex flex-col">
        <ReactComment text={'DqqfESLmZcc//LImcPte9Plr3idmAKI08tt3QA5rv8k='} />
        <NavBar></NavBar>
        <div className="flex-grow bg-slate-900">
            <div className="container flex justify-center mx-auto pt-16 bg-slate-900 h-full">
                <a href="#" className=" p-6   rounded-lg shadow bg-slate-800 dark:bg-gray-800">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Sobre Nosotros</h5>
                    <p className="font-normal text-white dark:text-gray-400">
                        Importa mas un gran equipo que una gran persona, <br />
                        No nos damos cuenta cuando nos llega la hora y, <br />
                        Solemos pensar que podemos solos, <br />
                        Pero, la verdad es que solo nos generamos deterioro. <br />

                        Es bueno reflexionar con todos <br />
                        Como podemos llegar a un objetivo victorioso <br />
                        Tenemos que aprender a ser un trabajo grandioso <br />
                        Todo para apoyar a un equipo estruendoroso. <br />

                        Hemos desarrollado habilidades individuales <br />
                        Es por eso que no solo debemos usarlas para intereses personales <br />
                        Parece que en la era moderna solo buscamos atencion <br />
                        Acabando con la idea de CONOCER A NUESTRO EQUIPO de corazon <br />
                        Generosamente Te invito a tener una cercania con tus companeñeros <br />
                        Agradece y comparte los bellos momentos que pasaste con ellos <br />
                    </p>
                </a>
            </div>
        </div>
        <Footer></Footer>
    </div>
}

export default Challenge3;