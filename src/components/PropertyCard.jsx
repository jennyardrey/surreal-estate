import React from 'react';
import '../styles/PropertyCard.css'
import data from '../data/images.json'

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
		handleSave,
	} = props;
	let image;

	let saveButton;
	if (userID) {
		saveButton =
			(<button className="save" onClick={() => handleSave(_id)}>Save <i class="fas fa-heart"></i></button>)
	}

	return (

		< div className="propertyCard grow" >
			{/* <div>{image = }</div> */}
			<span className="img"><img src={data[Math.floor(Math.random() * data.length)]} alt="property" width="300px" height="200px"></img></span>
			<span className="title">{title}</span>
			<span className="type"><i class="fas fa-home"></i> {type}</span>
			<span className="bedrooms"><i class="fas fa-bed"></i> {bedrooms}</span>
			<span className="bathrooms"><i class="fas fa-bath"></i> {bathrooms}</span>
			<span className="city"><i class="fas fa-map-marker-alt"></i> {city}</span>
			<span className="price">£{price}</span>
			<div className="buttons">
				<span className="email"><a href={`mailto:${email}?Subject=${title}`} target="_top">Email <i class="fas fa-envelope"></i></a></span>
				{saveButton}</div>

		</div >
	)
}

export default PropertyCard