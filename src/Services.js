import "./Services.css";
import Card from "./Card";
function Services(){
    return (
        <div className="mainServicesContainer">
            <h1 className="servicesHeading">OUR <span className="servicesSubHeading">SERVICES</span></h1>
            <div className="servicesCardContainer">
                <Card 
                type="fa-solid fa-wallet" 
                title="SAVING MONEY" 
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil"/>
                
                <Card 
                type="fa-solid fa-tree" 
                title="ENDLESS HIKING" 
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil"/>
                
                <Card 
                type="fa-solid fa-socks" 
                title="AMAZING COMFORT" 
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil"/>
            </div>
        </div>
    );
}
export default Services;