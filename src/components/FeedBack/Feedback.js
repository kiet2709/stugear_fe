import Comments from "./CommentSection/CommentList";
import "./Feedback.css";
import LeaveComment from "./LeaveComment/LeaveComment";
import RatingSection from "./RatingSection/RatingSection";
const Feedback = () => {
  return (
    <>
      <hr className="my-5"></hr>

      <RatingSection />
      <LeaveComment/>
      <Comments />
    </>
  );
};

export default Feedback;
