

function CardBlog(title: string, description: string, urlImage: string, createdBy: string) {
    return <div>
        <a className="group flex flex-col h-full    rounded-xl p-5   bg-slate-800 shadow-2xl" href="#">
            <div className="aspect-w-16 aspect-h-11">
                <img className="w-full object-cover rounded-xl" src={urlImage} alt="Image Description"></img>
            </div>
            <div className="my-6">
                <h3 className="text-xl font-semibold text-gray-400 dark:text-neutral-300 dark:group-hover:text-white">
                    {title}
                </h3>
                <p className="mt-5 text-gray-300 dark:text-neutral-400">
                    {description}
                </p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
                <img className="size-8 rounded-full" src={createdBy} alt="Image Description"></img>
                <div>
                    <h5 className="text-sm text-gray-800 dark:text-neutral-200">By Aaron Larsson</h5>
                </div>
            </div>
        </a>
    </div>
}
export default CardBlog;