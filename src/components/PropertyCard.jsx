import React from 'react';
import '../styles/PropertyCard.css'

const PropertyCard = (props) => {
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
		onSaveProperty,
	} = props;

	let saveButton;
	if (userID) {
		saveButton =
			(<button className="save">Save <i class="fas fa-heart"></i></button>)
	}

	return (

		<div className="propertyCard">

			<span className="img"><img src="http://placeimg.com/300/200/arch" alt="property"></img></span>
			<span className="title">{title}</span>
			<span className="type"><i class="fas fa-home"></i> {type}</span>
			<span className="bedrooms"><i class="fas fa-bed"></i> {bedrooms}</span>
			<span className="bathrooms"><i class="fas fa-bath"></i> {bathrooms}</span>
			<span className="city"><i class="fas fa-map-marker-alt"></i> {city}</span>
			<span className="price">£{price}</span>
			<div className="buttons">
				<span className="email">Email <a href={`mailto:${email}?Subject=${title}`} target="_top"><i class="fas fa-envelope"></i></a></span>
				{saveButton}</div>






		</div >
	)
}

export default PropertyCard