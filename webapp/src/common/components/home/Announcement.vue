<template>
    <div id="announcement-entry">
        <v-card
            color="rgb(255, 255, 255, 0.8)"
            class="mx-auto"
        >
        <v-card-text>
            <div>{{announcement.name}}</div>
            <p class="display-1 text--primary">
                {{announcement.announce}}
            </p>
             <template v-if="this.$store.state.user.userLevel == 'Admin' ">
            <v-flex class="text-xs-right">
            <v-btn @click="removeAnnouncement(announcement)" absolute top right small color= "#E53935">X</v-btn>
            </v-flex>
            </template>
        </v-card-text>
        <v-card-actions>
            <v-btn
                text
                v-on:click = "saveCategory('Hot Deals')"
            >
                SHOP NOW
            </v-btn>
        </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import {AnnouncementModel} from "@/store.js";
  export default {
    name: 'Announcement',
    props: {
      announcement: Object
    },

    methods: {	
      saveCategory(category) {	
        this.$store.state.currentCategory = category;	
        console.log("category", category)	
        this.$router.push('/shop');	
        console.log(this.category);	
      },
      removeAnnouncement(announcement) {
          AnnouncementModel.removeAnnouncement(announcement.id);
      }
    },
    created(){
      console.log(this.announcement)
    }
  };
  </script>
