import { useContext, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const ForgotPassword = () => {
  const { forgotPassword, setLoading, loginEmail } = useContext(AuthContext);
  const emailRef = useRef(null);

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.value = loginEmail;
    }
  }, [loginEmail]);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // console.log("clicked");
    const email = emailRef.current.value;
    forgotPassword(email)
      .then(() => {
        setLoading(false);
        toast.success("check your email");
        emailRef.current.value = "";
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="w-full max-w-sm sm:max-w-md border-2 border-gray-200 shadow-2xl rounded-xl mx-auto px-10 py-10 bg-white my-20">
        <h1 className="text-3xl text-center mb-5 font-extrabold alegreya-font text-[#ec5951]">
          Forgot Password
        </h1>
        <form onSubmit={handleForgotPassword}>
          <fieldset className="fieldset space-y-2">
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                className="input input-bordered w-full"
                placeholder="example@mail.com"
                required
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="btn w-full bg-[#28807e] hover:bg-[#ec5951] text-white font-semibold"
              >
                Reset Password
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
