import React from 'react';
import classes from './Layout.css';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidebar from '../Navigation/Sidebar/Sidebar';

const layout = props => {
	return (
		<Aux>
			<Toolbar />
			<Sidebar />
			<main className={classes.Content}>{props.children}</main>
		</Aux>
	);
};

export default layout;
