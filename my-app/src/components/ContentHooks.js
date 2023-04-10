import React, { useState, useEffect } from 'react'
import { savedPosts } from '../posts.json';
import PostItem from './PostItem';
import css from './css/Content.module.css';
import Loader from './Loader';

function ContentHooks() {

    const [loaded, isloaded] = useState(false);
    const [fetchedPosts, fetchPosts] = useState([]);

    useEffect(() => {
        console.log('Creating timer');
        setTimeout(() => {
            console.log('Waiting two seconds...')
            isloaded(loaded => true)
        }, 2000);
        fetchPosts(savedPosts)
    }, []);

    const handleChange = (event) => {
        const name = event.target.value.toLowerCase();
        console.log(name)
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name)
        })
        fetchPosts(filteredPosts)
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
                    <h4>Posts found: {fetchedPosts.length}</h4>
                </form>
            </div>
            {loaded ? (
                <div className={css.SearchResults}>
                    < PostItem posts={fetchedPosts} />
                </div>
            ) : < Loader />
            }
        </div>
    )
}


export default ContentHooks