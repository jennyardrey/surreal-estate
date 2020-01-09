import React, { Component } from 'react';
import Axios from 'axios';
import '../styles/FaveCards.css'
import PropertyDetail from './PropertyDetail'
import data from '../data/images.json'

class FaveCards extends Component {
	constructor(props) {
		super(props);

		this.state = {
			favourite: [],

		}

	}

	componentDidMount() {
		Axios.get(`http://localhost:3000/api/v1/PropertyListing/${this.props.propertyListing}`)
			.then(response => {
				this.setState({
					favourite: response.data,
				})
			}
			)
	}






	render() {
		const { seeMore } = this.props;
		return <div className="favourite-card">
			<span className="title">{this.state.favourite.title}</span>
			<span className="image"><img src={data[Math.floor(Math.random() * data.length)]} alt="property" width="300px" height="200px"></img></span>
			<span className="delete-btn"><button input="button" onClick={() => this.props.handleDelete(this.props._id)}>Remove from favourites</button></span>
			<span className="see-more"><button onClick={() => seeMore(this.state.favourite)}>Show More...</button></span>
			}
		</div>


	}
}



export default FaveCards;