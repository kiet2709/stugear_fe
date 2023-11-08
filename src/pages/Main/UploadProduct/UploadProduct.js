
import "./UploadProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { faFileText } from "@fortawesome/free-regular-svg-icons";
import ProductService from "../../../service/ProductService";
import CategoryService from "../../../service/CategoryService";
import TagService from "../../../service/TagService";

import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// "chặn": "0",
// "nháp": "1",
// "chờ duyệt": "2",
// "đã duyệt": "3",
// "đã bán": "4",
// "đã thanh toán": "5"


const UploadProduct = () => {
  let { slug } = useParams();
  const navigate = useNavigate()
  const [isAdded, setAdded] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    condition: 1,
    edition: "",
    quantity: 2,
    brand: "",
    status: 2, // chờ duyệt
    origin_price: "",
    category_id: 1,
    transaction_id: 2,
    description: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const getAllCategories = async () => {
    const cateResponse = await CategoryService.getAllCategories();
    setCategories(cateResponse);
  };

  const DefaultItemRenderer = ({
    checked,
    option,
    onClick,
    disabled,
  }) => (
    <div className={`item-renderer ${disabled ? "disabled" : ""}`}>
      <input
        type="checkbox"
        onChange={onClick}
        checked={checked}
        tabIndex={-1}
        disabled={disabled}
      />
      <span>
      <div
        className={`btn btn-outline tag badge ${option.style}`}
      >
        {option.label}
      </div> 
      </span>
    </div>
  );
  const getAllTags = async () => {
    const tagResponse = await TagService.getAllTags();
    const options = tagResponse.map((tag) => ({
      label: tag.name,
      style: tag.color,
      value: tag.id, // Convert id to string if necessary
    }));
    setTags(options);
  };

  const getProductById = async (id) => {
    const response = await ProductService.getProductById(id)
    if(response.status === 404){
      navigate("/not-found")
    }
    setProduct({
    name: response?.title,
    price: response?.price,
    condition: response?.condition === "Đã sử dụng" ? 1 : 2,
    edition: response?.edition,
    quantity: response?.quantity,
    brand: response?.brand,
    status: response?.status ==="Chờ duyệt" ? 2 : 1, // chờ duyệt
    origin_price: response?.origin_price,
    category_id: response?.category_id,
    transaction_id: response?.transaction_method === "Trên trang web" ? 2 : 1,
    description: response?.description,
    })
  }

  useEffect(() => {
    console.log(slug)
    if(slug !== undefined){
      getProductById(slug)
    }
    getAllCategories();
    getAllTags();
  }, []);


    console.log(product)
    const handleFileChange = (e) => {
      setSelectedFile(e.target.files[0]);
      console.log("image")
      console.log(selectedFile)
    };
  const handleDraft = async (e) => {
    e.preventDefault();
    setProduct({ ...product, status: 1 });
    const response = await ProductService.createDraft(product)
    console.log(response)
    let productId = 0
    if(response?.id){
      productId = response.id
    }else{
      console.log("Some thing went wrong")
      return
    }
    const formData = new FormData();
    formData.append('image', selectedFile);
   await ProductService.uploadImage(productId, formData)
   await ProductService.attachTag(productId, selected.map(item => item.value))
   setAdded(true);
   toast.success("Lưu nháp thành công!", {
     position: "top-center",
     autoClose: 2000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
   });
  //  navigate("/member/my-product")
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProduct({ ...product, status: 2 });
    const response = await ProductService.createProduct(product)
    console.log(response)
    let productId = 0
    if(response?.id){
      productId = response.id
    }else{
      console.log("Some thing went wrong")
      return
    }
    const formData = new FormData();
    formData.append('image', selectedFile);
   await ProductService.uploadImage(productId, formData)
   await ProductService.attachTag(productId, selected.map(item => item.value))
   setAdded(true);
   toast.success("Đăng sản phẩm thành công!", {
     position: "top-center",
     autoClose: 2000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
   });
  //  navigate("/member/my-product")
  };

  const [selected, setSelected] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <>
      <div className="card my-5 p-5">
        <form>
          <div className="row product-type my-5 ">
            <div className="col-5 text-start">
              <h3>Chọn thể loại.</h3>
              <span>
                Cung cấp thể loại và lĩnh vực rõ ràng sẽ giúp sản phẩm của bạn
                dễ dàng được tìm thấy bởi các khách hàng tìm năng
              </span>
            </div>

            <div className="col">
              <h5>
                Danh mục <span className="require">*</span>
              </h5>
              <select class="form-select" aria-label="Default select example" required 
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
            <div className="col">
              <h5>Thẻ</h5>
              <MultiSelect
                className="multi-select"
                options={tags}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
                isCreatable="true"
                ItemRenderer={DefaultItemRenderer}
                // customValueRenderer={customValueRenderer}
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
            <div className="col">
              <div className="col">
                <h5>
                  Phương thức <span className="require">*</span>
                </h5>
                <select class="form-select" aria-label="Default select example" required
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

          <div className="row product-detail my-5 ">
            <div className="col-5 text-start">
              <h3>Chi tiết sản phẩm</h3>
              <span>
                Cung cấp thể loại và lĩnh vực rõ ràng sẽ giúp sản phẩm của bạn
                dễ dàng được tìm thấy bởi các khách hàng tìm năng
              </span>
            </div>
            <div className="col">
              <h5>
                Tiêu đề <span className="require">*</span>
              </h5>
              <div className="my-3 input-group flex-nowrap">
                <span className="input-group-text">
                  {" "}
                  <FontAwesomeIcon icon={faFileText} />
                </span>
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="Nhập tiêu đề sản phẩm"
                  name="name"
                  onChange={(e) => handleChange(e)}
                  value={product.name}
                />
              </div>
              <div className="row">
                <div className="form-group mt-3 col-12">
                  <h5 className="form-label">Mô tả</h5>
                  <textarea
                    className="form-control"
                    rows={5}
                    name="description"
                    onChange={(e) => handleChange(e)}
                    value={product.description}
                  />
                </div>
                <div className="col mt-4">
                  <h5>
                    Thương hiệu <span className="require">*</span>
                  </h5>
                  <div className="my-3 input-group">
                    <span className="input-group-text">
                      {" "}
                      <FontAwesomeIcon icon={faFileText} />
                    </span>
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="Tên thương hiệu"
                      name="brand"
                      onChange={(e) => handleChange(e)}
                      value={product.brand}
                    />
                  </div>
                </div>
                <div className="col mt-4">
                  <h5>Phiên bản</h5>
                  <div className="my-3 input-group">
                    <span className="input-group-text">
                      {" "}
                      <FontAwesomeIcon icon={faFileText} />
                    </span>
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="Tên phiên bản"
                      name="edition"
                      onChange={(e) => handleChange(e)}
                      value={product.edition}
                    />
                  </div>
                </div>

                <div className="col-12 mt-4">
                  <h5 className="my-3">
                    Hình minh họa <span className="require">*</span>
                  </h5>
                  <div className="mb-3">
                    <input className="form-control" type="file" id="formFile" name="image" required 
                                onChange={(e) => handleFileChange(e)}/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" row product-price my-5">
            <div className="col-5 text-start">
              <h3>Tình trạng</h3>
              <span>Tình trạng sản phẩm của bạn thế nào</span>
            </div>
            <div className="col">
              <div className="row ">
                <div className="input-group">
                  <div className="input-group-prepend ">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelect01"
                    >
                      Trạng thái
                    </label>
                  </div>
                  <select
                    className="custom-select w-50 "
                    id="inputGroupSelect01"
                    required
                    onChange={(e) => handleChange(e)}
                    value={product.condition}
                  >
                    <option selected>Chọn...</option>
                    <option value="1">Đã sử dụng</option>
                    <option value="2">Chưa sử dụng</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="col">
                <div className="input-group">
                  <div className="input-group-prepend ">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelect02"
                    >
                      Số lượng
                    </label>
                  </div>
                  <div className="form-outline">
                    <input
                      type="number"
                      className="form-control"
                      id="inputGroupSelect02"
                      defaultValue={1}
                      name="quantity"
                      onChange={(e) => handleChange(e)}
                      value={product.quantity}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" row product-price my-3">
            <div className="col-5 text-start">
              <h3>Giá</h3>
              <span>
                Bạn có thể cung cấp sản phẩm miễn phí hoặc với 1 mức giá nhất
                định
              </span>
            </div>
            <div className="col">
              <h5>Giá gốc</h5>
              <div className="input-group mb-3">
                <input
                  defaultValue={0}
                  type="text"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  name="origin_price"
                  onChange={(e) => handleChange(e)}
                  value={product.origin_price}
                />
                <div className="input-group-append">
                  <span className="input-group-text">VNĐ</span>
                </div>
              </div>
            </div>
            <div className="col">
              <h5>
                Giá bán <span className="require">*</span>
              </h5>
              <div className="input-group mb-3">
                <input
                  defaultValue={0}
                  type="text"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  name="price"
                  onChange={(e) => handleChange(e)}
                  value={product.price}
                />
                <div className="input-group-append">
                  <span className="input-group-text">VNĐ</span>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="ms-auto mt-5">

          {slug === undefined && (
         <> <button className="me-2 btn" onClick={(e) => handleDraft(e)}>
         Lưu bản nháp
       </button></>
          )}
          <button className="btn" onClick={(e) => handleSubmit(e)}>
            Đăng
          </button>
        </div>
        {isAdded ? (
        <>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </>
      ) : (
        <></>
      )}
      </div>
    </>
  );
};

export default UploadProduct;
