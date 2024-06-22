import coverBackground from "../assets/Background-1.png";
import phoneIcon from "../assets/phone-icon.png";
import coverImg from "../assets/Cover Image.png";
const Cover = () => {
  return (
    <div className="md:relative">
      <img className="hidden md:block" src={coverBackground} alt="" />
      <div className="md:absolute md:top-1 md:w-full">
        <div className="flex justify-between items-center">
          <span>Upgrow Digital</span>
          <span className="flex gap-1">
            <div className="w-7 h-7 ">
              <img src={phoneIcon} alt="" />
            </div>
            <p>+0 234 345 456</p>
          </span>
        </div>
      </div>
      <div className="md:absolute md:top-9">
        <div className="lg:flex lg:items-center lg:gap-4 ">
          <div className="lg:flex-1">
            <h3 className="poppins font-bold text-2xl lg:text-3xl lg:my-4">
              Creative Digital Marketing Agency
            </h3>
            <p className="rubik lg:text-lg lg:my-4">
              In today's digital age, standing out from the crowd requires a
              creative spark. A creative digital marketing agency brings that
              spark and more to the table. These agencies are masters at
              crafting engaging content, designing user-centric websites, and
              utilizing data-driven strategies to elevate your brand and reach
              your target audience. From social media campaigns that capture
              attention to search engine optimization that drives traffic, they
              possess the tools and expertise to propel your business growth.
            </p>
            <button className="rubik font-medium bg-[#2DCA72] py-2 px-3 rounded-full text-white my-4">
              Contact Us
            </button>
          </div>
          <div className="my-2 lg:flex-1">
            <img className="mx-auto" src={coverImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
