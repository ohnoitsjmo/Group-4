/* eslint-disable prettier/prettier */
import {ShopModel} from "@/store.js";


export function fetchShopItems () {
    console.log("here");    
    let dataFile = require('./sampleShopData.json');
    console.log("data: ", dataFile.data);
    ShopModel.setShopItems(dataFile.data);
};