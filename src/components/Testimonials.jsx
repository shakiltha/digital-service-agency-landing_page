import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import img1 from "../assets/Ellipse 407.png";
import img2 from "../assets/Ellipse -1.png";
import img3 from "../assets/Ellipse -2.png";
const Testimonials = () => {
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <div className="flex gap-4">
          <img src={img1} alt="" />
          <div>
            <p>Zoe Mantis</p>
            <p>Founder Alpha Group</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione qui
          libero molestiae, quisquam quos a perferendis molestias sunt tenetur
          unde.
        </p>
      </div>
      <div className="keen-slider__slide number-slide2">
        <div className="flex gap-4">
          <img src={img2} alt="" />
          <div>
            <p>Zoe Mantis</p>
            <p>Founder Alpha Group</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rem quas
          laboriosam accusamus placeat magnam voluptatum officiis sunt. Quod,
          doloremque.
        </p>
      </div>
      <div className="keen-slider__slide number-slide3">
        <div className="flex gap-4">
          <img src={img3} alt="" />
          <div>
            <p>Zoe Mantis</p>
            <p>Founder Alpha Group</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rem quas
          laboriosam accusamus placeat magnam voluptatum officiis sunt. Quod,
          doloremque.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
