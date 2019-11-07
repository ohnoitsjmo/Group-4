<template>
  <div id="app">
      <div id="logo">
        <img alt="Vue logo" src="@/assets/logo.png" />
      </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/shop">Shop</router-link> |
	    <router-link to="/profile">Profile</router-link> |
      <router-link to="/cart">Cart</router-link>
       <!-- <v-card-action>
         <v-flex text-xs-right>
         <v-btn color= #42b983 absolute :style="{bottom: '65%', right: '0%', transform:'translateX(-10%)'}">
           Cart
         </v-btn>
         </v-flex> 
       </v-card-action> -->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#logo {
  text-align: left;
  margin: 0 50px;
}
</style>

<style>
.dropbtn {
  background-color: rgb(228, 232, 235);
  color: #42b983;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  position:absolute;
  top: -40px;
  right: -270px;
}

.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {background-color: #ddd;}
.show {display:block;}
</style>
