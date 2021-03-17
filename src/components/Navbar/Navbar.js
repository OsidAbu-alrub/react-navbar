import React, { useState } from "react";
import NavbarItem from "../NavbarItem/NavbarItem";
import navbarItems from "./../../static/NavbarItems";

function Navbar() {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => setIsActive((prevState) => !prevState);
	return (
		<nav className="navbar">
			<h1 className="navbar-title">
				React <i className="fab fa-react navbar-icon"></i>
			</h1>
			<div className="navbar-ham" onClick={handleClick}>
				<i className={isActive ? "fas fa-times" : "fas fa-bars"}></i>
			</div>
			<ul className={`navbar-items ${isActive ? "active" : ""}`}>
				{navbarItems.map((item) => (
					<NavbarItem item={item} key={item.title}></NavbarItem>
				))}
			</ul>
		</nav>
	);
}

export default Navbar;
