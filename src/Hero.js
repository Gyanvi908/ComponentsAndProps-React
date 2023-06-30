import "./Hero.css";
import mainImg from "./images/main.jpeg";
function Hero(){
    return (<div className="hero">
        <div className="heroSub">
        <h1 className="heading">CONTINUE EXPLORING</h1>
        <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin finibus justo quis eros faucibus tempor. Pellentesque suscipit diam vitae ante scelerisque, eu aliquet urna suscipit. Pellentesque et diam nibh.</p>
        <button className="Explore">EXPLORE TOUR</button>
        </div>
    </div>);
}
export default Hero;