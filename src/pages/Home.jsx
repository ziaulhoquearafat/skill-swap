import Faq from "../components/FAQ/Faq";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import PopularSkills from "../components/PopularSkills/PopularSkills";
import TopRatedProviders from "../components/TopRatedProviders/TopRatedProviders";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <PopularSkills />
      <HowItWorks />
      <TopRatedProviders />
      <Faq />
    </div>
  );
};

export default Home;
