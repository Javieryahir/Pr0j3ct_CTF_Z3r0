
import Blog from "./pages/MainPages/Blog";
import About from "./pages/MainPages/About";
import HomePage from "./pages/MainPages/HomePage";
import NotFoundPage from "./pages/NotFoundPages";
import Challenge1 from "./pages/HiddenPages/Challenge1Page";
import Challenge2 from "./pages/HiddenPages/Challenge2Page";
import Challenge3 from "./pages/HiddenPages/Challenge3Page";


const routes = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/about",
        element: < About />,
    },
    {
        path: "/blog",
        element: <Blog />,
    },
    {
        path: "/Ch4ll3nG3g4M3",
        element: <Challenge1 />,
    },
    {
        path: "/Ch4ll3nG3R3v3rs3",
        element: <Challenge2 />,
    },
    {
        path: "/Ch4LL3nG3R3ncr1pt",
        element: <Challenge3 />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    }




]
export default routes