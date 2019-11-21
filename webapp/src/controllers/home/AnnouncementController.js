/* eslint-disable prettier/prettier */
import {AnnouncementModel} from "@/store.js";


export function fetchAnnouncements () {
    let dataFile = require('./sampleAnnouncements.json');
    console.log("data: ", dataFile.data);
    AnnouncementModel.setAnnouncements(dataFile.data);
};