<template>
  <div class="goods-item" @click="itemClick">
    <img
      @load="imgLoad"
      src="https://ss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=1254509578,513750946&fm=74&app=80&f=JPEG&size=f121,90?sec=1880279984&t=bf98a2d5a23cdd366d6a48e7fba9c05e"
    />
    <!-- v-lazy="showImage" :key="showImage"  -->

    <div class="goods-info">
      <p>{{goodsItem.name}}</p>
      <span class="price">{{goodsItem.userId}}</span>
      <span class="collect">{{goodsItem.id}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {
      img:
        "https://ss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=1254509578,513750946&fm=74&app=80&f=JPEG&size=f121,90?sec=1880279984&t=bf98a2d5a23cdd366d6a48e7fba9c05e",
      image:
        "https://paimgcdn.baidu.com/DADFF0C3E6E323D6?src=http%3A%2F%2Fms.bdimg.com%2Fdsp-image%2F1460249173.jpg&rz=urar_2_968_600&v=0",
      show:
        "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=1603718503,2397388113&fm=85&s=309865322BF9739811974FD70300E0A6"
    };
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showImage() {
      return (
        //this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
        this.img || this.image || this.show
      );
    }
  },
  methods: {
    itemClick() {
      this.$router.push("/detail/" +this.goodsItem.id);
      // this.$router.push({
      //   path: "/detail",
      //   query: {}
      // });
    },
    imgLoad() {
      this.$bus.$emit("imgLoad");
    }
  }
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;

  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
