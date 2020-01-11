import PropertyCard from '../components/PropertyCard.jsx'
import { shallow, mount } from 'enzyme';
import React from 'react';

it('renders without crashing', () => {
	shallow(<PropertyCard />);
});





it('renders the title', () => {
	const wrapper = shallow(<PropertyCard
		title="Test Property"
		type="Flat"
		bathrooms="1"
		bedrooms="2"
		price="12000"
		city="Hull"
		email="test@email.com" />)
	const text = wrapper.find('.title').text();
	expect(text).toEqual('Test Property');
})

it('renders the type', () => {
	const wrapper = shallow(<PropertyCard
		title="Test Property"
		type="Flat"
		bathrooms="1"
		bedrooms="2"
		price="12000"
		city="Hull"
		email="test@email.com" />)
	const text = wrapper.find('.type').text();
	expect(text).toEqual(' Flat');
})

it('renders the bathroom', () => {
	const wrapper = shallow(<PropertyCard
		title="Test Property"
		type="Flat"
		bathrooms="1"
		bedrooms="2"
		price="12000"
		city="Hull"
		email="test@email.com" />)
	const text = wrapper.find('.bathrooms').text();
	expect(text).toEqual(" 1");
})

it('renders the bedrooms', () => {
	const wrapper = shallow(<PropertyCard
		title="Test Property"
		type="Flat"
		bathrooms="1"
		bedrooms="2"
		price="12000"
		city="Hull"
		email="test@email.com" />)
	const text = wrapper.find('.bedrooms').text();
	expect(text).toEqual(' 2');
})

it('renders the price', () => {
	const wrapper = shallow(<PropertyCard
		title="Test Property"
		type="Flat"
		bathrooms="1"
		bedrooms="2"
		price="12000"
		city="Hull"
		email="test@email.com" />)
	const text = wrapper.find('.price').text();
	expect(text).toEqual('£12000');
})

it('renders the city', () => {
	const wrapper = shallow(<PropertyCard
		title="Test Property"
		type="Flat"
		bathrooms="1"
		bedrooms="2"
		price="12000"
		city="Hull"
		email="test@email.com" />)
	const text = wrapper.find('.city').text();
	expect(text).toEqual(' Hull');
})

it('renders the email', () => {
	const wrapper = shallow(<PropertyCard
		title="Test Property"
		type="Flat"
		bathrooms="1"
		bedrooms="2"
		price="12000"
		city="Hull"
		email="test@email.com" />)
	const text = wrapper.find('.email').text();
	expect(text).toEqual('Email ');
})

it('runs the handleSave function when the button is clicked', () => {
	const props = {
		handleSave: jest.fn(),
		userID: true,
	};
	const wrapper = mount(<PropertyCard {...props} />);
	wrapper.find('button').simulate('click');
	expect(props.handleSave).toHaveBeenCalled();
})