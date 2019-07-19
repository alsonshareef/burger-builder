import React from "react";
import Aux from "../../../hoc/Auxiliary";

const orderSummary = props => {
	const ingredientSummary = Object.keys(props.ingredients).map(key => {
		return (
			<li key={key}>
				<span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
				{props.ingredients[key]}
			</li>
		);
	});
	return (
		<Aux>
			<h3>Your Order</h3>
			<p>Your chosen ingredients:</p>
			<ul>{ingredientSummary}</ul>
			<p>Would you like to continue to checkout?</p>
		</Aux>
	);
};

export default orderSummary;
