import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Container } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';
import Products from './components/Shop/Products';
import Home2 from './components/HomeAuth';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Home2 />
				</div>
			</BrowserRouter>
		);
	}
}

ReactDom.render(<App />, document.getElementById('root'));
