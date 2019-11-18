<template>
  <div class="shop">
    <ShopDetails/>
  </div>
</template>

<script>
// @ is an alias to /src
import ShopDetails from "@/common/components/shop/ShopDetails.vue";
import {fetchShopItems} from "@/controllers/shop/ShopController.js";
export default {
  name: "shop",
  components: {
    ShopDetails
  },
  methods: {
    async fetchNewShopData() {
      await fetchShopItems();
    }
  },
  created() {
    this.fetchNewShopData();
  }
};
</script>
