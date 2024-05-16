import CardBlog from "./miniComponents/CardBlog";
const postObject = [
    {
        title: "Dominando Flutter: Desarrollo Multiplataforma",
        description: "Adéntrate en el poderoso mundo de Flutter, un framework de desarrollo multiplataforma que te permite construir aplicaciones nativas rápidas y fluidas para iOS, Android y web con un solo código base.",
        urlImage: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*6JxdGU2WIzHSUEGBx4QeAQ.jpeg",
        createdBy: "./assets/img/people/presidente.png"
    },
    {
        title: "Ingeniería Inversa: Revelando Tecnología Oculta",
        description: "La ingeniería inversa es un arte fascinante que nos permite desentrañar los misterios detrás de la tecnología que usamos todos los días. Desde descifrar protocolos de comunicación hasta analizar el funcionamiento interno de los dispositivos electrónicos, este artículo te llevará en un viaje profundo hacia el corazón de la ingeniería inversa.",
        urlImage: "https://d3eeke16mv0lt7.cloudfront.net/sites/default/files/styles/article_hero_image/public/field/image/bad-guys-reverse-engineering.jpg",
        createdBy: "./assets/img/people/presidente.png"
    },
    {
        title: "AES: El Enigma del Cifrado Avanzado",
        description: "Sumérgete en el mundo de la criptografía moderna con el algoritmo de cifrado Advanced Encryption Standard (AES). Desde su diseño robusto hasta su implementación en aplicaciones de seguridad informático. Este algoritmo tienes dos modos el cual un modo recibe una clave secreta para poder descrifrar la frase",
        urlImage: "https://www.thesslstore.com/blog/wp-content/uploads/2020/04/what-is-aes-advanced-encryption-standard-698x419.jpg",
        createdBy: "./assets/img/people/presidente.png"
    },
    {
        title: "Base64: Codificación de Datos Binarios",
        description: "Base64 es un método de codificación que convierte datos binarios en texto ASCII, lo que permite la transferencia segura de datos a través de protocolos que solo admiten texto. Es ampliamente utilizado en aplicaciones web y de correo electrónico para representar datos binarios.",
        urlImage: "https://www.debugpoint.com/wp-content/uploads/2021/11/Base64-Index-Table.png",
        createdBy: "./assets/img/people/presidente.png"
    },
    {
        title: "Metadatos en Imágenes: Detalles Incrustados",
        description: " Los metadatos en imágenes son información adicional que se guarda junto con la imagen y proporciona detalles sobre cómo fue creada, modificada y utilizada. Incluyen datos como la fecha y hora de la captura, la ubicación geográfica, la cámara utilizada, la configuración de la cámara, el autor y otros detalles relevantes.",
        urlImage: "https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/10/types-of-metadata.png",
        createdBy: "./public/assets/img/people/presidente.png"
    },


]

function blogSection() {
    return <div className="bg-slate-900">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">The Blog</h2>
                <p className="mt-1 text-gray-600 text-neutral-400">See how game-changing companies are making the most of every engagement with Preline.</p>
            </div>



            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {postObject.map((index) => (
                    CardBlog(index.title, index.description, index.urlImage, index.createdBy)
                ))}

            </div>





        </div>
    </div>
}
export default blogSection;