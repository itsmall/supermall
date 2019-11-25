<template>
  <swiper>
    <swiper-item v-for="project in projects">
      <a :href="project.id">
        <img :src="project.logo" alt />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper/index";

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
