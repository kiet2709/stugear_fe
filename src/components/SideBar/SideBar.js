import SubMenu from "./SubMenu";
import "./SideBar.css"
const SideBar = ({categories}) => {


  return (
    <>
      <nav className="sidebar card sticky-top   ">
        <ul >
          <SubMenu category={{
            name: "Tất cả"
          }} />
          {categories.map(item => (
            
          <SubMenu key={item.id} category={item} />
          ))}
        </ul>
      </nav>

   
      
    </>
  );
};
export default SideBar;
