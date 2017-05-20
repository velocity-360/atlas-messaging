var turbo = Turbo({
	site_id: '591f2766fbd0120011a4d4de'
})

var place = {
	name: '',
	instagram: '',
	address: '',
	city: '',
	state: '',
	website: '',
	icon: '',
	banner: '',
	location: {
		lat: 0.0,
		lng: 0.0
	}
}

var places = []

var renderPlaces = function(){
	var listItems = ''
	places.forEach(function(place, i){
		listItems += '<li>'+place.name+'</li>'
	})

	$('#place-list').html(listItems)
}


var fetchPlaces = function(){
	turbo.fetch('place', null, function(err, data){
		if (err){
			alert('ERROR: '+err.message)
			return
		}

		if (data.results == null)
			return

		// console.log('PLACES: '+JSON.stringify(data))
		places = data.results
		renderPlaces()
	})
}

var updatePlace = function(event){
	place[event.target.name] = event.target.value.trim()
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

	if (place.address.length>0 &&  place.city.length>0 && place.state.length>0){
		// https://maps.googleapis.com/maps/api/geocode/json?address=76+east+7th+street,new+york,NY&key=AIzaSyC44mPpaMNvENXryYjHBHzjST1UMnYlARk
		var addr = place.address+','+place.city+','+place.state
		var url = 'https://maps.googleapis.com/maps/api/geocode/json'		

	    $.ajax({
	        url: url,
	        type: 'GET',
	        data: {
	        	address: addr,
	        	key: 'AIzaSyC44mPpaMNvENXryYjHBHzjST1UMnYlARk'
	        },
	        contentType: 'application/json; charset=utf-8',
	        dataType: 'json',
	        async: true,
	        success: function(data, status) {
				console.log('GEOCODE: '+JSON.stringify(data))
		    	// completion(null, data)
	        },
		    error: function(xhr, status, error) { 
	        	// console.log('FAIL: '+JSON.stringify(error))
		    	// completion(error, null)
		    }
	    })


		return
	}

	console.log('Create Place: '+JSON.stringify(place))
	turbo.create('place', place, function(err, data){
		if (err){
			alert('ERROR: '+err.message)
			return
		}

		console.log('Place Created: '+JSON.stringify(data))
		var newPlace = data.result
		places.unshift(newPlace)
		renderPlaces()
	})

}