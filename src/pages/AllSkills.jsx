import { useState } from "react";
import { useLoaderData } from "react-router";
import MyContainer from "../components/MyContainer";
import SkillCard from "../components/PopularSkills/SkillCard";

const AllSkills = () => {
  const skills = useLoaderData();

  const [sortedSkills, setSortedSkills] = useState(skills);

  const handleSortChange = (e) => {
    const value = e.target.value;

    let sorted = [...skills];

    if (value === "High To Low") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (value === "Low To High") {
      sorted.sort((a, b) => a.price - b.price);
    }

    setSortedSkills(sorted);
  };

  return (
    <div className="bg-[#f9faef] py-16">
      <MyContainer className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#28807e] mb-4 alegreya-font">
            All Skills: {skills.length}
          </h2>
          <div>
            <select
              onChange={handleSortChange}
              defaultValue="Sort"
              className="select select-neutral outline-none"
            >
              <option disabled={true}>Sort by Price</option>
              <option>High To Low</option>
              <option>Low To High</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {sortedSkills.map((skill) => (
            <SkillCard key={skill.skillId} skill={skill}></SkillCard>
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default AllSkills;
