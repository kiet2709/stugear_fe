import { Link, NavLink } from "react-router-dom"
import Category from "../../components/Landing/Category"
import { useEffect, useState } from "react"
import CategoryService from "../../service/CategoryService"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faBook, faFlag, faMoneyBill, faUser } from "@fortawesome/free-solid-svg-icons"
import useAuth from "../../hooks/useAuth"
import "./AdminSideBar.css"
import { useNavigate } from "react-router-dom"
const AppSideBar = () => {
    const navigate = useNavigate()
   const {user, setUser} = useAuth()
   const signOut = (e) => {
    e.preventDefault()
    localStorage.clear()
    setUser("")
    navigate("/login")
  };
    return (
        <>

  <nav id="sidebar" className="admin-sidebar sidebar">
    <div className="custom-menu">
      <button type="button" id="sidebarCollapse" className="btn btn-primary">
        <FontAwesomeIcon icon={faBars}/>
      </button>
    </div>
    <div className="p-4 pt-5">
      <h1><Link className="logo">STUGEAR</Link></h1>
        <div className="text-center">  
        <Link to={"/member/general"}>
        <img
          src={user?.user_image}
          alt=""
          className="rounded-circle"
          style={{width: '40%', height: '70px'}}
        />
          </Link>  
    
        
        
        </div>
        <button className="btn admin-logout ms-5 my-4" onClick={(e) => signOut(e)}>Đăng xuất</button>

      <nav className="list-group">
    <NavLink className="list-group-item with-badge" to={"/admin/users"}><FontAwesomeIcon icon={faUser} style={{marginRight: '10px'}}/> Người dùng</NavLink>
    <NavLink className="list-group-item" to={"/admin/products"}><FontAwesomeIcon icon={faBook} style={{marginRight: '10px'}}/> Sản phẩm</NavLink>
    <NavLink className="list-group-item with-badge " to={"/admin/reports"}><FontAwesomeIcon icon={faFlag} style={{marginRight: '10px'}}/> Đơn tố cáo</NavLink>
    <NavLink className="list-group-item with-badge " to={"/admin/withdraws"}><FontAwesomeIcon icon={faMoneyBill} style={{marginRight: '10px'}}/> Đơn hoàn tiền</NavLink>
   </nav>
    </div>
  </nav>



        </>
    )
}
export default AppSideBar