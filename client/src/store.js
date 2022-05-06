// import { applyMiddleware, createStore } from 'redux'
// import rootReducer from './reducers/rootReducer';
// import thunk from 'redux-thunk';

import alert from "./reducers/alert";
import Signup from "./reducers/auth";

// const store = createStore(rootReducer,applyMiddleware(thunk));


import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
      alert,Signup
  },
})

export default store