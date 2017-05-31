import React, { Component } from 'react'
import { DateUtils, TextUtils } from '../../utils'
import config from './config'

class PostDetail extends Component {
	constructor(){
		super()
		this.state = {
			visitor: {
				email: '',
				password: ''
			}
		}
	}

	updateVisitor(field, event){
		if (event)
			event.preventDefault()

		let updated = Object.assign({}, this.state.visitor)
		updated[field] = event.target.value
		this.setState({
			visitor: updated
		})
	}

	subscribe(event){
		if (event)
			event.preventDefault()

		if (this.state.visitor.email.length == 0){
			alert('Please Enter Your Email')
			return
		}

		if (this.state.visitor.password.length == 0){
			alert('Please Enter Your Password')
			return
		}

		this.props.subscribeToPlace(this.state.visitor)
	}

	render(){
		const post = this.props

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
		            <div style={localStyle.signupForm}>
			        	<img style={localStyle.icon} src={this.props.place.icon} />
			        	<h4 style={{fontWeight:400}}>{this.props.place.name}</h4>
			            <p style={localStyle.paragraph}>Get notified with<br />messages like this:</p>
			            <input style={localStyle.input} onChange={this.updateVisitor.bind(this, 'email')} placeholder="Email" className="form-control" type="text" />
			            <input style={localStyle.input} onChange={this.updateVisitor.bind(this, 'password')} placeholder="Password" className="form-control" type="password" />
			            <button onClick={this.subscribe.bind(this)} className="button button-circle button-blue button-small">Subscribe</button>
		            </div>
	        	</div>
	        </div>
		)
	}
}


const localStyle = {
	signupForm: {
		background: '#f9f9f9',
		padding: 16,
		minHeight: 370,
		textAlign: 'right'
	},
	paragraph: {
		marginBottom: 8,
		fontWeight: 100
	},
	icon: {
		width: 50+'%',
		marginBottom: 12
	},
	input: {
		marginBottom: 8,
		height: 28
	}
}

export default PostDetail