import React from "react";
import classes from "./Burger.css";

import Ingredients from "./Ingredients/Ingredients";

const burger = props => {
	let ingredientsArray = Object.keys(props.ingredients)
		.map(ingKey => {
			return [...Array(props.ingredients[ingKey])].map((_, i) => {
				return <Ingredients key={ingKey + i} type={ingKey} />;
			});
		})
		.reduce((prev, current) => {
			return prev.concat(current);
		}, []);

	if (ingredientsArray.length === 0) {
		ingredientsArray = (
			<div>
				There's nothing in your burger. Please add some ingredients.
			</div>
		);
	}

	return (
		<div className={classes.Burger}>
			<Ingredients type="bread-top" />
			{ingredientsArray}
			<Ingredients type="bread-bottom" />
		</div>
	);
};

export default burger;
