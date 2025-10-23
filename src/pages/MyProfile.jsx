import { useContext } from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="min-h-screen bg-[#f9faef] flex justify-center items-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center border border-[#ebf6ee]">
        <div className="mb-5 flex justify-center">
          <img
            src={user.photoURL}
            alt=""
            className="w-32 h-32 rounded-full border-4 border-[#28807e] object-cover"
          />
        </div>

        {/* User Details */}
        <h2 className="flex gap-2 items-center mb-2 justify-center text-[#28807e] text-2xl font-bold">
          <FaUser /> {user.displayName || "Anonymous User"}
        </h2>

        {/* email */}
        <p className="flex gap-2 justify-center items-center text-[#555]">
          <FaEnvelope className="text-[#ec5951]" />{" "}
          {user.email || "No email found"}
        </p>

        {/* Divider */}
        <div className="border-t border-[#ebf6ee] my-6"></div>

        {/* Update Button */}
        <button className="btn w-full bg-[#28807e] hover:bg-[#ec5951] text-white font-semibold transition-all">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
