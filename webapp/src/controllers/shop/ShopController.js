/* eslint-disable prettier/prettier */
import {ShopModel} from "@/store.js";
import axios from "axios";


export async function fetchShopItems () {
    //console.log("here");    
    //let dataFile = require('./sampleShopData.json');
    //console.log("data: ", dataFile.data);
    //ShopModel.setShopItems(dataFile.data);
    console.log("IM GETTING CALLED")
    let response = await axios.get('api/product')
    for(let i = 0; i < response.data.length; i++){
        response.data[i].info = response.data[i].description
        response.data[i].remainingInventory = response.data[i].stock
        response.data[i].category = ['Woodwinds','Strings','Brass','Keys','Percussion','Accessories','Sales'][i % 7]
    }
    console.log(response.data)
    ShopModel.setShopItems(response.data);
};