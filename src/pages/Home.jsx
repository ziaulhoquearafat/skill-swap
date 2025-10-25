import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Faq from "../components/FAQ/Faq";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import PopularSkills from "../components/PopularSkills/PopularSkills";
import TopRatedProviders from "../components/TopRatedProviders/TopRatedProviders";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div>
      <HeroSlider />
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
      >
        <PopularSkills />
      </section>
      <section data-aos="zoom-in-up">
        <HowItWorks />
      </section>
      <section
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-easing="ease-in-sine"
      >
        <TopRatedProviders />
      </section>
      <section>
        <Faq />
      </section>
    </div>
  );
};

export default Home;
