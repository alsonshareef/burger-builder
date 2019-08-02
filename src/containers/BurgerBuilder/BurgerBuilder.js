import React, { Component } from 'react';
import axios from '../../axios-orders';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
	salad: 0.5,
	bacon: 0.7,
	cheese: 0.4,
	meat: 1.3
};

class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		totalPrice: 4,
		purchasable: false,
		purchasing: false,
		loading: false,
		error: false
	};

	componentDidMount() {
		axios
			.get('https://burger-builder-362de.firebaseio.com/ingredients.json')
			.then(res => {
				this.setState({ ingredients: res.data });
			})
			.catch(error => {
				this.setState({ error: true });
			});
	}

	// Enables 'Order' button in BuildControls if at least 1 ingredient is added to burger.
	updatePurchaseState = ingredients => {
		const sum = Object.keys(ingredients)
			.map(key => {
				return ingredients[key];
			})
			.reduce((prev, current) => {
				return (prev += current);
			}, 0);

		this.setState({ purchasable: sum > 0 });
	};

	// Implies that order is ready to be purchased if invoked.
	purchasingHandler = () => {
		this.setState({ purchasing: true });
	};

	// Invoked when user wants to leave purchasing screen by clicking on backdrop.
	cancelPurchaseHandler = () => {
		this.setState({ purchasing: false });
	};

	// Invoked when user wants to continue to checkout and submit order.
	continuePurchaseHandler = () => {
		this.setState({ loading: true });
		const order = {
			ingredients: this.state.ingredients,
			totalPrice: this.state.totalPrice,
			customer: {
				name: 'Alson Shareef',
				address: '123 Test Avenue',
				email: 'test@test.com'
			},
			deliveryMethod: 'fastest'
		};
		axios
			.post('/orders.json', order)
			.then(res => {
				this.setState({ loading: false, purchasing: false });
			})
			.catch(error => {
				this.setState({ loading: false, purchasing: false });
			});
	};

	addIngredientHandler = type => {
		const oldIngTotal = this.state.ingredients[type];
		const updatedIngTotal = oldIngTotal + 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedIngTotal;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients
		});
		this.updatePurchaseState(updatedIngredients);
	};

	removeIngredientHandler = type => {
		const oldIngTotal = this.state.ingredients[type];
		if (oldIngTotal <= 0) {
			return;
		}
		const updatedIngTotal = oldIngTotal - 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedIngTotal;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients
		});
		this.updatePurchaseState(updatedIngredients);
	};

	render() {
		// A copy of the ingredients where the value is either true or false; indicating whether 'less' button should be disabled or not.
		const disabledInfo = {
			...this.state.ingredients
		};
		for (const key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		// Show Burger and orderSummary only if ingredients have been loaded after mounting. If not, show Spinner.
		let burger = this.state.error ? (
				<p>Ingredients couldn't be loaded!</p>
			) : (
				<Spinner />
			),
			orderSummary = null;

		if (this.state.ingredients) {
			burger = (
				<Aux>
					<Burger ingredients={this.state.ingredients} />
					<BuildControls
						addIngredients={this.addIngredientHandler}
						removeIngredients={this.removeIngredientHandler}
						disabled={disabledInfo}
						purchasable={this.state.purchasable}
						purchasing={this.purchasingHandler}
						totalPrice={this.state.totalPrice}
					/>
				</Aux>
			);
			orderSummary = (
				<OrderSummary
					totalPrice={this.state.totalPrice}
					ingredients={this.state.ingredients}
					cancelPurchase={this.cancelPurchaseHandler}
					continuePurchase={this.continuePurchaseHandler}
				/>
			);
		}

		// Show a loading spinner if orderSummary is loading. This will happen while order is being sent to server using a POST request.
		if (this.state.loading) {
			orderSummary = <Spinner />;
		}

		return (
			<Aux>
				<Modal
					show={this.state.purchasing}
					close={this.cancelPurchaseHandler}
				>
					{orderSummary}
				</Modal>
				{burger}
			</Aux>
		);
	}
}

export default withErrorHandler(BurgerBuilder, axios);
