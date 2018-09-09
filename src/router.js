import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostList from './components/PostList'
import Post from './components/Post'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={PostList} />
      <Route exact path='/post/:id' component={Post} />
    </Switch>
  </BrowserRouter>
)
