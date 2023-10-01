import MainLayout from "../layouts/MainLayout/index.js"
import Login from "../pages/Main/Login/index.js"
import Register from "../pages/Main/Register/index.js"
import ResetPassword from "../pages/Main/ResetPassword/index.js"
import FindAccount from "../pages/Main/FindAccount/index.js"
import { useRoutes } from "react-router-dom";
import LandingPage from "../pages/Main/LandingPage/index.js"
function useRouteElements() {

    const routeElements = useRoutes([
        {
            path: "",
            element: <MainLayout />,
            children: [
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "register",
                    element: <Register />,
                },
                {
                    path: "find-account",
                    element: <FindAccount />,
                },
                {
                    path: "reset-password",
                    element: <ResetPassword />,
                },
                {
                    path: "landing-page",
                    element: <LandingPage/>
                }

            ],

        }
    ]);
    return routeElements
}

export default useRouteElements