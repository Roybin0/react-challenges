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
            posts: [], 
        }
    }

    componentDidMount() {
        setTimeout(() => {
            console.log('Mounted - Timer started!')
            this.setState({
                isLoaded: true,
            })
        }, 2000)
        this.setState({
            posts: savedPosts,
        })
    }

    handleChange = (event) => {
        const name = event.target.value.toLowerCase();
        console.log(name)
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name)
        })
        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Posts</h1>
                    <form>
                        <label>Search:</label>
                        <input 
                            type='search' 
                            id='searchInput' 
                            onChange={(event) => this.handleChange(event)}
                        />
                        <h4>Posts found: {this.state.posts.length}</h4>
                    </form>
                </div>
                {this.state.isLoaded ? (
                    <div className={css.SearchResults}>
                        < PostItem posts={this.state.posts} />
                    </div>
                ) : < Loader />
                }
            </div>
        )
    }
}

export default Content