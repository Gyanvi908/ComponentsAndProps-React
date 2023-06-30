import Navbar from "./Navbar.js";
import Hero from "./Hero.js";
import Services from "./Services.js";
import Feature from "./Feature.js";
import Gallery from "./Gallery.js";
import About from "./About.js";
function App(){
    return (
    <div>
        <Navbar />
        <div className="heroSection">
            <Hero />
        </div>
        <div> 
            <Services />
        </div>
        <div>
            <Feature />
        </div>
        <div>
            <Gallery />
        </div>
        <div>
            <About/>
        </div>
    </div>
    
    );
}
export default App;