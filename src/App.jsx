import React, { Component } from 'react';
import './styles/App.css'
import Navbar from './components/Navbar.jsx'
import { Route, Switch } from 'react-router-dom';
import Properties from './components/Properties.jsx';
import AddProperty from './components/AddProperty'; { }

class App extends Component {
	render() {
		return (
			<div>

				<Navbar />
				<Switch>
					<Route exact path="/" component={Properties} />
					<Route exact path="/add-property" component={AddProperty} />
				</Switch>

			</div>
		);
	}
}

export default App;