import React from 'react';
import classes from './SidebarToggle.css';

const sidebarToggle = props => {
	return (
		<div className={classes.SidebarToggle} onClick={props.click}>
			<div />
			<div />
			<div />
		</div>
	);
};

export default sidebarToggle;
