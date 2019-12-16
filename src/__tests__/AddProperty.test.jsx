import AddProperty from '../components/AddProperty.jsx'
import ReactDOM from 'react-dom'
import React from 'react';


it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<AddProperty />, div)
})