<template>
  <div class="footer-nav">
     <ul class="nav-list">
        <li class="nav-item">
           <router-link to="/">首页</router-link>
        </li>
        <li class="nav-item">
           <router-link to="/">首页</router-link>
        </li>
        <li class="nav-item">
           <router-link to="/">首页</router-link>
        </li>
     </ul>
  </div>
</template>
<script lang="ts">
export default {
  components: {},
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.footer-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: skyblue;
  .nav-list{
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: space-between;
  }
}
.nav-item{
   flex: 1;
   display: flex;
   justify-content: center;
   align-items: center;
}
</style>
