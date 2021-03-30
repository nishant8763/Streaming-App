import {
    ADD_TO_CART, ALL_COUPON_LIST, COUPON_LOADING, APPLY_COUPON, ALL_COINS, REDEEM_COINS
} from "../Config";

const INITIAL_STATE = {
    homeLoading: false, cartList: [], updateComp: false, couponList: [],
    couponLoading: false, applyedCoupon: {}, allCoins: {}, redeemCoins: {}
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case ADD_TO_CART:
            return { ...state, cartList: action.payload };
        case ALL_COUPON_LIST:
            return { ...state, couponList: action.payload };
        case COUPON_LOADING:
            return { ...state, couponLoading: action.payload };
        case APPLY_COUPON:
            return { ...state, applyedCoupon: action.payload };
        case ALL_COINS:
            return { ...state, allCoins: action.payload };
        case REDEEM_COINS:
            return { ...state, redeemCoins: action.payload };
        default:
            return state;
    }
}