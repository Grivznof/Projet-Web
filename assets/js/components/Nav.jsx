import React, { Component } from 'react';

export default class Nav extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="navbar">
				{/* top fixed navbar */}
				<div className="topnav">
					{/*  dropdown links */}
					<a className="nav-link dropdown" data-toggle="dropdown" href="#">
						Select <i className="fas fa-caret-down" />{' '}
					</a>
					<div className="dropdown-menu">
						<a className="dropdown-item" href="#">
							Link 1
						</a>
						<a className="dropdown-item" href="#">
							Link 2
						</a>
						<a className="dropdown-item" href="#">
							Link 3
						</a>
					</div>
					<a className="nav-link dropdown" data-toggle="dropdown" href="#">
						Select <i className="fas fa-caret-down" />{' '}
					</a>
					<div className="dropdown-menu">
						<a className="dropdown-item" href="#">
							Link 1
						</a>
						<a className="dropdown-item" href="#">
							Link 2
						</a>
						<a className="dropdown-item" href="#">
							Link 3
						</a>
					</div>
					{/* navbar button */}
					<div className="topnav-right">
						<a className="nav-link" href="#">
							Boutton 1
						</a>
						<a className="nav-link" href="#">
							Boutton 2
						</a>
						<a className="nav-link" href="#">
							Boutton 3
						</a>
					</div>
				</div>
				<div className="sidenav">
					<img src="https://www.cesi.fr/wp-content/uploads/2018/09/cesi-logo.png" />
					<a href="#">Boutton 1</a>
					<a href="#">Boutton 2</a>
					<a href="#">Boutton 3</a>
					<a href="#">Boutton 4</a>
				</div>
			</nav>
		);
	}
}
