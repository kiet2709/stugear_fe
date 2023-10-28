import React, { useState, useRef } from "react";
import Popover from "react-bootstrap/Popover";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { Overlay } from "react-bootstrap";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const UserHeader = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  const signOut = () => {};
  return (
    <>
      <div className="d-flex">
        
        <div className="member-section">
          <Link style={{textDecoration: 'None', color: 'black'}} to={"/member/cart"} className="me-3">
            <FontAwesomeIcon className="member-icon" icon={faShoppingCart } />
          </Link>

          <Link style={{textDecoration: 'None', color: 'black'}} to={"/member/wishlist"} className="me-3">
            <FontAwesomeIcon icon={faHeart} className="member-icon"/>
          </Link>
        </div>




        <img
          src="/assets/images/contributor.jpg"
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
              <li>Khải</li>
              <li>
                <Link className="link" to="/member/general">
                  <FontAwesomeIcon icon={faAddressCard} /> Trang cá nhân
                </Link>
              </li>
              <li>
                <Link className="link" to="/member/wishlist">
                  <FontAwesomeIcon icon={faHeart} /> Yêu thích
                </Link>
              </li>

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
