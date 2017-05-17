import React, { Component } from 'react'
import Slider from 'react-slick'
import { connect } from 'react-redux'
import { Nav, Map, Footer } from '../components/presentation'
import actions from '../actions'

class Search extends Component {

	markerClicked(marker, map){
		console.log('marker clicked: '+marker.key)
		this.refs.slider.slickGoTo(2)
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

	    const sliderSettings = {
			// dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 3,
			focusOnSelect: true
	    }		

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

							    <Slider ref='slider' {...sliderSettings}>
									{ places.map((place, i) => {
											const cardStyle = {background:'#fff', border:'1px solid #ddd', padding:6, height:240}

											return (
												<div key={place.id} style={{padding:12}}>
													<div style={cardStyle}>
														<h4 style={{fontFamily:'Pathway Gothic One'}}>{place.name}</h4>
													</div>

												</div>
											)
										})
									}

							        <div></div>
							    </Slider>

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
