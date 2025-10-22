const SignUp = () => {
  return (
    <div className="bg-base-200 min-h-screen flex flex-col justify-center items-center p-4 sm:p-10">
      <div>
        <p className="text-3xl alegreya-font font-bold text-center mb-5">
          SKILL<span className="text-[#ec5951]">SWAP</span>
        </p>
      </div>
      <div className="text-center mb-6 text-[#ec5951]">
        <h1 className="text-xl font-bold">Create your account</h1>
      </div>

      <div className="w-full max-w-sm sm:max-w-md border-2 border-gray-200 shadow-2xl rounded-xl px-6 py-8 bg-white">
        <form>
          <fieldset className="fieldset space-y-2">
            <div>
              <label className="label">Name</label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="label">Photo</label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Your PhotoURL"
              />
            </div>
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="example@mail.com"
              />
            </div>
            <div>
              <label className="label">Password</label>
              <input
                type="password"
                className="input input-bordered w-full"
                placeholder="●●●●●●"
              />
            </div>

            <div className="pt-4">
              <button className="btn w-full hover:bg-[#28807e] bg-[#ec5951] text-white font-semibold">
                Login
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
