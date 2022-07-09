import { cartTypes } from "../types/cart.types"

const { REMOVE_ITEM, ADD_ITEM, CONFIRM_CART } = cartTypes;

export const addItem = (item) => ({
    type: ADD_ITEM,
    item
})

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    id
})

export const confirmCart = () => ({
    type: CONFIRM_CART,
    payload
})