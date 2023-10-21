import { Container } from "react-bootstrap";
import "./index.css";
import ForumTitle from "../../../components/Home/ForumTitle/ForumTitle";
import Categories from "../../../components/Category/Categories";
import SideBar from "../../../components/SideBar/SideBar";

const HomePage = () => {
  const categories = [
    {
      id: 1,
      name: "Tài liệu",
    },
    {
      id: 2,
      name: "Dụng cụ",
    },
    {
      id: 3,
      name: "Khác",
    }

  ];
  return (
    <Container>
        <ForumTitle />
      <div className="row">
        <div className="col-2">
          <SideBar categories={categories}/>
        </div>
        <div className="col">
          
          <Categories />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
