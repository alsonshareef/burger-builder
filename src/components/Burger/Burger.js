import React from "react";
import classes from "./Burger.css";

import Ingredients from "./Ingredients/Ingredients";

const burger = props => {
	const ingredientsArray = Object.keys(props.ingredients).map(ingKey => {
		return [...Array(props.ingredients[ingKey])].map((_, i) => {
			return <Ingredients key={ingKey + i} type={ingKey} />;
		});
	});

	return (
		<div className={classes.Burger}>
			<Ingredients type="bread-top" />
			{ingredientsArray}
			<Ingredients type="bread-bottom" />
		</div>
	);
};

export default burger;
