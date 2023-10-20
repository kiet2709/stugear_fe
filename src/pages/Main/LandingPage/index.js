import Hero from "../../../components/Landing/Hero"
import "./index.css"
import { useEffect, useState } from "react";
import AOS from "aos";
import Category from "../../../components/Landing/Category";
import CategoryList from "../../../components/Landing/CategoryList";
import TopContributor from "../../../components/Landing/TopContributor";
import TopContributorList from "../../../components/Landing/TopContributorList";
import useAuth from "../../../hooks/useAuth";
import CategoryService from "../../../service/CategoryService";
const LandingPage = () => {

    const [categories, setCategories] = useState([])
    const aos_init =() => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
      });
    }
    const loadData = async () => {
      const categoriesResponse = await CategoryService.getAllCategories()
      const top3Categories = categoriesResponse.data.data.slice(0, 3);
      setCategories(top3Categories)
    }
    useEffect(() => {
          window.addEventListener('load', () => {
            aos_init();
          });
          aos_init()
          loadData()
      }, []);

    return (
        <>
        <Hero/>
        <CategoryList categories={categories}/>
        <TopContributorList/>
        </>
    )

}

export default LandingPage