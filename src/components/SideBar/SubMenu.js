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
import { useState } from "react";
const SubMenu = ({ category }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <>
      <li className="sub-menu">
        <Link onClick={toggleSubmenu}>
          {category.name}
          <FontAwesomeIcon
            className="right"
            icon={submenuOpen ? faCaretUp : faCaretDown}
          />
        </Link>
        {submenuOpen && (
          <ul>
            <li>
              <Link to="/buy">
              <FontAwesomeIcon
                icon={faBookmark}
                style={{ color: getRandomColor(), marginRight: "8px" }}
              />Mua</Link>
            </li>
            <li>
              <Link to="/sell">
              <FontAwesomeIcon
                icon={faBookmark}
                style={{ color: getRandomColor(), marginRight: "8px" }}
              />Bán</Link>
            </li>
          </ul>
        )}
      </li>
    </>
  );
};

export default SubMenu;
