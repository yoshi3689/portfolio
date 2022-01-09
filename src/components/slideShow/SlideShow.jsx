import React, { useEffect, useRef, useState } from "react";
import { BsDot } from "react-icons/bs";
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";

import { useLocation } from "react-router";
// import Card from "../cards/Card";
import "./slideShow.css";

const SlideShow = ({ items }) => {
  const wrapperRef = useRef();
  const carouselRef = useRef();
  const location = useLocation();

  const [wrapperSize, setWrapperSize] = useState({});
  const [counter, setCounter] = useState(0);

  const getSize = () => {
    if (carouselRef.current) {
      let children = carouselRef.current.children;
      let carouselGap =
        (carouselRef.current.clientWidth -
          children[0].clientWidth * children.length) /
        (children.length - 1);
      setWrapperSize({
        height: wrapperRef.current.clientHeight,
        width: wrapperRef.current.clientWidth,
        xScrollOffset: wrapperRef.current.clientWidth + carouselGap,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("load", getSize);
    window.addEventListener("resize", getSize);

    return () => {
      window.removeEventListener("load", getSize());
      window.removeEventListener("resize", getSize);
    };
  }, []);

  useEffect(() => {
    getSize();
  }, [location]);

  const getImgStyle = (item) => ({
    width: `${wrapperSize.width}px`,
    height: `${wrapperSize.height}px`,
    background: `url(${item})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  });

  const onPreviousClick = () => {
    counter > 0  ? setCounter(counter - 1) : setCounter(items.length - 1);
    console.log(counter, items.length);
  };
  const onNextClick = () => {
    counter < items.length - 1 ? setCounter(1 + counter) : setCounter(0);
    console.log(counter);
  };

  const onDotClick = ({ target }) => {
    if (target.classList[0]) {
      console.log(target.classList[1])
      setCounter(target.classList[1])
    } else if (target.parentNode.classList[0]) {
      console.log(target.parentNode.classList)
      setCounter(target.parentNode.classList[1])
    }
    
    
  }

  // I dont't know how to properly make this work
  // const interval = setInterval(onNextClick, 6000);
  // clearInterval(interval);

  return (
    <div className="carousel__container">
      <div className="carousel__indicators">
        {items.map((item, index) => (
          <BsDot
            key={index}
            className={`carousel__indicator ${index}${index == counter ? " carousel__indicator--active" : ""}`}
            onClick={onDotClick}
          />
        ))}
      </div>
        <div className="previous" onClick={onPreviousClick}>
          <RiArrowLeftSFill />
        </div>
        <div className="carousel__wrapper" ref={wrapperRef}>
          <div
            className="carousel"
            ref={carouselRef}
            style={{
              transform: `translate(${
                counter * wrapperSize.xScrollOffset * -1
              }px)`,
            }}
          >
            {items.map((item, index) => (
                <div key={item.to + index} style={getImgStyle(item.src)} className="carousel__media">
                  {item.to}
                  {item.desc}
                  {item.title}
                  </div>
            ))}
          </div>
        </div>
        <div className="next" onClick={onNextClick}>
          <RiArrowRightSFill />
        </div>
    </div>
  );
};

export default SlideShow;
