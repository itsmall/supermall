<template>
  <div id="detail">
    <!-- //导航栏 -->
    <detail-nav-bar />
    <!-- {{pro}} -->
    <detail-swiper :topImages="topImages" />
  </div>
</template>

<script>
// 公共组件
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";

import { getDetail } from "network/detail.js";

export default {
  components: {
    DetailNavBar,
    DetailSwiper
  },
  data() {
    return {
      id: null,
      pro: null,
      topImages: [
        "https://img.alicdn.com/imgextra/i4/293185320/TB2MCfKrxGYBuNjy0FnXXX5lpXa_!!293185320.jpg_640x640q80_.webp",
        "https://img.alicdn.com/imgextra/i3/293185320/TB2SxLarHArBKNjSZFLXXc_dVXa_!!293185320.jpg_640x640q80_.webp",
        "https://img.alicdn.com/imgextra/i2/293185320/O1CN013irZh31pAbZgk4MvP_!!293185320.jpg_640x640q80_.webp",
        "https://img.alicdn.com/imgextra/i4/293185320/TB2MCfKrxGYBuNjy0FnXXX5lpXa_!!293185320.jpg_640x640q80_.webp",
        "https://img.alicdn.com/imgextra/i3/293185320/TB2SxLarHArBKNjSZFLXXc_dVXa_!!293185320.jpg_640x640q80_.webp",
        "https://img.alicdn.com/imgextra/i2/293185320/O1CN013irZh31pAbZgk4MvP_!!293185320.jpg_640x640q80_.webp"
      ]
    };
  },
  created() {   
    this.id = this.$route.params.id;
    // console.log( this.$route.params.id);
    getDetail(this.id).then(res => {
      //
      //this.pro = res;
    });
    // console.log(pro);
  }
};
</script>

<style scoped>
</style>
