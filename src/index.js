import React from 'react'
import reactDOM from 'react-dom'
import App from './component/app'
//redux
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))

);
//redux

reactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
)