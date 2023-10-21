import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./CategoryFilter.css";
const CategoryFilter = ({categories}) => {
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
      <div className="dropdown col">
        <Button
          className="btn dropdown-toggle"
          id="profileDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Tất cả danh mục
        </Button>

        <ul
          className="dropdown-menu  mt-2 text-center"
          aria-labelledby="profileDropdown"
        >
          <li className="dropdown-item">Tất cả danh mục</li>
          <li>
            <hr className="dropdown-divider bg-white" />
          </li>
          {categories.map((item) => (
            <li className="dropdown-item">
              <FontAwesomeIcon
                icon={faBookmark}
                style={{ color: getRandomColor(), marginRight: "8px" }}
              />{" "}
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryFilter;
