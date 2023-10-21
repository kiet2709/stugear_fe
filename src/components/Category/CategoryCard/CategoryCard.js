import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, InputGroup } from "react-bootstrap";

import "./CategoryCard.css"
const CategoryCard = (category) => {
  return (
    <>
      <div class="card">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <table class="table">
            <tbody>
              <tr>
              <InputGroup className="form-outline" id="search-group">
              <input
                id="search-input"
                placeholder="Tìm kiếm..."
                type="search"
                className="form-control"
              />
              <Button id="search-button">
                <FontAwesomeIcon icon={faSearch} id="search-icon" />
              </Button>
            </InputGroup>
              </tr>
              <tr>
                <td>{category.name}</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default CategoryCard;
