import React, { Component } from 'react'
import { Nav, Map, Footer } from '../components/presentation'
import { connect } from 'react-redux'
import actions from '../actions'

class Search extends Component {

	markerClicked(marker, map){
		console.log('marker clicked: '+marker.key)

	}

	locationChanged(location){
		// console.log('LocationChanged: '+JSON.stringify(location))
		this.props.searchPlaces({
			lat: location.lat(),
			lng: location.lng(),
			query: 'coffee'
		})
		.then(response => {
			// console.log(JSON.stringify(response))
		})
		.catch(err => {
			alert('ERROR: '+err.message)
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
						<header id="header" className="no-sticky" style={{background:'#FFF', paddingTop:70}}>
							<Map 
								center={this.props.session.currentLocation}
								zoom={14}
								locationChanged={this.locationChanged.bind(this)}
								markers={markers}
								markerClicked={this.markerClicked.bind(this)}
								containerElement={<div style={{height:100+'%'}} />} 
								mapElement={<div style={{height:100+'%'}} />} />

						</header>

						<section className="section nomargin">
							<div className="container clearfix" style={{minHeight:600}}>
								<h2 className="nobottommargin t300 ls1">
									We create & craft projects that ooze creativity
								</h2>

								<ol>
									{ places.map((place, i) => {
											return <li key={place.id}>{place.name}</li>
										})
									}
								</ol>
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
