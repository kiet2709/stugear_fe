import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './LeaveComment.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const LeaveComment = () => {
  return (
        <div className="my-5">

        <div className="card-body text-center">
          <div className="comment-box text-center">
            <h4>Bình luận</h4>
            <div className="rating leave-comment-rating">

              <input type="radio" name="rating" defaultValue={5} id={5} />
              <label htmlFor={5}>☆</label>{' '}
              <input type="radio" name="rating" defaultValue={4} id={4} />
              <label htmlFor={4}>☆</label>{' '}
              <input type="radio" name="rating" defaultValue={3} id={3} />
              <label htmlFor={3}>☆</label>{' '}
              <input type="radio" name="rating" defaultValue={2} id={2} />
              <label htmlFor={2}>☆</label>{' '}
              <input type="radio" name="rating" defaultValue={1} id={1} />
              <label htmlFor={1}>☆</label>{' '}
            </div>
            <div className="comment-area">

              <textarea
                className="form-control"
                placeholder="what is your view?"
                rows={4}
                defaultValue={''}
              />
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-success send">
                Gửi <FontAwesomeIcon icon={faArrowRight}/>
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LeaveComment
