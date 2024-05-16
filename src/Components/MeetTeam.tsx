import CardTeam from "./miniComponents/CardTeam";

const peopleObject = [
    {
        description: "El Presidente de nuestra mesa directiva es el epítome de la excelencia en ciberseguridad.Su visión es global y multidisciplinar. Su liderazgo trasciende los cuestionamientos triviales y se enfoca en acciones concretas que benefician a la comunidad estudiantil y más allá. Aunque algunas decisiones pueden parecer contraproducentes a simple vista, su perspectiva a largo plazo y su compromiso con el progreso son incuestionables. Su administración es un modelo de eficiencia y efectividad en un campo tan dinámico como el de la ciberseguridad.",
        namePerson: "Adrian Treviño",
        urlImage: "./assets/img/people/presidente.png",
        positionPerson: "Prsidente"
    },
    {
        description: "En todas las administraciones, no hemos visto a un Director de Marketing como lo es Leonardo que se destaque como un hábil estratega, cuyas interpretaciones innovadoras trascienden lo tradicionalista. Su pasión por los medios cinematográficos, lo convierten en un activo invaluable para nuestro grupo estudiantil. Si bien su enfoque puede parecer desproporcionado a primera vista, es precisamente esta audacia la que lo distingue. Desgraciadamente, muchos subestiman el papel del marketing en entornos tecnologicos como el de la ciberseguridad, pero él comprende que es fundamentalmente necesario para destacar en un mundo cada vez más competitivo.",
        namePerson: "Leonardo Corona",
        urlImage: "./assets/img/people/Marketing.jpg",
        positionPerson: "Director de Marketing"
    },
    {
        description: "El Director de Educación es el alma de nuestra misión de difundir el conocimiento en ciberseguridad.Tiene una pasion por la literatura hispanoamericana y su participacion en movimientos medioambientales, le han permitido dar soluciones unicas e inovadoras. A pesar de los desafíos desproporcionados que enfrentamos, él abraza cada obstáculo como una oportunidad para el crecimiento. Su compromiso con la excelencia educativa es fundamentalmente arraigado en la creencia de que el aprendizaje continuo es esencial en un mundo en constante evolución.",
        namePerson: "Scarlet Donaji",
        urlImage: "./assets/img/people/educacion.jpg",
        positionPerson: "Directora de Educacion"
    }
]
function MeetTeam() {
    return <div className="bg-slate-900">
        <div className="container flex justify-center mx-auto pt-16 bg-slate-900">
            <div>
                <p className="text-gray-500 dark:text-gray-200 text-lg text-center font-normal pb-3">CONOCE A NUESTRO EQUIPO</p>
                <h1 className="xl:text-4xl text-3xl text-center text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">Las personas talentosas detrás de escena del Grupo Estudiantil</h1>
            </div>
        </div>
        <div className="w-full bg-gray-100 bg-slate-900 px-10 pt-10">
            <div className="container mx-auto">
                <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                    {peopleObject.map((index) => (
                        CardTeam(index.urlImage, index.namePerson, index.positionPerson, index.description)
                    ))}


                </div>
            </div>
        </div>
    </div>
}
export default MeetTeam;