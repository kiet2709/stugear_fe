import "./Comment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import {
  faClock,
  faGlobe,
  faMobile,
  faPencil,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
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
          <img
            className="img-sm rounded-circle"
            alt=""
            src={comment.owner_image}
          />
        </Link>
        <div className="media-body  ">
          <Link className="me-3">{comment.owner_name} </Link>
          {comment.rating ? (
            <>
              {" "}
              {[...Array(5)].map((_, index) => {
                let starColor = "";
                if (index < comment.rating) {
                  starColor = "#FFC107";
                }
                return (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    style={{ color: starColor }}
                  />
                );
              })}
            </>
          ) : (
            <></>
          )}

          <div className="mt-1 mb-3">
            <span className="text-muted">
              {" "}
              <FontAwesomeIcon icon={faClock} /> {comment.last_updated}
            </span>
          </div>
          <p>
            <Link style={{ textDecoration: "None" }}>
              {comment?.reply_on ? `@${comment.reply_on}` : ""}
            </Link>{" "}
            {comment.content}
          </p>
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
          <div className="reply-section">
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
          </div>

          {/* insert sub comment here */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Comment;
