import React, { useState } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './Login.css';

export default function Login(props) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div className="Login">
			<form onSubmit={handleSubmit}>
				<FormGroup controlId="email" bsSize="large">
					<ControlLabel>Votre addresse mail d'utilisateur</ControlLabel>
					<FormControl autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				</FormGroup>
				<FormGroup controlId="password" bsSize="large">
					<ControlLabel>Votr mot de passe</ControlLabel>
					<FormControl value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
				</FormGroup>
				<div class="checkbox mb-3">
					<label>
						<input type="checkbox" name="_remember_me">
							Remember me
						</input>
					</label>
				</div>

				<Button block bsSize="large" disabled={!validateForm()} type="Se connecter">
					Login
				</Button>
			</form>
		</div>
	);
}
