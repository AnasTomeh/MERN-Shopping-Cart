import { FETCH_PRODUCTS } from "./types"
import { FILTER_SIZE, FILTER_SORT } from "./types"


export const fetchProducts = () => {
    return (dispatch) => {
        fetch('/api/products').then(res => res.json()).then(data => {
            dispatch({
                type: FETCH_PRODUCTS,
                data: data
            })
        })
    }
}

export const filteredSize = (products, value) => {
    return (dispatch) => {
        let productsClone = [...products]
        let newProducts = productsClone.filter(p => p.size.indexOf(value) !== -1)

        dispatch({
            type: FILTER_SIZE,
            data: {
                size: value,
                products: value === "ALL" ? products : newProducts
            }
        })
    }
}
export const filteredSort = (products, value) => {
    return (dispatch) => {
        let productsClone = [...products]
        let newProducts = productsClone.sort(function (a, b) {
            if (value === "Lowest") {
                return a.price - b.price
            }
            else if (value === "Highest") {
                return b.price - a.price
            } else {
                return a.id < b.id ? 1 : -1
            }
        })
        dispatch({
            type: FILTER_SORT,
            data: {
                sort: value,
                products: newProducts
            }
        })
    }



}