import { useState } from "react";
import "./CategoryFilter.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
const CategoryFilter = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="col-10">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="inlineRadio1"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleRadioChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Tự do
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="inlineRadio2"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleRadioChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Qua website
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="inlineRadio3"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleRadioChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              Tùy chọn
            </label>
          </div>
        </div>
        <div className="col ms-auto">
          <div className="dropdown col">
            <button
              className="btn dropdown-toggle text-white"
              id="dropdown"
              data-bs-toggle="dropdown"
            >
              Sắp xếp
            </button>

            <ul
              className="dropdown-menu dropdown-menu-dark mt-2"
              aria-labelledby="dropdown"
            >
              <li>
                <button className="dropdown-item">
                  <FontAwesomeIcon icon={faSort} /> Ngày đăng
                </button>
              </li>
              <li>
                <button className="dropdown-item">
                  <FontAwesomeIcon icon={faSort} /> Giá bán
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryFilter;
