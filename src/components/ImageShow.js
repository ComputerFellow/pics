function ImageShow({image}) {
    return <div>
        {console.log(image)}
        <img src={image.urls.small} alt={image.alt_description} />
    </div>;
}

export default ImageShow;