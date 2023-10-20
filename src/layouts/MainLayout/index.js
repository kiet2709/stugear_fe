import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Outlet } from "react-router"

const MainLayout =() => {
    return (
        <>
            <Navbar/>
            <div className="body py-5">
                <Outlet/>
            </div>
            <Footer/>
        </>
            
 
    )
}
export default MainLayout