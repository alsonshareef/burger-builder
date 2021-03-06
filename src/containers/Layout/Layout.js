import React, { Component } from 'react';
import classes from './Layout.css';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';

class Layout extends Component {
	state = {
		showSideBar: false
	};

	toggleSideBarHandler = () => {
		this.setState(prevState => {
			return { showSideBar: !prevState.showSideBar };
		});
	};

	closeSideBarHandler = () => {
		this.setState({ showSideBar: false });
	};

	render() {
		return (
			<Aux>
				<Toolbar toggle={this.toggleSideBarHandler} />
				<Sidebar
					show={this.state.showSideBar}
					close={this.closeSideBarHandler}
				/>
				<main className={classes.Content}>{this.props.children}</main>
			</Aux>
		);
	}
}

export default Layout;
