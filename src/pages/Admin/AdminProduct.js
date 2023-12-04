import { useEffect, useState } from "react";
import ProductService from "../../service/ProductService";
import CustomPagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./AdminProduct.css"
import { MultiSelect } from "react-multi-select-component";
import CategoryService from "../../service/CategoryService";
import { Link } from "react-router-dom";
const AdminUser = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  // const [cateSelected, setCateSelected] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [query, setQuery] = useState("");
  // const handleChange = (e) => {
  //   setQuery(e.target.value);
  //   setCurrentPage(1)
  // };
  // const getProductsByCriteria = async (criteria, currentPage) => {
  //   setLoading(true);
  //   const response = await ProductService.getProductsByCriteria(
  //     criteria,
  //     currentPage
  //   );
  //   setProducts(response?.data);
  //   setTotalPage(response?.total_page);
  //   setLoading(false);
  // };
  const updateStatus = async (id, status) => {
    try {
      await ProductService.updateStatus(id, status);

    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  // const getAllCategories = async () => {
  //   const cateResponse = await CategoryService.getAllCategories();
  //   const options = cateResponse.map((category) => ({
  //     label: category.name,
  //     value: category.id, // Convert id to string if necessary
  //   }));
  //   setCategories(options);
  // };
  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      try {
        const response = await ProductService.getAllProducts(currentPage);
        if (response?.status === 500) {
          console.log('Something went wrong');
        } else {
          setTotalPage(response?.total_page);
          setProducts(response?.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      // await getAllCategories()
      setLoading(false)
    };
    loadData();
  }, [currentPage]);

//   useEffect(() => {

//     console.log("lấy");
   
  
//       const criteria = {
//         q: query,
//         category_id: cateSelected.map((item) => item.value),
//       }
//       getProductsByCriteria(criteria, currentPage);
  
    
// }, [
//   query,
//   currentPage,
//   cateSelected,
// ]);

  const convertStatusToName = (status) => {
    switch (status) {
      case "2":
        return "Chờ duyệt";
      case "3":
        return "Đã duyệt";
      case "4":
        return "Đã bán";
      default:
        return "Đã thanh toán";
    }
  };

  const handleStatusChange = async (e, productId) => {
    const selectedStatus = e.target.value;
    console.log(selectedStatus)
    await updateStatus(productId, selectedStatus);
    const selectedStatusString = convertStatusToName(selectedStatus);
    console.log(selectedStatusString)
    // Update products status here
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, status: selectedStatusString };
      }
      return product;
    });
  
    // Now update the state with the updated products
    setProducts(updatedProducts);
    
  };


  return (
    <>
      <div className="admin-product" >
        {/* <div className="filter my-5 row">
          <div className="col-2"></div>
          <div className="col-5">
          <div className="form-outline search-group input-group ">
            <input
              id="search-input"
              placeholder="Tìm kiếm..."
              type="search"
              className="form-control"
              name="q"
              onInput={(e) => handleChange(e)}
            />
            <button className="btn search-button">
              <FontAwesomeIcon icon={faSearch} id="search-icon" />
            </button>
          </div>
          </div>
          
          <div className="filter-category col-3">
            <MultiSelect
              className="filter-tag"
              options={categories}
              value={cateSelected}
              onChange={(cateSelected) => {
                setCateSelected(cateSelected);
                setCurrentPage(1) // Reset currentPage
              }}
              labelledBy="Select"
              overrideStrings={{
                allItemsAreSelected: "Đã chọn tất cả.",
                noOptions: "Không có",
                search: "Tìm kiếm",
                selectAll: "Chọn tất cả",
                selectSomeItems: "Chọn danh mục",
                create: "Tạo mới",
              }}
            />
          </div>
          
          <div className="col-2"></div>
          
        </div> */}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Ảnh</th>
              <th scope="col">Tiêu đề</th>
              <th scope="col">Giá</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Chuyển trạng thái</th>
              <th scope="col">Cập nhật</th>
            </tr>
          </thead>
          {isLoading ? (
            <><Loading/></>
          ): (
            <>   <tbody>
            {products?.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td className="text-center">
                  <Link to={"/home-page/product-detail/"+product.id}>
                  <img
                    src={product.product_image}
                    alt=""
                    className="admin-small-img"
                    style={{ width: '90%', height: '100px' }}
                  />
                  </Link>
                 
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.status}</td>
                <td>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={
                      product.status === "Chờ duyệt" ? 2 :
                      product.status === "Đã duyệt" ? 3 :
                      product.status === "Đã bán" ? 4 : 5
                    }
                    onChange={(e) => handleStatusChange(e, product.id)}
                  >
                    
  
  
                        <>
                     
                        <option value={2}>Chờ duyệt</option>
                        <option value={3}>Đã duyệt</option>
                        <option value={4}>Đã bán</option>
                        <option value={5}>Đã thanh toán</option>
                        </>
            
                    
                  </select>
                </td>
                
                <td>{product.last_updated}</td>
              </tr>
            ))}
          </tbody></>
          )}
       
        </table>
        <div className=""><CustomPagination
          currentPage={currentPage}
          totalPage={totalPage}
          prevPage={prevPage}
          nextPage={nextPage}
          setCurrentPage={setCurrentPage}
        /></div>
      </div>
    </>
  );
};

export default AdminUser;
