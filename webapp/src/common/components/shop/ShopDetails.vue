<template>
  <div class="hello">
    <div class="menu">
        <SidebarMenu :menu="menu" 
                     collapsed="collapsed"
                     @item-click="onCategoryClick"/>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="15">
          <v-row align="center">
            <div class="please">
              <ShopListings :categoryName="currentClicked"
                            :items="items"/>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import  ShopListings from '@/common/components/shop/ShopListings.vue';
import {ShopModel} from '@/store.js';
export default {
  name: "ShopDetails",
  components: {
      SidebarMenu,
      ShopListings
  },
  props: {
  },

  data() {
    return {
      items: ShopModel.getShopItems(),
      currentClicked: "Woodwinds",
      menu: [
      {
          header: true,
          title: 'Select a Category',
          hiddenOnCollapse: true
      },
      {
          // href: '/',
          title: 'Woodwinds',
          icon: 'fa fa-thermometer-full'
      },
      {
          // href: '/',
          title: 'Brass',
          icon: 'fa fa-trash'
      },
      {
          title: 'Keyboards',
          icon: 'fa fa-ruler-horizontal'
      },
      {
          title: 'Percussion',
          icon: 'fa fa-drum'
      },
      {
          title: 'Strings',
          icon: 'fa fa-guitar '
      },
      {
          title: 'Accessories',
          icon: 'fa fa-shekel-sign'
      },
      {
          title: 'Sales',
          icon: 'fa fa-bookmark'
      }
      ],
      
    }
  },
  methods: {
    onCategoryClick(event, item)
    {
      console.log("Just clicked ", item.title);
      this.currentClicked = item.title;
      console.log(this.currentClicked);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1 {
    text-align: left;
    margin: 0 50px;
}

</style>