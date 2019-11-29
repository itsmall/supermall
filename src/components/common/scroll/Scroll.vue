<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      //probe 侦察 默认0 （0和1：不侦察实时位置  2：在手指滚动的过程中侦察，手指离开后不侦察  3：只要是滚动都侦察）
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad
    });
    //返回top
    // this.scroll.scrollTo(0, 0);

    //监听滚动位置
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", position => {
        // console.log("position:", position);
        this.$emit("scroll", position);
      });
    }
    //监听上拉加载
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        //传到home
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    btnClick() {
      console.log(1);
    },
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      // console.log("-------");
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
};
</script>

<style scoped>
</style>
