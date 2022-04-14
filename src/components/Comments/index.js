import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

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
  state = {
    name: '',
    comment: '',
    commentsList: [],
  }

  toggleLike = id => {
    const {commentsList} = this.state
    const newCommentsList = commentsList.map(each => {
      if (each.id === id) {
        const value = {
          id: each.id,
          name: each.name,
          comment: each.comment,
          time: each.time,
          isLiked: !each.isLiked,
        }
        return value
      }
      return each
    })
    this.setState({commentsList: newCommentsList})
  }

  onInput = event => {
    this.setState({name: event.target.value})
  }

  onComment = event => {
    this.setState({comment: event.target.value})
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(each => {
        if (each.id !== id) {
          return true
        }
        return false
      }),
    }))
  }

  onSubmitFunc = event => {
    event.preventDefault()
    const {name, comment} = this.state
    if (name !== '' && comment !== '') {
      const newComment = {
        id: uuidv4(),
        name,
        comment,
        time: formatDistanceToNow(new Date()),
        isLiked: false,
      }
      this.setState(prevState => ({
        commentsList: [...prevState.commentsList, newComment],
      }))
      this.setState({name: '', comment: ''})
    }
  }

  render() {
    const {commentsList, name, comment} = this.state
    const lengthOfList = commentsList.length
    return (
      <div className="back-con">
        <h1 className="main-heading">Comments</h1>
        <div className="top-container">
          <img
            className="main-image"
            alt="comments"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          />
          <div className="top-bottom-container">
            <p className="para">Say something about 4.0 Technologies</p>
            <form className="inputs-container">
              <input
                value={name}
                onChange={this.onInput}
                className="input"
                type="text"
                placeholder="Your Name"
              />
              <textarea
                value={comment}
                onChange={this.onComment}
                className="input"
                rows="5"
                cols="30"
                placeholder="Your Comment"
              />
              <button
                onClick={this.onSubmitFunc}
                className="add-button"
                type="submit"
              >
                Add Comment
              </button>
            </form>
          </div>
        </div>
        <hr />
        <ul className="unorder-container">
          <p className="comments-count">
            <span>{lengthOfList}</span> Comments
          </p>
          {commentsList.map(each => (
            <CommentItem
              toggleLike={this.toggleLike}
              deleteComment={this.deleteComment}
              commentDetails={each}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
