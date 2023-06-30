import "./Feature.css";
import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import TourCard from "./TourCard";
function Feature(){
    return (<div className="mainFeatureContainer">
        <h1 className="featureHeading">FEATURED <span className="featureSubHeading">TOUR</span></h1>
        <div className="featureContainer">
        <TourCard img={tour1} date="August 14th ,2023" title="Tibet Adeventure" country="China" days="6" cost="1000" />
        <TourCard img={tour2} date="October 1st ,2023" title="Best Of Java" country="Indonasia" days="14" cost="1900" />
        <TourCard img={tour3} date="May 10th ,2023" title="Explore Hong Kong" country="Hong Kong" days="30" cost="65000" />
        <TourCard img={tour4} date="January 10th ,2023" title="Kenya Highlights" country="Kenya" days="22" cost="4500" />
        

        </div>
    </div>);
}
export default Feature;