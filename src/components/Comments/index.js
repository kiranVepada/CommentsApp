import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentList: []}

  isLikedCommend = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  deleteCommend = id => {
    const {commentList} = this.state
    const filtered = commentList.filter(eachItem => eachItem.id !== id)
    this.setState({commentList: filtered})
  }

  addName = event => {
    this.setState({nameInput: event.target.value})
  }

  addComment = event => {
    this.setState({commentInput: event.target.value})
  }

  addCommentButton = () => {
    const {nameInput, commentInput} = this.state
    const colored = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    if (nameInput !== '' || commentInput !== '') {
      const newComment = {
        id: uuidv4(),
        name: nameInput,
        comment: commentInput,
        isLiked: false,
        color: colored,
      }

      this.setState(prevState => ({
        commentList: [...prevState.commentList, newComment],
      }))
      this.setState({nameInput: ''})
      this.setState({commentInput: ''})
    }
  }

  render() {
    const {nameInput, commentInput, commentList} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="top-comment-container">
          <div className="text-input-container">
            <form onSubmit={this.submitForm}>
              <p>Say something about 40.0 Technology </p>
              <input
                type="text"
                className="input"
                placeholder="Your Name"
                onChange={this.addName}
                value={nameInput}
              />
              <br />
              <textarea
                placeholder="Your Comment"
                className="description"
                rows="6"
                onChange={this.addComment}
                value={commentInput}
              />
              <br />
              <button
                className="button"
                type="button"
                onClick={this.addCommentButton}
              >
                Add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="logo"
            />
          </div>
        </div>
        <hr />
        <div className="count-container">
          <p className="count">0</p>
          <p>Comments</p>
        </div>
        <ul className="comment-item-container">
          {commentList.map(eachItem => (
            <CommentItem
              personalComment={eachItem}
              key={eachItem.id}
              isLikedCommend={this.isLikedCommend}
              deleteCommend={this.deleteCommend}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
