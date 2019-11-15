<template>
  <div id="item-name" class="name">
    <v-card
      max-width="300"
    >
    <v-card-title style="font-size:30px">{{item.name}}</v-card-title>
    <v-img
      contain
      class="white--text align-end"
      height="300px"
      width="300px"
      :src="item.image"
    >
      
    </v-img>

    <v-card-subtitle class="pb-0">Price: {{item.price}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{item.remainingInventory}} remaining in stock</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

     
      <v-btn
        color="orange"
        text
      >
        Info
      </v-btn>
       <v-btn
        color="orange"
        text
      >
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
#item-name {
  text-align: center;
}
</style>