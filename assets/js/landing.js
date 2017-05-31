console.log('Landing Page')

// var project = '592482a7a7045b0011f5afc0' // Matt's project
var project = '591f2766fbd0120011a4d4de' // your staging project
var turbo = Turbo({
	site_id: project
})

var visitor = {
	email: '',
	password: ''
}

var updateVisitor = function(event){
	visitor[event.target.name] = event.target.value
}

var login = function(event){
	event.preventDefault()

	if (visitor.email.length == 0){
		alert('Please Enter Your Email')
		return
	}

	if (visitor.password.length == 0){
		alert('Please Enter Your Password')
		return
	}

	// console.log('LOGIN: '+JSON.stringify(visitor))
	turbo.login(visitor, function(err, data){
		if (err){
			// console.log('Login Fail: '+err.message)
			alert(err.message)
			return
		}

		console.log('Login Success: '+JSON.stringify(data))
		window.location.href = 'http://app.atlasmessaging.com/'
	})

}