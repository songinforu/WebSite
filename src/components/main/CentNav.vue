<template>
  <div class="centNav">
    <div class="centNav-center">
      <div class="bg-font">
        <h2>极致降噪的</h2>
        <h1>团队沟通工具</h1>
        <p>
          经常被刷屏，错过很多重要信息？在飞书可以针对单条消息进行回复，
          即使同时讨论多个话题也不会混乱，还可以使用快捷表情，减少对他人的干扰。此外，飞书支持多语言实时翻译，跨国沟通零障碍，拥有更顺畅的团队写作。
        </p>
        <div @click="know()">
          <span>了解详情</span>
        </div>
      </div>
      <div class="bg-img"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    know() {
      this.$track.event({
        Pid: "Home",
        Pevent: '点击事件',
        Pdetail: '了解详情',
        Pmsg: '点击了一次',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.centNav {
  height: 648px;
  display: flex;
  align-items: center;
  justify-content: center;
  .centNav-center {
    width: 80%;
    height: 500px;
    //   background: chartreuse;
    display: flex;
    justify-content: space-around;
    .bg-font {
      width: 36%;
      //   background: chocolate;
      h2 {
        color: blue;
        margin: 80px 0 30px 0;
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
      background: url(../../style/images/bg1.jpg) no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>