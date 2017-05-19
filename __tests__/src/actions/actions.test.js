import actions from '../../../src/actions'
import constants from '../../../src/constants'

describe('action creators', () => {

	it ('should create an action update location', () => {
		const location = {
			lat: 0.0,
			lng: 0.0
		}

		expect(actions.updateLocation(location))
		.toEqual({
			type: constants.CURRENT_LOCATION_CHANGED,
			data: {
				lat: 0.0,
				lng: 0.0
			}
		})
	})



})