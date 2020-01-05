import React, { Component } from 'react';
import Axios from 'axios';
import '../styles/FaveCards.css'

class FaveCards extends Component {
	constructor(props) {
		super(props);

		this.state = {
			favourite: [],
			// success: false,
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




	render() {

		return <div className="favourite-card">
			<span className="title">{this.state.favourite.title}</span>
			<span className="image"><img src="http://placeimg.com/300/200/arch" alt="property"></img></span>
			<span className="view-link"><button>View Property</button></span>
			<span className="delete-btn"><button input="button" onClick={() => this.props.handleDelete(this.props._id)}>Delete</button></span>
		</div>


	}
}



export default FaveCards;