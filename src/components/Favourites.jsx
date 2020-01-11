import React, { Component } from 'react';
import Axios from 'axios';
import '../styles/Favourites.css';
import FaveCards from './FaveCards';
import PropertyDetail from './PropertyDetail';


class Favourites extends Component {
	constructor(props) {
		super(props);
		this.state = {

			results: [],
			success: false,
			favourites: [],
			showPopup: false,
			currentFave: []
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
	seeMore = (fave) => {
		console.log(this.state.currentFave)
		this.setState({
			showPopup: true,
			currentFave: fave,
		})

	}

	seeLess = () => {
		this.setState({
			showPopup: false,
		})
		console.log(this.state.showPopup)
	}

	render() {
		return (
			<div className="favourites">
				<div className="fave-cards">
					{this.state.results && this.state.results.length > 0 ?
						this.state.results.map(property => (
							<FaveCards userID={this.props.userID} key={property._id}
								{...property} handleDelete={this.handleDelete} seeMore={this.seeMore} seeLess={this.seeLess} />
						)) : <div className="error">You currently have no favourites saved. Head over to the
					Properties Page to browse our properties.</div>}
				</div>
				<div className="popup">
					{this.state.showPopup ?
						<PropertyDetail key={this.props._id}
							{...this.state.currentFave} seeLess={this.seeLess} />
						: null
					}
				</div>
			</div>
		)
	}
}






export default Favourites;