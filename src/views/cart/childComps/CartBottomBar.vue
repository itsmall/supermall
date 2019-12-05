<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" :is-checked="isSelectAll" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="price">合计:¥{{totalPrice}}</div>
    <div class="calculate" @click="calClick">去计算({{checkLength}})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";

export default {
  components: { CheckButton },

  computed: {
    ...mapGetters({
      length: "cartLength",
      list: "cartList"
    }),
    totalPrice() {
      return this.list
        .filter(item => {
          //选中的
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    checkLength() {
      return this.list.filter(item => {
        //选中的
        return item.checked;
      }).length;
    },
    isSelectAll() {
      if (this.list.length === 0) return false; //没有数据时

      // return !this.list.filter(item => !item.checked).length;

      return !this.list.find(item => !item.checked);
    }
  },
  methods: {
    //结算
    calClick() {
      if (!this.isSelectAll) {
        this.$toast.show("至少一个商品");
      }
    },
    //全选
    checkClick() {
      if (this.isSelectAll) {
        //原来全选中
        this.list.forEach(item => (item.checked = false));
      } else {
        //部分或全部不选中
        this.list.forEach(item => (item.checked = true));
      }

      //简化 这里不适用
      //  this.list.forEach(item => (item.checked = !this.isSelectAll));
    }
  }
};
</script>

<style  scoped>
.bottom-bar {
  height: 40px;
  background-color: #eee;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  z-index: 10;
  line-height: 40px;
  display: flex;
  font-size: 14px;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 70px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;
}
.price {
  margin-left: 25px;
  flex: 1;
}
.calculate {
  width: 80px;
  background-color: var(--color-tint);
  text-align: center;
  color: #fff;
}
</style>
