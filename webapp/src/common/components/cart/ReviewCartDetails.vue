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
                   <select style = "background-color: #F5F7FA; border: 1px solid #dddddd; align-content:center;">
                     <option value="all" selected="selected">1</option>
                     <option value="all" >2</option>
                     <option value="all" >3</option>
                   </select>
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
  export default {
      name: "ReviewCartDetails",
      data: () => ({
      itemsPerPageOptions: [4, 8, 12],
      itemsPerPage: 12,
      items: [
        {
          name: 'Instrument 1',
          price: 159,
          shipping: 'available', 
        },
        {
          name: 'Instrument 2',
          price: 237,
          shipping: 'pick-up only',
        },
        {
          name: 'Instrument 3',
          price: 159,
          shipping: 'available', 
        },
        {
          name: 'Instrument 4',
          price: 159,
          shipping: 'available', 
        },
        {
          name: 'Instrument 5',
          price: 159,
          shipping: 'available', 
        },
      ],
    }),
  }
</script>

<style scoped>
.v-select__selections {
     width: 5px}
</style>