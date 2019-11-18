/* eslint-disable prettier/prettier */
import {CartModel} from "@/store.js";


export function fetchCartItems () {
    let dataFile = require('./sampleCartData.json');
    CartModel.setCartItems(dataFile.data);
    console.log("cart data: ", CartModel.getCartItems());
};