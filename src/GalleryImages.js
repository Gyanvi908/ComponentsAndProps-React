import "./GalleryImages.css"
function GalleryImages({img}){
    return (
        <img src={img} alt="Tour Image" className="imgTour"/>
    );
}
export default GalleryImages;