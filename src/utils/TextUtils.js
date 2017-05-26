export default {
	truncateText: (str, limit) => {
		if (str.length < limit)
			return str

		return str.substring(0, limit)+'...'
	},

	capitalize: (str) => {
		if (str.length == 1)
			return str.toUpperCase()

	    return str.replace(/\w\S*/g, (txt) => {
	        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
	    })
	},

	convertToHtml: (str) => {
		var find = '\n'
		var re = new RegExp(find, 'g')
        var html = str.replace(re, '<br />')

	 //    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi
		// html = html.replace(exp, "<a href='$1' target='_blank'>$1</a>")

        return html
	},

	stringToArray: (str, separator) => {
		var t = str.split(separator)
		var array = []
		for (var i=0; i<t.length; i++){
			var tag = t[i]
			if (tag.length == 0)
				continue

			array.push(tag.trim())
		}

		return array
	},

	slugVersion: (str) => {
		let parts = str.split(' ')
		let slug = ''
		for (var i=0; i<parts.length; i++){
			var word = parts[i].replace(',', '')
			word = word.replace('.', '')
			word = word.replace('?', '')
			word = word.replace('/', '-')
			slug += word
			if (i != parts.length-1)
				slug += '-'
		}

		return slug.toLowerCase()
	},

	randomString: (limit) => {
	    let text = ''
	    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

	    for (var i=0; i <limit; i++)
	        text += possible.charAt(Math.floor(Math.random() * possible.length))

	    return text
	},

	numberWithCommas: (num) => {
	    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	},

	validateEmail: (email) => {
	    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	    return re.test(email)
	},

	validate(params, withPassword){ // validates name, email, password
		if (params.name.length == 0)
			return 'Name'

		if (params.email.length == 0)
			return 'Email'

		if (withPassword == false)
			return null

		if (params.password.length == 0)
			return 'Password'

		return null // this is successful
	}	
}