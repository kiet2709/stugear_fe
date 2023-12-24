import { faFacebookF, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const TopContributor = ({ contributor }) => {
  return (

        <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={400}>
            <div className="member">
                <div className="member-img">
                    <img src={`http://52.205.41.43/api/users/${contributor.id}/images`} className="img-fluid" alt 
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
                    <div className="social" style={{ backgroundColor: 'transparent' }}>
                    <button type="button" className=" btn btn-secondary btn-floating my-1 d-block">
                            <FontAwesomeIcon style={{ width: 15 }} icon={faMessage} />
                        </button>
                        <button type="button" className="facebook btn btn-primary btn-floating my-1 d-block">
                            <FontAwesomeIcon style={{ width: 15 }} icon={faFacebookF} />
                        </button>
                        <button type="button" className="google btn btn-danger btn-floating my-1 d-block">
                            <FontAwesomeIcon style={{ width: 15 }} icon={faGoogle} />
                        </button>
     

                    </div>
                </div>
                <div className="member-info">
                    <h4>{contributor.name}</h4>
                    <span>SĐT: {contributor.phone_number}</span>
                    <p>{contributor.full_address}</p>
                </div>

            </div>
        </div>

  )
}

export default TopContributor
