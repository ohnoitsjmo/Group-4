<template>
  <div id="item-name" class="name">
    <v-card
     
      max-width="300"
    >
    <v-img
      contain
      class="white--text align-end"
      height="300px"
      width="300px"
      :src="imageLink"
    >
      <v-card-title>{{itemName}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">$0.99</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>A bajillion left in stock</div>
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
    itemName: String,
    imageLink: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
#item-name {
  text-align: center;
}
</style>