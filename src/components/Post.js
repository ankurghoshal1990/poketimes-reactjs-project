import React, { Component } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

class PostWrapped extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.navigate('/')
    }
    render() {
        console.log(this.props);
        const post = this.props.post ? (
            <div className='post'>
                <h4 className='center'>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className='center'>
                    <button className='btn grey' onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className='center'>Loading post...</div>
        );

        return (
            <div className='container'>
                {post}
            </div>
        )
    }
}

const Post = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const id = params.post_id;
    let post = props.posts.find(p => p.id == id);
    return <PostWrapped {...{...props, match: {params}, post}} navigate={navigate} />
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);