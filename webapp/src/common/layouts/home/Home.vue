<template>
  <div class="home">
    <img alt="Vue logo" src="../../../assets/logo.png" />
    <HomeDetails msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeDetails from "@/common/components/home/HomeDetails.vue";
export default {
  name: "home",
  components: {
    HomeDetails
  }
};
</script>
