import React from 'react'
import './Widgets.css'
import {TwitterTweetEmbed,TwitterTimelineEmbed} from 'react-twitter-embed'
function Widgets() {
	return (
		<div className='widgets'>
			<div className="widget__input">
				<input type="text" placeholder="Search Twitter" class="widget__search"/>
			</div>
			<div className="whatsHappening">			<TwitterTweetEmbed
				tweetId="1290943803679899648"
			/>
			</div>
			<div className="whatsHappening">	
			<TwitterTimelineEmbed
				sourceType="profile"
				screenName="effervescent22"
				options={{height: 400}}
			/>
			</div>

		</div>
		)
}

export default Widgets