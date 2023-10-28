import CategoryFilter from "./CategoryFilter/CategoryFilter";
import "./Category.css";
import CategoryHero from "./CategoryHero/CategoryHero";
import CategoryStatistic from "./CategoryStatistic/CategoryStatistic";
import Products from "../Product/Products";
import { useEffect, useState } from "react";
import CategoryService from "../../service/CategoryService";
import Loading from "../Loading";

const Category = ({ category }) => {
  const [statistic, setStatistic] = useState({});
  const [isLoading, setLoading] = useState(false);
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
          <CategoryFilter />
        </div>

        <div className="my-5">
          <Products category={category} />
        </div>
      </div>
    </>
  );
};

export default Category;
