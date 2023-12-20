import React, { useState, useRef } from "react";
import Popover from "react-bootstrap/Popover";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCreditCard,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import { Overlay } from "react-bootstrap";
import { faDollar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const UserHeader = () => {
  const { user, setUser } = useAuth();

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const navigate = useNavigate();
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  const signOut = () => {
    localStorage.clear();
    setUser("");
    navigate("/login");
  };
  return (
    <>
      <div className="d-flex">
        <div className="member-section">
          <Link
            style={{ textDecoration: "None", color: "black" }}
            to={"/member/wishlist"}
            className="me-3"
          >
            <FontAwesomeIcon icon={faHeart} className="member-icon" />
          </Link>
        </div>

        <img
          src={user?.user_image}
          alt=""
          onClick={handleClick}
          className="popImg"
        />
        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref.current}
          containerPadding={50}
        >
          <Popover id="popover-contained">
            <ul className="menu text-center">
              <li style={{ background: "#E7E9EB" }}>
                <span style={{ fontSize: "12px" }}>Số dư: {user?.balance}</span>
              </li>
              <li>{user?.username}</li>

              <Link className="link" to="/member/general" style={{textDecoration: 'none'}}>
                <li className="personal-li">
                  <FontAwesomeIcon icon={faAddressCard} /> Trang cá nhân
                </li>
              </Link>

              <Link className="link" to="/member/wishlist" style={{textDecoration: 'none'}}>
                <li className="personal-li">
                  <FontAwesomeIcon icon={faHeart} /> Yêu thích
                </li>
              </Link>

              <Link className="link" to="/member/wallet" style={{textDecoration: 'none'}}>
                <li className="personal-li">
                  <FontAwesomeIcon icon={faCreditCard} /> Ví tiền
                </li>
              </Link>

              <hr className="bg-dark" />

              <button className="btn text-white" onClick={(e) => signOut(e)}>
                Đăng xuất
              </button>
            </ul>
          </Popover>
        </Overlay>
      </div>
    </>
  );
};

export default UserHeader;
