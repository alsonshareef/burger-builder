import React from "react";
import classes from "./Modal.css";

import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => {
	return (
		<Aux>
			<Backdrop
				purchasing={props.purchasing}
				cancel={props.cancelBackdrop}
			/>
			<div
				className={classes.Modal}
				style={{
					transform: props.purchasing
						? "translateY(0)"
						: "translateY(-100vh)",
					opacity: props.purchasing ? "1" : "0"
				}}
			>
				{props.children}
			</div>
		</Aux>
	);
};

export default modal;
