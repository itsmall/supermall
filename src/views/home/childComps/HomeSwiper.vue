<template>
  <swiper>
    <swiper-item v-for="project in projects">
      <a :href="project.id">
        <img
          :alt="project.id"
          src="https://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b90e7bec54e736d141bebceb95504fc2d46269a7.jpg"
        />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    projects: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
</style>
