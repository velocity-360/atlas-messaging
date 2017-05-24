import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Nav, Map, Footer, PlaceCard } from '../components/presentation'
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

		const selectedPlace = this.props.place[placeId]
		// console.log('Select Place: '+JSON.stringify(selectedPlace))
		if (selectedPlace.instagram == null)
			return

		this.props.queryInstagram(selectedPlace.instagram)
		.then(response => {
			console.log('INSTAGRAM: '+JSON.stringify(response))

		})
		.catch(err => {
			alert('Error: '+err.message)
		})
	}

	componentDidMount(){
		this.searchPlaces(this.props.session.currentLocation)
	}

	searchPlaces(location){
		// this.props.searchPlaces({
		// 	lat: location.lat,
		// 	lng: location.lng,
		// 	query: this.props.session.query
		// })
		this.props
		.searchPlaces(null)
		.then(response => {
			
		})
		.catch(err => {
			alert('ERROR: '+err.message)
		})
	}

	locationChanged(location){
		// this.searchPlaces({
		// 	lat: location.lat(),
		// 	lng: location.lng()
		// })
	}

	render(){
		const places = this.props.place.all || []

		let markers = []
		places.forEach((place, i) => {
			if (place.location != null){
				markers.push({
					key: place.id,
				    position: {lat:place.location.lat, lng:place.location.lng},
					icon: 'dist/images/icons/map_icon_32.png',
					label: '',
					defaultAnimation: 2
				})
			}
		})

		return (
			<div>
				<Nav />
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

						<div className="col-md-6" style={{padding:0}}>
							<div style={{background:'red', maxHeight:650, overflowY:'scroll'}}>
								{ places.map((place, i) => {
										const selected = (this.state.selected == place.id)
										return <PlaceCard key={place.id} selectPlace={this.selectPlace.bind(this)} selected={selected} {...place} />
									})
								}
							</div>
						</div>

						<div className="col-md-6" style={{padding:0}}>
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
		searchPlaces: (location) => dispatch(actions.searchPlaces(location)),
		queryInstagram: (username) => dispatch(actions.queryInstagram(username))
	}
}

export default connect(stateToProps, dispatchToProps)(Search)
