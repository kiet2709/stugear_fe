import './CommentList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faGlobe, faMobile } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Comment from './Comment'
import ProductService from '../../../service/ProductService'
import { useEffect, useState } from 'react'

import Loading from '../../../components/Loading/index'
const CommentList = ({productId}) => {

  const [comments, setComments] = useState([])
  const [isLoading, setLoading] = useState(true)

  const getCommentsByProductId = async(id) => {
    setLoading(true)
    const response = await ProductService.getCommentsByProductId(id)
    if (response?.status === 500) {
      console.log('Something wentwrong')
    } else {
      setComments(response)
    }
    setLoading(false)
  }


  useEffect(() => {
    getCommentsByProductId(productId)
  },[productId])


  return (
    <div className="panel comment-list">
      {isLoading ? (
        <Loading/>
      ): (
        <>
          {comments.map((comment) => (
          <Comment key={comment.id} comment={comment}>
            {comment.sub_comment.map((subComment) => (
              <Comment key={subComment.id} comment={subComment} isSubComment={true} />
            ))}
          </Comment>
        ))}
        
        </>
      )}


    </div>

  )
}

export default CommentList
