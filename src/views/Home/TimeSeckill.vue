<template>
  <div class="time-seckill">
    <div class="seckill-wrap">
      <!-- 限时秒杀 -->
      <div class="seckill-title">
        <div class="l">
          <van-icon name="fire" size="25px" color="#E73058" />
          <h1>限时秒杀</h1>
          <van-count-down :time="time">
            <!-- timeData  = 作为time的形参 #default 是 slot 的另外一种写法  -->
            <template #default="timeData">
              <span class="block">{{
                timeData.hours < 10 ? "0" + timeData.hours : timeData.hours
              }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.minutes }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </div>
        <div class="go">点选购<van-icon name="arrow" /></div>
      </div>
      <div class="seckill-content">
        <van-swipe
          class="seckill-list"
          :loop="false"
          :width="75"
          :show-indicators="false"
        >
          <van-swipe-item
            class="seckill-item"
            v-for="item in SeckillList"
            :key="item.id"
          >
            <img :src="item.img" alt="" />
            <div class="esckill-dit">
              <p>{{ item.name }}</p>
            </div>
            <div class="pick">
              <h1>￥{{ item.pick }}</h1>
              <span>抢购</span>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import { SeckillList } from "@/data";
// 限时秒杀列表
export default {
  components: {},
  setup() {
    //  限时秒杀倒计时
    const time = ref(10 * 60 * 60 * 1000);

    return {
      time,
      SeckillList,
    };
  },
};
</script>

<style lang="less" scoped>
.time-seckill {
  position: relative;
  padding: 14px;
  height: auto;
  border-radius: 12px;
  background: white;
  z-index: 4;
  top: -10px;
}
.seckill-wrap {
  width: 93%;
  height: 100%;
  padding: 0px 10px;
  margin: 0 auto;
  border-radius: 10px;
  background: #ffcda4;
  overflow: hidden;
}
.seckill-title {
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  .l {
    display: flex;
    align-items: center;
    h1 {
      font-size: 20px;
      margin: 0px 10px;
      color: #e73058;
    }
  }
  .go {
    width: 60px;
    padding: 3px 5px;
    font-size: 14px;
    border-radius: 12px;
    background: rgba(255, 235, 205, 0.5);
  }
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #e73058;
  font-weight: 900;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  border-radius: 5px;
  background-color: #e73058;
}
.seckill-content {
  width: 96%;
  height: 120px;
  margin: 0 auto 15px auto;
}
.seckill-list {
  display: flex;
  height: 100%;
  .seckill-item {
    overflow: hidden;
    padding-bottom: 4px;
    width: 40%;
    height: 100%;
    margin-right: 10px;
    border-radius: 10px;
    background: white;
    img {
      width: 100%;
      height: 80px;
      object-fit: cover;
    }
    .esckill-dit {
      width: 100%;
      padding: 0px 5px;
      p {
        overflow: hidden;
        margin-bottom: 3px;
        font-size: 12px;
        white-space: nowrap; //溢出不换行
        text-overflow: ellipsis;
      }
    }
    .pick {
      position: relative;
      display: flex;
      padding: 0px 4px;
      margin-bottom: 4px;
      h1 {
        font-size: 13px;
        width: 55%;
        height: 100%;
        padding-right: 5px;
        text-align: left;
        color: white;
        border-radius: 4px;
        background: #e73058;
        z-index: 2;
      }
      span {
        position: absolute;
        right: 4px;
        bottom: 0;
        width: 40px;
        font-size: 9px;
        text-align: right;
        background: #c8c19f;
        z-index: 1;
      }
    }
  }
}
</style>
