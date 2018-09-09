import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../store'
import Post from '../PostItem'
import TextInput from '../TextInput'
import { Container } from '../shared/styles'

class PostList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      postsToRender: [],
      searchString: ''
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.posts.length > prevState.posts.length) {
      return ({ posts: nextProps.posts, postsToRender: nextProps.posts })
    }
    return null
  }

  componentDidMount() {
    this.props.fetchPosts()
  }
  onChange = (e) => {
    this.setState({ searchString: e.target.value })
    const filteredPosts = this.state.posts.filter(post => post.title.includes(this.state.searchString) || post.body.includes(this.state.searchString))
    this.setState({ postsToRender: filteredPosts })
  }
  renderPosts = () => {
    const { error } = this.props
    const { postsToRender } = this.state
    return error ? error : (postsToRender.length > 0 ? postsToRender.map(post => <Post key={post.id} post={post} />) : 'No posts found')
  }
  render() {
    return (
      <Container>
        <TextInput 
          type="text" 
          onChange={this.onChange}
          value={this.state.searchString}
          placeholder="Filter posts"
          />
        {this.renderPosts()}
      </Container>
    )
  }
}

const mapStateToProps = ({ posts, error }) => ({ posts, error })

export default connect(mapStateToProps, { fetchPosts })(PostList)