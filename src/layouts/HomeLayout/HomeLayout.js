import { Outlet } from "react-router";

import "./HomeLayout.css";
import { Container } from "react-bootstrap";
import ForumTitle from "../../components/Home/ForumTitle/ForumTitle";
import SideBar from "../../components/SideBar/SideBar";
import CategoryService from "../../service/CategoryService";
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header"
import { useEffect, useState } from "react";
const HomeLayout = () => {
  const [categories, setCategories] = useState([])
  const getCategories = async() => {
    const response = await CategoryService.getAllCategories()
    if (response?.status === 500) {
      console.log("Something wentwrong");
    } else {
    setCategories(response);
    }
  }
  useEffect(() => {
    getCategories()
  },[])

  return (
    <>
      <Header sticky={false}/>

      <Container>
        <ForumTitle />
        
        <div className="row">
          <div className="col-2 ">
            <SideBar categories={categories} />
          </div>
          <div className="col content">
            <Outlet />
          </div>
        </div>
      </Container>
      <Footer/>
    </>
  );
};
export default HomeLayout;
