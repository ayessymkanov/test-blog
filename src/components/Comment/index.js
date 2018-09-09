import React from 'react'
import { CommentContainer, CommentAuthor, CommentBody } from './styles'

export default ({ comment }) => (
  <CommentContainer>
    <CommentAuthor>{comment.email}:</CommentAuthor>
    <CommentBody>{comment.body}</CommentBody>
  </CommentContainer>
)