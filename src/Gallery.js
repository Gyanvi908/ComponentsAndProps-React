import "./Gallery.css";
import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";
import tour7 from "./images/main.jpeg";
import tour8 from "./images/about.jpeg";
import GalleryImages from "./GalleryImages";
function Gallery(){
    return (<div className="container">
        <h1 className="mainGalleryHeading">OUR <spaan className="subGalleryHeading">GALLERY</spaan></h1>
        <div className="galleryContainer">
            <GalleryImages img={tour1} />
            <GalleryImages img={tour2} />
            <GalleryImages img={tour3} />
            <GalleryImages img={tour4} />
            <GalleryImages img={tour5} />
            <GalleryImages img={tour6} />
            <GalleryImages img={tour7} />
            <GalleryImages img={tour8} />
        </div>
    </div>);
}
export default Gallery;