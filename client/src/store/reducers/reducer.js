import { combineReducers } from 'redux'
import { cartReducer } from './cartReducer'
import { orderReducser } from './orderReducer'
import { productsReducer } from './productReducer'


export default combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: orderReducser
})