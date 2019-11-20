<template>
  <div class="shop">
    <ShopDetails v-bind:key="this.loading"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ShopDetails from "@/common/components/shop/ShopDetails.vue";
import {fetchShopItems} from "@/controllers/shop/ShopController.js";
export default {
  name: "shop",
  data() {
    return {
      loading: true
    }
  },
  components: {
    ShopDetails
  },
  methods: {
    async fetchNewShopData() {
      this.loading = true
      await fetchShopItems();
      this.loading = false;
    }
  },
  created() {
    this.fetchNewShopData();
  }
};
</script>
