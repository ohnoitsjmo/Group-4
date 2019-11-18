    <template>
      <div class="cart">
        <header style='margin-top: 127px'>
          Cart Review & Checkout
        </header>
  <v-stepper v-model="e1" vertical>
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Review Cart</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Payment</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Checkout</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="scroll"
          color="white"
          height="500px"
        >
        
        <ReviewCartDetails/>
        
        </v-card>

        <v-btn
          color= #42b983
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <!-- <v-btn text>Cancel</v-btn> -->
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="white"
          height="250px"
        >
         <PaymentDetails/>
          </v-card>

        <v-btn
          color= #42b983
          @click="e1 = 3"
        >
          Continue
        </v-btn>
        <spacer></spacer>
        <v-btn 
        color= "#E53935"
        @click="e1 = 1"
        >Back
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="scroll"
          color="white"
          height="250px"
        >

        <CheckoutDetails/>
        </v-card>

        <v-btn
          color= #42b983
          
        >
          Place Order
        </v-btn>

        <v-btn 
        color= "#E53935"
        @click="e1 = 1"
        >
        Cancel
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
      </div>
    
  </template>

  <script>
    import PaymentDetails from "@/common/components/cart/PaymentDetails.vue";
    import ReviewCartDetails from "@/common/components/cart/ReviewCartDetails.vue";
    import CheckoutDetails from "@/common/components/cart/CheckoutDetails.vue";
    export default {
      name: 'CartDetails',
      components: {
      PaymentDetails,
      ReviewCartDetails,
      CheckoutDetails
      },
      data() {
        return {
          username: {
            name: '',
            email: '',
          },
          e1: 0,
        }
      },
    }
  </script>

  <style scoped>
    form {
      margin-bottom: 2rem;
    }
    header {
    padding: 10px;
    text-align: left;
    background: #eee;
    color: #42b983;
    font-size: 30px;
    }

    .scroll {
      overflow-y: auto;
    }
  </style>