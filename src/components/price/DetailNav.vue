<template>
  <div class="detailNav">
    <div class="price-message">
      <div class="inner">
        <div class="top">
          <div class="title-wrapper">
            <div class="title">构建还是购买：身份管理的评估指南</div>
            <p>什么是身份管理？应该构建还是购买？下载免费的 Authing 电子书</p>
          </div>
        </div>
        <div class="button-warp">
          <button>下载电子书</button>
        </div>
      </div>
    </div>
    <div class="price-detail"></div>
    <div class="price-question"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.detailNav {
  .price-message {
    background: chartreuse;
    .inner {
      width: 1200px;
      margin: 0 auto;
      .top {
        text-align: center;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        .title-wrapper {
          padding: 40px 0;
          .title {
            text-align: center;
            color: #181818;
            font-size: 36px;
            margin-bottom: 10px;
            line-height: 50px;
          }
          p {
            color: #999;
            line-height: 20px;
            font-size: 16px;
            text-align: center;
            line-height: 26px;
            margin: 0 auto;
            max-width: 1070px;
          }
        }
      }
      .button-warp {
      }
    }
  }
}
</style>