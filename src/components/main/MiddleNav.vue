<template>
  <div class="middleNav">
    <div class="middleNav-center">
      <div class="bg-font">
        <h2>智能可共享的</h2>
        <h1>团队协调日历</h1>
        <p>
          掌握整个团队的日程安排太困难？飞书日历与及时沟通、在线文档深度整合，团队成员可以便捷规划和共享日常，
          时刻与大家保持同步，组织会议，项目排期更高效。
        </p>
        <router-link to="">
          <span>了解详情</span>
        </router-link>
      </div>
      <div class="bg-img"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.middleNav {
  height: 648px;
  display: flex;
  align-items: center;
  justify-content: center;
  .middleNav-center {
    width: 80%;
    height: 500px;
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
    .bg-font {
      width: 36%;
      //   background: chocolate;
      h2 {
        color: blue;
        margin: 150px 0 30px 0;
      }
      p {
        font-size: 18px;
        color: #92959a;
        margin: 30px 0;
      }
      span {
        width: 150px;
        display: block;
        height: 50px;
        border: 1px solid blue;
        border-radius: 30px;
        text-align: center;
        font-size: 20px;
        line-height: 50px;
        color: blue;
      }
    }
    .bg-img {
      width: 50%;
      background: url(../../style/images/bg2.jpg) no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>