/* eslint-disable prettier/prettier */
import {ShopModel} from "@/store.js";
import axios from "axios";


export async function fetchShopItems () {
    let response = await axios.get('api/product')
    for(let i = 0; i < response.data.length; i++){
        response.data[i].info = response.data[i].description
        response.data[i].remainingInventory = response.data[i].stock
        response.data[i].category = ['Woodwinds','Strings','Brass','Keys','Percussion','Accessories','Hot Deals'][i % 7]
    }
    ShopModel.setShopItems(response.data);
    return response.data;
};