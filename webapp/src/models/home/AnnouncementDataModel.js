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
  
    removeAnnouncement(id) {
      for(var i = 0; i < this.postedAnnouncements.length; i++)
      {
        if(this.postedAnnouncements[i].id == id)
        {
          this.postedAnnouncements.splice(i, 1);
          break;
        }
      }
      console.log("Announcement removed, announcements are : ", this.postedAnnouncements);
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