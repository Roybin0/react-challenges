import React from 'react'
import css from './css/PostItem.module.css';

function PostItem(props) {
    const posts = props.posts
    return (
        <div>
            {posts.map(post => {
                return (
                    <div className={css.PostItem} key={post.title}>
                        <p>Title: {post.title}</p>
                        <p>Artist: {post.name}</p>
                        <img src={post.image} alt=""></img>
                        <p>Description: {post.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PostItem