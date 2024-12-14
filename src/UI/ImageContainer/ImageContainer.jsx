import classes from "./ImageContainer.module.css"

const ImageContainer = ({uintArrayImage, imageFormat, className, onClick}) => {
    return (
        <div style={{backgroundImage: `url(data:image/${imageFormat};base64,${btoa(String.fromCharCode(...uintArrayImage))})`}} className={`${classes.ImageContainer} ${className}`} onClick={onClick}/>
    );
};

export default ImageContainer;