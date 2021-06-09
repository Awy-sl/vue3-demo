<template>
  <router-view />
  <footer-nav />
</template>

<script>
import FooterNav from "@/components/FooterNav.vue";
export default {
  components: {
    FooterNav,
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
> #app {
  margin: 0 auto;
  min-width: 320px;
  min-height: 100vh;
}
</style>
