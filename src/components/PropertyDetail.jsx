import React from 'react';
import '../styles/PropertyDetail.css'

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


	return <div>
		<span className="img"><img src="http://placeimg.com/300/200/arch" alt="property"></img></span>
		<span className="title">{title}</span>
		<span className="type"><i class="fas fa-home"></i> {type}</span>
		<span className="bedrooms"><i class="fas fa-bed"></i> {bedrooms}</span>
		<span className="bathrooms"><i class="fas fa-bath"></i> {bathrooms}</span>
		<span className="city"><i class="fas fa-map-marker-alt"></i> {city}</span>
		<span className="description">Lorem Ipsum is simply dummy text of the printing and
		typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
		the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
		specimen book. It has survived not only five centuries, but also the leap into electronic
		typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
		of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
		software like Aldus PageMaker including versions of Lorem Ipsum.</span>
		<span className="price">£{price}</span>

	</div>
}


export default PropertyDetail;