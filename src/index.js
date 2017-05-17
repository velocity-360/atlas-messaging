import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'
import { Search } from './apps' 
// import Intro from './components/presentation/Intro'

const app = (
	<Provider store={store.configure(null)}>
		<Search />
	</Provider>
)


ReactDOM.render(app, document.getElementById('root'))