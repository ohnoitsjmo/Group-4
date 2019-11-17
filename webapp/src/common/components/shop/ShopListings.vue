<template>
  <div id="cat_name" class="cat-name">
    <h1>{{categoryName}}</h1>
    <v-container fluid>
      <v-row
        >
        <template v-for="item in items">
          <v-col :key="item.id" v-if="item.category == categoryName.toLowerCase()" style="max-width:300px">
            <v-card v-if="item.category == categoryName.toLowerCase()"
              class="pa-2"
              outlined
              tile
            >
              <Item v-if="item.category == categoryName.toLowerCase()"
                    :item="item"/>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
          
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
    categoryName: String,
    items: Array
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