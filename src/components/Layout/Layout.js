import React, { Component } from 'react';
import classes from './Layout.css';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidebar from '../Navigation/Sidebar/Sidebar';

class Layout extends Component {
	state = {
		showSideBar: true
	};

	closeSideBarHandler = () => {
		this.setState({ showSideBar: false });
	};

	render() {
		return (
			<Aux>
				<Toolbar />
				<Sidebar
					open={this.state.showSideBar}
					close={this.closeSideBarHandler}
				/>
				<main className={classes.Content}>{this.props.children}</main>
			</Aux>
		);
	}
}

export default Layout;
