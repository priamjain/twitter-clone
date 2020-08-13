import React from 'react'
import './TweetBox.css'
function TweetBox() {
	return (
		<div className='tweetBox'>
			<form action="" >
				<div className="tweetBox__input">
					<img src={require("./avatar.png")} alt="" className="avatar"/>
					<input placeholder="What's Happening?" type="text"/>
				</div>
				<button type="submit" className='tweetBox__tweetbutton'>Tweet</button>
			</form>
			
		</div>
	)
}

export default TweetBox