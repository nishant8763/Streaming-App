import { combineReducers } from 'redux';

import HomeReducer from './HomeReducer';

import CartReducer from './CartReducer';


export default combineReducers({
    home: HomeReducer,

    cart_reducer: CartReducer,

});