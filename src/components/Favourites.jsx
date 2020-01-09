import React, { Component } from 'react';
import PropertyCard from './PropertyCard';
import Axios from 'axios';
import '../styles/Favourites.css';
import FaveCards from './FaveCards';
import { Link } from 'react-router-dom'


class Favourites extends Component {
	constructor(props) {
		super(props);
		this.state = {

			results: [],
			success: false,
			favourites: [],
		}
	}
	componentDidMount() {
		console.log(this.props.userID)
		if (this.props.userID) {
			Axios.get(`http://localhost:3000/api/v1/Favourite/`)
				.then(response => {
					this.setState({
						results: response.data,
					})
				})
				.catch(err => console.log(err))
		} else {
			return <div className="no-faves">Please log in to view you favourites</div>
		}
	}

	handleDelete = (_id) => {
		console.log(_id);
		Axios.delete(`http://localhost:3000/api/v1/Favourite/${_id}`)
			.then(
				this.setState({
					results: this.state.results.filter(property => property._id !== _id),
				})
			)
			.catch(console.log('Error'))
	}


	render() {
		return (
			<div className="favourites">
				{this.state.results && this.state.results.length > 0 ?
					this.state.results.map(property => (
						<FaveCards userID={this.props.userID} key={property._id}
							{...property} handleDelete={this.handleDelete} />
					)) : <div className="error">You currently have no favourites saved. Head over to the
					<Link className="Properties-link" to="/">Properties Page</Link> to browse our properties.</div>}
			</div>
		)
	}
}






export default Favourites;