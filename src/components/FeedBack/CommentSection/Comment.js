import "./Comment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faGlobe, faMobile, faPencil } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
const Comment = ({ children, comment, isSubComment }) => {

  
  const [showReplyInput, setShowReplyInput] = useState(false);

  const handleReplyClick = () => {
    setShowReplyInput(!showReplyInput);
  };

  return (
    <>
      <div className="panel-body media-block d-flex">
        <Link>
          <img className=" img-sm" alt="" src={comment.owner_image} />
        </Link>
        <div className="media-body  ">
          <Link className="  ">{comment.owner_name}</Link>
          <span> - {comment.last_update}</span>

          <p>{comment.content}</p>
          <div>
            <div className="btn-group">
              <button className="btn btn-sm btn-like text-dark ">
                <FontAwesomeIcon icon={faThumbsUp} /> {comment.like}
              </button>
              <button className="btn btn-sm btn-unlike text-dark ">
                <FontAwesomeIcon icon={faThumbsDown} /> {comment.unlike}
              </button>
            </div>
            {!isSubComment && (
                     <button
                     className="btn  btn-sm btn-reply  "
                     onClick={handleReplyClick}
                   >
                     Trả lời
                   </button>
            )}
           
          </div>
          <hr />
          {showReplyInput && (
            <div className="panel-body">
              <textarea
                className="form-control "
                rows={2}
                placeholder="What are you thinking?"
              />
              <button
                className="btn btn-sm mt-3 btn-submit"
                onClick={handleReplyClick}
              >
                Gửi
              </button>
            </div>
          )}
          {/* insert sub comment here */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Comment;
