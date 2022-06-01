import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk"
import { rootReducer } from "../reducer/rootReducer";

const middleWares=[reduxThunk];

if(process.env.NODE_ENV==='development'){
    middleWares.push(logger);
}

const store=createStore(rootReducer,applyMiddleware(...middleWares));

export default store;

// // import { configureStore } from '@reduxjs/toolkit'
// // import crudReducer from '../reducer/reducer'

// import {  createStore } from "redux";
// import { rootReducer } from "../reducer/rootReducer";

// // export const store = configureStore({
// //   reducer: {
// //     crud:crudReducer
// //   },
// // })

// const store = createStore(rootReducer);


