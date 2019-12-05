<template>
  <div id="detail">
    <!-- //导航栏 -->
    <!-- {{id}} -->
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="navBar" />

    <scroll class="content" ref="scroll" @scroll="centerScroll" :probeType="3">
      <!-- <div>
        <ul>
          <li v-for="item in $store.state.cartList">{{item}}</li>
        </ul>
      </div> -->
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info ref="param" :paramInfo="paramInfo" />
      <detail-comment-info ref="comment" :commentInfo="commentInfo" @moreClick="moreClick" />

      <div style="text-align: center;">
        <h1>商品推荐</h1>
        <goods-list ref="recommend" :goods="recommends" />
      </div>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <detail-bottom-bar @addCart="addToCart" />
  </div>
</template>

<script>
// 公共组件o
import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";
import DetailCommentInfo from "./childComps/DetailCommentInfo";

import { getDetail, Goods, Shop, GoodsParam, getReta } from "network/detail.js";
import { itemImgListenerMixin, backTopMixin } from "common/mixin.js";

export default {
  name: "Detail",
  components: {
    Scroll,
    GoodsList,

    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailBottomBar,
    DetailCommentInfo
  },
  data() {
    return {
      id: null,
      // pro: null,
      topImages: [
        "https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/85061/24/4347/188027/5de6038fE94595dfe/a95043a6cd345eb3.jpg!q80.dpg.webp",
        "https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/50089/29/7608/53576/5d54b7cdE55bdf137/3bdf9435bb61937a.jpg!q70.dpg.webp",
        "https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/57233/8/7755/38449/5d54b7cdEdacddd01/b4ec91a7b7bcf1e0.jpg!q70.dpg.webp",
        "https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/69806/12/7306/79055/5d54b7cdE46930b9b/70ebb9d4c99f3a34.jpg!q70.dpg.webp",
        "https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/80463/2/7111/107217/5d54b7cdEb3af977a/588c24c6532b89d1.jpg!q70.dpg.webp"
      ],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],

      themeTopYs: [],
      getThemeTopY: {},
      currentIndex: 0
    };
  },
  created() {
    this.id = this.$route.params.id;

    getDetail(this.id).then(res => {
      //获取数据
      const data = res.data.data;
      //商品对象
      this.goods = new Goods(data);
      console.log(data);
      //店铺
      this.shop = new Shop(res);
      //详情
      this.detailInfo = {
        desc: data.introduce,
        detailImage: [
          {
            key: "穿着效果",
            list: [
              "https://img10.360buyimg.com/imgzone/jfs/t1/60398/29/7014/91337/5d54b7cdE3992913f/594efe59884b0080.jpg!q70.dpg.webp",
              "https://img14.360buyimg.com/imgzone/jfs/t1/82429/11/7190/157544/5d54b7ceE54dabeaa/b6d66249184497b5.jpg!q70.dpg.webp",
              "https://img14.360buyimg.com/imgzone/jfs/t1/49437/16/7574/67720/5d54b7cfEaaee5868/62b44e99bf928eed.jpg!q70.dpg.webp",
              "https://img12.360buyimg.com/imgzone/jfs/t1/50502/27/7628/100511/5d54b7d0Ec7ea9cc4/0e52da2653f36d14.jpg!q70.dpg.webp",
              "https://img13.360buyimg.com/imgzone/jfs/t1/47038/37/7643/73598/5d54b7d0E19bd92bd/66aa620b9156629f.jpg!q70.dpg.webp",
              "https://img14.360buyimg.com/imgzone/jfs/t1/67738/4/7146/71000/5d54b7cfE7431c300/e6f5b5ffd14a7d2b.jpg!q70.dpg.webp",
              "//img11.360buyimg.com/imgzone/jfs/t1/58036/40/7587/79440/5d54b7d0E6012aeed/d19e48c60995eef5.jpg!q70.dpg.webp",
              "//img11.360buyimg.com/imgzone/jfs/t1/78152/28/7121/74166/5d54b7d0E8a6c327e/8812d604f4f6f100.jpg!q70.dpg.webp",
              "//img12.360buyimg.com/imgzone/jfs/t1/84468/36/7169/63472/5d54b7cfE9218090e/4c9d38e071dcb18e.jpg!q70.dpg.webp",
              "//img11.360buyimg.com/imgzone/jfs/t1/56691/31/7722/99806/5d54b7d0E6ca9a468/5a187fb7beef378e.jpg!q70.dpg.webp"
            ]
          }
        ]
      };
      //参数
      this.paramInfo = new GoodsParam(data.id, data.id);
      /*  //评论
      if (data.rate.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      } */
      // 首条评论
      this.commentInfo = {
        user: {
          avatar:
            "https://storage.360buyimg.com/i.imageUpload/6a645f3533316231663931303631376131353532353638373335383932_sma.jpg",
          uname: "馨"
        },
        content:
          "好的品牌值得推荐和购买从顶呱呱刚开始做彩棉的时候就一直很喜欢这个品牌的内衣，首先材质是真正的棉，不管是从手感还是接触到身体的皮肤，都是很舒服透气柔软，再次做工很精致，没有线头走线整齐裁剪精细，穿着很合身，水洗不会变形掉色，希望以后多出点颜色供大家选择",
        created: data.createTime,
        style: "颜色：白色 尺码：M",
        images: [
          "https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/98339/6/3800/374041/5de2555eE0149e8a7/3943132ca30ae636.jpg!cc_100x100!q70.dpg.webp",
          "https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/45225/22/16572/75318/5ddb46d0Eee509e55/3fda075bd80a05e0.jpg!cc_100x100!q70.dpg.webp",
          "https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/106888/23/3660/206535/5de220c4E843c6b71/39328005568a5e7b.jpg!cc_100x100!q70.dpg.webp",
          "https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/94909/6/3710/234809/5de220c6E078672ea/34ae91b24a963e74.jpg!cc_100x100!q70.dpg.webp"
        ]
      };

      for (let index = 0; index < 10; index++) {
        this.recommends.push(this.commentInfo);
      }
      // console.log(this.recommends);
    });

    getReta("superior", 10).then(res => {
      // console.log(res);
      this.recommends = res.data.data.rows;
    });

    this.getThemeTopY = () => {
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 90);
      this.themeTopYs.push(Number.MAX_VALUE);
      // console.log(this.themeTopYs);
    };
  },
  mounted() {
    // console.log(this.$refs.recommend.$el.offsetTop);
  },
  methods: {
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    imageLoad() {
      this.newRefresh();
      this.getThemeTopY();
      // this.$refs.scroll.refresh();
    },
    centerScroll(position) {
      //判断是否显示top
      const positionY = -position.y;
      //回到top部
      this.listenShowBackTop(position);
      // this.isShowBackTop = positionY > 1000;

      //内容滚动显示正确的标题
      const length = this.themeTopYs.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          (positionY >= this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1])
        ) {
          this.currentIndex = i;
          this.$refs.navBar.currentIndex = this.currentIndex;
        }
        /* if (
          (this.currentIndex !== i &&
            (positionY >= this.themeTopYs[i] &&
              positionY < this.themeTopYs[i + 1] &&
              i < length)) ||
          (i === length - 1 && positionY >= this.themeTopYs[i])
        ) {
          this.currentIndex = i;
          this.$refs.navBar.currentIndex = this.currentIndex;
          //  console.log(this.currentIndex);
        } */
      }

      //判断是否吸顶
      // this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    //加入购物车
    addToCart() {
      //获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.id = this.id;
      product.count = 1;
      product.checked = true;
      console.log(product);
      // this.$store.commit("addCart", product);
      this.$store.dispatch("addCart", product);
      console.log("加入购物车成功！！");
    },
    moreClick() {
      console.log("更多评论；");
    }
  },
  mixins: [itemImgListenerMixin, backTopMixin],
  destroyed() {
    this.$bus.$off("imgLoad", this.itemImgListener);
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
