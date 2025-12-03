import { useLoaderData } from "react-router";
import MyContainer from "../MyContainer";
import SkillCard from "./SkillCard";

const PopularSkills = () => {
  const skills = useLoaderData();

  const skill = skills.slice(0, 8);
  // console.log(skills);

  return (
    <div className="bg-[#f9faef] py-16">
      <MyContainer className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#28807e] mb-4 alegreya-font">
          Popular Skills
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto text-center">
          Explore our most in-demand skills from talented professionals. Learn,
          collaborate, or hire experts to bring your ideas to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skill.map((skil) => (
            <SkillCard key={skil.skillId} skill={skil}></SkillCard>
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default PopularSkills;
