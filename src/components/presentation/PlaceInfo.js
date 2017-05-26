import React, { Component } from 'react'

export default (props) => {
	const place = props // can be null

	let name = ''
	let image = ''
	let website = ''
	let description = ''
	let address = ''

	if (place){ // TODO: populate other attributes
		name = place.name
		image = place.icon
		address = place.address
		website = place.website || ''
		if (website.indexOf('http')==-1 && website.length>0)
			website = 'http://'+website
	}

	return (
		<div style={localStyle.container}>
			<img src={image} style={localStyle.image} />
			<div style={{padding:16}}>
				<h3 className="notopmargin" style={localStyle.header}>
					{name}
				</h3>
				<hr />

				<span style={{fontWeight:100}}>{address}</span><br />
				{ (website.length > 0) ? <a target="_blank" href={website}>Website</a> : null }
			</div>
		</div>
	)
}

const localStyle = {
	container: {
		border: '1px solid #ddd',
		background: '#fff',
		marginBottom: 24
	},
	image: {
		width: 100,
		float: 'right',
		marginLeft: 16
	},
	header: {
		fontFamily: 'Pathway Gothic One',
		fontWeight: 100,
		marginBottom: 0
	}
}
