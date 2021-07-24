<template>
  <div class="roofNav">
    <router-link to="/">
      <div class="roofNav-left">
        <img src="@/style/images/icon.jpg" alt="" />
        <span>WITH-U</span>
      </div>
    </router-link>
    <div class="roofNav-right">
      <router-link to="">
        <span>为什么使用WITH-U</span>
      </router-link>
      <router-link to="">
        <span>下载</span>
      </router-link>
      <router-link to="">
        <span>价格</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.roofNav {
  display: flex;
  justify-content: space-between;
  .roofNav-left {
    margin: 10px 0 0 50px;
    display: flex;
    align-items: center;
    span {
      font-size: 14px;
      font-weight: 700;
      margin-left: 10px;
    }
  }
  .roofNav-right {
    display: flex;
    flex-direction: row-reverse;
    a {
      margin-top: 20px;
      margin-right: 30px;
      color: #828387;
      font-size: 14px;
    }
  }
}
</style>