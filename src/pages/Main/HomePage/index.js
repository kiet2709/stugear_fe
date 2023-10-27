import { Container } from "react-bootstrap";
import "./index.css";
import ForumTitle from "../../../components/Home/ForumTitle/ForumTitle";
import Categories from "../../../components/Category/Categories";
import SideBar from "../../../components/SideBar/SideBar";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import CategoryService from "../../../service/CategoryService";


const HomePage = () => {

  const [categories, setCategories] = useState([]);
  let { slug } = useParams();

  useEffect(() => {
    const loadData = async () => {
      if (slug !== "all") {
        const response = await CategoryService.getCategoriesById(slug);

        if (response?.status === 500) {
          console.log("Something wentwrong");
        } else {
          setCategories([response]);
        }
      } else {
        const response = await CategoryService.getAllCategories();
        if (response?.status === 500) {
          console.log("Something wentwrong");
        } else {
          setCategories(response);
        }
      }
    };                   
    loadData();
  }, []);

  return (
  
      <>

    
        {categories.map(category => (
            <Categories key={category.id} category={category}/>
        ))}

      </>
  )
};

export default HomePage;
