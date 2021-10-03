
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { catReducer } from '../reducer/category-reducer';
import { productReducer } from '../reducer/product-reducer';


const reducers = combineReducers({ cat: catReducer, prod: productReducer });


export const store = createStore(reducers, composeWithDevTools());