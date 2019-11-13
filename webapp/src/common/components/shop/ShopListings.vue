<template>
  <div id="cat_name" class="cat-name">
    <h1>{{categoryName}}</h1>
    <li v-for="item in items">
      <Item :itemName="item.name"
            :imageLink="item.image"/>
    </li>
  </div>
</template>

<script>
import Item from "@/common/components/shop/Item.vue";
export default {
  name: 'ShopListings',
  components: {
    Item
  },
  props: {
    categoryName: String
  },
  data() {
    return {
        items: [
        {
          name: "Not a French Horn",
          image: "https://siterepository.s3.amazonaws.com/5418/clarinet_pic.jpg",
          category: "Woodwinds"
        },
        {
          name: "Floot",
          image: "http://www.gemeinhardt.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/g/lg-33ssb_1.jpg",
          category: "Woodwinds"
        }
      ],
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
#cat_name {
  text-align: left;
  margin: 0 50px;
}
#grid {
  color: black;
}
.primary {
  background-color: black;
}
</style>