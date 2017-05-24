import constants from '../constants'

var initialState = {

}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)

	switch (action.type) {

		case constants.POSTS_RECEIVED:
			const place = action.params.place // place with instagram account
			const items = action.data.data.items // this is specific to Instagram api

			// console.log('POSTS_RECEIVED FOR PLACE: '+place.id)
			// console.log('POSTS_RECEIVED: '+JSON.stringify(items))

			newState[place.id] = items
			return newState

		default:
			return state
	}
}