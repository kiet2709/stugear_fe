import "./CategoryStatistic.css";

const CategoryStatistic = ({item}) => {
  return (
    
      <>
    
      <span>{item.quantity}</span>
      <p>{item.name}</p>
      
      </>
   
  );
};

export default CategoryStatistic;
