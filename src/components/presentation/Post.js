import React from 'react'

export default (props) => {

	const post = props

	// Instagram json structure: https://www.instagram.com/blinkfitness/media/
	let image = null
	if (post.images){
		if (post.images.low_resolution)
			image = post.images.low_resolution.url || 'https://media-service.appspot.com/site/images/JoSkY_8o?crop=120'
	}

	let caption = null
	if (post.caption)
		caption = post.caption.text || ''

	return (
		<div className="entry clearfix" style={localStyle.container}>
			<div className="entry-image hidden-sm" style={{width:120}}>
				<a target="_blank" href={image}>
					<img src={image} alt="Atlas" />
				</a>
			</div>
			<div className="entry-c">
				<div className="entry-title nobottompadding clearfix">
					<span style={localStyle.detail}>{ post.created_time }</span>
					<h4 className="nobottommargin notopmargin">
						<a href="#" style={localStyle.header}>{caption}</a>
					</h4>
				</div>
			</div>
		</div>
	)
}

const localStyle = {
	container: {
		background:'#fff',
		marginBottom:25
	},
	header: {
		fontFamily:'Pathway Gothic One',
		color:'#333',
		fontWeight:100
	},
	detail: {
		fontWeight: 100,
		fontSize: 12,
		color: '#888'
	}
}