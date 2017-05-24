import superagent from 'superagent'
import Promise from 'bluebird'

module.exports = {

	getRequest: (endpoint, params) => {
		return new Promise((resolve, reject) => {
			superagent
			.get(endpoint)
			.query(params)
			.set('Accept', 'application/json')
			.end((err, res) => {
				if (err){ 
					reject(err)
					return
				}

				resolve(res.body)
			})
		})
	},

	postRequest: (endpoint, params) => {
		return new Promise((resolve, reject) => {
			superagent
			.post(endpoint)
			.send(params)
			.set('Accept', 'application/json')
			.end((err, res) => {
				if (err){ 
					reject(err)
					return
				}

				resolve(res.body)
			})
		})
	}
}