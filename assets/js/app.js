// var project = '592482a7a7045b0011f5afc0' // Matt's project
var project = '591f2766fbd0120011a4d4de' // your staging project

var turbo = Turbo({
	site_id: project
})

var place = {
	name: '',
	instagram: '',
	description: '',
	address: '',
	city: '',
	state: '',
	website: '',
	icon: '',
	banner: '',
	filters: '',
	location: {
		lat: 0.0,
		lng: 0.0
	}
}

var places = []
var placeMap = {}
var selectedPlace = null

var renderPlaces = function(){
	var listItems = ''
	places.forEach(function(place, i){
		listItems += '<li><a onClick="selectPlace(event)" id="'+place.id+'" href="#">'+place.name+'</a></li>'
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

		places = data.results
		places.forEach(function(place, i){
			place['filters'] = (place.filters) ? place.filters.join(', ') : '' // might be null
			placeMap[place.id] = place
		})
		// console.log('PLACES: '+JSON.stringify(placeMap))

		renderPlaces()
	})
}

var selectPlace = function(event){
	event.preventDefault()
	selectedPlace = placeMap[event.target.id]
	console.log('selectPlace: '+JSON.stringify(selectedPlace))

	place = Object.assign({}, selectedPlace)
	$('#headline').html('Edit Place')
	$('#input-name').val(selectedPlace.name)
	$('#input-instagram').val(selectedPlace.instagram)
	$('#input-description').val(selectedPlace.description)
	$('#input-website').val(selectedPlace.website)
	$('#input-address').val(selectedPlace.address)
	$('#input-city').val(selectedPlace.city)
	$('#input-state').val(selectedPlace.state)
	$('#input-filters').val(selectedPlace.filters)
	$('#icon').attr('src', selectedPlace.icon)
	$('#submit-button').html('Update Place')
	$('#delete-button').attr('style', '') // make button visible

	// might be null
	// var filters = (selectedPlace.filters) ? selectedPlace.filters.join(', ') : ''
	// $('#input-filters').val(filters)

}

var deletePlace = function(event){
	event.preventDefault()
	if (confirm('Are You Sure?') == false)
		return

	console.log('deletePlace: '+JSON.stringify(selectedPlace))
	turbo.remove('place', selectedPlace, function(err, data){
		if (err){
			alert('ERROR: '+err.message)
			return
		}

		// alert('PLACE REMOVED')
		var updatedList = []
		places.forEach(function(place, i){
			if (place.id != selectedPlace.id)
				updatedList.push(place)
		})

		selectedPlace = null
		places = updatedList
		renderPlaces()

		place = {
			name: '',
			instagram: '',
			description: '',
			address: '',
			city: '',
			state: '',
			website: '',
			icon: '',
			banner: '',
			filters: '',
			location: {
				lat: 0.0,
				lng: 0.0
			}
		}

		$('#headline').html('Edit Place')
		$('#input-name').val('')
		$('#input-instagram').val('')
		$('#input-description').val('')
		$('#input-website').val('')
		$('#input-address').val('')
		$('#input-city').val('')
		$('#input-state').val('')
		$('#input-filters').val('')
		$('#icon').attr('src', '')
		$('#submit-button').html('Create Place')
		$('#delete-button').attr('style', 'display:none') // make button visible
	})
}

var updatePlace = function(event){
	place[event.target.name] = event.target.value.trim()
}

var checkInstagram = function(event){
	if (event.target.value.length == 0)
		return

	if (selectedPlace != null){
		if (selectedPlace.instagram == event.target.value)
			return		
	}

	var params = {
		site: project,
		exec: 'request',
		endpoint: 'https://www.instagram.com/'+event.target.value.trim()+'/?__a=1', // this returns profile info
		// endpoint: 'https://www.instagram.com/'+event.target.value.trim()+'/media/',
		query: null
	}

	// console.log('checkInstagram: '+JSON.stringify(params))
	var _place = place
    $.ajax({
        url: 'http://www.turbo360.co/functions',
        type: 'POST',
        data: JSON.stringify(params),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: true,
        success: function(response, status) {
        	var user = response.data.user
        	_place['icon'] = user.profile_pic_url_hd
			$('#icon').attr('src', _place.icon)

			if (user.biography){
	        	_place['description'] = user.biography
				$('#input-description').val(_place.description)
			}

			if (user.external_url){
	        	_place['website'] = user.external_url
				$('#input-website').val(_place.website)
			}

			return
        },
	    error: function(xhr, status, error) { 
	    	alert('Error: '+error.message)
			return
	    }
    })
}

var createPlace = function(event){
	if (event)
		event.preventDefault()

	if (selectedPlace != null){
		editSelectedPlace()
		return
	}

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

	var filtersArray = []
	place.filters.split(',').forEach(function(filter){
		if (filter.length > 0)
			filtersArray.push(filter.trim())
	})

	place['filters'] = filtersArray

	if (place.address.length>0 &&  place.city.length>0 && place.state.length>0){

		// TODO: this should be converted into a Turbo client function:
		var params = {
        	exec: 'geocode',
        	address: place.address+','+place.city+','+place.state,
        	site: project
		}

		var _place = place
	    $.ajax({
	        url: 'http://www.turbo360.co/functions',
	        type: 'POST',
	        data: JSON.stringify(params),
	        contentType: 'application/json; charset=utf-8',
	        dataType: 'json',
	        async: true,
	        success: function(response, status) {
				// GEOCODE: {"confirmation":"success","data":{"lat":40.7271347,"lng":-73.9865895}}
				_place['location'] = response.data
				turbo.create('place', _place, function(err, data){
					if (err){
						alert('ERROR: '+err.message)
						return
					}

					alert('Place Created')
					var newPlace = data.result
					places.unshift(newPlace)
					renderPlaces()
				})

				return
	        },
		    error: function(xhr, status, error) { 
		    	alert('Error: '+error.message)
				return
		    }
	    })

		return
	}

	turbo.create('place', place, function(err, data){
		if (err){
			alert('ERROR: '+err.message)
			return
		}

		alert('Place Created')
		var newPlace = data.result
		places.unshift(newPlace)
		renderPlaces()
	})
}

var editSelectedPlace = function(){
	if (selectedPlace == null)
		return

	console.log('Edit Existing Place: '+JSON.stringify(selectedPlace))
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

	var filtersArray = []
	place.filters.split(',').forEach(function(filter){
		if (filter.length > 0)
			filtersArray.push(filter.trim())
	})

	place['filters'] = filtersArray

	// TODO: check if selectedPlace address is different than original - if so, geocode
	// turbo.update(resource, entity, params, completion)
	turbo.update('place', selectedPlace, place, function(err, data){
		if (err){
			alert('ERROR: '+err.message)
			return
		}

		alert('Place Updated')
		var newPlace = data.result
		newPlace['filters'] = (newPlace.filters) ? newPlace.filters.join(', ') : ''

		placeMap[newPlace.id] = newPlace
	})
}