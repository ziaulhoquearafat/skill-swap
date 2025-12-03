import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bannerImg1 from "../../assets/img1.png";
import bannerImg2 from "../../assets/img2.png";
import bannerImg3 from "../../assets/img3.png";

import { Link } from "react-router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MyContainer from "../MyContainer";

const HeroSlider = () => {
  return (
    <div className="bg-gradient-to-l from-[#f7faef] to-[#ebf6ee]">
      <MyContainer>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row w-full gap-10 lg:gap-20 p-10 justify-between items-center">
              <div>
                <h2 className="font-semibold uppercase tracking-widest text-[#ec5951] mb-4">
                  Empower Your Skills, Empower Your Future
                </h2>
                <h3 className="text-4xl lg:text-6xl font-extrabold alegreya-font leading-tight text-[#28807e] mb-5 capitalize">
                  Start your learning <br /> journey today <br /> with hands-on
                  expert-led courses.
                </h3>
                <p className="text-gray-600 max-w-3xl">
                  From beginner to pro — build the skills that define tomorrow’s
                  success
                </p>
                <Link
                  to={"/all-skills"}
                  className="btn my-btn bg-[#ec5951] hover:bg-[#28807e] text-white mt-6"
                >
                  Get Started
                </Link>
              </div>
              <div>
                <img
                  src={bannerImg1}
                  alt=""
                  className="
                object-cover rounded-2xl shadow-lg w-[480px] max-w-full"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col lg:flex-row w-full gap-10 lg:gap-20 p-10 justify-between items-center">
              <div>
                <h2 className="font-semibold uppercase tracking-widest text-[#ec5951] mb-4">
                  Learn What Matters in the Real World
                </h2>
                <h3 className="text-4xl lg:text-6xl font-extrabold alegreya-font leading-tight text-[#28807e] mb-5 capitalize">
                  Master practical skills <br /> trusted by <br /> top companies
                  and freelancers.
                </h3>
                <p className="text-gray-600 max-w-3xl">
                  Get real-world projects, mentorship, and confidence to deliver
                  results.
                </p>
                <Link
                  to={"/all-skills"}
                  className="btn my-btn bg-[#ec5951] hover:bg-[#28807e] text-white mt-6"
                >
                  Get Started
                </Link>
              </div>
              <div>
                <img
                  src={bannerImg2}
                  alt=""
                  className="
                object-cover rounded-2xl shadow-lg w-[480px] max-w-full"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col lg:flex-row w-full gap-10 lg:gap-20 p-10 justify-between items-center">
              <div>
                <h2 className="font-semibold uppercase tracking-widest text-[#ec5951] mb-4">
                  Grow Together with a Global Learning Community
                </h2>
                <h3
                  className="text-4xl lg:text-6xl font-extrabold alegreya-font leading-tight text-[#28807e] mb-5 capitalize
                "
                >
                  Connect, collaborate, <br /> and rise with <br /> thousands of
                  learners worldwide.
                </h3>
                <p className="text-gray-600 max-w-3xl">
                  From beginner to pro — build the skills that define tomorrow’s
                  success
                </p>
                <Link
                  to={"/all-skills"}
                  className="btn my-btn bg-[#ec5951] hover:bg-[#28807e] text-white mt-6"
                >
                  Get Started
                </Link>
              </div>
              <div>
                <img
                  src={bannerImg3}
                  alt=""
                  className="
                object-cover rounded-2xl shadow-lg w-[480px] max-w-full"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </MyContainer>
    </div>
  );
};

export default HeroSlider;
