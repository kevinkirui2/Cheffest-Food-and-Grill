import Navbar from "./components/navbar";
import LandingPage from "./components/landingpage";
import Foods from "./components/foods";
import About from "./components/about"; 
import Reviews from "./components/reviews";
import Brands from "./components/brands";
import Footer from "./components/footer";

const CombinedLonding = () => {
    return(
        <div>
        <Navbar/>
        <LandingPage/>
        <Foods/>
        <About/>
        <Brands/>
        <Reviews/>
        <Footer/>
        </div>

    )


}
export default CombinedLonding