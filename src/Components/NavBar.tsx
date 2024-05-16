import { Link } from "react-router-dom";


function NavBar() {
    return <nav className="bg-slate-900 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="./assets/img/Cybersecurity_TEC_Logo.png" className="h-20" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-200">CyberSecurityTEC</span>
            </a>

            <div className="items-center justify-between  w-full md:flex md:w-auto md:order-1" >
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4   rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
                    <li>
                        <Link to="/" className="block py-2 px-3 md:p-0  rounded md:bg-transparent  text-white" aria-current="page">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/about" className="block py-2 px-3 md:p-0 text-white rounded   dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sobre Nostros</Link>
                    </li>
                    <li>
                        <Link to="/blog" className="block py-2 px-3 md:p-0 text-white rounded  md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

}
export default NavBar;