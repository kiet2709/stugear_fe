import { faFacebookF, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const TopContributor = ({ contributor }) => {
  return (

        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={400}>
            <div className="member">
                <div className="member-img">
                    <img src={contributor.imgURL} className="img-fluid" alt />
                    <div className="social">
                    <button type="button" className="btn btn-secondary btn-floating my-1 d-block">
                            <FontAwesomeIcon style={{ width: 15 }} icon={faMessage} />
                        </button>
                        <button type="button" className="btn btn-primary btn-floating my-1 d-block">
                            <FontAwesomeIcon style={{ width: 15 }} icon={faFacebookF} />
                        </button>
                        <button type="button" className="btn btn-danger btn-floating my-1 d-block">
                            <FontAwesomeIcon style={{ width: 15 }} icon={faGoogle} />
                        </button>
                        <button type="button" className="btn btn-dark btn-floating my-1 d-block">
                            <FontAwesomeIcon style={{ width: 15 }} icon={faGithub} />
                        </button>

                    </div>
                </div>
                <div className="member-info">
                    <h4>{contributor.username}</h4>
                    <span>SĐT: {contributor.phoneNumber}</span>
                    <p>{contributor.bio}</p>
                </div>

            </div>
        </div>

  )
}

export default TopContributor
