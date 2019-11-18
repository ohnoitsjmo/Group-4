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
        <tr v-for="item in instruments" :key="item.name">
          <td class="text-left">{{ item.name }}</td>
          <td class="text-left">{{ item.quantity }}</td>
          <td class="text-left">{{ item.category }}</td>
          <td class="text-left">${{ item.price }}</td>
        </tr>
      </tbody>
        <tr>
          <td class="text-left">Total</td>
          <td class="text-left"></td>
          <td class="text-left"></td>
          <!-- calculate total -->
          <td class="text-left">$3100</td>
        </tr>
    </template>
  </v-simple-table>
</template>

<script>
import {ShopModel} from '@/store.js';
  export default {
    name: 'CheckoutDetails',
    data () {
      return {
        instruments: [
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
    methods (){
      getTotal
    }
  }
</script>