import React, { Component } from 'react';
import PropertyCard from './PropertyCard';
import Axios from 'axios';
import '../styles/Properties.css';
import { Link } from 'react-router-dom'
import qs from 'qs'



class Properties extends Component {
	constructor(props) {
		super(props);
		this.state = {

			results: [],
			error: false,
			searchTerm: "",
		}
	}
	componentDidMount() {
		console.log(this.props.favourites)
		Axios.get(`http://localhost:3000/api/v1/PropertyListing/`)
			.then(response => {
				return this.setState({
					results: response.data,
				})

			})
			.catch(() => this.setState({
				error: true,
			})
			)
	}

	componentDidUpdate(prevProps) {
		const { search } = this.props.location;
		if (prevProps.location.search !== search) {
			Axios.get(`http://localhost:3000/api/v1/PropertyListing${search}`)
				.then(
					({ data: properties }) => this.setState({ results: properties })
				)
				.catch(err => this.setState({
					error: true,
				}))
		}
	}

	buildQueryString = (operation, valueObj) => {
		const { location: { search } } = this.props;
		const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true })
		const newQueryParams = {
			...currentQueryParams,
			[operation]: JSON.stringify({
				...JSON.parse(currentQueryParams[operation] || '{}'),
				...valueObj
			})

		}
		return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false })
	}

	updateSearch = (event) => {
		this.setState({
			searchTerm: event.target.value,
		})
	}
	handleSearch = (event) => {

		event.preventDefault();
		// const { search } = this.state;

		const newQueryString = this.buildQueryString('query', { title: { $regex: this.state.searchTerm } })
		const { history, userID } = this.props;
		history.push(newQueryString);
		console.log('hello', newQueryString, userID);
	}

	handleSaveProperty = (propertyId) => {
		const { userID, favourites } = this.props;
		if (!favourites.includes(propertyId)) {
			Axios.post('http://localhost:3000/api/v1/Favourite', {
				propertyListing: propertyId,
				fbUserId: userID,
			})
				.then(favourites.push(propertyId))
				.catch(err => console.log(err))
		} else {
			alert('You have already added this property to your favourites')
		}
	}

	render() {
		return <div className="property-page">

			<ul className="sidebar">
				<h4>Search:</h4>
				<input type="text" onChange={this.updateSearch}></input>
				<button className="search-button" type="submit" onClick={this.handleSearch}>Search</button>
				<h4>Filter by city:</h4>
				<Link className="city-link" to={this.buildQueryString('query', { city: 'Manchester' })} > Manchester</Link>
				<Link className="city-link" to={this.buildQueryString('query', { city: 'Leeds' })}>Leeds</Link>
				<Link className="city-link" to={this.buildQueryString('query', { city: 'Liverpool' })}>Liverpool</Link>
				<Link className="city-link" to={this.buildQueryString('query', { city: 'Hull' })}> Hull</Link>
				<Link className="city-link" to="/">All</Link>
				<h4>Sort by:</h4>
				<Link className="price-order" to={this.buildQueryString('sort', { price: -1 })}>Price Ascending</Link>
				<Link className="price-order" to={this.buildQueryString('sort', { price: 1 })}>Price Descending</Link>
			</ul>

			<div className="properties">
				{this.state.results && this.state.results.length > 0 ?
					this.state.results.map(property => (
						<PropertyCard userID={this.props.userID} handleSave={this.handleSaveProperty} key={property._id}
							{...property} />
					)) : <div className="error">Error!</div>
				}
			</div>
		</div>
	}

}

export default Properties