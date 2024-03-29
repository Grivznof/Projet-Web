import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Container } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';
import Products from './components/Shop/Products';
import Home from './components/Home';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Home />
				</div>
			</BrowserRouter>
		);
	}
}

ReactDom.render(<App />, document.getElementById('root'));
