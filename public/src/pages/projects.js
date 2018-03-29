import React from 'react';
import ReactDOM from 'react-dom';
import * as Toastr from 'toastr';
import axios from 'axios'
import { Button, Modal, Form, TextArea } from 'semantic-ui-react'
import { CognitoUserPool, CognitoUser, CognitoIdentityCredentials, WebIdentityCredentials } from 'amazon-cognito-identity-js';

import {
	REGION,
	USER_POOL_ID,
	CLIENT_ID,
	poolData
} from '../../utils/aws_consts'

class Projects extends React.Component {
	constructor() {
		super();
		this.state = {
			title: '',
			description: '',
			projects: []
		}

		this.handleChange = this.handleChange.bind(this);
		this.createProject = this.createProject.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	createProject() {
		if(this.state.title != '') {
			let now = moment().locale('it').format('DD-MM-YYYY');
			
			axios.post('/projects/add', {title: this.state.title, description: this.state.description, created_at: now})
			.then(function (response) {
				Toastr.success('Progetto creato con successo!');
				setTimeout(function(){ location.reload() }, 2000);
			})
			.catch(function (error) {
				Toastr.error('Errore di connessione');
			});
		}
	}

	render() {
		return (
			<div>
				<h2 className="ui header">
					<i className="folder outline icon"></i>
					<div className="content">
						Progetti
						<div className="sub header">Consulta i tuoi progetti o creane uno nuovo</div>
					</div>
				</h2>
				<div className="ui divider"></div>
				<Modal trigger={<Button color="teal">Aggiungi nuovo progetto</Button>} closeIcon>
					<Modal.Header>Select a Photo</Modal.Header>
					<Modal.Content image>
						<Modal.Description>
						<Form>
							<Form.Field>
								<label>Nome del Progetto</label>
								<input name="title" placeholder='Es: Morte Nera' value={this.state.title} onChange={this.handleChange} />
							</Form.Field>
							<Form.Field>
								<TextArea name="description" placeholder='Descrizione' value={this.state.description} onChange={this.handleChange} />
							</Form.Field>
							<Button color="green" type='submit' onClick={this.createProject}>Crea Progetto</Button>
						</Form>
						</Modal.Description>
					</Modal.Content>
				</Modal>
			</div>
		);
	}
}

ReactDOM.render(
	<Projects />,
	document.getElementById('projects')
);