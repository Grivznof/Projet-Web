import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardText, CardBody, CardTitle, Container, Row, Col, Badge } from 'reactstrap';
import axios from 'axios';
import auth0Client from './Utils/Auth';
import ProductForm from '../Shop/ProductForm';

/**
 * Component permettant de récupérer les ressources dans / private si l'utilisateur est authentifié et de les
 * afficher
 */

class PrivateResources extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			privateResources: null,
			isLoading: null
		};
		this.fetchPrivateResources = this.fetchPrivateResources.bind(this);
	}

	componentWillMount() {
		this.fetchPrivateResources();
	}

	//Récupération des ressources de /private si l'utilisateur est authentifié
	fetchPrivateResources() {
		if (!this.state.privateResources) {
			this.setState({ isLoading: true });
			axios
				.get('http://localhost:8000/api/private', {
					headers: { authorization: `Bearer ${auth0Client.getAccessToken()}` }
				})
				.then((res) => {
					this.setState({ privateResources: res.data, isLoading: false });
				});
		}
	}

	viewPublicResources() {
		this.props.history.push('/');
	}

	//Présentation des informations récupérées en HTML
	render() {
		return (
			<Container style={{ marginTop: 50 }}>
				<ProductForm addProduct={this.addProduct} />
				<div className={'row text-center'} style={{ marginTop: 40 }}>
					<button
						className={'btn btn-success text-center'}
						onClick={() => {
							this.viewPublicResources();
						}}
					>
						Cliquez ici pour voir les différentes ressources de votre campus CESI
					</button>
				</div>
			</Container>
		);
	}
}

export default withRouter(PrivateResources);
