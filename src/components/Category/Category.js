import CategoryFilter from "./CategoryFilter/CategoryFilter";
import "./Category.css";
import CategoryHero from "./CategoryHero/CategoryHero";
import CategoryStatistic from "./CategoryStatistic/CategoryStatistic";
import Product from "../Product/Product"
import { useEffect, useState } from "react";
import CategoryService from "../../service/CategoryService";
import Loading from "../Loading";
import CustomPagination from "../Pagination/Pagination";


const Category = ({ category }) => {
  const [statistic, setStatistic] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState()
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const loadStatistic = async () => {
    const reponse = await CategoryService.getStatisticByCategoryId(category.id);

    if (reponse?.status === 500) {
      console.log("Categories: Something went wrong");
    } else {
      setStatistic(reponse);
    }
  };


  useEffect(() => {
    setLoading(true);
    loadStatistic();
    setLoading(false);
  }, []);

  return (
    <>
      <div className="category">
        <h1 id="category-title">{category.name}</h1>
        <hr className="bg-dark my-3"></hr>
        <CategoryHero category={category} />

        {isLoading ? <Loading /> : <CategoryStatistic item={statistic} />}

        <div className="my-4 category-filter">
          <CategoryFilter key={category.id} setLoading={setLoading} setTotalPage={setTotalPage} category_id={category?.id} currentPage={currentPage} setCurrentPage={setCurrentPage} setProducts={setProducts}/>
        </div>

        <div>
      <table className="table table-borderless table-striped table-hover">
        <tbody>
          <>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {products?.data?.map((product, index) => (
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
      </div>
    </>
  );
};

export default Category;
