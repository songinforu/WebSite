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
export default {
  components: {
    RoofNav,
    BottomNav,
    PayNav,
    ListNav,
    DetailNav
  },
};
</script>

<style lang="scss" scoped>

</style>
