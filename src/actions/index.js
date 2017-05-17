import constants from '../constants'
import { HTTPClient } from '../utils'

const get = (endpoint, params, actionType) => {
	return dispatch => HTTPClient.getRequest(endpoint, params)
		.then(data => {
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


export default {

	updateLocation: (location) => {
		return {
			type: constants.CURRENT_LOCATION_CHANGED,
			data: location
		}
	},

	searchPlaces: (params) => {
		return dispatch => {
			// https://api.foursquare.com/v2/venues/search?v=20140806&ll=\(latLng)&client_id=VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD&client_secret=UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ
			const query = {
				v: '20140806',
				ll: params.lat+','+params.lng,
				query: params.query,
				client_id: 'VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD',
				client_secret: 'UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ'
			}

			return dispatch(get('https://api.foursquare.com/v2/venues/search', query, constants.PLACES_RECEIVED))
		}
	}

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
