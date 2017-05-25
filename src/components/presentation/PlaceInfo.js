import React, { Component } from 'react'

export default (props) => {

	const place = props // can be null

	let name = ''
	let image = ''
	let website = ''
	let description = ''

	if (place){
		name = place.name
		// TODO: populate other attributes
	}


	return (
		<div style={localStyle.container}>
			<h3 className="notopmargin" style={localStyle.header}>
				{name}
			</h3>

		</div>
	)
}

const localStyle = {
	container: {
		background: '#fff',
		marginBottom: 24,
		padding: 16
	},
	header: {
		fontFamily: 'Pathway Gothic One',
		fontWeight: 100
	}

}