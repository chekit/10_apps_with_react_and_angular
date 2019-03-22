import './Navigation.css';

import { AppBar, Button, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navigation extends Component {
	public state = {
		anchorEl: null,
	};

	handleClick = (event: React.MouseEvent<HTMLElement>) => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};


	render() {
		const { anchorEl } = this.state;

		return (
			<nav>
				<AppBar position="static">
					<Toolbar className="toolbar">
						<Typography variant="h6" color="inherit">
							My Application
			        	</Typography>

						<Button
							className="open-menu"
							aria-owns={anchorEl ? 'simple-menu' : undefined}
							aria-haspopup="true"
							onClick={this.handleClick}
						>
							Open Menu
				        </Button>
						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							open={Boolean(anchorEl)}
							onClose={this.handleClose}
						>
							<MenuItem onClick={this.handleClose}>
								<Link to="/">Home</Link>
							</MenuItem>
							<MenuItem onClick={this.handleClose}>
								<Link to="/about">About</Link>
							</MenuItem>
						</Menu>
					</Toolbar>
				</AppBar>
			</nav>
		);
	}
}