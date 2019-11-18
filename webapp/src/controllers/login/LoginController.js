/* eslint-disable prettier/prettier */
import {LoginModel} from "@/store.js";


export function fetchUserInfo () {
    console.log("here");    
    let dataFile = require('./sampleUserInfo.json');
    console.log("data: ", dataFile.data);
    LoginModel.setUserInfo(dataFile.data);
};