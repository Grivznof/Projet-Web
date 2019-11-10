import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardText, CardBody, CardTitle, Container, Row, Col, Badge } from 'reactstrap';
import axios from 'axios';

/**
 * Component permettant de récupérer les ressources situées dans /public et de les formatter pour après 
 * pouvoir être affichées
 */

class PublicResources extends Component {
	constructor(props) {
		super(props);
		this.state = {
			publicResources: null
		};
		this.fetchPublicResources = this.fetchPublicResources.bind(this);
	}

	componentWillMount() {
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
				<h4 className={'text-center'}> Ceci est une page publique, vous n'avez pas besoin d'être connecté </h4>
				{this.state.publicResources && (
					<Row style={{ marginTop: 40 }}>
						{this.state.publicResources.map((data) => (
							<Col xs="4" id={data.id} key={data.id}>
								<Card>
									<CardBody>
										<CardTitle>{data.title}</CardTitle>
										<span>
											{' '}
											Album ID:{' '}
											<Badge color="info" pill>
												{data.albumId}
											</Badge>
										</span>
										<CardText>{data.description}</CardText>
									</CardBody>
								</Card>
							</Col>
						))}
					</Row>
				)}
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
