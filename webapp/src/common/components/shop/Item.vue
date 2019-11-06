<template>
  <div id="item-name" class="name">
    <v-card
      class="mx-auto"
      max-width="400"
    >
    <v-img
      contain
      class="white--text align-end"
      height="200px"
      width="200px"
      :src="imageLink"
    >
      <v-card-title>{{itemName}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Pre-owned</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>$0.99</div>

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