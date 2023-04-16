import React, { Component } from 'react';
import PostItemAPI from './PostItemAPI';
import css from './css/Content.module.css';
import Loader from './Loader';
import axios from 'axios' 
import API_KEY from '../secrets'

export class ContentAPI extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: [], 
            savedPosts: [],
        }
    }

    componentDidMount() {
        this.fetchImages()
    }

    async fetchImages() {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`)
        const fetchedPosts = response.data.hits
        this.setState({
            isLoaded: true,
            posts: fetchedPosts,
            savedPosts: fetchedPosts,
        })
    }
    

    handleChange = (event) => {
        const name = event.target.value.toLowerCase();
        console.log(name)
        const filteredPosts = this.state.savedPosts.filter(post => {
            return post.user.toLowerCase().includes(name)
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
                        < PostItemAPI posts={this.state.posts} />
                    </div>
                ) : < Loader />
                }
            </div>
        )
    }
}

export default ContentAPI