<template>
  <div class="about">
    <RoofNav />
    <PayNav/>
    <ListNav />
    <DetailNav />
    <BottomNav />
  </div>
</template>

<script>
import RoofNav from "@/components/RoofNav";
import BottomNav from "@/components/BottomNav";
import PayNav from "@/components/price/PayNav";
import ListNav from "@/components/price/ListNav";
import DetailNav from "@/components/price/DetailNav";

const initial = [];
export default {
  components: {
    RoofNav,
    BottomNav,
    PayNav,
    ListNav,
    DetailNav
  },
  // 创建前状态
  beforeCreate(){
    const time = Date.now();
    initial.push(time);
  },
  // 挂载结束状态
  mounted(){
    const time = Date.now();
    initial.push(time);
    this.$track.timer({
      Pid: "Price",
      Pname: "价格页",
      Ptime: initial,
      Pmsg: "页面加载时间",
    })
  }
};
</script>

<style lang="scss" scoped>

</style>
