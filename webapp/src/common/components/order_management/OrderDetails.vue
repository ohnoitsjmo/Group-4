<template>
    <div class="table">
        <mdb-datatable
            class="justify-content-center"
            :data="data"
            striped
            bordered
            v-bind:key="this.loading"
        />
    </div>
</template>

<script>
  import { mdbDatatable } from 'mdbvue';
  import {fetchOrders} from "@/controllers/order_management/OrdersController.js";
  export default {
    name: 'DatatablePage',
    components: {
      mdbDatatable
    },
    created() {
      this.fetchOrders();
    },
    methods: {
      async fetchOrders() {
        this.loading = true
        let orders = await fetchOrders();
        let i = 0;
        for(var order in orders){
          this.data.rows.push(
            {
              id: orders[order].id,
              status: orders[order].status,
              item: ['test object 1', 'test object 2', 't3', 't4', 't5', 't1234'][i%6],//orders[order].item.join("\n"),
              quantity: i+1 % 11,
              price: orders[order].price
            }
          )
          i++;
        }
        console.log(this.data.rows)
        this.loading = false;
      }
    },
    data() {
      return {
        data: {
          columns: [
            {
              label: 'Order ID',
              field: 'id',
              sort: 'asc'
            },
            {
              label: 'Status',
              field: 'status',
              sort: 'asc'
            },
            {
              label: 'Item',
              field: 'item',
              sort: 'asc'
            },
            {
              label: 'Quantity',
              field: 'quantity',
              sort: 'asc'
            },
            {
              label: 'Price',
              field: 'price',
              sort: 'asc'
            }
          ],
          rows: []
        }
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