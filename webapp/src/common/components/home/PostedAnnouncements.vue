<template>
  <div id="announcement">
    <v-container fluid>
      <v-row
        >
        <template v-for="announcement in announcements">
          <v-col :key="announcement.id">
            <v-card 
              class="pa-2"
              outlined
              tile
            >
              <Announcement :announcement="announcement"/>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Announcement from "@/common/components/home/Announcement.vue";
export default {
  name: 'PostedAnnouncements',
  components: {
    Announcement
  },
  props: {
    announcements: Array
  }
};
</script>