import React from 'react'
import SideBar_Option from './SideBar_Option'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHashtag,faBell,faEnvelope,faBookmark,faListUl,faUserAlt,faEllipsisH } from '@fortawesome/free-solid-svg-icons'

function SideBar() {
	return (
		<div className="sidebar">
			<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
			<SideBar_Option 
				text="Explore"
				Icon={<FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon>} >
			</SideBar_Option>
			<SideBar_Option 
				text="Notifications"
				Icon={<FontAwesomeIcon icon={faBell}></FontAwesomeIcon>} >
			</SideBar_Option>
			<SideBar_Option 
				text="Messages"
				Icon={<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>} >
			</SideBar_Option>
			<SideBar_Option 
				text="Bookmarks"
				Icon={<FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>} >
			</SideBar_Option>
			<SideBar_Option 
				text="Lists"
				Icon={<FontAwesomeIcon icon={faListUl}></FontAwesomeIcon>} >
			</SideBar_Option>
			<SideBar_Option 
				text="Profile"
				Icon={<FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>} >
			</SideBar_Option>
			<SideBar_Option 
				text="More"
				Icon={<FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>} >
			</SideBar_Option>
		</div>
	)
}

export default SideBar