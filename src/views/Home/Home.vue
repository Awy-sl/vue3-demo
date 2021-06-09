<template>
  <div class="home">
    <hander-wrap></hander-wrap>
    <time-seckill></time-seckill>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HanderWrap from "./HanderWrap.vue";
import TimeSeckill from "./TimeSeckill.vue";
@Options({
  components: {
    HanderWrap,
    TimeSeckill,
  },
})
export default class Home extends Vue {}
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: auto;
}
</style>
