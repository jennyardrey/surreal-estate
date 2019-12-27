import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login';

const Navbar = ({ onLogin, name, onLogout, userID, picture }) => {
	let loginButton;

	if (!userID) {
		loginButton = (
			<FacebookLogin
				appId="2307333706037850"

				fields="name,email,picture"

				callback={onLogin} />
		)
	} else {
		loginButton = (
			<button className="fb-logout-btn" type="button" onClick={onLogout}>
				<img src={picture} alt="Profile" className="fb-profile-pic" />Logged in as {name}<br></br>Click to logout
				</button>
		)
	}

	return < div className="Navbar" >
		<ul className="nav">
			<img className="logo" src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png" alt="logo"></img>
			<Link className="item" to="/"> View Properties </Link>
			<Link className="item" to="/add-property">Add a Property </Link>
			<span>{loginButton}</span>

		</ul>
	</div >


}
export default Navbar