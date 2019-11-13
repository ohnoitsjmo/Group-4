<template>
  <div id="app">
    <!-- NAVIGATION -->
    <router-link to="/"/>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">SLOJAMS</a>
      <!-- <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button> -->
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <ul class="nav-item">
            <!-- <a class="nav-link js-scroll-trigger" href="ENTER PAGE LINK HERE">Home</a> -->
            <a class="nav-link js-scroll-trigger">Home</a>
          </ul>
          <ul class="nav-item">
            <!-- <a class="nav-link js-scroll-trigger" href="ENTER PAGE LINK HERE">Hot Deals</a> -->
            <a class="nav-link js-scroll-trigger">Hot Deals</a>
          </ul>
          <ul class="nav-item">
            <!-- <a class="nav-link js-scroll-trigger" href="ENTER PAGE LINK HERE">Shop</a> -->
            <a class="nav-link js-scroll-trigger">Shop</a>
          </ul>
          <ul class="nav-item">
            <!-- <a class="nav-link js-scroll-trigger" href="ENTER PAGE LINK HERE">Cart</a> -->
            <a class="nav-link js-scroll-trigger">Cart</a>
          </ul>
          <ul class="nav-item">
            <!-- <a class="nav-link js-scroll-trigger" href="ENTER PAGE LINK HERE">Log In/Sign Up</a> -->
            <a class="nav-link js-scroll-trigger">Log In/Sign Up</a>
          </ul>
        </ul>
      </div>
    </div>
    </nav>
    <router-view/>
    <!-- FOOTER -->
<footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <span class="text-muted"> (808) 555-5555</span>
        </div>
        <div class="col-md-4">
          <ul class="text-muted"> M-F 8:30AM - 6:00PM </ul>
          <ul class="text-muted"> 1234 Chorro St. San Luis Obispo, CA 93401 </ul>
        </div>
        <div class="col-md-4">
          <span class="text-muted"> Email </span>
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>

export default {
  name: 'app',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
