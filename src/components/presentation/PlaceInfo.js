import React, { Component } from 'react'
import config from './config'

export default (props) => {
	const place = props // can be null

	let name = ''
	let image = ''
	let website = ''
	let description = ''
	let address = ''

	if (place){ // TODO: populate other attributes
		name = place.name || ''
		image = place.icon || ''
		address = place.address || ''
		website = place.website || ''
		description = place.description || ''
		if (website.indexOf('http')==-1 && website.length>0)
			website = 'http://'+website
	}

	return (
		<div style={localStyle.container}>
			<img src={image} style={localStyle.image} />
			<div style={{padding:'16px 16px 0px 16px'}}>
				<h3 className="notopmargin" style={config.header}>
					{name}
				</h3>
				<span style={{fontWeight:100, fontSize:12}}>{address}</span>
				{ (website.length > 0) ? <span style={{marginLeft:16, marginRight:16}}>&bull;</span> : null }
				{ (website.length > 0) ? <a style={{fontWeight:100, fontSize:12}} target="_blank" href={website}>Website</a> : null }				

				<hr />
				<p style={localStyle.description}>{description}</p>
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
	description: {
		width: 100+'%',
		minHeight: 42
	},
	image: {
		width: 186,
		float: 'right',
		marginLeft: 16
	}
	// header: {
	// 	fontFamily: 'Pathway Gothic One',
	// 	fontWeight: 100,
	// 	marginBottom: 0
	// }
}
