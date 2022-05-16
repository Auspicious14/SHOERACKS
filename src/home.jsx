import About from "./about";
import Hero from "./hero";
import ShowcaseProducts from "./showcaseProduct";

const Home = () => {
    return ( 
        <div className="home-page">
            <Hero />
            <ShowcaseProducts />
            <br /> <br /> <br />
            <About />
        </div>
     );
}
 
export default Home;