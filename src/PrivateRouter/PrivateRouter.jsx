import { useContext } from "react";
import { Navigate } from "react-router";
import { ClimbingBoxLoader } from "react-spinners";
import { AuthContext } from "../context/AuthContext";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <ClimbingBoxLoader color="red" />;
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default PrivateRouter;
