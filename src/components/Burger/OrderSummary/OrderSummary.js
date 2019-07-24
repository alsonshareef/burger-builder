import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
	const ingredientSummary = Object.keys(props.ingredients).map(key => {
		return (
			<li key={key}>
				<span style={{ textTransform: 'capitalize' }}>{key}</span>:{' '}
				{props.ingredients[key]}
			</li>
		);
	});
	return (
		<Aux>
			<h3>Your Order</h3>
			<p>Your chosen ingredients:</p>
			<ul>{ingredientSummary}</ul>
			<strong>Total Price: {props.totalPrice.toFixed(2)}</strong>
			<p>Would you like to continue to checkout?</p>
			<Button btnType="Danger" click={props.cancelPurchase}>
				Cancel
			</Button>
			<Button btnType="Success" click={props.continuePurchase}>
				Continue
			</Button>
		</Aux>
	);
};

export default orderSummary;
