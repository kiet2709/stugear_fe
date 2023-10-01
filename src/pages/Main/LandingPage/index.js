import Hero from "../../../components/Landing/Hero"
import "./index.css"
import { useEffect } from "react";
import AOS from "aos";
import Category from "../../../components/Landing/Category";
import CategoryList from "../../../components/Landing/CategoryList";
import TopContributor from "../../../components/Landing/TopContributor";
import TopContributorList from "../../../components/Landing/TopContributorList";
const LandingPage = () => {

    useEffect(() => {
        function aos_init() {
            AOS.init({
              duration: 1000,
              easing: "ease-in-out",
              once: true,
              mirror: false
            });
          }
          window.addEventListener('load', () => {
            aos_init();
          });
          aos_init()
      }, []);
    
    return (
        <>

        <Hero/>
        <CategoryList/>
        <TopContributorList/>
        </>
    )

}

export default LandingPage