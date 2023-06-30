import "./TourCard.css";
import Icons from "./Icons";
function TourCard(prop){
    return (
        <div className="mainTourCardContainer">
            <div className="TourCardContainer">
                <img src={prop.img} alt="{prop.title}" className="tourImg"/>
                <div className="date">{prop.date}</div>
                </div>
                <div className="TourCardContainer_1">
                    <h3>{prop.title}</h3>
                    <div className="TourCardContainerBottom">
                        <div className="Flag">
                        <Icons type="fa fa-thin fa-flag" /> {prop.country}
                        </div>
                        <div className="Cost">
                        <h4>{prop.days} Days</h4>
                        <h4>From ${prop.cost}</h4>
                        </div>
                    </div>
                </div>
            
        </div>
    );
}
export default TourCard;