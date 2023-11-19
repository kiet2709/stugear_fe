import MainLayout from '../layouts/MainLayout/index.js'
import AdminLayout from '../layouts/AdminLayout/Admin.js'
import Login from '../pages/Main/Login/index.js'
import Register from '../pages/Main/Register/index.js'
import ResetPassword from '../pages/Main/ResetPassword/index.js'
import FindAccount from '../pages/Main/FindAccount/index.js'
import { Navigate, Route, useRoutes } from 'react-router-dom'
import LandingPage from '../pages/Main/LandingPage/index.js'
import Info from '../pages/Main/Info/index.js'
import Contact from '../pages/Main/Contact/index.js'
import HomePage from '../pages/Main/HomePage/index.js'
import ProductPage from '../pages/Main/ProductPage/ProductPage.js'
import HomeLayout from '../layouts/HomeLayout/HomeLayout.js'
import SearchPage from '../pages/Main/SearchPage/SearchPage.js'
import PersonalLayout from '../layouts/PersonalLayout/PersonalLayout.js'
import General from '../components/Profile/General/index.js'
import Wishlist from '../components/Profile/Wishlist/Wishlist.js'
import ErrorPage from '../pages/Main/ErrorPage/ErrorPage.js'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute.js'
import UploadProduct from '../pages/Main/UploadProduct/UploadProduct.js'
import MyProduct from '../components/Profile/MyProduct/MyProduct.js'
import Verify from '../pages/Main/Verify/Verify.js'
import AdminPage from '../pages/Admin/AdminPage.js'
import useAuth from '../hooks/useAuth.js'

function useRouteElements () {

  const RejectRoute = ({ children }) => {
    const { user } = useAuth();
    if (user?.user_id) {
      return  <Navigate to="/home-page/category/1" />; 
    }
    // user is not authenticated
    return children
  };
  
  const routeElements = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <LandingPage />
        },
        // Other routes...
      ]
    },
    {
      path: '',
      element: <HomeLayout title={"Trang chủ"}/>,
      children: [
        {
          path: '/home-page/category/:slug',
          element: <HomePage/>
        },
      ]
    },
    {
      path: '',
      element: <HomeLayout title={"Trang chủ"} sub_title={"Sản phẩm"}/>,
      children: [
        {
          path: '/home-page/product-detail/:slug',
          element: <ProductPage/>
        },
      ]
    },
    {
      path: '',
      element: <ProtectedRoute><PersonalLayout/></ProtectedRoute>,
      children: [
        {
          path: '/member/wishlist',
          element: <Wishlist/>
        },
        {
          path: '/member/general',
          element: <General/>
        },
        {
          path: '/member/my-product',
          element: <MyProduct/>
        },
      ]
    },
    {
      path: '',
      element: <ProtectedRoute><MainLayout/></ProtectedRoute>,
      children: [
        {
          path: '/member/upload/:slug?',
          element: <UploadProduct/>
        },
      ]
    },

    {
      path: '',
      element: <RejectRoute><MainLayout/></RejectRoute>,
      children: [
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path: '/member/reset-password/:slug',
          element: <ResetPassword />
        },
        {
          path: 'find-account',
          element: <FindAccount />
        },
      ]
    },
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: '/landing-page',
          element: <LandingPage/>
        },
   
        {
          path: 'info',
          element: <Info/>
        },
        {
          path: 'contact',
          element: <Contact/>
        },
        {
          path: 'search/:slug?',
          element: <SearchPage/>
        },
        {
          path: "internal-error",
          element: <ErrorPage status="500" message={"Có lỗi xảy ra"}
          title={"Lỗi hệ thống"} />
        },
        {
          path: '*',
          element: <ErrorPage status="404" message={"Không tìm thấy trang bạn yêu cầu"}
          title={"Không tìm thấy trang"} />
        },
        {
          path: '/verify/:slug?',
          element: <Verify />
        },
      ]
    },
    {
      path: '',
      element: <ProtectedRoute><AdminLayout/></ProtectedRoute>,
      children: [
        {
          path: '/admin/',
          element: <AdminPage/>
        },
      ]
    },
  ])
  return routeElements
}

export default useRouteElements
