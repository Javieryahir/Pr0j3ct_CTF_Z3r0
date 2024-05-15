function CardTeam(url: string, name: string, position: string, description: string) {
    return <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 ">
        <div className="rounded overflow-hidden shadow-md bg-slate-800">
            <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                    <img src={url} alt="Display Picture of Johnson Stone" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                </div>
            </div>
            <div className="px-6 mt-16">
                <h1 className="font-bold text-white text-3xl text-center mb-1">{name}</h1>
                <p className="text-gray-800 text-white text-sm text-center">{position}</p>
                <p className="text-center  text-gray-400 text-base pt-3 font-normal">{description}</p>
                <div className="w-full flex justify-center pt-5 pb-5">

                    <a href="javascript:void(0)" className="mx-5">
                        <div aria-label="Instagram" role="img">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
}
export default CardTeam;