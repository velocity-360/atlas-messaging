import constants from '../constants'

var initialState = {

}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)

	switch (action.type) {

		case constants.PLACES_RECEIVED:
			// console.log('PLACES_RECEIVED: '+JSON.stringify(action.data))
			action.data.forEach((venue, i) => {
				newState[venue.id] = venue
			})

			newState['all'] = action.data
			return newState

		default:
			return state
	}
}