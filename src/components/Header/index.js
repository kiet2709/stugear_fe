import { Link } from "react-router-dom"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useAuth from "../../hooks/useAuth"
const Header = () => {
    return (
            <div className="container d-flex justify-content-between">
                <Link  to="/landing-page" style={{ maxWidth: '7%', height: 'auto' }} >
                    <img src="assets/images/logo.png" className="img-fluid" />
                </Link>

                    <div className="m-auto my-2 text-center">
                        <div className="input-group">
                            <div className="form-outline">
                                <input style={{width:400}} id="search-input" placeholder="TÌm kiếm..." type="search" className="form-control" />
                            </div>
                            <button id="search-button" type="button" className="btn btn-dark">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </div>

                    <div className="buttons text-center">


                        <Link to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Đăng nhập</Link>
                        <Link to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Đăng ký</Link>

                    </div>
            


            </div>
    )
}

export default Header