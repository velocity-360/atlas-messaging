import React, { Componet } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../../stores'
import Places from '../Places'

const initialState = window.__PRELOADED_STATE__

const app = (
	<Provider store={store.configure(initialState)}>
		<Places />
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))