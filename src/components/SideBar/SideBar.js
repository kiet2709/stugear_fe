import SubMenu from './SubMenu'
import './SideBar.css'
import { useParams } from 'react-router-dom'
const SideBar = ({ categories }) => {
  const { slug } = useParams()


  return (
    <>
      <nav className="sidebar card sticky-top   ">
        <ul>
          {slug === 'all'
            ? (
            <>
              <SubMenu
                buyActive={true}
                sellActive={false}
                isAll={true}
                category={{
                  name: 'Tất cả'
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
              )
            : (

            <>
            <SubMenu
                buyActive={false}
                sellActive={false}
                isAll={true}
                category={{
                  name: 'Tất cả'
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
  )
}
export default SideBar
