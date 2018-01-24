import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/MainPanel'
import { Router, Route, hashHistory } from 'react-router'

// import configureStore from './configureStore'
import {fetchCustomList} from './actions'
const store = configureStore()

const Root = () => (
    <Provider store={store}>
        <Router history={hashHistory}>
            <indexRoute  component={App} />
            <Route path="/" component={App} />
        </Router>
    </Provider>
)
render(
    (<Root />),
    document.getElementById('app')
)


