import React from "react";
import classes from "./Layout.css";

import Aux from "../../hoc/Auxiliary";

const layout = props => {
	return (
		<Aux>
			<div>Toolbar, Sidebar, Backdrop</div>
			<main className={classes.content}>{props.children}</main>
		</Aux>
	);
};

export default layout;
