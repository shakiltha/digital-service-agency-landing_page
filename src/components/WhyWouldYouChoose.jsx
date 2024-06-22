import personImg from "../assets/Section Image.png";
import designElement from "../assets/Design Elements-1.png";

const WhyWouldYouChoose = () => {
  return (
    <div className="mt-12 lg:-mt-20 xl:mt-4 lg:flex lg:items-center xl:h-[40rem]">
      <div className="relative lg:w-[30rem] xl:w-[40rem]">
        <img className="mx-auto" src={designElement} alt="" />
        <img
          className="absolute top-0 md:left-10 xl:w-[30rem]"
          src={personImg}
          alt=""
        />
      </div>
      <div className="mt-24 md:mt-72 lg:mt-0 lg:ml-11 lg:w-[30rem] xl:w-[40rem]">
        <h4 className="poppins font-bold text-2xl lg:text-3xl">
          Wh should you
        </h4>
        <h4 className="poppins font-bold text-2xl lg:text-3xl">
          choose Upgrow Digital
        </h4>
        <p className="rubik lg:text-lg">
          Results matter. We're your growth partner, combining proven strategies
          with fresh tactics to get you seen. We craft custom plans to achieve
          your goals, from traffic to leads to brand awareness. Partner with
          Upgrow Digital and watch your digital presence thrive.
        </p>
        <button className="rubik font-medium bg-[#2DCA72] py-2 px-3 rounded-full text-white my-4">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default WhyWouldYouChoose;
