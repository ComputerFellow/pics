function ImageShow({image}) {
    return <div>
        {console.log(image)}
        <img src={image.urls.regular} alt={image.alt_description} />
    </div>;
}

export default ImageShow;