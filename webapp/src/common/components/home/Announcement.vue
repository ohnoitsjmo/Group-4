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
      }

    },
    created(){
      console.log(this.announcement)
    }
  };
  </script>
