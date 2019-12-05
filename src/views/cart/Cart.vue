<template>
  <div class="cart">
    <cart-nav-bar ref="navBar" :cartLength="length" />

    <cart-list :cartList="list" class="cart-list" />

    <cart-bottom-bar class="cart-bottom-bar" />
    <!-- {{cartLength}} -->
    <!-- {{length}} -->
  </div>
</template>

<script>
import CartNavBar from "./childComps/CartNavBar";
import cartList from "./childComps/cartList";
import CartBottomBar from "./childComps/CartBottomBar";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: { CartNavBar, cartList, CartBottomBar },
  computed: {
    //购物车的商品种类数
    /* cartLength() {
      return this.$store.getters.cartLength;
    } */

    // ...mapGetters(["cartLength", "cartList"])
    ...mapGetters({
      length: "cartLength",
      list: "cartList"
    })
  }
};
</script>

<style  scoped>
.cart {
  height: 100vh;
  position: relative;
}
.cart-list {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 89px;
  /* padding-bottom: 89px; */
}

</style>
