
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import "./Categories.css";
import CategoryHero from "./CategoryHero/CategoryHero";
import CategoryStatistic from "./CategoryStatistic/CategoryStatistic";
import Products from "../Product/Products";
const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "cate_1",
    },
  ];



  const statistic = 
    {
      id: 1,
      total: 2643,
      sold: 1200,
      tag_total: 128
    };

  return (
    <>
      {/* <CategoryFilter categories={categories}/> */}
      <div id="category">
        <h1 id="category-title">Tài liệu</h1>

        <hr className="bg-dark my-3"></hr>
        <CategoryHero />
        <CategoryStatistic item={statistic} />
         
          
  
        <div className="my-4 category-filter">
          <CategoryFilter/>
        </div>
        {categories.map((item) => (
          <Products key={item.id} category={item} />
        ))}
      </div>
    </>
  );
};

export default Categories;
