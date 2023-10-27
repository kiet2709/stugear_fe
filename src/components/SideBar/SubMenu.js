import {
  faSearch,
  faCaretUp,
  faCaretDown,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, InputGroup } from "react-bootstrap";
import "./SubMenu.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const SubMenu = ({ category, buyActive, sellActive }) => {
  const [submenuOpen, setSubmenuOpen] = useState(buyActive);
  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <>
      <li >
        <div  className={`sub-menu ${buyActive || sellActive ? "menu-active" : ""}`}>

        <Link onClick={toggleSubmenu} >
          {category.name}{" "}
          <FontAwesomeIcon
            icon={submenuOpen ? faCaretUp : faCaretDown}
          />
        </Link>
        </div>
       
        {submenuOpen && (
          <ul>
            <li className={`sub-menu ${buyActive ? "sub-menu-active" : ""}`} >
              <Link to={`/home-page/category/${category.id}`} >
              <FontAwesomeIcon
                icon={faBookmark}
                style={{ color: '#111414', marginRight: "8px" }}
              />Mua</Link>
            </li>
            <li className={`sub-menu ${sellActive ? "sub-menu-active" : ""}`}>
              <Link to={`/home-page/category/${category.id}`} >
              <FontAwesomeIcon
                icon={faBookmark}
                style={{ color: '#F3787A', marginRight: "8px" }}
              />Bán</Link>
            </li>
          </ul>
        )}
      </li>
    </>
  );
};

export default SubMenu;
