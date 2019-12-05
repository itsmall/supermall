<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :item-info="item" />
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import cartListItem from "./cartListItem";
export default {
  components: { cartListItem, Scroll },
  props: {
    cartList: {}
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 93px);
}
.content {
  height: 100%;
  overflow: hidden;
  
}
</style>
