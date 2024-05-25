import { useState } from "react";
import "./slider.scss";

export default function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    direction === "left"
      ? imageIndex === 0
        ? setImageIndex(images.length - 1)
        : setImageIndex(imageIndex - 1)
      : imageIndex === images.length - 1
      ? setImageIndex(0)
      : setImageIndex(imageIndex + 1);
  };
  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img
              src="/arrow.png"
              alt=""
              onClick={() => changeSlide("left")}
            ></img>
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt=""></img>
          </div>

          <div className="arrow">
            <img
              src="/arrow.png"
              className="right"
              alt=""
              onClick={() => changeSlide("right")}
            ></img>
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} onClick={() => setImageIndex(0)}></img>
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          ></img>
        ))}
      </div>
    </div>
  );
}
