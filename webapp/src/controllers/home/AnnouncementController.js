/* eslint-disable prettier/prettier */
import {AnnouncementModel} from "@/store.js";
import axios from 'axios';


export async function fetchAnnouncements () {
    //let dataFile = require('./sampleAnnouncements.json');
    //console.log("data: ", dataFile.data);
    //AnnouncementModel.setAnnouncements(dataFile.data);
    let response = await axios.get('api/announcement')
    console.log(response.data)
    return response.data;
};