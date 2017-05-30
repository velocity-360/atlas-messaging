import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Nav, Map, Footer, PlaceCard, PlaceInfo, Post, PostDetail } from '../components/presentation'
import actions from '../actions'

class Search extends Component {
	constructor(){
		super()
		this.state = {
			map: null,
			selected: null, // ID number of selected place
			showModal: false,
			selectedPost: null
		}
	}

	zoomToPlace(center, map){
		if (map == null)
			return

		const delta = .005 // this adjusts the zoom level
		map.fitBounds({
			north: center.lat+delta,
			east: center.lng+delta,
			south: center.lat-delta,
			west: center.lng-delta
		})
	}

	markerClicked(marker, map){
		window.location.href = '/#'+marker.key
		this.selectPlace(marker.key)
		this.zoomToPlace(marker.position, map)
	}

	selectPlace(placeId, event){
		if (event)
			event.preventDefault()

		window.scrollTo(0, 0)
		this.setState({
			selected: placeId
		})

		if (this.props.posts[placeId] != null)
			return

		const selectedPlace = this.props.place[placeId]

		if (selectedPlace.location != null)
			this.zoomToPlace(selectedPlace.location, this.state.map)

		if (selectedPlace.instagram == null)
			return

		// this.props.queryInstagram(selectedPlace.instagram)
		this.props.queryInstagram(selectedPlace)
		.then(response => {
			// console.log('INSTAGRAM: '+JSON.stringify(response))

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
		.then(data => {
			if (data.length == 0)
				return

			const first = data[0]
			this.selectPlace(first.id)
			return data
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

	toggleModal(event){
		if (event)
			event.preventDefault()

		this.setState({
			showModal: !this.state.showModal
		})
	}

	selectPost(post, event){
		console.log('selectPost: '+JSON.stringify(post))
		this.setState({
			selectPost: post,
			showModal: true
		})
	}

	render(){
		const places = this.props.place.all || []
		let markers = []
		places.forEach((place, i) => {
			const icon = (place.id == this.state.selected) ? 'map-icon-red-48.png' : 'map_icon_32.png'
			if (place.location != null){
				markers.push({
					key: place.id,
				    position: {lat:place.location.lat, lng:place.location.lng},
					icon: 'dist/images/icons/' + icon,
					label: '',
					defaultAnimation: 2
				})
			}
		})

		const posts = this.props.posts[this.state.selected] || []
		const selectedPlace = this.props.place[this.state.selected]
		const center = (selectedPlace) ? selectedPlace.location : this.props.session.currentLocation

		// if (selectedPlace)
		// 	console.log('SELECTED PLACE: '+JSON.stringify(selectedPlace.location))

		return (
			<div>
				<Nav />
				<header id="header" className="no-sticky" style={{background:'#fff', paddingTop:70}}>
					<Map 
						onMapReady={ map => {
							if (this.state.map != null)
								return

							console.log('OnMapReady: '+JSON.stringify(map.getCenter()))
							this.setState({
								map: map
							})
						}}
						center={center}
						zoom={14}
						locationChanged={this.locationChanged.bind(this)}
						markers={markers}
						markerClicked={this.markerClicked.bind(this)}
						containerElement={<div style={{height:100+'%'}} />} 
						mapElement={<div style={{height:100+'%'}} />} />
				</header>

				<section className="section nomargin notoppadding" style={{paddingBottom:0}}>
					<div className="row">

						<div className="col-md-4" style={{padding:0}}>
							<div style={{background:'#fff', maxHeight:650, overflowY:'scroll'}}>
								{ places.map((place, i) => {
										const selected = (this.state.selected == place.id)
										return <PlaceCard key={place.id} selectPlace={this.selectPlace.bind(this)} selected={selected} {...place} />
									})
								}
							</div>
						</div>

						<div className="col-md-8" style={{padding:0}}>
							<div style={{background:'#f9f9f9', padding:'24px 36px 24px 24px', maxHeight:650, overflowY:'scroll'}}>
								<PlaceInfo {...selectedPlace} />
								<div className="events small-thumbs">
									{ posts.map((post, i) => <Post clickHandler={this.selectPost.bind(this)} key={post.id} {...post} />) }
								</div>
							</div>
						</div>

					</div>
				</section>

				{ (selectedPlace == null) ? null : (
				        <Modal bsSize="lg" show={this.state.showModal} onHide={this.toggleModal.bind(this)}>
				            <Modal.Body style={localStyle.modal}>
				            	<PostDetail {...this.state.selectPost} />
				            </Modal.Body>
				        </Modal>
					)
				}

			</div>
		)
	}
}

const localStyle = {
	modal: {
		background: '#fff',
		padding: 0,
		borderRadius: 3,
		minHeight: 370
	}	
}

const stateToProps = (state) => {
	return {
		session: state.session,
		place: state.place,
		posts: state.post
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
