import React, { Component } from 'react'

export default (props) => {

	const post = props

	let image = null
	if (post.images){
		if (post.images.low_resolution)
			image = post.images.low_resolution.url || 'https://media-service.appspot.com/site/images/JoSkY_8o?crop=120'
	}

	let caption = ''
	if (post.caption)
		caption = post.caption.text || ''

	return (
        <div className="row" style={{textAlign:'left'}}>
        	<div className="col-md-4">
	        	<img src={image} />

        	</div>
        	<div className="col-md-8">
        		<div style={{padding:16, overflow:'scroll'}}>
		            <h4>{caption}</h4>

        		</div>

        	</div>
        </div>

	)
}
