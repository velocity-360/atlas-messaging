var place = {
	name: '',
	instagram: '',
	address: '',
	city: '',
	state: '',
	website: '',
	icon: '',
	banner: ''
}

console.log('PLACE: '+JSON.stringify(place))

var updatePlace = function(event){
	place[event.target.name] = event.target.value
}

var createPlace = function(event){
	if (event)
		event.preventDefault()

	if (place.name.length == 0){
		alert('Please specify a NAME')
		return
	}

	if (place.instagram.length == 0){
		alert('Please specify an INSTAGRAM username')
		return
	}

	if (place.address.length == 0){
		alert('Please specify the ADDRESS')
		return
	}

	console.log('Create Place: '+JSON.stringify(place))
	var turbo = Turbo({
		site_id: '591f2766fbd0120011a4d4de'		
	})

	turbo.create('place', place, function(err, data){
		if (err){
			alert('ERROR: '+err.message)
			return
		}

		console.log('Place Created: '+JSON.stringify(data))
	})

}