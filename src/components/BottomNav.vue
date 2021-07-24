<template>
  <div class="bottomNav">
    <div class="bottomNav-center">
      <div class="bottomNav-box">
        <span class="iconfont icon-dunpaibaoxianrenzheng"></span>
        <span>Authing</span>
      </div>
      <NavigationOne class="bottomNav-box" />
      <NavigationTwo class="bottomNav-box" />
    </div>
  </div>
</template>

<script>
import NavigationOne from "@/components/chirdren/NavigationOne";
import NavigationTwo from "@/components/chirdren/NavigationTwo";
export default {
  components: {
    NavigationOne,
    NavigationTwo,
  },
};
</script>

<style lang="scss" scoped>
.bottomNav {
  display: flex;
  align-items: center;
  justify-content: center;
  .bottomNav-center {
      width: 80%;
      height: 360px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    .bottomNav-box {
      height: 250px;
      span {
        font-size: 22px;
        color: blue;
      }
      .iconfont{
          font-size: 50px;
      }
    }
  }
}
</style>