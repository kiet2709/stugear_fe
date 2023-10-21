import { Container } from "react-bootstrap";
import "./index.css";
import ForumTitle from "../../../components/Home/ForumTitle/ForumTitile";
import Categories from "../../../components/Category/Categories";
import SideBar from "../../../components/SideBar/SideBar";

const HomePage = () => {
  return (
    <Container>
        <ForumTitle />
      <div className="row">
        <div className="col-3">
          <SideBar />
        </div>
        <div className="col">
          
          <Categories />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
