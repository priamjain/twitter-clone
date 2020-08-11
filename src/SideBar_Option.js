import React from 'react'
import "./SideBar_Option.css"
function SideBar_Option({children,text}) {
	return (
		<div className="sidebar_option">
		{children}
		<h2>{text}</h2>
		</div>
	)
}

export default SideBar_Option