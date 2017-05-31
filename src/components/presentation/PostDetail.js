import React, { Component } from 'react'
import { DateUtils, TextUtils } from '../../utils'
import config from './config'

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

        	<div className="col-md-5">
        		<div style={{padding:16, overflow:'scroll'}}>
					<span style={config.detail}>{ DateUtils.formattedDate(1000*post.created_time) }</span>
		            <h4 style={config.header}>{caption}</h4>
		            <hr />
        		</div>
        	</div>

        	<div className="col-md-3">
	            <div style={{background:'#f9f9f9', padding:16, minHeight:370, textAlign:'right'}}>
		        	<img style={{width:50+'%', marginBottom:12}} src={props.place.icon} />
		            <p style={{marginBottom:8, fontWeight:100}}>To get notified with messages like this, subscribe below:</p>
		            <input style={{marginBottom:8, height:28}} placeholder="Name" className="form-control" type="text" />
		            <input style={{marginBottom:8, height:28}} placeholder="Email" className="form-control" type="text" />
		            <button className="button button-circle button-blue button-small">Subscribe</button>
	            </div>
        	</div>
        </div>
	)
}
