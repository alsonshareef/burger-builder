import React from 'react';
import classes from './Sidebar.css';

import Aux from '../../../hoc/Auxiliary';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sidebar = props => {
	let attachedClasses = [classes.Sidebar, classes.Close];
	if (props.open) {
		attachedClasses = [classes.Sidebar, classes.Open];
	}

	return (
		<Aux>
			<Backdrop show={props.open} click={props.close} />
			<div className={attachedClasses.join(' ')}>
				<Logo height="11%" marginBottom="32px" />
				<nav>
					<NavItems />
				</nav>
			</div>
		</Aux>
	);
};

export default sidebar;
