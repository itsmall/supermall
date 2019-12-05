<template>
  <nav-bar class="nav-bar">
    <div slot="center">购物车({{cartLength}})</div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar
  },
  props: {
    cartLength: 0
  }
};
</script>

<style  scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>
