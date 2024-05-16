import Footer from "../../Components/Footer";
import NavBar from "../../Components/NavBar";
import DownloadButton from "../../Components/miniComponents/DownloadButton";

function Challenge2() {
    return <div>
        <NavBar></NavBar>
        <main className="w-full flex justify-center flex-wrap sm:flex-row-reverse gap-3 p-4  bg-slate-900">


            <div className="px-4 max-w-[640px]">


                <h1 className="text-white font-extrabold text-[36px] md:text-[50px] leading-10 md:leading-normal">
                    #1 App
                    <br />
                    Para El aprendizaje De Matematicas Basicas
                </h1>

                <p className="py-8 text-xl md:text-2xl font-bold text-gray-400">
                    Las Matematicas no fueron tan faciles para los estudiantes con esta app
                    <br />
                    Lista para tu celular
                </p>


                <div className="flex  items-center">





                    <div className="flex items-center  pl-1">
                        <DownloadButton filePath="./assets/apk/app_math.apk" />


                    </div>

                </div>


            </div>


            <div className="max-w-lg flex justify-center items-center">

                <img src="https://raw.githubusercontent.com/prajwal89/audiostory-app-landing-page/ec384e241176d1bfddac9df979c14e37a05a7afe/dist/static/watch_on_youtube.png" className="h-[600px]" alt="" />
            </div>


        </main>
        <Footer></Footer>
    </div>
}

export default Challenge2;