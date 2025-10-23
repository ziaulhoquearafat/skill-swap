import Faq from "../components/FAQ/Faq";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import MyContainer from "../components/MyContainer";
import PopularSkills from "../components/PopularSkills/PopularSkills";
import TopRatedProviders from "../components/TopRatedProviders/TopRatedProviders";

const Home = () => {
  return (
    <div>
      <MyContainer>
        <HeroSlider />
        <PopularSkills />
        <HowItWorks />
        <TopRatedProviders />
        <Faq />
      </MyContainer>
    </div>
  );
};

export default Home;
