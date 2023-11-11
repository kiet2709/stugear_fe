import ProductCard from "../Product/ProductCard/ProductCard";
import "./SearchProduct.css";
import SearchSideBar from "./SearchSideBar";

const SearchProduct = () => {
  return (
    <>
      <div className="search-product my-5">
        <div className="row">
          <div className="col-3 filter">
            <SearchSideBar />
          </div>
          <div className="col search-result">
            <div className="col">
              <div className="row mb-3">
                <div className="col-3">
                  <ProductCard />
                </div>
                <div className="col-3">
                  <ProductCard />
                </div>
                <div className="col-3">
                  <ProductCard />
                </div>
                <div className="col-3">
                  <ProductCard />
                </div>
              </div>

              <div className="row">
                <div className="col-3">
                  <ProductCard />
                </div>
                <div className="col-3">
                  <ProductCard />
                </div>
                <div className="col-3">
                  <ProductCard />
                </div>
                <div className="col-3">
                  <ProductCard />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchProduct;
