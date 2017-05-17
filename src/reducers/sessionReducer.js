import constants from '../constants'

var initialState = {
	currentLocation: {
		lat: 40.728199,
		lng: -73.9894738
	}
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)

	switch (action.type) {

		case constants.CURRENT_LOCATION_CHANGED:
			newState['currentLocation'] = action.data
			return newState

		default:
			return state
	}
}