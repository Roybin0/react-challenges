import React, { useState, useEffect } from 'react'
import PostItemAPI from './PostItemAPI';
import css from './css/Content.module.css';
import Loader from './Loader';
import axios from 'axios'
import API_KEY from '../secrets'

export default function ContentAPIHooks() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`)
        .then(response => {
            const fetchedPosts = Array.isArray(response.data.hits) ? response.data.hits : [response.data.hits]
            setIsLoaded(true);
            setPosts(fetchedPosts);
            setSavedPosts(fetchedPosts);
        })
        .catch(error => {
            setError(error.message)
        })
    }, [])
    

    const handleChange = (event) => {
        const name = event.target.value.toLowerCase();
        console.log(name)
        const filteredPosts = savedPosts.filter(post => {
            return post.user.toLowerCase().includes(name)
        })
        setPosts(posts => filteredPosts)
    }

    return (
        <div>
            <div className={css.TitleBar}>
                <h1>My Posts</h1>
                <form>
                    <label>Search:</label>
                    <input
                        type='search'
                        id='searchInput'
                        onChange={(event) => handleChange(event)}
                    />
                    <h4>Posts found: {posts.length}</h4>
                </form>
            </div>
            {isLoaded ? (
                <div className={css.SearchResults}>
                    < PostItemAPI posts={posts} />
                </div>
            ) : < Loader />
            }
        </div>
    )
}
