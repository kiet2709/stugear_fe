import { useState } from 'react'
import CommentList from './CommentSection/CommentList'
import './Feedback.css'
import LeaveComment from './LeaveComment/LeaveComment'
import RatingSection from './RatingSection/RatingSection'
const Feedback = ({productId}) => {
  const [key, setKey] = useState(0);
  return (
    <>
      <hr className="my-5"></hr>

      <RatingSection productId={productId}/>
      <LeaveComment productId={productId} setKey={setKey}/>
      <CommentList productId={productId} key={key}/>
    </>
  )
}

export default Feedback
