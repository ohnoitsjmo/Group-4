/* eslint-disable prettier/prettier */
export default class AnnouncementDataModel {
    constructor() {
      this.postedAnnouncements = [];
      this.count = 0;
    }
  
    getAnnouncements() {
      return this.postedAnnouncements;
    }
  
    setAnnouncements(data) {
      this.postedAnnouncements = [];
      data.forEach(announcement => {
          this.postedAnnouncements.push({
              "id": this.count,
              "name": announcement.name,
              "announce": announcement.announce,
              "category": announcement.category.toLowerCase()
          });
          this.count++;
      });
    }
  
    appendAnnouncements(data) {
      data.forEach(announcement => {
          this.postedAnnouncements.push({
              "id": this.count,
              "name": announcement.name,
              "announce": announcement.announce,
              "category": announcement.category.toLowerCase()
          });
          this.count++;
      });
    }
  
    clearAnnouncements() {
      this.postedAnnouncements = [];
    }
  }