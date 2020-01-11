import Properties from '../components/Properties.jsx'
import ReactDOM from 'react-dom'
import React from 'react';
import { shallow, mount } from 'enzyme';

const props = {
	location: { search: "fakeValue" },
	updateSearch: jest.fn()
}
let wrapper;
const event = {
	target: { value: "hello" }
}

beforeEach(() => {
	wrapper = shallow(<Properties {...props} />)
})

it('renders without crashing', () => {
})

it('has a working search bar', () => {

	wrapper.find('input').simulate('change', event);

	expect(props.updateSearch.mock.calls[0][0]).toBe('matched');
})