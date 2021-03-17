import React from "react";

function NavbarItem({ item }) {
	return (
		<>
			<li className="navbar-item">
				<a href={item.url} className="navbar-item-link">
					{item.title}
				</a>
			</li>
		</>
	);
}

export default NavbarItem;
