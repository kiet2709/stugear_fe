import "./SearchSideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import SelectSearch from "react-select-search";
import "react-select-search/style.css";
import { useSelect } from "react-select-search";
const SearchSideBar = () => {
  const options = [
    { name: "Swedish", value: "sv" },
    { name: "English", value: "en" },
    {
      type: "group",
      name: "Group name",
      items: [{ name: "Spanish", value: "es" }],
    },
  ];

  // const [snapshot, valueProps, optionProps] = useSelect({
  //   options,
  //   value,
  //   multiple,
  //   disabled,
  // });

  return (
    <>
      {/* Filter Section */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Tìm kiếm</h5>

          <div className="form-outline search-group input-group my-4">
            <input
              id="search-input"
              placeholder="Tìm kiếm..."
              type="search"
              className="form-control"
            />
            <button className="btn search-button">
              <FontAwesomeIcon icon={faSearch} id="search-icon" />
            </button>
          </div>

          <h5 className="my-3">Danh mục</h5>
          <div>
            <SelectSearch
              options={options}
              value="sv"
              name="language"
              placeholder="Choose your language"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default SearchSideBar;
