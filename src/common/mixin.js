import {
  debounce
} from "common/util.js";
import BackTop from "components/content/backTop/BackTop";


export const itemImgListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 50);
    this.itemImgListener = () => {
      this.newRefresh();
    };
    this.$bus.$on("imgLoad", this.itemImgListener);
    // console.log("混入");

  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    listenShowBackTop(position) {
      this.isShowBackTop = this.isShowBackTop = -position.y > 1000;
    }
  },
}
