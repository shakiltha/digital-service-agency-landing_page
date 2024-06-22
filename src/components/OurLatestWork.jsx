import img1 from "../assets/Image.png";
import img2 from "../assets/Image-1.png";
import img3 from "../assets/Image-2.png";

const OurLatestWork = () => {
  return (
    <div className="my-4 lg:mt-32">
      <h2 className="poppins text-2xl lg:text-3xl my-4 lg:my-1 md:text-center lg:text-left xl:ml-20">
        Our Latest Work
      </h2>
      <div className="lg:flex lg:gap-2 lg:justify-center lg:items-center">
        <section className="my-4 md:w-[30rem] lg:w-[20rem] md:mx-auto">
          <img src={img1} className="md:mx-auto" alt="" />
          <h5 className="poppins text-xl lg:text-2xl my-2 md:text-center lg:text-left">
            Ecommerce Boost for Green Meadows
          </h5>
          <p className="rubik lg:text-xl md:text-center lg:text-left">
            We implemented a data-driven SEO strategy for Green Meadows, an
            ecommerce store specializing in organic gardening supplies. This
            resulted in a 30% increase in organic traffic within 6 months,
            leading to a 25% growth in online sales.
          </p>
        </section>
        <section className="my-10 md:w-[30rem] lg:w-[20rem] md:mx-auto">
          <img src={img2} alt="" className="mx-auto" />
          <h5 className="poppins text-xl lg:text-2xl my-2 md:text-center lg:text-left">
            Lead Generation Machine for Technocrats Inc.
          </h5>
          <p className="rubik lg:text-xl md:text-center lg:text-left">
            Technocrats Inc., a leading cybersecurity company, partnered with
            Upgrow Digital to revamp their content marketing strategy. By
            creating targeted blog posts, infographics, and ebooks, we generated
            over 500 qualified leads in just 3 months.
          </p>
        </section>
        <section className="md:w-[30rem] lg:w-[20rem] mx-auto">
          <img src={img3} alt="" className="mx-auto" />
          <h5 className="poppins text-xl lg:text-2xl my-2 md:text-center lg:text-left">
            Brand Awareness Blitz for Foodie Nation
          </h5>
          <p className="rubik lg:text-xl md:text-center lg:text-left">
            We helped Foodie Nation, a plant-based meal kit startup, establish a
            strong brand presence through strategic social media marketing
            campaigns. Our creative content and targeted advertising efforts
            increased their brand awareness by 70% within a year.
          </p>
        </section>
      </div>
    </div>
  );
};

export default OurLatestWork;
