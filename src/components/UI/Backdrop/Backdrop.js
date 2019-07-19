import React from "react";
import classes from "./Backdrop.css";

const backdrop = props => {
	return props.purchasing ? (
		<div className={classes.Backdrop} onClick={props.cancel} />
	) : null;
};

export default backdrop;
