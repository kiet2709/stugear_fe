
import {
  faCaretUp,
  faCaretDown,
  faBookmark
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SubMenu.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SubMenu = ({ category, buyActive, sellActive, isAll }) => {
  const [submenuOpen, setSubmenuOpen] = useState(buyActive)
  const naviagate = useNavigate()
  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen)
  }

  // const handleSell = async () => {
      
  // }

  return (
    <>
      <li >
        <div className={`sub-menu ${buyActive || sellActive ? 'menu-active' : ''}`}>

        <Link onClick={toggleSubmenu} >
          {category.name}{' '}
          <FontAwesomeIcon
            icon={submenuOpen ? faCaretUp : faCaretDown}
          />
        </Link>
        </div>

        {submenuOpen && (
          <ul>
            <li className={`sub-menu ${buyActive ? 'sub-menu-active' : ''}`} >
              <Link to={`/home-page/category/${isAll ? 'all' : category.id}`} >
              <FontAwesomeIcon
                icon={faBookmark}
                style={{ color: '#111414', marginRight: '8px' }}
              />Mua</Link>
            </li>
            <li className={`sub-menu ${sellActive ? 'sub-menu-active' : ''}`}>
              <Link to={"/member/upload"} >
              <FontAwesomeIcon
                icon={faBookmark}
                style={{ color: '#F3787A', marginRight: '8px' }}
              />Bán</Link>
            </li>
          </ul>
        )}
      </li>
    </>
  )
  
}



export default SubMenu
