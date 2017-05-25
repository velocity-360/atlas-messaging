import React, { Component } from 'react'

export default (props) => {
	const place = props

	const textColor = (props.selected) ? 'red' : '#333'
	const bgColor = (props.selected) ? '#f1f9f5' : '#fff'
	const style = {height:120, background:bgColor, padding:'8px 12px 12px 24px', borderBottom:'1px solid #f9f9f9'}

	return (
		<div id={place.id} onClick={props.selectPlace.bind(this, place.id)} style={style}>
			<a href="#" onClick={props.selectPlace.bind(this, place.id)}>
				<img style={localStyle.icon} src={place.icon} />
			</a>
			<h4 style={localStyle.header}>
				<a onClick={props.selectPlace.bind(this, place.id)} style={{color:textColor}} href="#">{place.name}</a>
			</h4>
			<div style={{lineHeight:'1.1'}}>
				<span style={localStyle.detail}>{place.address}</span>
				<br />
				{ (place.url == null) ? null : <a target="_blank" href={place.url} style={localStyle.link}>website</a> }
			</div>
		</div>
	)
}

const localStyle = {
	icon: {
		float: 'right',
		width: 64,
		height: 64,
		borderRadius: 32
	},
	header: {
		fontFamily: 'Pathway Gothic One',
		fontWeight: 100,
		marginBottom: 0
	},
	detail: {
		fontWeight: 100,
		fontSize: 12,
		color: '#888'
	},
	link: {
		fontWeight: 100,
		fontSize: 12
	}
}