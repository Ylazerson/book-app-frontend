// B''H //



// --------------------------------------------------------------------------------
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';

/*
 The following library displays an error when you try to mutate state anywhere in your app.
 Be sure you only run this in DEVELOPMENT because it does a lot of object copying, which would degrade performance in production.
 SEE: configureStore.prod.js where its excluded.
*/
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import thunk from 'redux-thunk';
// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------
// It's useful to define a function that configures the store because we'll call
// this function at our application's entry point.
//
// This way, the store's configured when the app starts up.

export default function configureStore(initialState) {

  // CreateStore takes 3 parameters:
  // 1: the rootReducer
  // 2: the initialState
  // 3: (optional) the applyMiddleware function
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );

}
// --------------------------------------------------------------------------------

