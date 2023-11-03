import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducer from '@/models/index';
import reduxThunk from 'redux-thunk';
import { AnyAction } from 'redux';

export default applyMiddleware(reduxThunk)(createStore)(combineReducers({ main: reducer }));
