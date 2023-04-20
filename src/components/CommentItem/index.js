import './index.css'

const CommentItem = props => {
  const {personalComment, isLikedCommend, deleteCommend} = props
  const {id, name, comment, isLiked, color} = personalComment

  const isLikedBtn = () => {
    isLikedCommend(id)
  }

  const like = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const deletebtn = () => {
    deleteCommend(id)
  }
  return (
    <li className="list-container">
      <div className="list">
        <div className={color}>
          <h1 className="dp-alpha">{name[0].toUpperCase()}</h1>
        </div>
        <div className="comment-container">
          <p>
            {name} <span className="time"> less then a minute ago</span>
          </p>
          <p className="description">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <button type="button" className="btn" onClick={isLikedBtn}>
          <img src={like} alt="like" className="delete" />
        </button>
        <button type="button" className="btn" onClick={deletebtn}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
