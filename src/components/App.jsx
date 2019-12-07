import React, { Component } from 'react';
import '../components/App.css';
import Navbar from '../components/Navbar'
import { Route, Switch } from 'react-router-dom';
import Properties from '../Properties';
import AddProperty from '../AddProperty';


class App extends Component {
	render() {
		return <div>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Properties} />
				<Route exact path="/add-property" component={AddProperty} />
			</Switch>
		</div>
	}
}

export default App