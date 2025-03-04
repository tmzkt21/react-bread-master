import React from "react";
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { Navigation } from "./HomeMain";

const selectedStyle = {
	backgroundColor: "white", color: "grey"
}
export const PageTemplate = ({children}) => <div className={"page"}>
	<MainMenu/>
	{ children }
</div>

export const MainMenu = () => <nav className={"main-menu"}>
	<div grid-row="" grid-pad="1.5" grid-gutter="3" grid-responsive="" className="">
		<div grid-col="4" grid-pad="1.5"></div>
		<div grid-col="8" grid-pad="1.5" className="">
			<NavLink to={"/"}><FaHome/>home</NavLink>&nbsp;
			<NavLink to={"/about"} activeStyle={selectedStyle}>about</NavLink>&nbsp;
			<NavLink to={"/breads"} activeStyle={selectedStyle}>breads</NavLink>&nbsp;
			<Navigation to={"/category"} activeStyle={selectedStyle}>search</Navigation>&nbsp;
			<NavLink to={"/signin"} activeStyle={selectedStyle}>login</NavLink>&nbsp;
			<NavLink to={"/signup"} activeStyle={selectedStyle}>join</NavLink>
		</div>
	</div>
</nav>

