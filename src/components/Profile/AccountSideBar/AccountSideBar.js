import { Link, NavLink } from "react-router-dom";
import "./AccountSideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faFileUpload,
  faInfo,
  faLock,
  faMedal,
  faMoneyBill,
  faPeopleCarry,
  faReorder,
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
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import useProduct from "../../../hooks/useProduct";
const AccountSideBar = () => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({})
  const [isLoading, setLoading] = useState(false)
  const {productCount} = useProduct()
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
    <NavLink className="list-group-item with-badge" to={"/member/general"}><FontAwesomeIcon icon={faTh} style={{marginRight: '10px'}}/> Thông tin cá nhân</NavLink>
    <NavLink className="list-group-item" to={"/member/my-product"}><FontAwesomeIcon icon={faProductHunt} style={{marginRight: '10px'}}/> Sản phẩm của tôi {productCount?.myProduct != 0 && <div className="counter">{productCount?.myProduct}</div>}</NavLink>
    <NavLink className="list-group-item with-badge " to={"/member/my-sell"}><FontAwesomeIcon icon={faMoneyBill} style={{marginRight: '10px'}}/> Đơn hàng của tôi {productCount?.myOrder != 0 && <div className="counter">{productCount?.myOrder}</div>}</NavLink>
    <NavLink className="list-group-item with-badge " to={"/member/wishlist"}><FontAwesomeIcon icon={faHeart} style={{marginRight: '10px'}}/> Yêu thích {productCount?.wishlist != 0 && <div className="counter">{productCount?.wishlist}</div>}</NavLink>
    <NavLink className="list-group-item with-badge " to={"/member/wallet"}><FontAwesomeIcon icon={faCreditCard} style={{marginRight: '10px'}}/> Ví tiền</NavLink>
    <NavLink className="list-group-item with-badge " to={"/member/order"}><FontAwesomeIcon icon={faReorder} style={{marginRight: '10px'}}/> Lịch sử mua hàng</NavLink>
    <NavLink className="list-group-item with-badge" to={""} onClick={(e) => handleResetPassword(e)}><FontAwesomeIcon icon={faLock} style={{marginRight: '10px'}}/> Đặt lại mật khẩu</NavLink>
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
