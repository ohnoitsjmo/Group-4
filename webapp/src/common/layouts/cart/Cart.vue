<template>
    <div class="cart">
        <CartDetails/>
    </div>  
</template>

<script>
import CartDetails from "@/common/components/cart/CartDetails.vue";
export default {
    name: "cart",
    components: {
        CartDetails
    }
}
</script>
