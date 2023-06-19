import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({
  status,
  redirectPath = "/login",
  children,
}) => {
  if (status === "checking")
    return (
      <p className="loading">
        <span>Checking credentials, wait a moment...</span>
      </p>
    );

  if (status === "no-authenticated") {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
