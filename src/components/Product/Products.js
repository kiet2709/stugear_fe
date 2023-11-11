import { useEffect, useState } from "react";
import "./Products.css";
import Product from "./Product";
import ProductService from "../../service/ProductService";

import Loading from "../../components/Loading";
import CustomPagination from "../Pagination/Pagination";

const Products = ({ category }) => {
  const [products, setProducts] = useState([{}]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState()
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await ProductService.getProductsByCategoryId(
        category.id, currentPage
      );
      if (response?.status === 500) {
        console.log("Products: Something went wrong");
      } else {
        setProducts(response);
      }
      setLoading(false);
      setTotalPage(response?.total_page)
    };

    getProducts();
  }, [currentPage]);

  return (
    <div>
      <table className="table table-borderless table-striped table-hover">
        <tbody>
          <>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {products?.data.map((product, index) => (
                  <Product key={index} product={product} />
                ))}
              </>
            )}
          </>
        </tbody>
      </table>
      <div  className="mt-4 ">
        <CustomPagination 
            currentPage={currentPage}
            totalPage={totalPage}
            prevPage={prevPage}
            nextPage={nextPage}
            setCurrentPage={setCurrentPage}
          />
      </div>
    </div>
  );
};
export default Products;
