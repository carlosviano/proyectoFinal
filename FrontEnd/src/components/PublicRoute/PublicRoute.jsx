import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useLoginContext } from "../../contexts/LoginModeContext";

export default function PublicRoute() {
  const { authorization } = useLoginContext();

  if (authorization.email) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
