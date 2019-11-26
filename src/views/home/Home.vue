<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :projects="projects" />
    <recommend-view :moneys="projects" />
    <feature-view />
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" />
    <goods-list :goods="showGoods" />
  </div>
</template>

<script>
// 公共组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

// 子组件
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

//方法
import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      currentType: "superior",
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
  created() {
    //1.请求多个数据
    this.getHomeMultidata();

    this.getHomeGoods("superior");
    this.getHomeGoods("newest");
    this.getHomeGoods("case");
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

<style>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
