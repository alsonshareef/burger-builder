import React from "react";
import classes from "./Control.css";

const control = props => (
	<div className={classes.Control}>
		<div className={classes.Label}>{props.label}</div>
		<button className={classes.More}>More</button>
		<button className={classes.Less}>Less</button>
	</div>
);
export default control;
