import './index.css'

const CommentItem = props => {
  const {commentDetails, deleteComment, toggleLike} = props
  const {id, name, comment, time, isLiked} = commentDetails
  const letter = name[0]
  const onDelete = () => {
    deleteComment(id)
  }
  const likeClicked = () => {
    toggleLike(id)
  }
  const likedClass = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  return (
    <li className="list-item">
      <div className="matter-con">
        <div className="name-logo light-blue">
          <p>{letter}</p>
        </div>
        <div>
          <div className="name-con">
            <p className="his-name">
              {name} <span className="time">{time}</span>
            </p>
          </div>
          <p className="comment-text">{comment}</p>
        </div>
      </div>
      <div className="like-and-delete-con">
        <button onClick={likeClicked} type="button" className="like">
          <img alt=" like" src={likedClass} />
          {'  '}
          Like
        </button>
        c
        <button
          testid="delete"
          onClick={onDelete}
          type="button"
          className="delete-button"
        >
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
