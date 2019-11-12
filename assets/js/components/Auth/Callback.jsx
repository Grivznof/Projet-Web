import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import auth0Client from './authUtils/Auth';

/**
 * Component permettant de faire patienter l'utilisateur pendant que sont profil se charge
 */
class Callback extends Component {
	async componentDidMount() {
		await auth0Client.handleAuthentication();
		this.props.history.replace('/');
	}

	render() {
		return <p>Chargement du profil...</p>;
	}
}

export default withRouter(Callback);
