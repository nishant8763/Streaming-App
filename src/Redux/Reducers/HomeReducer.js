import {
    HOME_ACTION, HOME_LOADING, HOME_LOCATION_LIST, HOME_STORE_LIST, ADD_TO_CART
} from "../Config";

const INITIAL_STATE = {
    homeLoading: false, homeList: { section: [], occasion: [], category: [] },
    // location_list: [],
    store_list: [], cartList: []
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case HOME_ACTION:
            return { ...state, homeList: action.payload };
        case HOME_LOADING:
            return { ...state, loginLoading: action.payload };
        // case HOME_LOCATION_LIST:
        //     return { ...state, location_list: action.payload };
        case HOME_STORE_LIST:
            return { ...state, store_list: action.payload };
        case ADD_TO_CART:
            return { ...state, cartList: action.payload };
        default:
            return state;
    }
}