<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      v-show="isTabFixed"
      ref="tabControl1"
    />
    <scroll
      class="content"
      ref="scroll"
      :probeType="2"
      :pullUpLoad="true"
      @scroll="centerScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :projects="projects" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :moneys="projects" />
      <feature-view />
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2" />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
// 公共组件
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

// 子组件
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

//方法
import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/util.js";

export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      currentType: "superior",
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      projects: [],
      moneys: [],
      goods: {
        superior: {
          page: 0,
          list: []
        },
        newest: {
          page: 0,
          list: []
        },
        case: {
          page: 0,
          list: []
        }
      }
    };
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);

    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    //2.请求商品
    this.getHomeGoods("superior");
    this.getHomeGoods("newest");
    this.getHomeGoods("case");
  },
  mounted() {
    //监听goodslistitem中图片 加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("imgLoad", () => {
      refresh();
    });
  },
  methods: {
    /**事件监听 */
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "superior";
          break;
        case 1:
          this.currentType = "newest";
          break;
        case 2:
          this.currentType = "case";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    centerScroll(position) {
      //判断是否显示top
      this.isShowBackTop = -position.y > 1000;

      //判断是否吸顶
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      // console.log("shj");
      //发送网络请求，请求更多数据
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {
      //赋值 获取tabControl的OffsetTop值
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    /**网络请求 */
    getHomeMultidata() {
      getHomeMultidata()
        .then(res => {
          this.projects = res.data.data.rows;
          this.moneys = res.data.data.rows;
          //console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page;
      getHomeGoods(type, 10)
        .then(res => {
          // console.log("goods", res.data.data.rows);
          this.goods[type].list.push(...res.data.data.rows);
          this.goods[type].page += 1;

          //上拉加载更多
          this.$refs.scroll.finishPullUp();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  }
};
</script>

<style scoped>
/* #home {
  height: 100vh;
} */
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /* 在使用浏览器原生 */
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
/* :class="{fixed:isTabFixed}"
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
} */

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.tab-control {
  position: relative;
  z-index: 9;
}

/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>
