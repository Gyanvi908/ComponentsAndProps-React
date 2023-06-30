import "./About.css";
import Links from "./Links.js";
import Icons from "./Icons.js";
function About(){
    return(
        <div className="mainAboutContainer">
            <div className="aboutLinks">
            <Links name="Home"/>
            <Links name="About"/>
            <Links name="Services"/>
            <Links name="Featured"/>
            <Links name="Gallery"/>
            </div>
            <div className="aboutIcons">
            <Icons type="fa-brands fa-facebook"/>
        <Icons type="fa-brands fa-twitter"/>
        <Icons type="fa-brands fa-github"/>
            </div>
            <div className="Copyright">
                <p>
                    Copyright  &copy; BackRoads Travel Tour Company. All Rights Reserved
                </p>
            </div>
        </div>
    );
}
export default About;