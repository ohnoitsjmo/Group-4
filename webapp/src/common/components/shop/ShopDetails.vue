<template>
  <div class="hello">
    <div class="menu">
        <SidebarMenu :menu="menu" 
                     collapsed="collapsed"
                     @item-click="onCategoryClick"/>
    </div>
    <div class="please">
      <ShopListings :categoryName="currentClicked"/>
    </div>
  </div>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import  ShopListings from '@/common/components/shop/ShopListings.vue';
export default {
  name: "ShopDetails",
  components: {
      SidebarMenu,
      ShopListings
  },
  props: {
    msg: String
  },
  data() {
    return {
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
          icon: 'fa fa-user'
      },
      {
          // href: '/',
          title: 'Brass',
          icon: 'fa fa-user'
      },
      {
          title: 'Keyboards',
          icon: 'fa fa-user'
      },
      {
          title: 'Percussion',
          icon: 'fa fa-user'
      },
      {
          title: 'Strings',
          icon: 'fa fa-user'
      },
      {
          title: 'Accessories',
          icon: 'fa fa-user'
      },
      {
          title: 'Sales',
          icon: 'fa fa-user'
      }
      ]
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