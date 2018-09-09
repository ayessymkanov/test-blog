import styled from 'styled-components'

export const Bold = styled.h1`
  font-weight: bold;
  font-size: ${props => props.size}px;
  padding: ${props => props.padding || 10}px 0;
` 
export const Username = styled.h4`
  &:before {
    content: '@';
  }
`
export const Name = styled.h4`
  font-weight: bold;
`
export const PostBody = styled.p`
  border-bottom: 1px solid;
  margin-bottom: 20px;
`
export const CommentsList = styled.ul`
  margin-top: 20px;
`