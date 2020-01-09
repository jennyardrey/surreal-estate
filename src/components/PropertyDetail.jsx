import React from 'react';
import "../styles/PropertyDetail.css"


const PropertyDetail = (props) => {
	const {
		_id,
		title,
		type,
		city,
		bedrooms,
		bathrooms,
		price,
		email,
		userID,
		handleSave,
	} = props;


	return <div className="PropertyDetail">
		<span className="see-less"><button onClick={props.seeLess}>Show Less</button></span>
		<span className="type"><i class="fas fa-home"></i> {type}</span>
		<span className="bedrooms"><i class="fas fa-bed"></i> {bedrooms}</span>
		<span className="bathrooms"><i class="fas fa-bath"></i> {bathrooms}</span>
		<span className="city"><i class="fas fa-map-marker-alt"></i> {city}</span>
		<span className="price">£{price}</span>
		<span className="email">Email <a href={`mailto:${email}?Subject=${title}`} target="_top"><i class="fas fa-envelope"></i></a></span>

		<span className="description">Lorem ipsum dolor sit amet, consectetur adipiscing
		elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
		ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
		velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
		cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
		<span className="map"><img src="https://lh3.googleusercontent.com/-dUjuba9LKw4/WeUIANGnpPI/AAAAAAAAFYM/MD8bPFzQ6Z0OJ-RzVf6qM1NzOpBv8rYFgCLcBGAs/s1600/Screen%2BShot%2B2017-10-17%2Bat%2B8.20.34%2BAM.png" alt="map" width="200px"></img></span>


	</div>
}


export default PropertyDetail;