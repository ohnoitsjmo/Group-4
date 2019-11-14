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
          icon: 'mdi-trumpet'
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
      ],
      items: [
        {
          name: "New Clarinet",
          image: "https://siterepository.s3.amazonaws.com/5418/clarinet_pic.jpg",
          category: "Woodwinds"
        },
        {
          name: "Flute",
          image: "http://www.gemeinhardt.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/g/lg-33ssb_1.jpg",
          category: "Woodwinds"
        },
        {
          name: "Used Piano",
          image: "http://used.steinwaypianos.com/wp-content/uploads/2016/10/IMG_4438-1024x768.jpg",
          category: "Keyboards"
        },
        {
          name: "New Trumpet",
          image: "https://cdn.shoplightspeed.com/shops/612125/files/5088063/650x750x2/image.jpg",
          category: "Brass"
        },
        {
          name: "French horn",
          image: "https://www.jimlaabsmusicstore.com/wp-content/uploads/2018/02/FrenchHorn-RoseGoldBell-1.jpg",
          category: "Brass"
        },
        {
          name: "Snare drum",
          image: "https://www.moderndrummer.com/wp-content/uploads/popcorn-snare.jpg",
          category: "Percussion"
        },
        {
          name: "Violin",
          image: "https://www.cmuse.org/wp-content/uploads/2014/07/Stradivarius-violin.jpg",
          category: "Strings"
        },
        {
          name: "Like-new cello",
          image: "http://3.bp.blogspot.com/_P-Qq1L9TbEI/TDPJckU76oI/AAAAAAAABHc/HFe72o3YBCU/s1600/cello.jpg",
          category: "Strings"
        },
        {
          name: "New viola",
          image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Viola_d%27amore.jpg",
          category: "Strings"
        },
        {
          name: "Bass",
          image: "https://www.bassbags.co.uk/wp-content/uploads/2016/09/Double-Bass-Shop.jpg",
          category: "Strings"
        },
        {
          name: "Stradivarius",
          image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Stradivarius_violin_in_the_royal_palace_in_madrid.jpg",
          category: "Strings"
        },
        {
          name: "Purple velvet violin case",
          image: "https://www.swstrings.com/image/GP-394?imageSize=4&index=0",
          category: "Accessories"
        },
        {
          name: "Tambourine",
          image: "http://cdns3.gear4music.com/media/8/86132/1200/preview.jpg",
          category: "Percussion"
        },
        {
          name: "Violin for sale",
          image: "https://drunkinamidnightchoir.files.wordpress.com/2014/11/broken-violin.jpg",
          category: "Sales"
        },
        {
          name: "Guitar",
          image: "https://c1.zzounds.com/media/productmedia/fit,2018by3200/quality,85/1_Full_Straight_Front_NA-26ef23085931a0b756aa5685355e0b7c.jpg",
          category: "Strings"
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