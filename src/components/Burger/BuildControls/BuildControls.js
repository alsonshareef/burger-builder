import React from "react";
import classes from "./BuildControls.css";
import Control from "./Control/Control";

const controls = [
	{ label: "Salad", type: "salad" },
	{ label: "Bacon", type: "bacon" },
	{ label: "Cheese", type: "cheese" },
	{ label: "Meat", type: "meat" }
];

const buildControls = props => (
	<div className={classes.BuildControls}>
		{controls.map(control => (
			<Control
				key={control.label}
				label={control.label}
				add={() => props.addIngredients(control.type)}
				remove={() => props.removeIngredients(control.type)}
				disabled={props.disabled[control.type]}
			/>
		))}
	</div>
);

export default buildControls;
