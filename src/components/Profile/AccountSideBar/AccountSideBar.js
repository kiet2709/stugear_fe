import { Link, NavLink } from "react-router-dom";
import "./AccountSideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faFileUpload,
  faInfo,
  faLock,
  faMedal,
  faPeopleCarry,
  faTh,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import useAuth from "../../../hooks/useAuth"
import { useNavigate } from "react-router-dom";
import UserService from "../../../service/UserService";
import AuthService from "../../../service/AuthService"
import { useEffect, useState } from "react";
import Loading from "../../Loading";
const AccountSideBar = () => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({})
  const [isLoading, setLoading] = useState(false)
  let {user, setUser} = useAuth()
  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.clear()
    setUser("")
    navigate("/login")
  };
  const handleResetPassword = async (e) => {
    e.preventDefault()
   
    AuthService.findUserByEmail(userInfo?.email) 
    navigate(`/member/reset-password/${userInfo?.email}`)
  }
  const getCurrentUserInfo = async() => {
    setLoading(true)
    const response = await UserService.getCurrentUser()
    setUserInfo(response)
    setLoading(false)
  }
  useEffect(() => {
    getCurrentUserInfo()
  }, [])
  const handleFileChange = async(e) => {
    await UserService.uploadImage(user?.user_id, e.target.files[0])
    setUser({...user, user_image: `http://localhost:8000/api/users/${user?.user_id}/images/` + `?timestamp=${new Date().getTime()}`})
  };
  return (
    <>
<div>
  <aside className="user-info-wrapper">
    <div className="user-cover" style={{backgroundImage: 'url(https://bootdey.com/img/Content/bg1.jpg)'}}>
      <div className="info-label" data-toggle="tooltip" title data-original-title="You currently have 290 Reward Points to spend"><FontAwesomeIcon icon={faMedal}/> {userInfo?.reputation} danh tiếng</div>
    </div>
    <div className="user-info">
      <div className="user-avatar">
        
        <label >
        <div className="edit-avatar"> <FontAwesomeIcon icon={faFileUpload}/></div>
    <input type="file" className="account-settings-file" style={{ display: 'none' }} 
     onChange={(e) => handleFileChange(e)}/>
  </label>
        {isLoading ? (
          <Loading/>
        ): (
          <img src={user?.user_image} alt="User" />
        )}
        
        </div>
      <div className="user-data">
        <h4>{user.username}</h4><span>Tham gia vào tháng 6, 2017</span>
      </div>
    </div>
  </aside>
  <nav className="list-group">
    <NavLink className="list-group-item with-badge" to={"/member/general"}><FontAwesomeIcon icon={faTh}/> <i className=" fa fa-th" />Thông tin cá nhân</NavLink>
    <NavLink className="list-group-item" to={"/member/my-product"}><FontAwesomeIcon icon={faProductHunt}/> Sản phẩm của tôi</NavLink>
    <NavLink className="list-group-item with-badge " to={"/member/wishlist"}><FontAwesomeIcon icon={faHeart}/> Yêu thích</NavLink>
    <NavLink className="list-group-item with-badge" to={""} onClick={(e) => handleResetPassword(e)}><FontAwesomeIcon icon={faLock}/> Đặt lại mật khẩu</NavLink>
  </nav>
</div>

   

      <div className="card mt-3">
        <div className="mx-auto my-3 personal-logout-btn">
          <button className="btn" onClick={(e) => handleLogout(e)}>Đăng xuất</button>
        </div>
      </div>

   

    </>
  );
};
export default AccountSideBar;
