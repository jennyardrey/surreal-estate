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
			active: false,
		}

	}

	componentDidMount() {
		console.log(this.props.propertyListing)
		Axios.get(`http://localhost:3000/api/v1/PropertyListing/${this.props.propertyListing}`)
			.then(response => {
				this.setState({
					favourite: response.data,
				})
			}
			)
	}

	seeMore = () => {
		this.setState({
			active: true,
		})
		console.log(this.state.active)
	}

	seeLess = () => {
		this.setState({
			active: false,
		})
		console.log(this.state.active)
	}




	render() {

		return <div className="favourite-card">
			<span className="title">{this.state.favourite.title}</span>
			<span className="image"><img src={data[Math.floor(Math.random() * data.length)]} alt="property" width="300px" height="200px"></img></span>


			<span className="delete-btn"><button input="button" onClick={() => this.props.handleDelete(this.props._id)}>Remove from favourites</button></span>

			{this.state.active && this.state.active === true ?

				<PropertyDetail key={this.props._id}
					{...this.state.favourite} seeLess={this.seeLess} />
				: <span className="see-more"><button onClick={this.seeMore}>Show More...</button></span>
			}
		</div>


	}
}



export default FaveCards;