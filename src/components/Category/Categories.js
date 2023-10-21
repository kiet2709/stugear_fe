import CategoryCard from "./CategoryCard/CategoryCard";
import CategoryFilter from "./CategoryFilter/CategoryFilter";

const Categories = () => {
    const categories = [
        {
          id: 1,
          name: "cate_1",
        },
  
      ];
    return (
        <>
          <CategoryFilter categories={categories}/>
          {categories.map(item => (
                <CategoryCard key={item.id} category={item}/>
          ))}   
        </>
    )
}

export default Categories