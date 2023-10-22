import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuffer } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Container, InputGroup, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import UserHeader from "../UserHeader";
import { useNavigate } from "react-router-dom";
const Header = ({ sticky }) => {
  const { auth } = useAuth();
  const [isSticky, setSticky] = useState(false);
  const [searchValue, setSearchValue] = useState("")
  const naviage = useNavigate()
  console.log(auth);

  useEffect(() => {
    if (sticky === true) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          setSticky(true);
        } else {
          setSticky(false);
        }
      });
    }
  }, []);

  const handleSearch =() => {
    naviage("/search?name="+searchValue)
  }

  const hanldeChange =(e) => {
    setSearchValue(e.target.value)
  }
  return (
    <Navbar
      className={`navbar navbar-expand-lg navbar-light ${
        isSticky ? "navStyle" : "navDefault"
      }`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand as={Link} to="/landing-page" className="navBrn">
          <FontAwesomeIcon icon={faBuffer} className="brnIcon" />{" "}
          <span className="navHighlight">StuGear</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Item>
            <InputGroup className="form-outline" id="search-group">
              <input
                id="search-input"
                placeholder="Tìm kiếm..."
                type="search"
                className="form-control"
                value={searchValue}
                onChange={(e) => hanldeChange(e)}
              />
              <Button id="search-button">
                <FontAwesomeIcon icon={faSearch} id="search-icon" onClick={() => handleSearch()} />
              </Button>
            </InputGroup>
          </Nav.Item>
          <Nav className="ms-auto mainNav">
            <Nav.Item>
              <Link to="/home-page" className="nav-link">
                Trang chủ
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/info" className="nav-link">
                Thông tin
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact" className="nav-link">
                Liên hệ
              </Link>
            </Nav.Item>
            <Nav.Item>
              {auth.access_token ? (
                <div>
                  <UserHeader />
                </div>
              ) : (
                <div>
                  <Link to="/login">
                    <button className="authBtn">Đăng nhập</button>
                  </Link>
                </div>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
