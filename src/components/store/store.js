import { createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import { reducerFunc } from "./../reducer/reducer";


// Inital State
const initialState = {
    data:{poi:null}
};


// Middleware
const middleware = [thunk.withExtraArgument({DB:null})];

export const Store = createStore(reducerFunc, initialState, applyMiddleware(...middleware));