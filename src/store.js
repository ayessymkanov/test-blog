import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const fetchPosts = () => {
  return { type: 'FETCH_POSTS' }
}
export const fetchAuthor = (id) => {
  return { type: 'FETCH_AUTHOR', id }
}
export const fetchComments = (id) => {
  return { type: 'FETCH_COMMENTS', id }
}

const INITIAL_STATE = {
  posts: [],
  author: {},
  comments: [],
  error: ''
}

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload} = action

  switch(type) {
    case 'FETCH_POSTS_SUCCESS': {
      return {
        ...state,
        posts: payload
      }
    }
    case 'FETCH_ERROR': {
      return {
        ...state,
        error: payload
      }
    }
    case 'FETCH_AUTHOR_SUCCESS': {
      return {
        ...state,
        author: payload
      }
    }
    case 'FETCH_COMMENTS_SUCCESS': {
      return {
        ...state,
        comments: payload
      }
    }
    default: return state
  }
}

export const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)
