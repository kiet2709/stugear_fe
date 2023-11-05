import CommentList from './CommentSection/CommentList'
import './Feedback.css'
import LeaveComment from './LeaveComment/LeaveComment'
import RatingSection from './RatingSection/RatingSection'
const Feedback = ({productId}) => {
  return (
    <>
      <hr className="my-5"></hr>

      <RatingSection productId={productId}/>
      <LeaveComment productId={productId}/>
      <CommentList productId={productId}/>
    </>
  )
}

export default Feedback
