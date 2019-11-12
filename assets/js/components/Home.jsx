import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import Callback from './Auth/Callback';
import SecuredRoute from './Auth/SecuredRoute';
import PrivateResources from './Auth/privateResources';
import PublicResources from './Auth/publicResources';
import auth0Client from './Auth/Utils/Auth';
import Products from './Shop/Products';
import Nav from './Nav';

/**
 * Le component Home permettant de regarder si /callback a été appelé, signe que l'utilisateur essaye de se connecter
 * Si oui alors le component de Callback.js sera utiliser pour se charger du processus d'authentification
 * On constitue ensuite la page d'accueil d'une navbar et on redirigera le l'utilisateur vers / s'il est anonyme
 * Sinon il sera envoyé vers /private
 */

//Etape /callback
class Home extends Component {
	async componentDidMount() {
		if (this.props.location.pathname === '/callback') return;
		try {
			await auth0Client.silentAuth();
			this.forceUpdate();
		} catch (err) {
			if (err.error === 'login_required') return;
			console.log(err.error);
		}
	}

	//etape d'affichage de la navbar et du routage de l'utilisateur vers soit / soit /private
	render() {
		return (
			<div>
				<div>
					<Nav />
				</div>
				<Switch>
					<Route exact path={'/callback'} component={Callback} />
					<SecuredRoute path={'/private'} component={PrivateResources} />
					<Route path={'/'} component={PublicResources} />
				</Switch>
			</div>
		);
	}
}

export default withRouter(Home);
