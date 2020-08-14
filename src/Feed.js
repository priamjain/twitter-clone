import React from 'react'
import './Feed.css';
import TweetBox from './TweetBox'
import Post from './Post'
function Feed() {
	return (
		<div className='feed'>
			<h2 className="feed__header">Home</h2>
			<TweetBox></TweetBox>
			<Post></Post>
			<Post></Post>
			<Post></Post>
			<Post></Post>
			<Post></Post>
			<Post></Post>
			<Post></Post>
			<Post></Post>
		</div>

	)
}

export default Feed