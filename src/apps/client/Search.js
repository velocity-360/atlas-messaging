import React, { Componet } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../../stores'
import Search from '../Search'

const initialState = window.__PRELOADED_STATE__

const app = (
	<Provider store={store.configure(initialState)}>
		<Search />
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))