<template>
  <div class="top-box">
    <div class="top-box-head">
      <!-- 导航栏左部 -->
      <div class="navigation-left">
        <div class="navigation-left-top">
          <img src="@/style/images/icon.jpg" alt="" />
          <span>WITH-U</span>
        </div>
      </div>
      <!-- 导航栏中部 -->
      <div class="navigation-center">
        <h1>高效的团队协作工具</h1>
        <p>无缝衔接产品、设计、研发流程</p>
        <p>降低沟通成本，缩短开发周期，提高工作效率</p>
      </div>
      <!-- 导航栏左部 -->
      <div class="navigation-right">
        <router-link to="/about">
          <span>价格</span>
        </router-link>
        <router-link to="">
          <span>下载</span>
        </router-link>
        <router-link to="">
          <span>为什么使用WITH-U</span>
        </router-link>
      </div>
    </div>
    <div class="special-box"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top-box {
  height: 1110px;
  position: relative;
  .top-box-head {
    height: 550px;
    background: #f8f9fd;
    display: flex;
    justify-content: center;
    .navigation-left {
      flex: 1;
      height: 700px;
      background: #f8f9fd;
      .navigation-left-top {
        margin: 10px 0 0 50px;
        display: flex;
        align-items: center;
        span {
          font-size: 14px;
          font-weight: 700;
          margin-left: 10px;
        }
      }
    }
    .navigation-center {
      flex: 1;
      text-align: center;
      h1 {
        margin-top: 100px;
      }
      p {
        color: #a7a8ae;
        font-size: 16px;
        margin-top: 10px;
      }
    }
    .navigation-right {
      flex: 1;
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
  .special-box {
    width: 56%;
    height: 65%;
    background: #fff;
    box-shadow: 0 0 20px 3px #999;
    border-radius: 5px;
    position: absolute;
    left: 22%;
    top: 26%;
  }
}
</style>