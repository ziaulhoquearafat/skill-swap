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
      <section data-aos="fade-up">
        <PopularSkills />
      </section>
      <section data-aos="zoom-up">
        <HowItWorks />
      </section>
      <section
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
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
