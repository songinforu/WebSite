<template>
  <div class="home">
    <TopNav/>
    <CentNav/>
    <MiddleNav/>
    <CentNav/>
    <MiddleNav/>
    <ArticleNav/>
    <BottomNav/>
  </div>
</template>

<script>
  import TopNav from "@/components/main/TopNav" 
  import BottomNav from "@/components/BottomNav" 
  import CentNav from "@/components/main/CentNav" 
  import MiddleNav from "@/components/main/MiddleNav" 
  import ArticleNav from "@/components/main/ArticleNav" 
  export default{
     components:{
       TopNav,
       BottomNav,
       CentNav,
       MiddleNav,
       ArticleNav
    },
  }
</script>

<style lang="scss" scoped>
</style>
