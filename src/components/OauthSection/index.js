import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
const OauthSection = ({text}) => {
    return (
        <div className="social mt-4  d-flex flex-row align-items-center  justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">{text} </p>
            <button type="button"  className="btn btn-primary btn-floating mx-1">
                <FontAwesomeIcon icon={faFacebookF} style={{width: 15}} />
            </button>
            <button type="button" className="btn btn-danger btn-floating mx-1">
                <FontAwesomeIcon icon={faGoogle} style={{width: 15}} />
            </button>
        </div>
    )
}

export default OauthSection