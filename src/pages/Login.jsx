import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [show, setShow] = useState();
  const handleShowPassword = () => {
    setShow(!show);
  };

  const { googlePopupSignInFunc, LoginAccountFunc } = useContext(AuthContext);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    LoginAccountFunc(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successfully");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    console.log("clicked");
    googlePopupSignInFunc()
      .then((result) => {
        console.log(result.user);
        toast.success("Sign Up Seccessfully");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="bg-base-200 min-h-screen flex flex-col justify-center items-center p-4 sm:p-10">
      <div>
        <p className="text-3xl alegreya-font font-bold text-center mb-5">
          SKILL<span className="text-[#ec5951]">SWAP</span>
        </p>
      </div>
      <div className="text-center mb-6 text-[#28807e]">
        <h1 className="text-xl font-bold">Log In to your account</h1>
      </div>

      <div className="w-full max-w-sm sm:max-w-md border-2 border-gray-200 shadow-2xl rounded-xl px-6 py-8 bg-white">
        <form onSubmit={handleSubmitForm}>
          <fieldset className="fieldset space-y-2">
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="example@mail.com"
              />
            </div>
            <div className="relative">
              <label className="label">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                className="input input-bordered w-full"
                placeholder="●●●●●●"
              />
              <span
                className="absolute right-5 top-8"
                onClick={handleShowPassword}
              >
                {show ? <FaEye /> : <IoIosEyeOff />}
              </span>
            </div>

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <div className="pt-4">
              <button className="btn w-full bg-[#28807e] hover:bg-[#ec5951] text-white font-semibold">
                Login
              </button>
            </div>

            <div>
              <p>
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#ec5951] hover:text-[#28807e] font-medium underline"
                >
                  Sign up
                </Link>
              </p>
            </div>

            <div>
              {/* Google */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="btn bg-white w-full text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
