<template>
    <div class="cart">
        <CartDetails/>
    </div>  
</template>

<script>
import CartDetails from "@/common/components/cart/CartDetails.vue";
import {fetchCartItems} from "@/controllers/cart/CartController.js";
export default {
    name: "cart",
    components: {
        CartDetails
    },
    beforeMount() {
        // fetchCartItems();
    }
}
</script>
