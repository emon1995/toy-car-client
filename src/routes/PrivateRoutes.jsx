import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Spinner from "../components/Spinner/Spinner";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (user) {
    return children;
  }

  return <Navigate to={`/login`} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
