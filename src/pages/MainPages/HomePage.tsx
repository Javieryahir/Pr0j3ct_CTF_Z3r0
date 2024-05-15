import Features from "../../Components/Features";
import Footer from "../../Components/Footer";
import Gallery from "../../Components/Gallery";
import Hero from "../../Components/Hero";
import NavBar from "../../Components/NavBar";

function HomePage() {
    return <div>
        <NavBar></NavBar>
        <Hero></Hero>
        <Features></Features>

        <Gallery></Gallery>
        <Footer></Footer>
    </div>
}

export default HomePage;