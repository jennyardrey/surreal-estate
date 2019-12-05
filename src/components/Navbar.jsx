import React, { Component } from 'react';
import '../components/Navbar.css';
import "../components/images/logo.jpg";

class Navbar extends Component {
	render() {
		return < div className="Navbar" >
			<img src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png" alt="logo"></img>
			<ul className="nav">
				<li className="item">View Properties</li>
				<li className="item">Add a Property</li>
			</ul>
		</div >

	}
}
export default Navbar