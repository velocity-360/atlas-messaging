import constants from '../constants'

var initialState = {

}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)

	switch (action.type) {

		case constants.PLACES_RECEIVED:
			const venues = action.data.response.venues // this is unique to Foursquare API. Change when switching.
			console.log('PLACES_RECEIVED: '+JSON.stringify(venues))
			venues.forEach((venue, i) => {
				newState[venue.id] = venue
			})

			newState['all'] = venues
			return newState

		default:
			return state
	}
}