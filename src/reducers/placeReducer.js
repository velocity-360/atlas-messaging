import constants from '../constants'

var initialState = {

}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)

	switch (action.type) {

		case constants.PLACES_RECEIVED:
			console.log('PLACES_RECEIVED: '+JSON.stringify(action.data))
			
			// const venues = action.data.response.venues // this is unique to Foursquare API. Change when switching.
			action.data.forEach((venue, i) => {
				newState[venue.id] = venue
			})

			newState['all'] = action.data
			return newState

		default:
			return state
	}
}