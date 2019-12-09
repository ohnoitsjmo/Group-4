/* eslint-disable prettier/prettier */
import {ShopModel} from "@/store.js";
import axios from "axios";


export async function fetchOrders () {
    let response = await axios.get('api/order')
    console.log(response.data)
    return response.data;
};

export async function deleteOrder (id) {
    let response = await axios.delete('api/order/'+id)
    console.log(response.data)
    return response.data;
};