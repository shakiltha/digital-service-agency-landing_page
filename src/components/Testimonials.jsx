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
    <div>
      <h2 className="poppins text-2xl lg:text-3xl">Testimonials</h2>
      <div ref={sliderRef} className="keen-slider bg-[#F2FFF8] p-2">
        <div className="keen-slider__slide number-slide1 bg-white p-2">
          <div className="flex gap-4">
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <p className="poppins font-bold">Daniel Lee</p>
              <p className="rubik">CEO of Technocrats Inc. </p>
            </div>
          </div>
          <p className="rubik">
            We were struggling to generate qualified leads. Upgrow Digital came
            in and completely revamped our content marketing strategy. With
            targeted blog posts, infographics, and ebooks, they brought in over
            500 leads within 3 months! Their expertise and focus on results were
            a game-changer for Technocrats Inc.
          </p>
        </div>
        <div className="keen-slider__slide number-slide2 bg-white p-2">
          <div className="flex gap-4">
            <div>
              <img src={img3} alt="" />
            </div>
            <div>
              <p className="poppins font-bold">Sarah Jones</p>
              <p>Founder of Green Meadows</p>
            </div>
          </div>
          <p className="rubik">
            Upgrow Digital became our secret weapon! Their data-driven SEO
            strategy skyrocketed our organic traffic by 30% in just 6 months.
            That translated to a 25% growth in online sales – a huge win for
            Green Meadows. They understand the ecommerce landscape and deliver
            results.
          </p>
        </div>
        <div className="keen-slider__slide number-slide3 bg-white p-2">
          <div className="flex gap-4">
            <div>
              <img src={img2} alt="" />
            </div>
            <div>
              <p className="poppins font-bold">Liam Walker</p>
              <p className="rubik">Marketing Manager at Serene Yoga Studio</p>
            </div>
          </div>
          <p>
            Building an online presence for a yoga studio can be tricky. Upgrow
            Digital understood our unique needs and crafted a social media
            strategy that resonated with our target audience. Their creative
            content helped us connect with potential students and establish
            Serene Yoga Studio as a trusted haven for wellness.
          </p>
        </div>
        <div className="keen-slider__slide number-slide3 bg-white p-2">
          <div className="flex gap-4">
            <div>
              <img src={img3} alt="" />
            </div>
            <div>
              <p className="poppins font-bold">Sophia Garcia</p>
              <p>Marketing Director of Wanderlust Travel Co.</p>
            </div>
          </div>
          <p className="rubik">
            As a startup, brand awareness was paramount for Wanderlust Travel
            Co. Upgrow Digital's strategic social media campaigns and targeted
            advertising efforts propelled our brand awareness by 70% within a
            year. They helped us reach the right travelers and establish a
            strong online presence - exactly what we needed to take off!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
