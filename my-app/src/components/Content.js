import React, { Component } from 'react';
import { savedPosts } from '../posts.json';
import PostItem from './PostItem';
import css from './css/Content.module.css';
import Loader from './Loader';

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            console.log('Mounted - Timer started!')
            this.setState({
                isLoaded: true,
            })
        }, 2000)
    }

    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Posts</h1>
                </div>
                {this.state.isLoaded ? (
                    <div className={css.SearchResults}>
                        < PostItem posts={savedPosts} />
                    </div>
                ) : < Loader />
                }
            </div>
        )
    }
}

export default Content