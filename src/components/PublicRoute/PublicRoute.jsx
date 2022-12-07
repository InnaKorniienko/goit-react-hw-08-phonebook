import { Navigate, Outlet } from "react-router-dom";
import useAuth from "components/shared/Hooks/UseAuth";

export default function PublicRoute() {
  const isLogin = useAuth();

  if (isLogin) {
    return <Navigate to="/contacts" />
  }

  return <Outlet />
}