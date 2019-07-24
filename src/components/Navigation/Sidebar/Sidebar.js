import React from 'react';
import classes from './Sidebar.css';

import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const sidebar = () => {
	return (
		<div className={classes.Sidebar}>
			<Logo />
			<nav>
				<NavItems />
			</nav>
		</div>
	);
};

export default sidebar;
