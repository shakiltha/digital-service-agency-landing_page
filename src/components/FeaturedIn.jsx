import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

import brand1 from "../assets/Brand 1.png";
import brand2 from "../assets/Brand 2.png";
import brand3 from "../assets/Brand 3.png";
import brand4 from "../assets/Brand 4.png";
import brand5 from "../assets/Brand 5.png";

const FeaturedIn = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="my-4 md:mt-[35rem] lg:mt-[5rem]">
      <div className="poppins text-xl lg:text-2xl my-4">
        <span className="font-bold pr-5 mr-5 border-r-4">Featured in</span>{" "}
        <span className="opacity-40">Our Certification</span>
      </div>
      <div className="navigation-wrapper relative lg:hidden">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <img src={brand1} className="mx-auto" alt="" />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img src={brand2} className="mx-auto" alt="" />
          </div>
          <div className="keen-slider__slide number-slide3">
            <img src={brand3} className="mx-auto" alt="" />
          </div>
          <div className="keen-slider__slide number-slide4">
            <img src={brand4} className="mx-auto" alt="" />
          </div>
          <div className="keen-slider__slide number-slide5">
            <img src={brand5} className="mx-auto" alt="" />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className="flex justify-between">
            <div className="w-10 absolute top-14">
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />
            </div>
            <div className="w-10 absolute top-14 right-0">
              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </div>
          </div>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
      <div className="hidden lg:flex lg:flex-wrap">
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
        <img src={brand5} alt="" />
      </div>
    </div>
  );
};

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default FeaturedIn;
