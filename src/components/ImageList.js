import './ImageList.css'
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return <div className='image-list'>{renderedImages}</div>;
}

export default ImageList;






// function ImageList({ images }) {
//     return (
//       <div>
//         ImageList: {images.length}
//         {images.map((image, index) => (
//           <div>
//             Download Link: <img src={image.links.download}></img>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   export default ImageList;
