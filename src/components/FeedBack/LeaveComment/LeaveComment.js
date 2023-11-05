import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LeaveComment.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ProductService from "../../../service/ProductService";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const LeaveComment = ({ productId }) => {
  const [comment, setComment] = useState({});

  const [isAdded, setAdded] = useState(false);
  const handleComment = async (e) => {
    e.preventDefault();
    const response = await ProductService.createCommentByProductId(
      productId,
      comment
    );
    if (response?.status === 500){
      console.log("Something went wrong")
    }else{
      setAdded(true);
      toast.success("Bình luận thành công!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const handleChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  return (
    <div className="my-5">
      <div className="card-body text-center">
        <div className="comment-box text-center">
          <h4>Bình luận</h4>
          <div className="rating leave-comment-rating">
            <input
              type="radio"
              name="rating"
              defaultValue={5}
              id={5}
              onInput={(e) => handleChange(e)}
              value={5}
            />
            <label htmlFor={5}>☆</label>{" "}

            <input
              type="radio"
              name="rating"
              defaultValue={4}
              id={4}
              onInput={(e) => handleChange(e)}
              value={4}
            />
            <label htmlFor={4}>☆</label>{" "}

            <input
              type="radio"
              name="rating"
              defaultValue={3}
              id={3}
              onInput={(e) => handleChange(e)}
              value={3}
            />
            <label htmlFor={3}>☆</label>{" "}

            <input
              type="radio"
              name="rating"
              defaultValue={2}
              id={2}
              onInput={(e) => handleChange(e)}
              value={2}
            />
            <label htmlFor={2}>☆</label>{" "}

            <input
              type="radio"
              name="rating"
              defaultValue={1}
              id={1}
              onInput={(e) => handleChange(e)}
              value={1}
            />
            <label htmlFor={1}>☆</label>


          </div>
          <div className="comment-area">
            <textarea
              className="form-control"
              placeholder="Ghi nhận xét của bạn tại đây"
              rows={4}
              defaultValue={""}
              name="content"
              onInput={(e) => handleChange(e)}
              value={comment.content}
            />
          </div>
          <div className="text-center mt-4">
            <button
              className="btn btn-success send"
              onClick={(e) => handleComment(e)}
            >
              Gửi <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          {isAdded ? (
        <>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </>
      ) : (
        <></>
      )}
        </div>
      </div>
    </div>
  );
};

export default LeaveComment;
