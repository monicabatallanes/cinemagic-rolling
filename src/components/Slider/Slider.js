import React from "react";
import "../Slider/Slider.css";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";

const Slider = ({ video, titulo, descripcion, flipped }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <div className="slider-content">
            <h4 className="slider-title">{titulo}</h4>
            <p className="slider-descripcion">{descripcion}</p>
          </div>
          <div className="slider-video">
            <ReactPlayer
              className="slider-video"
              url={video}
              width="100%"
              height="100%"
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider-content">
            <h4 className="slider-title">{titulo}</h4>
            <p className="slider-descripcion">{descripcion}</p>
          </div>
          <div className="slider-video">
            <ReactPlayer
              className="slider-video"
              url={video}
              width="100%"
              height="100%"
            />
          </div>
        </>
      );
    }
  };

  return (
    <div className={inView ? "slider slider-zoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
  );
};

export default Slider;
