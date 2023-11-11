import "./MyProduct.css";
import ProductCard from "../../Product/ProductCard/ProductCard";
import UserService from "../../../service/UserService";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CustomPagination from "../../../components/Pagination/Pagination";
import Loading from "../../Loading";
const MyProduct = () => {
  const [products, setProducts] = useState([]);

  const getProductsByCurrentUser = async () => {
    
    setLoading(true);
    const response = await UserService.getCurrentUserProducts(currentPage);
    setTotalPage(response?.total_page);
    setProducts(response?.data);
    
    setLoading(false);
  };

  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleProductLink = (status, id) =>{
    if (status==="Đã duyệt"){
      return `/home-page/product-detail/${id}` 
    }else if (status ==="Chờ duyệt"){
      return `/home-page/product-detail/${id}` 
    } else {
      return `/member/upload/${id}`  

      
    }
  }

  useEffect(() => {
    getProductsByCurrentUser();
  }, [currentPage]);

  return (
    <>
      <div className="row mb-5">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {products.map((product) => (
              <div className="col-4">
                <Link
                  className="my-product-item"
                  style={{ textDecoration: "none", color: "black" }}
                  to={handleProductLink(product?.status, product?.id)}
                >
                  <ProductCard product={product} />
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
      <CustomPagination 
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
          setCurrentPage={setCurrentPage}
          totalPage={totalPage}
        />
    </>
  );
};

export default MyProduct;
