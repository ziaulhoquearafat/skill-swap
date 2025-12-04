const AboutUs = () => {
  return (
    <div className="bg-base-200 min-h-screen px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#28807e] mb-4">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We help learners build real-world skills with modern, high-quality
            online courses. Our mission is to make learning simple, practical,
            and accessible for everyone.
          </p>
        </div>

        {/* TWO COLUMN SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE TEXT */}
          <div>
            <h2 className="text-2xl font-semibold text-[#ec5951] mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              SkillSwap is a modern e-learning platform where students can learn
              industry-ready skills directly from experts. We focus on building
              courses that are practical, hands-on, and project-driven — so
              students can apply their knowledge immediately.
            </p>

            <h2 className="text-2xl font-semibold text-[#ec5951] mt-8 mb-4">
              What We Offer
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Modern Web Development Courses</li>
              <li>✔ Hands-on Projects & Real-World Practice</li>
              <li>✔ Expert-Led Video Lessons</li>
              <li>✔ Lifetime Access & Updates</li>
              <li>✔ Student Support & Community</li>
            </ul>
          </div>

          {/* RIGHT SIDE IMAGE / CARD */}
          <div className="flex justify-center">
            <div
              className="bg-white shadow-xl border-2 border-gray-200 rounded-2xl p-8 max-w-sm"
              data-aos="zoom-out-left"
            >
              <h3 className="text-2xl font-bold text-[#28807e] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                To make high-quality education accessible, affordable, and
                enjoyable — no matter where you are.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe learning should be practical, simple, and inspiring.
              </p>
            </div>
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
          <div className="bg-white border-2 border-gray-200 shadow-lg p-8 rounded-xl">
            <h1 className="text-4xl font-bold text-[#ec5951]">2K+</h1>
            <p className="text-gray-700 mt-2">Students Trained</p>
          </div>
          <div className="bg-white border-2 border-gray-200 shadow-lg p-8 rounded-xl">
            <h1 className="text-4xl font-bold text-[#28807e]">15+</h1>
            <p className="text-gray-700 mt-2">Courses Available</p>
          </div>
          <div className="bg-white border-2 border-gray-200 shadow-lg p-8 rounded-xl">
            <h1 className="text-4xl font-bold text-[#ec5951]">4.9/5</h1>
            <p className="text-gray-700 mt-2">Student Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
