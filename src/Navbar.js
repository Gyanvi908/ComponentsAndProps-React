import "./Navbar.css";
import Links from "./Links";
import Icons from "./Icons";
function Navbar(){
    return (<div className="navbarContainer">
        <div className="logo"><h2>Back<span className="sublogo">Roads</span></h2></div>
        <div className="links">
            <Links name="Home"/>
            <Links name="About"/>
            <Links name="Services"/>
            <Links name="Featured"/>
            <Links name="Gallery"/>
        </div>
        <div className="icons">
        <Icons type="fa-brands fa-facebook"/>
        <Icons type="fa-brands fa-twitter"/>
        <Icons type="fa-brands fa-github"/>
        </div>
        <div className="threedot">
            <Icons type="fa fa-solid fa-bars"/>
        </div>

    </div>);
}
export default Navbar;