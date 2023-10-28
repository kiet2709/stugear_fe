import './CommentList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faGlobe, faMobile } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Comment from './Comment'

const CommentList = () => {
  const comments = [
    {
      id: 1,
      owner_image: '/assets/images/contributor.jpg',
      owner_name: 'Khải',
      last_update: '1 phút trước',
      content:
        'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
      like: 12,
      unlike: 1,
      sub_comment: [
        {
          id: 2,
          owner_image: '/assets/images/contributor.jpg',
          owner_name: 'Kiệt',
          last_update: '5 phút trước',
          content:
            'eUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
          like: 0,
          unlike: 0
        },
        {
          id: 3,
          owner_image: '/assets/images/contributor.jpg',
          owner_name: 'Khang',
          last_update: '3 phút trước',
          content: 'Lobortis nisl ut aliquip ex ea commodo consequat.',
          like: 0,
          unlike: 0
        }
      ]
    },
    {
      id: 4,
      owner_image: '/assets/images/contributor.jpg',
      owner_name: 'Thịnh',
      last_update: '1 phút trước',
      content:
        'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
      like: 12,
      unlike: 1,
      sub_comment: [
        {
          id: 5,
          owner_image: '/assets/images/contributor.jpg',
          owner_name: 'Khang',
          last_update: '5 phút trước',
          content:
            'eUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
          like: 0,
          unlike: 0
        },
        {
          id: 6,
          owner_image: '/assets/images/contributor.jpg',
          owner_name: 'Khải',
          last_update: '3 phút trước',
          content: 'Lobortis nisl ut aliquip ex ea commodo consequat.',
          like: 0,
          unlike: 0
        }
      ]
    }
  ]

  return (
    <div className="panel comment-list">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment}>
          {comment.sub_comment.map((subComment) => (
            <Comment key={subComment.id} comment={subComment} isSubComment={true} />
          ))}
        </Comment>
      ))}
    </div>

  )
}

export default CommentList
