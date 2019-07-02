import React, { Component } from "react";
import "./App.css";

import Layout from "./components/Layout/Layout";

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<h1>Burger Builder</h1>
				</Layout>
			</div>
		);
	}
}
