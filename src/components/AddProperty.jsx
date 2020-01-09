import React, { Component } from 'react';
import '../styles/AddProperty.css'
import Axios from 'axios'
import Alert from './Alert.jsx'

class AddProperty extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: {
				title: '',
				type: '',
				city: '',
				bedrooms: 0,
				bathrooms: 0,
				price: 0,
				email: '',
			},
			status: {
				alertMessage: '',
				isSuccess: false,
				isError: false,
			}
		}
	}

	handleAddProperty = (event) => {
		event.preventDefault();
		this.setState({
			status: {
				alertMessage: '',
				isSuccess: false,
				isError: false,
			}
		})
		Axios.post("http://localhost:3000/api/v1/PropertyListing/", this.state.fields)
			.then(
				this.setState({
					alertMessage: 'Your property has been added!',
					isSuccess: true,
				})
			)
			.catch((err) => {
				this.setState({
					alertMessage: 'There was an error!',
					isError: true,
				})
			}
			)
	}

	handleFieldChange = (event) => {
		event.preventDefault()
		this.setState({
			fields: {
				...this.state.fields,
				[event.target.name]: event.target.value
			}
		})
	}

	render() {

		return <div className="AddProperty">

			<form className="addForm" onSubmit={this.handleAddProperty}>
				{this.state.isSuccess && <Alert message={this.state.alertMessage} success />}
				{this.state.isError && <Alert message={this.state.alertMessage} success />}
				<div className="input">Listing title:</div>
				<input className="input" type="text" name="title" onChange={this.handleFieldChange}></input>

				<div className="input">Listing type:</div>
				<select className="input" name="type" onChange={this.handleFieldChange}>
					<option value="Flat">Flat</option>
					<option value="Detached">Detached</option>
					<option value="Semi-Detached">Semi-Detached</option>
					<option value="Terraced">Terraced</option>
					<option value="End of Terrace">End of Terrace</option>
					<option value="Cottage">Cottage</option>
					<option value="Bungalow">Bungalow</option>
				</select>
				<div className="input">City:</div>
				<select className="input" name="city" onChange={this.handleFieldChange}>
					<option value="Manchester">Manchester</option>
					<option value="Leeds">Leeds</option>
					<option value="Liverpool">Liverpool</option>
					<option value="Hull">Hull</option>
				</select>

				<div className="input">No. of bedrooms:</div><input className="input" type="number" name="bedrooms" onChange={this.handleFieldChange}></input>

				<div className="input">No. of bathrooms:</div><input className="input" type="number" name="bathrooms" onChange={this.handleFieldChange}></input>

				<div className="input">Price in £:</div><input className="input" type="number" name="price" onChange={this.handleFieldChange}></input>

				<div className="input">Contact email:</div><input className="input" type="text" name="email" onChange={this.handleFieldChange}></input>

				<button className="input" type="submit">Add</button>

			</form>

		</div >

	}
};

export default AddProperty