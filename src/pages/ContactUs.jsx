const ContactUs = () => {
  return (
    <div className="bg-base-200 min-h-screen flex items-center px-4 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT TEXT SECTION */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#28807e] mb-4">
            Get in Touch
          </h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Have a question, project idea, or just want to say hello? We're here
            to help. Fill out the form and we’ll get back to you as soon as
            possible.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold text-[#28807e]">Email:</span>{" "}
              support@skillswap.com
            </p>
            <p>
              <span className="font-semibold text-[#28807e]">Phone:</span> +1
              235 465 789
            </p>
            <p>
              <span className="font-semibold text-[#28807e]">Address:</span> 123
              Chittagong, Bangladesh
            </p>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="border-2 border-gray-200 shadow-xl rounded-xl p-8 bg-white">
          <h2 className="text-xl font-semibold text-[#ec5951] mb-6 text-center">
            Send us a message
          </h2>

          <form className="space-y-4">
            <div>
              <label className="label font-medium">Full Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="label font-medium">Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="example@mail.com"
              />
            </div>

            <div>
              <label className="label font-medium">Message</label>
              <textarea
                rows="4"
                className="textarea textarea-bordered w-full"
                placeholder="Write your message..."
              />
            </div>

            <button className="btn w-full bg-[#ec5951] hover:bg-[#28807e] text-white font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
