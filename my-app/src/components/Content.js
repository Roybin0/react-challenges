import React, { Component } from 'react';
import { savedPosts } from '../posts.json';
import PostItem from './PostItem';
import css from './css/Content.module.css';

export class Content extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Posts</h1>
                </div>
                <div className={css.SearchResults}>
                    < PostItem posts={savedPosts} />
                </div>
            </div>
        )
    }
}

export default Content