import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { ClimbingBoxLoader } from "react-spinners";
import { AuthContext } from "../context/AuthContext";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  // console.log(location);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <ClimbingBoxLoader color="red" />;
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} state={location.pathname} />;
  }

  return children;
};

export default PrivateRouter;
