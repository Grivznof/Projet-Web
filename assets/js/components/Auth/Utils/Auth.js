import auth0 from 'auth0-js';

/**
 * Classe permettant de faciliter l'implémentation de l'authentification a  l'aide de l'API Auth0
 */
class Auth {
	constructor() {
		this.auth0 = new auth0.WebAuth({
			domain: 'dev-u121n7-m.eu.auth0.com',
			audience: 'http://localhost:8000/api',
			clientID: 'yzPLFeVCv1W8kcMDs25QoSGyzHWM5mkG',
			redirectUri: 'http://localhost:8000/callback',
			responseType: 'token id_token',
			scope: 'openid profile'
		});

		this.getProfile = this.getProfile.bind(this);
		this.handleAuthentication = this.handleAuthentication.bind(this);
		this.isAuthenticated = this.isAuthenticated.bind(this);
		this.logIn = this.logIn.bind(this);
		this.logOut = this.logOut.bind(this);
	}

	getProfile() {
		return this.profile;
	}

	getAccessToken() {
		return this.accessToken;
	}

	handleAuthentication() {
		return new Promise((resolve, reject) => {
			this.auth0.parseHash((err, authResult) => {
				if (err) return reject(err);
				if (!authResult || !authResult.idToken) {
					return reject(err);
				}
				this.setSession(authResult);
				resolve();
			});
		});
	}

	setSession(authResult, step) {
		this.profile = authResult.idTokenPayload;
		this.accessToken = authResult.accessToken;
		this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
	}

	isAuthenticated() {
		return new Date().getTime() < this.expiresAt;
	}

	logIn() {
		this.auth0.authorize();
	}

	logOut() {
		this.auth0.logout({
			returnTo: 'http://localhost:8000/logout',
			clientID: 'yzPLFeVCv1W8kcMDs25QoSGyzHWM5mkG'
		});
	}

	silentAuth() {
		return new Promise((resolve, reject) => {
			this.auth0.checkSession({}, (err, authResult) => {
				if (err) return reject(err);
				this.setSession(authResult);
				resolve();
			});
		});
	}
}

const auth0Client = new Auth();

export default auth0Client;
