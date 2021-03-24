<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar,
  },
  data() {
    return {};
  },
};
</script>



<style>
@font-face {
  font-family: "droid-sans";
  src: local("droid-sans"),
    url(./assets/fonts/droid-sans.ttf) format("truetype");
}

body {
  height: 100vh;
  background: #f3f2ef !important;
}
#app {
  font-family: droid-sans, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.modal-content {
  direction: rtl !important;
  font-family: droid-sans !important;
}
button.close {
  margin: 0px !important;
  padding: 0 !important;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
li {
    list-style: none;
}
input#input-2 {
    width: 100% !important;
    border-radius: 27px;
    height: 44px;
}
a {
    color: #000 !important;
}
</style>
