
import { Navigate, useLocation } from "react-router";

import { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner text-orange-600"></span>
      </div>
    );
  }

  if (!user) {
    // Redirect to sign in, preserve current location for redirect after login
    return <Navigate to="/signIn" state={{ from: location }} replace />;
  }

  // If authenticated, render the child component
  return children;
};

export default PrivateRoute;
