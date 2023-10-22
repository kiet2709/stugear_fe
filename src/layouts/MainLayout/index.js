
import Footer from "../../components/Footer/Footer"
import { Outlet } from "react-router"
import Header from "../../components/Header"
import "./index.css"
const MainLayout =() => {
    return (
        <>
            
            <Header sticky={true    }/>
            <div className="body">
                <Outlet/>
            </div>
            <Footer/>
        </>
            
 
    )
}
export default MainLayout