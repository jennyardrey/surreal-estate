import Navbar from '../components/Navbar.jsx'
import ReactDOM from 'react-dom'
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	shallow(<Navbar />)
})