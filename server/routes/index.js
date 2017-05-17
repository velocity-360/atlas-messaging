var express = require('express')
var router = express.Router()
// var turbo = require('turbo360')({site_id: '<app_id>'})

var React = require('react')
var ReactDOMServer = require('react-dom/server')
var apps = require('../../dist/es5/apps')
var store = require('../../dist/es5/stores')

var reactApps = {
	search: apps.Search
}

var template = (process.env.ENV) ? 'index' : 'index' // TODO: check if dev vs prod

router.get('/', function(req, res, next){
	var initialData = {
		session: {
			currentLocation: { // this should come from a cookie user data
				lat: 40.728199,
				lng: -73.9894738
			}
		}
	}

	var initialState = store.configure(initialData)
	// console.log('INITIAL: '+JSON.stringify(initialState.getState()))

	var search = React.createElement(reactApps['search'])
	var provider = React.createElement(apps.ServerEntry, {component:search, store:initialState})

    res.render(template, {
    	react: ReactDOMServer.renderToString(provider),
    	initial: JSON.stringify(initialState.getState()),
    	bundle: 'search'
    })
})

module.exports = router



