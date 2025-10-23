import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router";
import { BounceLoader } from "react-spinners";
import { AuthContext } from "../../context/AuthContext";
import MyContainer from "../MyContainer";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/profile"}>My Profile</NavLink>
      </li>
    </>
  );

  const { signOutAccountFunc, user, setUser, loading } =
    useContext(AuthContext);

  const handleSignOut = () => {
    // console.log("clicked");
    signOutAccountFunc()
      .then(() => {
        toast.success("Sign Out Successfull");
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="navbar bg-base-100 border-2 border-gray-200">
      <MyContainer className="flex">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 text-black font-medium rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to={"/"}
            className="sm:text-3xl lg:text-4xl alegreya-font font-bold text-[#28807e]"
          >
            SKILL<span className="text-[#ec5951]">SWAP</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 flex gap-8 text-black font-medium">
            {links}
          </ul>
        </div>
        {loading ? (
          <div className="navbar-end">
            <BounceLoader color="#28807e" size={40} />
          </div>
        ) : user ? (
          <div className="navbar-end flex gap-5 items-center">
            <div className="relative group">
              <img
                src={user?.photoURL}
                alt=""
                className="h-10 w-10 rounded-full border-2 border-[#28807e]"
              />
              <span className="absolute hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 top-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                {user.displayName}
              </span>
            </div>
            <button onClick={handleSignOut} className="btn btn-primary">
              Sign Out
            </button>
          </div>
        ) : (
          <div className="navbar-end flex gap-3">
            <Link to={"/login"} className="btn my-btn bg-[#28807e]">
              Log In
            </Link>
            <Link to={"/signup"} className="btn my-btn bg-[#ec5951]">
              Sign Up
            </Link>
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default Navbar;
