import constants from '../constants'
import { HTTPClient, TurboClient } from '../utils'
import pkg from '../../package.json'

const get = (endpoint, params, actionType) => {
	return dispatch => HTTPClient.getRequest(endpoint, params)
		.then(data => {
			// console.log('GET: '+JSON.stringify(data))
			if (actionType != null){
				dispatch({
					type: actionType,
					params: params, // can be null
					data: data
				})
			}
			
			return data
		})
		.catch(err => {
			throw err
		})
}

const post = (endpoint, params, actionType) => {
	return dispatch => HTTPClient.postRequest(endpoint, params)
		.then(data => {
			// console.log('POST: '+JSON.stringify(data))
			if (actionType != null){
				// console.log('DISPATCH ACTION: '+JSON.stringify(params))
				dispatch({
					type: actionType,
					params: params, // can be null
					data: data
				})
			}
			
			return data
		})
		.catch(err => {
			throw err
		})
}


export default {

	updateLocation: (location) => {
		return {
			type: constants.CURRENT_LOCATION_CHANGED,
			data: location
		}
	},

	searchPlaces: (params) => {
		return dispatch => {
	 		return dispatch(TurboClient.getRequest('place', params, constants.PLACES_RECEIVED))
		}
	},

	queryInstagram: (place) => {
		return dispatch => {
			const params = {
				place: place,
				site: pkg.app,
				exec: 'request',
				endpoint: 'https://www.instagram.com/'+place.instagram+'/media/',
				query: null
			}

			return dispatch(post('http://www.turbo360.co/functions', params, constants.POSTS_RECEIVED))
		}
	},

	createUser: (params) => {
		return dispatch => {
			// return dispatch(TurboClient.postRequest('user', params, constants.USER_CREATED))
			return dispatch(TurboClient.createUser(params, constants.USER_CREATED))
		}
	},

	currentUser: () => {
		return dispatch => {
			return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED))
		}
	},

	logout: () => {
		return dispatch => {
			return dispatch(TurboClient.logout(constants.USER_LOGGED_OUT))
		}
	}

	// searchPlaces: (params) => {
	// 	return dispatch => {
	// 		// https://api.foursquare.com/v2/venues/search?v=20140806&ll=\(latLng)&client_id=VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD&client_secret=UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ
	// 		const query = {
	// 			v: '20140806',
	// 			ll: params.lat+','+params.lng,
	// 			query: params.query,
	// 			client_id: 'VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD',
	// 			client_secret: 'UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ'
	// 		}

	// 		return dispatch(get('https://api.foursquare.com/v2/venues/search', query, constants.PLACES_RECEIVED))
	// 	}
	// }

	// fetchUsers: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.getRequest('user', params, constants.USERS_RECEIVED))
	// 	}
	// },

	// addUser: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.postRequest('user', params, constants.USER_CREATED))
	// 	}
	// },

	// loginUser: (credentials) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED))
	// 	}
	// },

	// currentUser: () => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED))
	// 	}
	// }
	
}
