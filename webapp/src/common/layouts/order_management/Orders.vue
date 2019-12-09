<template>
    <div class="orders">
        <OrderDetails v-bind:key="this.loading"/>
        <div class="text-center">
          <mdb-btn color="grey" rounded type="button" class="z-depth-1a" v-on:click="deleteOrder()">Delete Order&nbsp;</mdb-btn>
           <input type="text"
           id="myText"
           style="border:1px solid grey;"
           value=""> 
        </div>
    </div>
</template>

<script>
  import OrderDetails from "@/common/components/order_management/OrderDetails.vue";
  import {deleteOrder} from "@/controllers/order_management/OrdersController.js";
  export default {
    name: 'DatatablePage',
    components: {
      OrderDetails
    },
    created() {
      this.deleteOrder();
    },
    methods: {
      async deleteOrder() {
        this.loading = true
        var id = document.getElementById("myText").value; 
        document.getElementById("myText").value = "";
        let orders = await deleteOrder(id);
        this.loading = false;
        this.$router.go(0);
      }
    },
    data() {
      return {
        loading: true
      }
    }
  }
</script>

<style>
    .table {
        margin: 0 auto;
        width : 1000px;
    }
</style>