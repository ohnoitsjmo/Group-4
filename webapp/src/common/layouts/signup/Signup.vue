<template>
    <section class="form-gradient">
      <mdb-row class="justify-content-center">
        <mdb-col md="5">
          <mdb-card>
            <div class="header pt-3 peach-gradient">
              <mdb-row class="d-flex justify-content-center">
                <h3 class="white-text mb-3 pt-3 font-weight-bold">Sign Up</h3>
              </mdb-row>
            </div>
            <mdb-card-body class="mx-4 mt-4">
              <mdb-input label="Your email" type="text"/>
              <mdb-input label="Your password" type="password" containerClass="mb-0"/>
              <mdb-input label="Confirm password" type="password" containerClass="mb-0"/>
              <mdb-row class="d-flex align-items-center mb-4 mt-5">
                <mdb-col md="5" class="d-flex align-items-start">
                  <div class="text-center">
                    <router-link to="/"><mdb-btn color="grey" rounded type="button" class="z-depth-1a">Sign Up</mdb-btn></router-link>
                  </div>
                </mdb-col>
                <mdb-col md="7" class="d-flex justify-content-end">
                  <p class="font-small grey-text mt-3">Already have an account? <a href="/login" class="dark-grey-text ml-1 font-weight-bold"> Log in</a></p>
                </mdb-col>
              </mdb-row>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
</template>

<script>
  import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbInput, mdbBtn } from 'mdbvue';
  export default {
    name: 'FormsPage',
    components: {
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardBody,
      mdbInput,
      mdbBtn
    }
  }
</script>

<style>
    .form-gradient {
        text-align:center
    }

  .form-gradient .font-small {
    font-size: 0.8rem;
     }

  .form-gradient .header {
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem; }

  .form-gradient input[type=text]:focus:not([readonly]) {
    border-bottom: 1px solid #fd9267;
    -webkit-box-shadow: 0 1px 0 0 #fd9267;
    box-shadow: 0 1px 0 0 #fd9267; }

  .form-gradient input[type=text]:focus:not([readonly]) + label {
    color: #4f4f4f; }

  .form-gradient input[type=password]:focus:not([readonly]) {
    border-bottom: 1px solid #fd9267;
    -webkit-box-shadow: 0 1px 0 0 #fd9267;
    box-shadow: 0 1px 0 0 #fd9267; }

  .form-gradient input[type=password]:focus:not([readonly]) + label {
    color: #4f4f4f; 
    }

</style>
