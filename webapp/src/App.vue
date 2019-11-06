<template>
  <div id="app">
      <div id="logo">
        <img alt="Vue logo" src="@/assets/logo.png" />
      </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/shop">Shop</router-link>
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
