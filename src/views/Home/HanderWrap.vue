<template>
  <div class="headerWrap">
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="item in topSwiper" :key="item.id">
        <img :src="item.imgUrl" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script lang="ts">
import { topSwiper } from "@/data";
export default {
  setup() {
    return {
      topSwiper,
    };
  },
};
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  height: 200px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>
