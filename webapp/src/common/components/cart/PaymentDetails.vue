<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    >
    <v-text-field
      v-model="name"
      :counter="40"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="number"
      :rules="numberRules"
      label="Card Number"
      required
    ></v-text-field>

    <v-text-field
      v-model="date"
      :rules="dateRules"
      label="Exp. Date(MM/YYYY)"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <!-- <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox> -->

    <v-btn
      :disabled="!valid"
      padding= 20px
      color= #42b983
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>



    <v-btn
      padding= 20px
      color= #E53935
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>
    

    <!-- <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn> -->
  </v-form>
</template>

<script>
  export default {
      name: "PaymentDetails",
    data() {
        return {
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 40) || 'Name must be less than 10 characters',
      ],
      number: '',
      numberRules: [
        v => !!v || 'Card Number is required',
        v => (v && v.length == 16) || 'Card Number must be 16 digits',
        v => /^[0-9]*$/.test(v) || 'Card Number must be valid',
      ],
      date: '',
      dateRules: [
        v => !!v || 'Date is required',
        v => (v && v.length == 7) || 'Date must match form',
        v => /^[0-1][0-9]\/20[2-3][0-9]/.test(v) || 'Date must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }
    },

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style scoped>
.v-text-field__slot {
text-align: right;
}
</style>