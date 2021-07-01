import { combineReducers } from "redux";
import {registerReducer, photoReducer} from './auth';
import {homeReducer} from './home';
import {globalReducer} from './global';

const reducer = combineReducers({registerReducer, globalReducer, photoReducer, homeReducer});

export default reducer;