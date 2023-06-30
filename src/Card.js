import "./Card.css";
import Icons from "./Icons";
function Card(prop){
    return (
        <div className="mainCardContainer">
            <div className="iconCenter">
            <Icons type={prop.type}/>
            </div>
            <div className="subCardContainer">
                <h3>{prop.title}</h3>
                <p>{prop.description}</p>
            </div>
        </div>
    );
}
export default Card;