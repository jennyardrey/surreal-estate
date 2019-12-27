import React from 'react';
import '../styles/PropertyCard.css'

const PropertyCard = (props) => (
	<div className="propertyCard">
		<span className="img"><img src="http://placeimg.com/300/200/arch" alt="property"></img></span>
		<span className="title">{props.title}</span>
		<span className="type"><i class="fas fa-home"></i> {props.type}</span>
		<span className="bedrooms"><i class="fas fa-bed"></i> {props.bedrooms}</span>
		<span className="bathrooms"><i class="fas fa-bath"></i> {props.bathrooms}</span>
		<span className="city"><i class="fas fa-map-marker-alt"></i> {props.city}</span>
		<span className="price">£{props.price}</span>
		<span className="email">Email <a href={`mailto:${props.email}?Subject=${props.title}`} target="_top"><i class="fas fa-envelope"></i></a></span>


		{props.userID ? <span className="save">Save <i class="fas fa-heart"></i></span> : <div></div>}


	</div >
)

export default PropertyCard