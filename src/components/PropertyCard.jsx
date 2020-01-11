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


	let saveButton;
	if (userID) {
		saveButton =
			(<button className="save" onClick={() => handleSave(_id)}>Save <i className="fas fa-heart"></i></button>)
	}

	return (

		< div className="propertyCard grow" >

			<span className="img"><img src={data[Math.floor(Math.random() * data.length)]} alt="property" width="300px" height="200px"></img></span>
			<span className="title">{title}</span>
			<span className="type"><i className="fas fa-home"></i> {type}</span>
			<span className="bedrooms"><i className="fas fa-bed"></i> {bedrooms}</span>
			<span className="bathrooms"><i className="fas fa-bath"></i> {bathrooms}</span>
			<span className="city"><i className="fas fa-map-marker-alt"></i> {city}</span>
			<span className="price">£{price}</span>
			<div className="buttons">
				<span className="email"><a href={`mailto:${email}?Subject=${title}`} target="_top">Email <i className="fas fa-envelope"></i></a></span>
				<div className="boot">{saveButton}</div></div>

		</div >
	)
}

export default PropertyCard