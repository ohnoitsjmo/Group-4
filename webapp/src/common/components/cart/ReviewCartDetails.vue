<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :footer-props="{ 'items-per-page-options': [10, 20, 30, 40, 50] }"
      
    >
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title><h4>{{ item.name }}</h4></v-card-title>
              <v-flex class="text-xs-right">
                  <v-btn absolute top right small color= "#E53935">Remove</v-btn>
                  </v-flex>
              <v-divider></v-divider>
              <v-list dense>
                <v-list-item>
                  <v-list-item-content>Price:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.price }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Shipping:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.shipping }}</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Quantity:</v-list-item-content>
                  <v-list-item-content>
                   <v-select
                    :items="vals"
                    label="Label"
                   ></v-select>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
  import {CartModel} from "@/store.js";
  export default {
      name: "ReviewCartDetails",
      data () {
        return {
          vals: ['Foo', 'Bar', 'Fizz', 'Buzz'],
          itemsPerPageOptions: [4, 8, 12],
          itemsPerPage: 12,
          items: CartModel.getCartItems()
          // items: [
          //   {
          //     name: 'Instrument 1',
          //     price: 159,
          //     shipping: 'available', 
          //   },
          // ],
        }
      }
  }
</script>