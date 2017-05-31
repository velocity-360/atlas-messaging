import constants from '../constants'

var initialState = {
	user: null
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)

	switch (action.type) {
		case constants.USER_CREATED:
			console.log('USER_CREATED: '+JSON.stringify(action.data))
			newState['user'] = action.data
			return newState

		case constants.CURRENT_USER_RECEIVED:
			// console.log('CURRENT_USER_RECEIVED: '+JSON.stringify(action.data))
			newState['user'] = action.data
			return newState

		case constants.USER_LOGGED_IN:
			console.log('USER_LOGGED_IN: '+JSON.stringify(action.data))
			newState['user'] = action.data
			return newState

		case constants.USER_LOGGED_OUT:
			console.log('USER_LOGGED_OUT: '+JSON.stringify(action.data))
			newState['user'] = null
			return newState

		default:
			return state
	}
}