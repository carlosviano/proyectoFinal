import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useLoginContext } from "../../contexts/LoginModeContext";

export default function PrivateRoute({ allowedRoles }) {
  const { authorization } = useLoginContext();
  const location = useLocation();

  return allowedRoles?.includes(authorization.role) ? (
    <Outlet />
  ) : authorization ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/account" state={{ from: location }} replace />
  );
}
