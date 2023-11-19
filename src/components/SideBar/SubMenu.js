
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
import UserService from '../../service/UserService';


const SubMenu = ({ category, buyActive, sellActive, isAll }) => {
  const [submenuOpen, setSubmenuOpen] = useState(buyActive)
  const naviagate = useNavigate()
  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen)
  }

  const handleUpload = async () => {
    const response = await UserService.getCurrentUser()
    if (response?.is_verify == "false"){
      const result = UserService.sendVerifyEmail(response?.email)
      naviagate("/verify")
    }else{
      naviagate("/member/upload")
    }
  }

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
              <Link to={`/home-page/category/${category.id}`} >
              <FontAwesomeIcon
                icon={faBookmark}
                style={{ color: '#111414', marginRight: '8px' }}
              />Mua</Link>
            </li>
            <li className={`sub-menu ${sellActive ? 'sub-menu-active' : ''}`}>
              <Link onClick={() => handleUpload()} >
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
