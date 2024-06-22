import marketingBackgroundImg from "../assets/Background.png";
import growIcon from "../assets/Icon.png";
import codeIcon from "../assets/Icon-1.png";
import videoIcon from "../assets/Icon-2.png";
import writingIcon from "../assets/Icon-3.png";
import socialIcon from "../assets/Icon-4.png";
import pointingIcon from "../assets/Icon-5.png";

const OurDigitalMarketing = () => {
  return (
    <div className="border-2 xl:flex">
      <div className="md:flex md:gap-2 md:flex-wrap md:items-center">
        <section className="bg-[#F2FFF8] w-[287px] h-[240px] flex justify-center items-center mx-auto rounded-2xl">
          <section>
            <img src={growIcon} alt="" />
            <p className="rubik font-medium mt-4">Search</p>
            <p className="rubik font-medium">Engine Optimization</p>
          </section>
        </section>
        <section className="bg-[#F2FFF8] w-[287px] h-[240px] flex justify-center items-center mx-auto my-4 rounded-2xl">
          <section>
            <img src={codeIcon} alt="" />
            <p className="rubik font-medium mt-4">Website design &</p>
            <p className="rubik font-medium">Development</p>
          </section>
        </section>
        <section className="bg-[#F2FFF8] w-[287px] h-[240px] flex justify-center items-center mx-auto my-4 rounded-2xl">
          <section>
            <img src={videoIcon} alt="" />
            <p className="rubik font-medium mt-4">Video edition &</p>
            <p className="rubik font-medium">Production</p>
          </section>
        </section>
        <section className="bg-[#F2FFF8] w-[287px] h-[240px] flex justify-center items-center mx-auto rounded-2xl">
          <section>
            <img src={writingIcon} alt="" />
            <p className="rubik font-medium mt-4">Content</p>
            <p className="rubik font-medium">Writing</p>
          </section>
        </section>
      </div>
      <div className="my-4 lg:relative">
        <img className="hidden lg:block" src={marketingBackgroundImg} alt="" />
        <section className="lg:absolute lg:top-0">
          <section>
            <p className="poppins font-bold text-2xl lg:text-3xl">
              Our Digital
            </p>
            <p className="poppins font-bold text-2xl lg:text-3xl">
              Marketing Expertise
            </p>
            <p className="rubik lg:text-lg">
              In today's digital age, a strong online presence is crucial for
              any business. At Upgrow Digital, we possess a team of digital
              marketing experts passionate about crafting and executing
              strategic campaigns that deliver results. We are well-versed in a
              wide range of digital marketing channels, from search engine
              optimization (SEO) and content marketing to social media marketing
              and paid advertising. Our expertise lies in understanding your
              target audience and leveraging the most effective channels to
              reach them, ultimately driving brand awareness, website traffic,
              and conversions.
            </p>
          </section>
          <section className="md:flex md:gap-2 md:items-center xl:-ml-16 xl:mt-2">
            <section className="bg-[#F2FFF8] w-[287px] h-[240px] flex justify-center items-center mx-auto rounded-2xl my-4">
              <section>
                <img src={socialIcon} alt="" />
                <p className="rubik font-medium mt-4">Social media</p>
                <p className="rubik font-medium">Marketing</p>
              </section>
            </section>
            <section className="bg-[#F2FFF8] w-[287px] h-[240px] flex justify-center items-center mx-auto rounded-2xl mb-4 md:mt-4">
              <section>
                <img src={pointingIcon} alt="" />
                <p className="rubik font-medium mt-4">Pay per</p>
                <p className="rubik font-medium">click (PPC)</p>
              </section>
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};

export default OurDigitalMarketing;
