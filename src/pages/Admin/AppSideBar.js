import { Link } from "react-router-dom"
import Category from "../../components/Landing/Category"
import { useEffect, useState } from "react"
import CategoryService from "../../service/CategoryService"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faBook, faUser } from "@fortawesome/free-solid-svg-icons"
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

  <nav id="sidebar">
    <div className="custom-menu">
      <button type="button" id="sidebarCollapse" className="btn btn-primary">
        <FontAwesomeIcon icon={faBars}/>
      </button>
    </div>
    <div className="p-4 pt-5">
      <h1><a href="index.html" className="logo">STUGEAR</a></h1>
        <div className="text-center">    
        <img
          src={user?.user_image}
          alt=""
          className="rounded-circle"
          style={{width: '40%', height: '70px'}}
        />
        
        
        </div>
        <button className="btn admin-logout ms-5 my-4" onClick={(e) => signOut(e)}>Đăng xuất</button>
      <ul className="list-unstyled components mb-5">
      
        <li >
          
          <Link className="p-2" to="/admin/users"> <FontAwesomeIcon className="me-2" icon={faUser}/>  Người dùng</Link>
        </li>
      
        <li>
          <Link className="p-2" to="/admin/products"><FontAwesomeIcon className="me-2" icon={faBook}/> Sản phẩm</Link>
        </li>
      </ul>

    </div>
  </nav>



        </>
    )
}
export default AppSideBar