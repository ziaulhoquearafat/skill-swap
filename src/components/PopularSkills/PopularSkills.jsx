import { useLoaderData } from "react-router";
import MyContainer from "../MyContainer";
import SkillCard from "./SkillCard";

const PopularSkills = () => {
  const skills = useLoaderData();
  console.log(skills);

  return (
    <div className="bg-[#f9faef] py-16">
      <MyContainer>
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-[#28807e] mb-8 alegreya-font">
          Popular Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.skillId} skill={skill}></SkillCard>
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default PopularSkills;
