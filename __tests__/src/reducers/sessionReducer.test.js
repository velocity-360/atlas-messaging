import { sessionReducer } from '../../../src/reducers'
import constants from '../../../src/constants'

describe('reducers', () => {

	describe('session reducer', () => {
		it ('has initial query parameter food', () => {

			expect(sessionReducer(undefined, {type:'TEST', data:null}))
			.toEqual({
				query:'food',
				currentLocation: {
					lat: 40.728199,
					lng: -73.9894738
				}
			})
		})

		it ('has initial location NYC', () => {
			expect(sessionReducer(undefined, {type:'TEST', data:null}))
			.toEqual({
				query: 'food',
				currentLocation: {
					lat: 40.728199,
					lng: -73.9894738
				}
			})
		})

		it ('has new location lat and lng', () => {
			const location = {
				lat: 30.0,
				lng: -30.0
			}

			expect(sessionReducer(undefined, {type:constants.CURRENT_LOCATION_CHANGED, data:location}))
			.toEqual({
				query: 'food',
				currentLocation: {
					lat: 30.0,
					lng: -30.0
				}
			})
		})



		
	})

})