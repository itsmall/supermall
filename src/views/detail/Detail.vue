<template>
  <div id="detail">
    <!-- //导航栏 -->
    <!-- {{id}} -->
    <detail-nav-bar class="detail-nav-bar" />

    <scroll class="content" ref="scroll" @scroll="centerScroll" :probeType="3">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :paramInfo="paramInfo" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <detail-bottom-bar @addCart="addToCart" />
  </div>
</template>

<script>
// 公共组件o
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import { getDetail, Goods, Shop, GoodsParam } from "network/detail.js";

export default {
  name: "Detail",
  components: {
    Scroll,
    BackTop,

    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailBottomBar
  },
  data() {
    return {
      id: null,
      // pro: null,
      topImages: [
        "https://img.alicdn.com/imgextra/i4/293185320/TB2MCfKrxGYBuNjy0FnXXX5lpXa_!!293185320.jpg_640x640q80_.webp",
        "https://img.alicdn.com/imgextra/i3/293185320/TB2SxLarHArBKNjSZFLXXc_dVXa_!!293185320.jpg_640x640q80_.webp",
        "https://img.alicdn.com/imgextra/i2/293185320/O1CN013irZh31pAbZgk4MvP_!!293185320.jpg_640x640q80_.webp",
        "https://img.alicdn.com/imgextra/i4/293185320/TB2MCfKrxGYBuNjy0FnXXX5lpXa_!!293185320.jpg_640x640q80_.webp",
        "https://img.alicdn.com/imgextra/i3/293185320/TB2SxLarHArBKNjSZFLXXc_dVXa_!!293185320.jpg_640x640q80_.webp",
        "https://img.alicdn.com/imgextra/i2/293185320/O1CN013irZh31pAbZgk4MvP_!!293185320.jpg_640x640q80_.webp"
      ],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      isShowBackTop: false
      // isTabFixed: false
    };
  },
  created() {
    this.id = this.$route.params.id;

    getDetail(this.id).then(res => {
      const data = res.data.data;
      //把值涉入对象
      this.goods = new Goods(data);
      // console.log(data);
      this.shop = new Shop(res);

      this.detailInfo = {
        desc: data.introduce,
        detailImage: [
          {
            key: "穿着效果",
            list: [
              "https://img.alicdn.com/imgextra/i2/293185320/O1CN013irZh31pAbZgk4MvP_!!293185320.jpg_640x640q80_.webp",
              "https://img.alicdn.com/imgextra/i2/293185320/O1CN013irZh31pAbZgk4MvP_!!293185320.jpg_640x640q80_.webp",
              "https://img.alicdn.com/imgextra/i2/293185320/O1CN013irZh31pAbZgk4MvP_!!293185320.jpg_640x640q80_.webp",
              "https://img.alicdn.com/imgextra/i2/293185320/O1CN013irZh31pAbZgk4MvP_!!293185320.jpg_640x640q80_.webp",
              "https://img.alicdn.com/imgextra/i2/293185320/O1CN013irZh31pAbZgk4MvP_!!293185320.jpg_640x640q80_.webp",
              "https://img.alicdn.com/imgextra/i2/293185320/O1CN013irZh31pAbZgk4MvP_!!293185320.jpg_640x640q80_.webp",
              "https://img.alicdn.com/imgextra/i2/293185320/O1CN013irZh31pAbZgk4MvP_!!293185320.jpg_640x640q80_.webp",
              "https://img.alicdn.com/imgextra/i2/293185320/O1CN013irZh31pAbZgk4MvP_!!293185320.jpg_640x640q80_.webp"
            ]
          }
        ]
      };

      this.paramInfo = new GoodsParam(data.id, data.id);
      // console.log("sdkh", this.paramInfo.length);
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    centerScroll(position) {
      //判断是否显示top
      this.isShowBackTop = -position.y > 1000;

      //判断是否吸顶
      // this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    //加入购物车
    addToCart() {
      //获取购物车需要展示的信息
      // const product = {};
      // product.image = this.topImages[0];
      // product.title = this.goods.title;
      // product.desc = this.goods.desc;
      // product.price = this.goods.realPrice;
      // product.iid = this.iid;
      // product.count = 1;
      // product.checked = true;
      // console.log(product);
      // // this.$store.commit('addCart',product)
      // this.$store.dispatch("addCart", product).then(res => {
      //   console.log(this.$toast);
      //   this.$toast.show(res, 1500);
      // });
      console.log("加入购物车成功！！");
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background: #fff;
  height: 100vh;
}

/* .content {
    height: calc(100% - 44px);
} */
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 58px;
  left: 0;
  right: 0;
}
/* .detail-nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
} */
/* .goods-list {
  padding-bottom: 120px;
} */
</style>
