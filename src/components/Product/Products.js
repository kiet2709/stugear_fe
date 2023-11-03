import { useEffect, useState } from "react";
import "./Products.css";
import Product from "./Product";
import ProductService from "../../service/ProductService";

import Loading from "../../components/Loading";

const Products = ({ category }) => {
  const [products, setProducts] = useState([{}]);
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
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
      console.log(response)
      setLoading(false);
    };

    getProducts();
  }, []);

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
      <div>
        <button onClick={prevPage} disabled={currentPage == 1}>
          Previous Page
        </button>
        <button onClick={nextPage} disabled={currentPage == products?.total_page}>
          Next Page
        </button>
      </div>
    </div>
  );
};
export default Products;
