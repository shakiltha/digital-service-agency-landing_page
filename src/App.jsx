import Cover from "./components/Cover";
import FeaturedIn from "./components/FeaturedIn";
import Footer from "./components/Footer";
import OurDigitalMarketing from "./components/OurDigitalMarketing";
import OurLatestWork from "./components/OurLatestWork";
import Testimonials from "./components/Testimonials";
import WhyWouldYouChoose from "./components/WhyWouldYouChoose";

function App() {
  return (
    <div className="mx-2 mt-2 md:mt-0">
      <Cover />
      <FeaturedIn />
      <OurDigitalMarketing />
      <WhyWouldYouChoose />
      <OurLatestWork />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
