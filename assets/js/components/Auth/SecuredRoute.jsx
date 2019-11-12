import React from 'react';
import { Route } from 'react-router-dom';
import auth0Client from './Utils/Auth';

/**
 * Component pour sécuriser l'accés aux données privées des étudiants CESI
 */
function SecuredRoute(props) {
	const { component: Component, path } = props;
	return (
		<Route
			path={path}
			render={() => {
				if (!auth0Client.isAuthenticated()) {
					auth0Client.logIn();
					return <div />;
				}
				return <Component />;
			}}
		/>
	);
}

export default SecuredRoute;
