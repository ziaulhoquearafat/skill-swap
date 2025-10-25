import { Link } from "react-router";

const SkillCard = ({ skill }) => {
  const { image, skillName, rating, price, skillId } = skill;
  return (
    <div>
      <div className="card bg-white w-80 md:w-96 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
        <figure className="relative">
          <img
            src={image}
            alt={skillName}
            className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-3 right-3 bg-[#ec5951] text-white text-xs px-3 py-1 rounded-full shadow">
            {rating}★
          </span>
        </figure>
        <div className="p-5 space-y-4">
          <h2 className="alegreya-font text-2xl font-bold text-[#28807e]">
            {skillName}
          </h2>

          <div className="flex justify-between items-center">
            <p className="text-[#ec5951] font-semibold">${price}</p>

            {/* <p className="flex items-center gap-1">
              <FaStar /> {rating}
            </p> */}
          </div>

          <div className="pt-3">
            <Link to={`/skill-details/${skillId}`}>
              <button className="w-full btn my-btn hover:bg-[#ec5951] bg-[#28807e]">
                View Details
              </button>
            </Link>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
