import React from 'react';
import classes from './BuildControls.css';
import Control from './Control/Control';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' }
];

const buildControls = props => (
	<div className={classes.BuildControls}>
		<p>
			Current price: <strong>{props.totalPrice.toFixed(2)}</strong>
		</p>
		{controls.map(control => (
			<Control
				key={control.label}
				label={control.label}
				add={() => props.addIngredients(control.type)}
				remove={() => props.removeIngredients(control.type)}
				disabled={props.disabled[control.type]}
			/>
		))}
		<button
			className={classes.OrderButton}
			disabled={!props.purchasable}
			onClick={props.purchasing}
		>
			ORDER
		</button>
	</div>
);

export default buildControls;
