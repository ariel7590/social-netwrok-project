import React from "react";
import Logo from "../logo/logo.component";
import "./header.styles.scss";

const Header = () => {
	return (
		<div className='header-container'>
			<Logo />
			<div>
				<span className="header-item">DM's</span>
				<span className="header-item">notifications</span>
				<span className="header-item">user</span>
			</div>
		</div>
	);
};

export default Header;
