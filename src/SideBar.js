import React from 'react'
import SideBarOption from './SideBar_Option'
import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHashtag,faBell,faEnvelope,faBookmark,faListUl,faUserAlt,faEllipsisH,faHome } from '@fortawesome/free-solid-svg-icons'

function SideBar() {
	return (
		<div className="sidebar">
			<FontAwesomeIcon className='sidebar__twittericon'icon={faTwitter}></FontAwesomeIcon>
			<SideBarOption 
				active
				text="Home"
				Icon={<FontAwesomeIcon icon={faHome}></FontAwesomeIcon>} >
			</SideBarOption>
			<SideBarOption 
				text="Explore"
				Icon={<FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon>} >
			</SideBarOption>
			<SideBarOption 
				text="Notifications"
				Icon={<FontAwesomeIcon icon={faBell}></FontAwesomeIcon>} >
			</SideBarOption>
			<SideBarOption 
				text="Messages"
				Icon={<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>} >
			</SideBarOption>
			<SideBarOption 
				text="Bookmarks"
				Icon={<FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>} >
			</SideBarOption>
			<SideBarOption 
				text="Lists"
				Icon={<FontAwesomeIcon icon={faListUl}></FontAwesomeIcon>} >
			</SideBarOption>
			<SideBarOption 
				text="Profile"
				Icon={<FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>} >
			</SideBarOption>
			<SideBarOption 
				text="More"
				Icon={<FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>} >
			</SideBarOption>
			<button
				className='tweetbutton'>
			Tweet
			</button>
		</div>
	)
}

export default SideBar