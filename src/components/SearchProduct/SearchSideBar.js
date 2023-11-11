import "./SearchSideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "react-select-search/style.css";
import CategoryService from "../../service/CategoryService";
import TagService from "../../service/TagService";
import { MultiSelect } from "react-multi-select-component";
import DatetimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider";
const SearchSideBar = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  const getAllTags = async () => {
    const tagResponse = await TagService.getAllTags();
    const options = tagResponse.map((tag) => ({
      label: tag.name,
      style: tag.color,
      value: tag.id, // Convert id to string if necessary
    }));
    setTags(options);
  };
  const getAllCategories = async () => {
    const cateResponse = await CategoryService.getAllCategories();
    setCategories(cateResponse);
  };
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setLoading(true);
    getAllCategories();
    getAllTags();
    setLoading(false);
  }, []);
  const [selected, setSelected] = useState([]);
  const DefaultItemRenderer = ({ checked, option, onClick, disabled }) => (
    <div className={`item-renderer ${disabled ? "disabled" : ""}`}>
      <input
        type="checkbox"
        onChange={onClick}
        checked={checked}
        tabIndex={-1}
        disabled={disabled}
      />
      <span>
        <div className={`btn btn-outline tag badge ${option.style}`}>
          {option.label}
        </div>
      </span>
    </div>
  );
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = (date) => {
    setStartDate(date);
    // Ensure end date is not before the selected start date
    if (date > endDate) {
      setEndDate(date);
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    // Ensure start date is not after the selected end date
    if (date < startDate) {
      setStartDate(date);
    }
  };
  return (
    <>
      {/* Filter Section */}
      <div className="card">
        <div className="card-body filter">
          <div className="filter-search">
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
          </div>


          <div className="filter-updated my-4">
            <h5>Ngày đăng</h5>

            <div className="filter-updated start-day my-3">
            <span className="me-3">Từ: </span>
            <DatetimePicker
              format="y-MM-dd"
              onChange={handleStartDateChange}
              value={startDate}
            />
            </div>
          
            <div className="filter-updated end-day my-3">

            <span className="me-2">Đến: </span>
            <DatetimePicker
              format="y-MM-dd"
              onChange={handleEndDateChange}
              value={endDate}
            />
            </div>
       
          </div>

          <div className="filter-price my-4">
          <h5 className="mb-3">Giá</h5>
          <MultiRangeSlider
      min={0}
      max={1000000}
      onChange={() => {}}
    />
          </div>

          <div className="filter-category my-4 mt-5">
            <h5 className="my-3">Danh mục</h5>

            <select
              class="form-select"
              aria-label="Default select example"
              name="category_id"
              onChange={(e) => handleChange(e)}
              value={product.category_id}
            >
              <option>Chọn...</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-tag my-4">
            <h5 className="my-3">Thẻ</h5>

            <MultiSelect
              className="filter-tag"
              options={tags}
              value={selected}
              onChange={setSelected}
              labelledBy="Select"
              ItemRenderer={DefaultItemRenderer}
              overrideStrings={{
                allItemsAreSelected: "Đã chọn tất cả.",
                noOptions: "Không có",
                search: "Tìm kiếm",
                selectAll: "Chọn tất cả",
                selectSomeItems: "Chọn...",
                create: "Tạo mới",
              }}
            />
          </div>

          <div className="filter-condition my-4">
            <h5>Tình trạng</h5>

            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(e) => handleChange(e)}
              value={product.condition}
            >
              <option selected>Chọn...</option>
              <option value="1">Đã sử dụng</option>
              <option value="2">Chưa sử dụng</option>
            </select>
          </div>
          
          <div className="filter-method my-4">
              <h5>Phương thức thanh toán</h5>
       
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    required
                    name="transaction_id"
                    onChange={(e) => handleChange(e)}
                    value={product.transaction_id}
                  >
                    <option>Chọn...</option>
                    <option value="1">Tự do</option>
                    <option value="2">Trên web</option>
                  </select>
          </div>

        </div>
      </div>
    </>
  );
};
export default SearchSideBar;
