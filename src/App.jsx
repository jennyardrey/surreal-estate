import React, { Component } from 'react';
import './styles/App.css'
import Navbar from './components/Navbar.jsx'
import { Route, Switch } from 'react-router-dom';
import Properties from './components/Properties.jsx';
import AddProperty from './components/AddProperty';
import Favourites from './components/Favourites'
import Axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userID: null,
			name: '',
			email: '',
			picture: '',
			favourites: [],
		}
	}

	handleLogin = (response) => {
		this.setState({
			userID: response.userID,
			name: response.name,
			email: response.email,
			picture: response.picture.data.url,
		})
		Axios.get(`http://localhost:3000/api/v1/Favourite`)
			.then(result => this.setState({
				favourites: result.data.map(prop => prop.propertyListing)
			}))
	}

	handleLogout = () => {
		window.FB.logout(function (response) {
			document.location.reload();
		});

	};




	render() {
		return (
			<div>

				<Navbar
					onLogin={this.handleLogin}
					onLogout={this.handleLogout}
					userID={this.state.userID}
					name={this.state.name}
					email={this.state.email}
					picture={this.state.picture} />
				<Switch>
					<Route
						exact path="/"
						render={props => <Properties {...props} userID={this.state.userID} favourites={this.state.favourites} />}
					/>
					<Route exact path="/add-property"
						component={AddProperty} />
					<Route exact path="/favourites" render={props => <Favourites {...props} userID={this.state.userID} />}
					/>
				</Switch>

			</div>
		);
	}
}

export default App;