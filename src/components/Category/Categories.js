import CategoryFilter from "./CategoryFilter/CategoryFilter";
import "./Categories.css";
import CategoryHero from "./CategoryHero/CategoryHero";
import CategoryStatistic from "./CategoryStatistic/CategoryStatistic";
import Products from "../Product/Products";
import { useEffect, useState } from "react";
import CategoryService from "../../service/CategoryService";

const Categories = ({ category }) => {
  
  const [statistic, setStatistic] = useState({})

  useEffect(() => {
      const loadStatistic = async() => {
        
        const reponse = await CategoryService.getStatisticByCategoryId(category.id)

        if(reponse?.status === 500){
          console.log("Categories: Something went wrong")
        }else{
          setStatistic(reponse)
        }
      }

      loadStatistic()
  },[])



  return (
    <>
      {/* <CategoryFilter categories={categories}/> */}
      <div className="category">
        <h1 id="category-title">{category.name}</h1>
        <hr className="bg-dark my-3"></hr>
        <CategoryHero category={category} />
        <CategoryStatistic  item={statistic} />

        <div className="my-4 category-filter">
          <CategoryFilter />
        </div>

   
          <div className="my-5">
            <Products  category={category} />
          </div>
  
      </div>
    </>
  );
};

export default Categories;
