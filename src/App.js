import React, { Component } from "react";
import "./App.css";

import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<BurgerBuilder />
				</Layout>
			</div>
		);
	}
}
