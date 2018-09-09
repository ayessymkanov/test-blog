import { call, put, takeLatest, all } from 'redux-saga/effects'

const api = 'https://jsonplaceholder.typicode.com'

const myFetch = (url) => {
  return fetch(api + url)
    .then(res => res.json())
    .then(data => Promise.resolve(data))
    .catch(error => {
      return Promise.reject(error)
    })
} 

function* fetchPosts(action) {
  try {
    const posts = yield call(myFetch, '/posts')
    yield put({ type: 'FETCH_POSTS_SUCCESS', payload: posts })
  } catch(error) {
    yield put({ type: 'FETCH_ERROR', payload: error.message })
  }
}

function* fetchAuthor({ id }) {
  try {
    const author = yield call(myFetch, `/users/${id}`)
    yield put({ type: 'FETCH_AUTHOR_SUCCESS', payload: author })
  } catch(e) {
    yield put({ type: 'FETCH_ERROR', payload: e.message })
  }
}

function* fetchComments({ id }) {
  try {
    const comments = yield call(myFetch, `/posts/${id}/comments`)
    yield put({ type: 'FETCH_COMMENTS_SUCCESS', payload: comments })
  } catch(e) {
    yield put({ type: 'FETCH_ERROR', payload: e.message })
  }
}

function* mySaga() {
  yield all([
    takeLatest('FETCH_POSTS', fetchPosts),
    takeLatest('FETCH_AUTHOR', fetchAuthor),
    takeLatest('FETCH_COMMENTS', fetchComments)
  ])
}

export default mySaga