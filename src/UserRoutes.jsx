import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import PublicRoute from "components/PublicRoute/PublicRoute";

const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const MyContactsPage = lazy(() => import("./pages/MyContactsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const HomePage = lazy(() => import("./pages/HomePage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...Load page</p>}>
            <Routes>
                <Route element={<PublicRoute />} >
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />} >
                <Route path="/contacts" element={<MyContactsPage />} />
                </Route>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />}/>
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;