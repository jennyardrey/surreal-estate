import React, { Component } from 'react';
import '../styles/Alert.css'

const Alert = ({ message, success }) => (

	<div className={`Alert${success ? ' success' : ""}`}>
		{message}
	</div>

)

export default Alert