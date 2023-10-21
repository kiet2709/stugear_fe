import MainLayout from "../layouts/MainLayout/index.js"
import Login from "../pages/Main/Login/index.js"
import Register from "../pages/Main/Register/index.js"
import ResetPassword from "../pages/Main/ResetPassword/index.js"
import FindAccount from "../pages/Main/FindAccount/index.js"
import { useRoutes } from "react-router-dom";
import LandingPage from "../pages/Main/LandingPage/index.js"
import Profile from "../pages/Main/Profile/index.js"
import Info from "../pages/Main/Info/index.js"
import Contact from "../pages/Main/Contact/index.js"
import HomePage from "../pages/Main/HomePage/index.js"
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
                },
                {
                    path: "home-page",
                    element: <HomePage/>
                },
                {
                    path: "profile",
                    element: <Profile/>
                },
                {
                    path: "info",
                    element: <Info/>
                },
                {
                    path: "contact",
                    element: <Contact/>
                },

            ],

        }
    ]);
    return routeElements
}

export default useRouteElements