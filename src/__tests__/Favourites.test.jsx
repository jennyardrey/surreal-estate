import Favourites from '../components/Favourites.jsx'
import ReactDOM from 'react-dom'
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	shallow(<Favourites />);
});