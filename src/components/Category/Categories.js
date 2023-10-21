import CategoryCard from "./CategoryCard/CategoryCard";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import "./Categories.css";
import CategoryHero from "./CategoryHero/CategoryHero";
import CategoryStatistic from "./CategoryStatistic/CategoryStatistic";
const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "cate_1",
    },
  ];

  const statistic = [
    {
      id: 1,
      quantity: 2643,
      name: "Tổng cộng",
    },
    {
      id: 2,
      quantity: 1200,
      name: "Đã trao đổi",
    },
    {
      id: 3,
      quantity: 128,
      name: "Thể loại",
    },
  ];
  return (
    <>
      {/* <CategoryFilter categories={categories}/> */}
      <div id="category">
        <h1 id="category-title">Tài liệu</h1>

        <hr className="bg-dark my-3"></hr>
        <CategoryHero />
        {statistic.map((item) => (
          <>
            <div className="category-statistic  my-3 ">
              <CategoryStatistic item={item} />
              
            </div>
            <span className="vertical-line"></span >
            
            
            
          </>
        ))}
        {categories.map((item) => (
          <CategoryCard key={item.id} category={item} />
        ))}
      </div>
    </>
  );
};

export default Categories;
