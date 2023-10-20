import { Link } from "react-router-dom"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { faHeart, faBell } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useAuth from "../../hooks/useAuth"
import "./index.css"
import { useNavigate } from "react-router-dom"
const Header = () => {
    const { auth, setAuth } = useAuth()
    const navigate = useNavigate()

    const signOut = (e) => {
        e.preventDefault()
        setAuth({})
        navigate("/login")
    }
    return (
        <div className="container d-flex justify-content-between">
            <Link to="/landing-page" style={{ maxWidth: '7%', height: 'auto' }} >
                <img src="assets/images/logo.png" className="img-fluid" />
            </Link>

            <div className="m-auto my-2 text-center">
                <div className="input-group">
                    <div className="form-outline">
                        <input style={{ width: 400 }} id="search-input" placeholder="TÌm kiếm..." type="search" className="form-control" />
                    </div>
                    <button id="search-button" type="button" className="btn btn-dark">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>

            <div className="buttons text-center">

                {auth.accessToken ? (
                    <div className="row">

                        <div className="col mt-3 d-flex">
                            <div className="position-relative">
                                <Link to="/notify" style={{ textDecoration: 'none', color: 'black' }} className="mx-3">
                                    <FontAwesomeIcon icon={faBell} size="2x" />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        5 {/* Replace with the actual count */}
                                    </span>
                                </Link>
                            </div>
                            <div className="position-relative">
                                <Link to="/wishlist" style={{ textDecoration: 'none', color: 'black' }} className="mx-3">
                                    <FontAwesomeIcon icon={faHeart} size="2x" />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        3 {/* Replace with the actual count */}
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="dropdown col">
                            <Link
                                to="/profile"
                                style={{ textDecoration: 'none', color: 'black' }}
                                className="dropdown-toggle"
                                id="profileDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img src="assets/images/contributor.jpg" alt="Avatar" className="rounded-circle" width={60} height={60} />
                            </Link>

                            <ul className="dropdown-menu dropdown-menu-dark mt-2" aria-labelledby="profileDropdown">
                                <li className="dropdown-item">Tên đăng nhập: Khải</li>
                                <li><Link className="dropdown-item" to="/profile">Trang cá nhân</Link></li>
                                <li><Link className="dropdown-item" to="/settings">Cài đặt</Link></li>
                                <li><hr className="dropdown-divider bg-white" /></li>
                                <li><button className="dropdown-item" onClick={(e) => signOut(e)}>Đăng xuất</button></li>
                            </ul>
                        </div>







                    </div>


                ) : (

                    <div>
                        <Link to="/login" className="btn btn-outline-dark m-2">Đăng nhập</Link>
                        <Link to="/register" className="btn btn-outline-dark m-2 mr-1"> Đăng ký</Link>
                    </div>
                )}

            </div>



        </div>
    )
}

export default Header