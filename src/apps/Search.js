import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Nav, Map, Footer } from '../components/presentation'
import actions from '../actions'

class Search extends Component {
	constructor(){
		super()
		this.state = {
			selected: null
		}
	}

	markerClicked(marker, map){
		window.location.href = '/#'+marker.key
		this.selectPlace(marker.key)
	}

	selectPlace(placeId, event){
		if (event)
			event.preventDefault()

		window.scrollTo(0, 0)

		this.setState({
			selected: placeId
		})
	}

	componentDidMount(){
		this.searchPlaces(this.props.session.currentLocation)
	}

	searchPlaces(location){
		this.props.searchPlaces({
			lat: location.lat,
			lng: location.lng,
			query: this.props.session.query
		})
		.then(response => {
			
		})
		.catch(err => {
			alert('ERROR: '+err.message)
		})
	}

	locationChanged(location){
		this.searchPlaces({
			lat: location.lat(),
			lng: location.lng()
		})
	}

	render(){
		const places = this.props.place.all || []

		let markers = []
		places.forEach((place, i) => {
			markers.push({
				key: place.id,
			    position: {lat:place.location.lat, lng:place.location.lng},
				icon: '/images/icons/map_icon_32.png',
				label: '',
				defaultAnimation: 2
			})
		})

		return (
			<div>
				<Nav />
				<div className="stretched side-header">
					<div id="wrapper" className="clearfix">
						<header id="header" className="no-sticky" style={{background:'#fff', paddingTop:70}}>
							<Map 
								center={this.props.session.currentLocation}
								zoom={14}
								locationChanged={this.locationChanged.bind(this)}
								markers={markers}
								markerClicked={this.markerClicked.bind(this)}
								containerElement={<div style={{height:100+'%'}} />} 
								mapElement={<div style={{height:100+'%'}} />} />
						</header>

						<section className="section nomargin notoppadding" style={{paddingBottom:0}}>
							<div className="row">

								<div className="col-md-3" style={{padding:0}}>
									<div style={{background:'red', maxHeight:650, overflowY:'scroll'}}>
										{ places.map((place, i) => {
												const textColor = (this.state.selected == place.id) ? 'red' : '#333'
												const bgColor = (this.state.selected == place.id) ? '#f9f9f9' : '#fff'
												const style = {height:120, background:bgColor, padding:'8px 12px 12px 24px', borderBottom:'1px solid #f9f9f9'}

												return (
													<div id={place.id} key={place.id} style={style}>
														<a href="#" onClick={this.selectPlace.bind(this, place.id)}><img style={{float:'right', borderRadius:22}} src="https://media-service.appspot.com/site/images/hfYJXMjQ?crop=44" /></a>
														<h4 style={{fontFamily:'Pathway Gothic One', fontWeight:100, marginBottom:0}}>
															<a onClick={this.selectPlace.bind(this, place.id)} style={{color:textColor}} href="#">{place.name}</a>
														</h4>
														<div style={{lineHeight:'1.1'}}>
															<span style={{fontWeight:100, fontSize:12, color:'#888'}}>{place.location.address}</span>
															<br />
															{ (place.url == null) ? null : <a target="_blank" href={place.url} style={{fontWeight:100, fontSize:12}}>website</a> }
														</div>
													</div>
												)
											})
										}
									</div>
								</div>

								<div className="col-md-9" style={{padding:0}}>
									<div style={{background:'#f9f9f9', padding:'24px 36px 24px 24px', maxHeight:650, overflowY:'scroll'}}>

	<div className="events small-thumbs">

		<div className="entry clearfix" style={{background:'#fff', marginBottom:25}}>
			<div className="entry-image hidden-sm" style={{width:140}}>
				<a href="#">
					<img src="https://media-service.appspot.com/site/images/JoSkY_8o?crop=120" alt="Atlas" />
				</a>
			</div>
			<div className="entry-c">
				<div className="entry-title nobottompadding clearfix">
					<span style={{fontSize:12, color:'#ddd'}}>May 17th, 2017</span>
					<h3 className="nobottommargin notopmargin">
						<a href="#" style={{color:'#333', fontFamily:'Pathway Gothic One', fontWeight:200}}>Inventore voluptates</a>
					</h3>
				</div>
			</div>
		</div>

		<div className="entry clearfix" style={{background:'#fff', marginBottom:25}}>
			<div className="entry-image hidden-sm" style={{width:140}}>
				<a href="#">
					<img src="https://media-service.appspot.com/site/images/JoSkY_8o?crop=120" alt="Atlas" />
				</a>
			</div>
			<div className="entry-c">
				<div className="entry-title nobottompadding clearfix">
					<span style={{fontSize:12, color:'#ddd'}}>May 17th, 2017</span>
					<h3 className="nobottommargin notopmargin">
						<a href="#" style={{color:'#333', fontFamily:'Pathway Gothic One', fontWeight:200}}>Inventore voluptates</a>
					</h3>
				</div>
			</div>
		</div>

		<div className="entry clearfix" style={{background:'#fff', marginBottom:25}}>
			<div className="entry-image hidden-sm" style={{width:140}}>
				<a href="#">
					<img src="https://media-service.appspot.com/site/images/JoSkY_8o?crop=120" alt="Atlas" />
				</a>
			</div>
			<div className="entry-c">
				<div className="entry-title nobottompadding clearfix">
					<span style={{fontSize:12, color:'#ddd'}}>May 17th, 2017</span>
					<h3 className="nobottommargin notopmargin">
						<a href="#" style={{color:'#333', fontFamily:'Pathway Gothic One', fontWeight:200}}>Inventore voluptates</a>
					</h3>
				</div>
			</div>
		</div>

		<div className="entry clearfix" style={{background:'#fff', marginBottom:25}}>
			<div className="entry-image hidden-sm" style={{width:140}}>
				<a href="#">
					<img src="https://media-service.appspot.com/site/images/JoSkY_8o?crop=120" alt="Atlas" />
				</a>
			</div>
			<div className="entry-c">
				<div className="entry-title nobottompadding clearfix">
					<span style={{fontSize:12, color:'#ddd'}}>May 17th, 2017</span>
					<h3 className="nobottommargin notopmargin">
						<a href="#" style={{color:'#333', fontFamily:'Pathway Gothic One', fontWeight:200}}>Inventore voluptates</a>
					</h3>
				</div>
			</div>
		</div>		
	</div>


									</div>
								</div>

							</div>
						</section>

						<Footer />
					</div>
				</div>
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		session: state.session,
		place: state.place
	}
}

const dispatchToProps = (dispatch) => {
	return {
		locationChanged: (location) => dispatch(actions.updateLocation(location)),
		searchPlaces: (location) => dispatch(actions.searchPlaces(location))
	}
}

export default connect(stateToProps, dispatchToProps)(Search)
