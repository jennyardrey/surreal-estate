import React, { Component } from 'react';
import '../components/Navbar.css';
import "../components/images/logo.jpg";
import { Link } from 'react-router-dom'

class Navbar extends Component {
	render() {
		return < div className="Navbar" >
			<img className="logo" src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png" alt="logo"></img>
			<ul className="nav">
				<Link className="item" to="/"> View Properties </Link>
				<Link className="item" to="/add-property">Add a Property </Link>
			</ul>
		</div >

	}
}
export default Navbar