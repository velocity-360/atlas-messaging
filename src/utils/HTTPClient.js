import superagent from 'superagent'
import Promise from 'bluebird'

module.exports = {

	getRequest: (endpoint, params) => {
		return new Promise((resolve, reject) => {
			// if (queue.indexOf(endpoint) != -1) // request already running, ignore
			// 	return
			// queue.push(endpoint)
			
			superagent
			.get(endpoint)
			.query(params)
			.set('Accept', 'application/json')
			.end((err, res) => {
				// let index = queue.indexOf(endpoint)
				// queue.splice(index, 1)

				if (err){ 
					reject(err)
					return
				}

				// if (res.body.confirmation != 'success'){
				// 	reject({message:res.body.message})
				// 	return
				// }

				resolve(res.body)
			})
		})
	},

}