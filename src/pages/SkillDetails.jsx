import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router";
import MyContainer from "../components/MyContainer";

const SkillDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data, id);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Booking Successful!");
  };

  return (
    <div className="bg-base-200">
      <MyContainer className="py-20">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <figure>
            <img
              src={data.image}
              alt=""
              className="object-cover rounded-2xl shadow-2xl"
            />
          </figure>
          {/* Session Booking Form */}
          <div className="w-full max-w-sm sm:max-w-md border-2 border-gray-200 shadow-2xl rounded-xl px-10 py-10 bg-white">
            <h1 className="text-3xl text-center mb-5 font-extrabold alegreya-font text-[#ec5951]">
              Book Your Session
            </h1>
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset space-y-2">
                <div>
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full"
                    placeholder="example@mail.com"
                    required
                  />
                </div>
                <div className="pt-4">
                  <button className="btn w-full bg-[#28807e] hover:bg-[#ec5951] text-white font-semibold">
                    Submit
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-[#28807e] mb-8 alegreya-font">
            Course Details
          </h2>

          {/* Details Box */}
          <div className="bg-white shadow-2xl rounded-2xl p-10 border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-[#ec5951] mb-4">
              {data.skillName}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              {data.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 text-gray-800">
              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-semibold text-[#28807e]">
                    Instructor:
                  </span>{" "}
                  {data.providerName}
                </p>
                <p>
                  <span className="font-semibold text-[#28807e]">
                    Instructor Email:
                  </span>{" "}
                  {data.providerEmail}
                </p>
                <p>
                  <span className="font-semibold text-[#28807e]">Rating:</span>{" "}
                  ⭐ {data.rating}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-semibold text-[#28807e]">Price:</span>{" "}
                  💲{data.price}
                </p>
                <p>
                  <span className="font-semibold text-[#28807e]">
                    Category:
                  </span>{" "}
                  {data.category}
                </p>
                <p>
                  <span className="font-semibold text-[#28807e]">
                    Slots Availabe:
                  </span>{" "}
                  {data.slotsAvailable}
                </p>
              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default SkillDetails;
