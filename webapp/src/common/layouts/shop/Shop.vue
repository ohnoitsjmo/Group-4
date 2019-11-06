<template>
  <div class="shop">
    <ShopDetails />
  </div>
</template>

<script>
// @ is an alias to /src
import ShopDetails from "@/common/components/shop/ShopDetails.vue";
export default {
  name: "shop",
  components: {
    ShopDetails
  }
};
</script>
