import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle,faComment,faRetweet,faHeart,faUpload } from '@fortawesome/free-solid-svg-icons'
import './Post.css'
function Post({
	displayName,
	userName,
	verified,
	text,
	image,
	avatar
}){
	return (
		<div className="post">
			<div className="post__avatar">
				<img src={require("./avatar.png")} alt="Avatar" className="avatar"/>
			</div>
			<div className="post__body">
				<div className="post__header">
					<h4>Priam Jain
							<FontAwesomeIcon className="post__badge" icon={faCheckCircle}></FontAwesomeIcon>
							<span className="post__headerSpecial">
							@priamjain
							</span>
						
					</h4>
				</div>
				<div className="post__content">
					<p className="post__text">
						What's Up? this is a twitter clone.
					</p>
						<img 
							src={require("./whatever.gif")} 
							alt="via giphy"/>
				</div>
				<div className="post__footer">
					<FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
					<FontAwesomeIcon icon={faRetweet}></FontAwesomeIcon>
					<FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
					<FontAwesomeIcon icon={faUpload}></FontAwesomeIcon>
				</div>

			</div>
		</div>
	)
}

export default Post