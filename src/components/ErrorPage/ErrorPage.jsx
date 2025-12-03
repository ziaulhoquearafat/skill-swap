import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f9faef] p-4">
      <h1 className="text-9xl font-extrabold text-[#ec5951] mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-[#28807e] mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/">
        <button className="btn bg-[#28807e] hover:bg-[#ec5951] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
