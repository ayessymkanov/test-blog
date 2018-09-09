import React from 'react'
import { Link } from 'react-router-dom'
import { PostContainer, Title } from './styles'

export default class Post extends React.Component {
  render() {
    const { post } = this.props
    return(
      <PostContainer>
        <Title>
          <Link 
            to={{
              pathname: `/post/${post.id}`,
              state: post
            }}>
            {post.title}
          </Link>
        </Title>
        <p>{post.body}</p>
      </PostContainer>
    )
  }
}