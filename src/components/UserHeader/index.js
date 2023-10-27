import React, { useState, useRef } from 'react'
import Popover from 'react-bootstrap/Popover'
import './index.css'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { Overlay } from 'react-bootstrap'
const UserHeader = () => {
  const { auth } = useAuth()
  console.log(auth)
  const [show, setShow] = useState(false)
  const [target, setTarget] = useState(null)
  const ref = useRef(null)
  const handleClick = (event) => {
    setShow(!show)
    setTarget(event.target)
  }
  const signOut = () => {}
  return (
    <>
      <img
        src="assets/images/contributor.jpg"
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
              <Link className="link" to="/profile">
              <FontAwesomeIcon icon={faAddressCard}/> Trang cá nhân</Link>
            </li>
            <li>
              <Link className="link" to="/wishlist">
               <FontAwesomeIcon icon={faHeart}/> Yêu thích</Link>
            </li>

              <hr className="bg-dark" />

              <button className="btn text-white" onClick={(e) => signOut(e)}>Đăng xuất</button>

          </ul>
        </Popover>
      </Overlay>
    </>
  )
}

export default UserHeader
