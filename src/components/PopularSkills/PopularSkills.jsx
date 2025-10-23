import { useLoaderData } from "react-router";

const PopularSkills = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2 className="text-3xl lg:text-5xl font-bold text-center text-[#28807e] mb-8 alegreya-font">
        Popular Skills
      </h2>
    </div>
  );
};

export default PopularSkills;
