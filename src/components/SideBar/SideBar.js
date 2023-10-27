import SubMenu from "./SubMenu";
import "./SideBar.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const SideBar = ({ categories }) => {
  let { slug } = useParams();

  const [isSell, setSell] = useState(false);
  const [isBuy, setBuy] = useState(false);

  console.log(slug)

  return (
    <>
      <nav className="sidebar card sticky-top   ">
        <ul>
          {slug === "all" ? (
            <>
              <SubMenu
                buyActive={true}
                sellActive={false}
                category={{
                  name: "Tất cả",
                }}
              />

              {categories.map((item) => (
                <SubMenu
                  key={item.id}
                  category={item}
                  buyActive={false}
                  sellActive={false}
                />
              ))}
            </>
          ) : (

            <>
            <SubMenu
                buyActive={false}
                sellActive={false}
                category={{
                  name: "Tất cả",
                }}
              />

            { categories.map((item) => (
              <SubMenu
                key={item.id}
                category={item}
                buyActive={item.id == slug}
                sellActive={false}
              />
            ))}
            </>
           
          )}
        </ul>
      </nav>
    </>
  );
};
export default SideBar;
