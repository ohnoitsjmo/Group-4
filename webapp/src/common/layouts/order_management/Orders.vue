<template>
    <div class="table">
        <mdb-datatable
            class="justify-content-center"
            :data="data"
            striped
            bordered
        />
    </div>
</template>

<script>
  import { mdbDatatable } from 'mdbvue';
  export default {
    name: 'DatatablePage',
    components: {
      mdbDatatable
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
          rows: [
            {
              id: '1',
              status: 'Shipping',
              item: 'Sponge',
              quantity: '2',
              price: '$112'
            },
            {
              id: '2',
              status: 'Shipping',
              item: 'Desk',
              quantity: '1',
              price: '$14'
            },
            {
              id: '3',
              status: 'Delivered',
              item: 'Arrow',
              quantity: '2',
              price: '$52'
            },
            {
              id: '4',
              status: 'Shipping',
              item: 'Pencil',
              quantity: '3',
              price: '$24'
            },
            {
              id: '5',
              status: 'Delivered',
              item: 'Keyboard',
              quantity: '1',
              price: '$32'
            },
            {
              id: '6',
              status: 'Shipped',
              item: 'Eraser',
              quantity: '2',
              price: '$12'
            },
            {
              id: '7',
              status: 'Delivered',
              item: 'Dog',
              quantity: '4',
              price: '$42'
            },
            {
              id: '8',
              status: 'Shipping',
              item: 'Laptop',
              quantity: '1',
              price: '$52'
            },
            {
              id: '9',
              status: 'Shipping',
              item: 'Hat',
              quantity: '3',
              price: '$112'
            },
            {
              id: '10',
              status: 'Delivered',
              item: 'Watch',
              quantity: '4',
              price: '$112'
            },
            {
              id: '11',
              status: 'Delivered',
              item: 'Phone',
              quantity: '10',
              price: '$1102'
            }
          ]
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