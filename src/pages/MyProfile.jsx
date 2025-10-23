import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaEnvelope, FaSave, FaTimes, FaUser } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const MyProfile = () => {
  const { user, ProfileUpdateFunc, setLoading } = useContext(AuthContext);

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user.displayName || "");
  const [photo, setPhoto] = useState(user.photoURL || "");

  const handleSave = () => {
    if (!name.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    ProfileUpdateFunc(name, photo)
      .then(() => {
        toast.success("Profile Update Successfully");
        setEditMode(false);
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-[#f9faef] flex justify-center items-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center border border-[#ebf6ee]">
        {/* Photo */}
        <div className="mb-5 flex justify-center relative">
          <img
            src={photo}
            alt=""
            className="w-32 h-32 rounded-full border-4 border-[#28807e] object-cover"
          />
          {/* edit mode */}
          {!editMode && (
            <button
              onClick={() => setEditMode(true)}
              className="absolute bottom-2 right-10 text-white bg-[#28807e] rounded-full p-2 hover:bg-[#ec5951] transition"
              title="Edit Profile"
            >
              <FaEdit />
            </button>
          )}
        </div>

        {/* User Details */}

        {editMode ? (
          <>
            <input
              type="text"
              value={name}
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
              className="border border-[#ebf6ee] w-full p-2 rounded-lg mb-3 focus:outline-none focus:border-[#28807e]"
            />
            <input
              type="text"
              value={photo}
              placeholder="Enter Photo URL"
              onChange={(e) => setPhoto(e.target.value)}
              className="border border-[#ebf6ee] w-full p-2 rounded-lg mb-3 focus:outline-none focus:border-[#28807e]"
            />

            <div className="flex gap-3 justify-center">
              <button
                onClick={handleSave}
                className="bg-[#28807e] hover:bg-[#1f6966] text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
              >
                <FaSave /> Save
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
              >
                <FaTimes /> Cancel
              </button>
            </div>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
