<template>
  <div id="app">
    <Nav />
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "./components/NavComponent.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>


