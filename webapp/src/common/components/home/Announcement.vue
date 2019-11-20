<template>
    <div id="announcement-entry">
        <v-card
            color="rgb(255, 255, 255, 0.8)"
            class="mx-auto"
        >
        <v-card-text>
            <div>SALE OF THE DAY</div>
            <p class="display-1 text--primary">
                20% OFF all accessories
            </p>
        </v-card-text>
        <v-card-actions>
            <v-btn
                text
                v-on:click = "saveCategory('Hot Deals')"
            >
                SHOP NOW
            </v-btn>
        </v-card-actions>
        </v-card>
    </div>
</template>