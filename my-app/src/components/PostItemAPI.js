import React from 'react'
import css from './css/PostItem.module.css';

function PostItemAPI(props) {
    const posts = props.posts
    return (
        <div>
            {posts.map(post => {
                return (
                    <div className={css.PostItem} key={post.id}>
                        <p>Artwork type: {post.type}</p>
                        <p>Artist: {post.user}</p>
                        <img src={post.webformatURL} alt=""></img>
                        <p>Tags: {post.tags}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PostItemAPI