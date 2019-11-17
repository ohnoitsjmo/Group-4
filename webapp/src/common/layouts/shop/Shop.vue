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
    fetchNewShopData() {
      fetchShopItems();
    }
  },
  beforeMount() {
    this.fetchNewShopData();
  },
};
</script>
