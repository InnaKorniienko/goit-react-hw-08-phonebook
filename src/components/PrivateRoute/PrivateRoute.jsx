import { Navigate, Outlet } from "react-router-dom";
import useAuth from "components/shared/Hooks/UseAuth";

export default function PrivateRoute() {
    const isLogin = useAuth();

    if (!isLogin) {
        return <Navigate to="/login" />
    }

  return <Outlet />
}
