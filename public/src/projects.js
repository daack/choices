import React from 'react';
import ReactDOM from 'react-dom';
import * as Toastr from 'toastr';
import { CognitoUserPool, CognitoUser, CognitoIdentityCredentials, WebIdentityCredentials } from 'amazon-cognito-identity-js';

import {
	REGION,
	USER_POOL_ID,
	CLIENT_ID,
	poolData
} from '../utils/aws_consts'

class Projects extends React.Component {
	constructor() {
		super();
		this.state = {}

		//this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
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
				<button className="ui teal button">Aggiungi nuovo progetto</button>

				<div className="ui special cards" style={{marginTop: '30px'}}>
					<div className="card">
						<div className="blurring dimmable image">
							<div className="ui dimmer">
								<div className="content">
									<div className="center">
										<div className="ui inverted button">Add Friend</div>
									</div>
								</div>
							</div>
							<img src="https://placeimg.com/290/290/animals" />
						</div>
						<div className="content">
							<a className="header">Team Fu</a>
							<div className="meta">
								<span className="date">Created in Sep 2014</span>
							</div>
						</div>
						<div className="extra content">
							<a>
								<i className="users icon"></i>
								2 Members
							</a>
						</div>
					</div>
					<div className="card">
						<div className="blurring dimmable image">
							<div className="ui dimmer">
								<div className="content">
									<div className="center">
										<div className="ui inverted button">Add Friend</div>
									</div>
								</div>
							</div>
							<img src="https://placeimg.com/290/290/animals" />
						</div>
						<div className="content">
							<a className="header">Team Fu</a>
							<div className="meta">
								<span className="date">Created in Sep 2014</span>
							</div>
						</div>
						<div className="extra content">
							<a>
								<i className="users icon"></i>
								2 Members
							</a>
						</div>
					</div>
					<div className="card">
						<div className="blurring dimmable image">
							<div className="ui dimmer">
								<div className="content">
									<div className="center">
										<div className="ui inverted button">Add Friend</div>
									</div>
								</div>
							</div>
							<img src="https://placeimg.com/290/290/animals" />
						</div>
						<div className="content">
							<a className="header">Team Fu</a>
							<div className="meta">
								<span className="date">Created in Sep 2014</span>
							</div>
						</div>
						<div className="extra content">
							<a>
								<i className="users icon"></i>
								2 Members
							</a>
						</div>
					</div>
				</div>
			</div>
			

		);
	}
}


//Check logged user
const userPool = new CognitoUserPool(poolData);
let currentUser = userPool.getCurrentUser();

if (currentUser != null) {
	currentUser.getSession(function(err, session) {
		if (err) {
			window.location.href = "/login";
		}
		if (session.isValid()) {
			ReactDOM.render(
				<Projects />,
				document.getElementById('projects')
			);
		}
	});
}