<template>
  <div class="payNav">
    <div class="top-nav">
      <div class="top-nav-box">
        <div class="top-nav-one">
          <p>
            你只需为<span>活跃用户</span><i class="iconfont icon-iconfontquestion"></i>付费
          </p>
        </div>
        <div class="top-nav-two">
          <div class="item">
            <div class="item-title">免费计划</div>
            <router-link to="">
              <span class="item-button light">免费使用</span>
            </router-link>
            <p class="item-text">多达3,000次免费的API调用,体验所有功能</p>
          </div>
          <div class="item">
            <div class="item-title">复杂的场景？</div>
            <router-link to="">
              <span class="item-button dark">咨询专家</span>
            </router-link>
            <p class="item-text">从今天起,贵司的成功就是我们的成功</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.top-nav {
  height: 648px;
  display: flex;
  justify-content: center;
  align-items: center;
  .top-nav-one {
    margin-bottom: 80px;
    p {
      text-align: center;
      font-size: 48px;
      span {
        margin-left: 6px;
        border-bottom: 2px dashed #ddd;
      }
      i {
        font-size: 16px;
        color: #aaaaaa;
        position: relative;
        top: -28px;
      }
    }
  }
  .top-nav-two {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    .item:first-child {
      border-right: 1px solid #ddd;
    }
    .item {
      width: 400px;
      text-align: center;
      padding: 0 100px;
      .item-title {
        font-size: 36px;
        color: #333;
        margin-bottom: 30px;
      }
      .item-button {
        display: block;
        width: 330px;
        height: 44px;
        border-radius: 2px;
        line-height: 44px;
        text-align: center;
        margin: 0 auto 30px;
      }
      .light {
        background: rgba(57, 106, 255, 0.1);
        color: #396aff;
      }
      .dark {
        background: #396aff;
        color: #fff;
      }
      .item-text {
        color: #666;
      }
    }
  }
}
</style>
