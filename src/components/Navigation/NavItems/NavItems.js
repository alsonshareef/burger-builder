import React from 'react';
import classes from './NavItems.css';
import Item from './Item/Item';

const navItems = () => (
	<ul className={classes.NavItems}>
		<Item link="/" active>
			Burger Builder
		</Item>
		<Item link="/">Checkout</Item>
	</ul>
);

export default navItems;
