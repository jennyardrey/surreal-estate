import Alert from '../components/Alert.jsx'
import { shallow } from 'enzyme';
import React from 'react';

it('renders without crashing', () => {
	shallow(<Alert />);
});

it('shows an error', () => {
	const wrapper = shallow(<Alert message="Error!" />);
	expect(wrapper.find('.Alert').text()).toBe('Error!');
})


it('shows an success', () => {
	const wrapper = shallow(<Alert message="Success!" success />);
	expect(wrapper.find('.Alert.success').text()).toBe('Success!');
})