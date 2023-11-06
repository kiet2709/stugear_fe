import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBirthdayCake, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const Type = () => {
  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry"},
  ];
  const [selected, setSelected] = useState([]);
  return (
    <>
      <form action="#">
        <div className="row">
        <div className="col-3">
          <h4>Danh mục</h4>
          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
            overrideStrings={{
              allItemsAreSelected: "All items are selected.",
              clearSearch: "Clear Search",
              clearSelected: "Clear Selected",
              noOptions: "No options",
              search: "Search",
              selectAll: "Select All",
              selectAllFiltered: "Select All (Filtered)",
              selectSomeItems: "Chọn...",
              create: "Create",
            }}
          />
        </div>
        <div className="col-3">
          <h4>Thẻ</h4>
          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            hasSelectAll="false"
            labelledBy="Select2"
            isCreatable= "true"
            overrideStrings={{
              allItemsAreSelected: "All items are selected.",
              clearSearch: "Clear Search",
              clearSelected: "Clear Selected",
              noOptions: "No options",
              search: "Search",
              selectAll: "Select All",
              selectAllFiltered: "Select All (Filtered)",
              selectSomeItems: "Chọn...",
              create: "Create",
            }}
          />
        </div>
        <div className="col-5">
          <h4>Phương thức thanh toán</h4>
          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
            overrideStrings={{
              allItemsAreSelected: "All items are selected.",
              clearSearch: "Clear Search",
              clearSelected: "Clear Selected",
              noOptions: "No options",
              search: "Search",
              selectAll: "Select All",
              selectAllFiltered: "Select All (Filtered)",
              selectSomeItems: "Chọn...",
              create: "Create",
            }}
          />
        </div>

        </div>

        <hr className="border-dark my-5" />



        <div className="mt-3 d-flex justify-content-end">
          <button type="button" className="btn btn-primary">
            Lưu thay đổi
          </button>
          &nbsp;
        </div>
      </form>
    </>
  );
};
export default Type;
