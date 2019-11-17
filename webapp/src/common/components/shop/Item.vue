<template>
  <div id="item-name" class="name">
    <v-card
      max-width="300"
    >
    <v-card-title style="font-size:30px"><span contentEditable="false" v-on:click="handleClick" @keydown.enter="handleEnter" ref="element1">{{item.name}}</span></v-card-title>
    <v-img
      contain
      class="white--text align-end"
      height="300px"
      width="300px"
      :src="item.image"
    >

    </v-img>

    <v-card-subtitle class="pb-0">
    Price: <span contentEditable="false" v-on:click="handleClick" @keydown.enter="handleEnter" ref="element2">{{item.price}}</span>
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <span contentEditable="false" v-on:click="handleClick" @keydown.enter="handleEnter" ref="element3">{{item.remainingInventory}}</span> remaining in stock
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
  },
  methods: {
    handleEnter: function(e) {
      var el1 = this.$refs.element1;
      var el2 = this.$refs.element2;
      var el3 = this.$refs.element3;
      el1.contentEditable = "false";
      el2.contentEditable = "false";
      el3.contentEditable = "false";
      e.preventDefault();
    },
    handleClick: function() {
      var userLevel = this.$store.state.user;
      if (userLevel != "admin" || userLevel != "employee") {
        alert("Not authorized to edit");
      } else {
        var el1 = this.$refs.element1;
        var el2 = this.$refs.element2;
        var el3 = this.$refs.element3;
        el1.contentEditable = "true";
        el2.contentEditable = "true";
        el3.contentEditable = "true";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
#item-name {
  text-align: center;
}
</style>