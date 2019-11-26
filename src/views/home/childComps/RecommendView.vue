<template>
  <div class="recommend">
    <div v-for="itme in moneys">
      <a :href="itme.id">
        <img
          src="https://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b90e7bec54e736d141bebceb95504fc2d46269a7.jpg"
        />
      </a>
      <div>{{itme.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    moneys: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.recommend {
  display: flex;
  text-align: center;
  width: 100%;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommend-itme {
  flex: 1;
}
.recommend img {
  height: 70px;
  width: 70px;
  border-radius: 25px;
  margin-bottom: 10px;
}
</style>
