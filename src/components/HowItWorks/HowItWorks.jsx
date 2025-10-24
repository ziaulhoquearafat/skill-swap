import {
  FaCheckCircle,
  FaLaptopCode,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import MyContainer from "../MyContainer";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f7fffe] to-[#e9f9f8]">
      {/* subtle background texture */}

      <div className=" max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#28807e] mb-4 alegreya-font">
          How It Works
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
          A simple 4-step process to start your journey — learn, practice, and
          grow as a skilled web developer.
        </p>
      </div>
      <MyContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="bg-white flex flex-col justify-center items-center space-y-2 p-8 rounded-2xl shadow-md text-center">
          <FaLightbulb className="w-10 h-10 text-[#28807e]" />
          <h3 className="text-lg font-semibold">Step 1: Sign Up</h3>
          <p className="text-[#555]">
            Create your free account in just a few seconds and join our learning
            community.
          </p>
        </div>
        <div className="bg-white flex flex-col justify-center items-center space-y-2 p-8 rounded-2xl shadow-md text-center">
          <FaLaptopCode className="w-10 h-10 text-[#28807e]" />
          <h3 className="text-lg font-semibold">Step 2: Choose Your Skill</h3>
          <p className="text-[#555]">
            Pick from popular in-demand skills tailored for modern web
            development.
          </p>
        </div>
        <div className="bg-white flex flex-col justify-center items-center space-y-2 p-8 rounded-2xl shadow-md text-center">
          <FaCheckCircle className="w-10 h-10 text-[#28807e]" />
          <h3 className="text-lg font-semibold">Step 3: Learn & Practice</h3>
          <p className="text-[#555]">
            Follow guided lessons, projects, and challenges to master each
            topic.
          </p>
        </div>
        <div className="bg-white flex flex-col justify-center items-center space-y-2 p-8 rounded-2xl shadow-md text-center">
          <FaRocket className="w-10 h-10 text-[#28807e]" />
          <h3 className="text-lg font-semibold">Step 4: Launch Your Career</h3>
          <p className="text-[#555]">
            Use your new skills to build real projects and get hired
            confidently.
          </p>
        </div>
      </MyContainer>
    </section>
  );
};

export default HowItWorks;
