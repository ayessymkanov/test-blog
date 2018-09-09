import React from 'react'
import { connect } from 'react-redux'
import Comment from '../Comment'
import { Username, Bold, PostBody, CommentsList } from './styles'
import { Container } from '../shared/styles'
import { fetchAuthor, fetchComments } from '../../store'

class Post extends React.Component {
  constructor() {
    super()
    this.state = {
      post: {},
      user: {},
      comments: []
    }
  }

  componentDidMount() {
    const { 
      match: { params: { id } }, 
      location: { state: {userId } },
      fetchAuthor,
      fetchComments
     } = this.props

     fetchAuthor(userId)
     fetchComments(id)
    
  }

  renderComments = () => {
    return this.props.comments.map(comment => <Comment key={comment.id} comment={comment} />)
  }

  render() {
    const { location: { state: { title, body } }, author: user, error } = this.props
    return (
      <Container>
        <Bold size={22} padding={20}>{title}</Bold >
        <PostBody>{body}</PostBody>
        {error ? 
          <span>{error}</span> : 
          <div>
            <Username>{user.username}</Username>
            <Bold size={16}>{user.name}</Bold>
          </div>
        }
        {error ? 
          <span>{error}</span> : 
          <CommentsList>
            <Bold size={18}>Comments:</Bold>
            {this.renderComments()}
          </CommentsList>
        }
      </Container>
    )
  }
}

const mapStateToProps = ({ author, comments, error }) => ({ author, comments, error })

export default connect(mapStateToProps, { fetchAuthor, fetchComments })(Post)