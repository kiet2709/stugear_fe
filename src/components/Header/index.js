import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuffer } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Button, Container, InputGroup, Nav, Navbar } from 'react-bootstrap'
import useAuth from '../../hooks/useAuth'
import UserHeader from '../UserHeader'
import TitleBox from '../TitleBox/TitleBox'

const Header = ({ sticky }) => {

  const user_id = localStorage.getItem('user_id');
  const [isSticky, setSticky] = useState(false);
  const [searchValue, setSearchValue] = useState("")
  const naviage = useNavigate()

  useEffect(() => {
    if (sticky === true) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          setSticky(true)
        } else {
          setSticky(false)
        }
      })
    }
  }, [])

  const handleSearch = () => {
    naviage('/search?name=' + searchValue)
  }

  const hanldeChange = (e) => {
    setSearchValue(e.target.value)
  }
  return (
    <>
    <Navbar
      className={`navbar navbar-expand-lg navbar-light ${
        isSticky ? 'navStyle' : 'navDefault'
      }`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand as={Link} to="/landing-page" className="navBrn">
          <FontAwesomeIcon icon={faBuffer} className="brnIcon" />{' '}
          <span className="navHighlight">StuGear</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />


        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mainNav">
            <Nav.Item>
              <Link to="/home-page/category/1" className="nav-link">
                Trang chủ
              </Link>
            </Nav.Item>
          
            <Nav.Item>
              <Link to="/search" className="nav-link">
                Tìm kiếm
              </Link>
            </Nav.Item>

          </Nav>

          <Nav className="ms-auto mainNav">

            <Nav.Item>

              {user_id ? (

                <div>
                  <UserHeader />
                </div>
                  )
                : (
                <div>
                  <Link to="/login">
                    <button className="authBtn">Đăng nhập</button>
                  </Link>
                  
                  <Link to="/register">
                    <button className="authBtn">Đăng ký</button>
                  </Link>
                </div>
                  )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

      </Container>
      
    </Navbar>

    </>
  )
}

export default Header
