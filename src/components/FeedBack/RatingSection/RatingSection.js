import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RatingBar from './RatingBar'
import './RatingSection.css'
import {
  faStar,
  faPeopleArrows,
  faPeopleCarry,
  faPeopleLine,
  faPerson
} from '@fortawesome/free-solid-svg-icons'

import { faRaspberryPi } from '@fortawesome/free-brands-svg-icons'

const RatingSection = () => {
  const ratings = {
    rate: [
      {
        id: 1,
        rate: 5,
        quantity: 12
      },
      {
        id: 2,
        rate: 4,
        quantity: 2
      },
      {
        id: 3,
        rate: 3,
        quantity: 1
      },
      {
        id: 4,
        rate: 2,
        quantity: 0
      },
      {
        id: 5,
        rate: 1,
        quantity: 0
      }
    ],
    total: 15,
    average: 4.1
  }

  return (
    <>
      <div id="reviews" className="review-section my-5">
        <div className="row">
          <div className="col-3 text-center">

            <h1 className="rating-num">{ratings.average}</h1>
            <span>Trên 5.0</span>
            <div className="rating ">
              {[...Array(5)].map((_, index) => {
                let starColor = ''
                if (index < Math.floor(ratings.average)) {
                  starColor = '#FFC107'
                }
                return (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    style={{ color: starColor }}
                  />
                )
              })}
            </div>
          </div>
          <div className="col">
            <table className="stars-counters">
              <tbody>
                {ratings.rate.map((rating) => (
                  <RatingBar
                    key={rating.id}
                    rating={rating}
                    total={ratings.total}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default RatingSection
