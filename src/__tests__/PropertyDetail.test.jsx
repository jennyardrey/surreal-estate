import PropertyDetail from '../components/PropertyDetail.jsx'
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	shallow(<PropertyDetail />)
})

it('renders information about the property', () => {

	const props = {
		_id: "12345",
		title: "property title",
		type: "property type",
		city: "property city",
		bedrooms: 1,
		bathrooms: 1,
		price: 1,
		email: "property email",
	}

	const wrapper = shallow(<PropertyDetail {...props} />)


	const bedrooms = wrapper.find('.bedrooms');
	const bathrooms = wrapper.find('.bathrooms');
	const city = wrapper.find('.city');
	const price = wrapper.find('.price');
	const description = wrapper.find('.description');
	const map = wrapper.find('.map');
	const email = wrapper.find('.email');

	expect(bedrooms.exists()).toBeTruthy();
	expect(bathrooms.exists()).toBeTruthy();
	expect(city.exists()).toBeTruthy();
	expect(price.exists()).toBeTruthy();
	expect(description.exists()).toBeTruthy();
	expect(map.exists()).toBeTruthy();
	expect(email.exists()).toBeTruthy();




})

/*  */