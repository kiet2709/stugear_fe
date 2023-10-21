import SubMenu from "./SubMenu";

const SideBar = ({categories}) => {


  return (
    <>
      <nav className="animated card bounceInDown">
        <ul>
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
