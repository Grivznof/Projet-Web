import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardText, CardBody, CardTitle, Container, Row, Col, Badge } from 'reactstrap';
import axios from 'axios';
import Products from '../Shop/Products';

/**
 * Component permettant de récupérer les ressources situées dans /public et de les formatter pour après 
 * pouvoir être affichées
 */

class PublicResources extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			publicResources: null
		};
		this.fetchPublicResources = this.fetchPublicResources.bind(this);
	}

	componentDidMount() {
		this.fetchPublicResources();
	}

	//Récupération des ressources de /public
	fetchPublicResources() {
		if (!this.state.publicResources) {
			axios.get('http://localhost:8000/api/public').then((res) => {
				this.setState({ publicResources: res.data });
			});
		}
	}

	viewPrivateResources = () => {
		this.props.history.push('/private');
	};

	//Présentation des informations récupérées en HTML
	render() {
		return (
			<Container style={{ marginTop: 50 }}>
				<h4 className={'text-center'}> Bienvenu sur le site des BDE CESI </h4>
				<Products />
				<div className={'row text-center'} style={{ marginTop: 40 }}>
					<button
						className={'btn btn-success text-center'}
						onClick={() => {
							this.viewPrivateResources();
						}}
					>
						Cliquez ici pour vous connectez en tant qu'étudiant
					</button>
				</div>
			</Container>
		);
	}
}
export default withRouter(PublicResources);
