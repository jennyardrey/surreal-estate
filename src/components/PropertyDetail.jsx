import React from 'react';
import "../styles/PropertyDetail.css"


const PropertyDetail = (props) => {
	console.log(props.title)
	const {
		_id,
		title,
		type,
		city,
		bedrooms,
		bathrooms,
		price,
		email,
	} = props;


	return <div className="outer-prop-detail">

		<div className="inner-prop-detail">
			<span ><button className="see-less-btn" onClick={props.seeLess}><i class="fas fa-window-close"></i></button></span>
			<div className="prop-fave-card">
				<span className="title">{title}</span>
				<div className="prop-detail">
					<span className="item-detail type"><i class="fas fa-home">{type}</i></span>
					<span className="item-detail bedrooms"><i class="fas fa-bed">{bedrooms}</i></span>
					<span className="item-detail bathrooms"><i class="fas fa-bath">{bathrooms}</i></span>
					<span className="item-detail city"><i class="fas fa-map-marker-alt">{city}</i></span>
					<span className="item-detail price">£{price}</span>
				</div>
				<span className="description">Lorem ipsum dolor sit amet, consectetur adipiscing
				elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
				ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
		cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
				<span className="map"><img src="https://lh3.googleusercontent.com/-dUjuba9LKw4/WeUIANGnpPI/AAAAAAAAFYM/MD8bPFzQ6Z0OJ-RzVf6qM1NzOpBv8rYFgCLcBGAs/s1600/Screen%2BShot%2B2017-10-17%2Bat%2B8.20.34%2BAM.png" alt="map" width="200px"></img></span>
				{<span className="email"><a href={`mailto:${email}?Subject=${title}`} target="_top">Email <i class="fas fa-envelope"></i></a></span>}

			</div>
		</div>
	</div >
}


export default PropertyDetail;