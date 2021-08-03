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
        <div @click="goLink('/about')">
          <span>价格</span>
        </div>
        <div @click="down()">
          <span>下载</span>
        </div>
        <div>
          <span>为什么使用WITH-U</span>
        </div>
      </div>
    </div>
    <div class="special-box"></div>
  </div>
</template>

<script>
var content = [];
// export default 里边导出的才是vue（this）
export default {
  data() {
    return {};
  },
  // 创建前
  beforeCreate() {
    let time = Date.now();
    content.push(time);
    // console.log(time)
  },
  // 挂载后
  mounted() {
    let time = Date.now();
    content.push(time);
    //使用原型链上的属性
    this.$track.timer({
      Pid: "Home",
      Pname: "首页",
      Ptime: content,
      Pmsg: "页面加载时间",
    });
    // console.log(this);
  },

  methods: {
    goLink(path) {
      this.$track.event({
        Pid: "Home",
        Pevent: "跳转",
        Pdetail: "跳转价格页面",
        Pmsg: "一次事件触发",
      });
      this.$router.push({
        path,
      });
    },
    down() {
      try {
        this.$track.event({
          Pid: "Home",
          Pevent: "下载",
          Pdetail: "下载with-u",
          Pmsg: "一次事件触发",
        });
        console.log(asdf);
      } catch (err) {
        this.$track.error({
          Pid: "Home",
          Ptype: "下载错误",
          Pmsg: err,
        });
      }
    },
  },
};
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
      div {
        margin-top: 20px;
        margin-right: 30px;
        color: #828387;
        font-size: 14px;
        cursor: pointer;
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