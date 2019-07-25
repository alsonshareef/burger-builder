import React from 'react';
import classes from './Toolbar.css';

import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import SidebarToggle from '../Sidebar/SidebarToggle/SidebarToggle';

const toolbar = props => (
	<header className={classes.Toolbar}>
		<SidebarToggle click={props.toggle} />
		<Logo height="80%" />
		<nav className={classes.DesktopOnly}>
			<NavItems />
		</nav>
	</header>
);

export default toolbar;
