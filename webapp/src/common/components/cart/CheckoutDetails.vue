<template>
  <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Item</th>
          <th class="text-left">Quantity</th>
          <th class="text-left">Category</th>
          <th class="text-left">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.category }}</td>
          <td>${{ item.price }}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th class="text-left">Total</th>
          <th class="text-left"></th>
          <th class="text-left"></th>
          <th class="text-left">$3100</th>
        </tr>
      </thead>
    </template>
  </v-simple-table>

</template>

<script>
import {ShopModel} from '@/store.js';
  export default {
    name: 'CheckoutDetails',
    data () {
      return {
        desserts: [
          {
            name: 'Guitar',
            quantity: 1,
            category: "category",
            price: 100,
          },
          {
            name: 'Piano',
            quantity: 1,
            category: "category",
            price: 3000,
          },
        ],
        items: ShopModel.getShopItems(),
      }
    },
  }
</script>