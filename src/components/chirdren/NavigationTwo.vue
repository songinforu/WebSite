<template>
  <div class="navigationTwo">
    <p>语言-Language</p>
    <select>
      <option value="Chinese">Chinese</option>
      <option value="English">English</option>
    </select>
    <p class="special-font">京ICP备19051205号-7</p>
    <p class="special-font special-font2">北京蒸汽记忆科技有限公司</p>
    <div class="icon-box">
        <span class="iconfont icon-weixin"></span>
        <span class="iconfont icon-github"></span>
        <span class="iconfont icon-tim"></span>
        <span class="iconfont icon-zhihu"></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navigationTwo {
  display: flex;
  flex-direction: column;

  p {
    color: #aaabc8;
    margin: 20px 0 10px 0;
  }
  select{
      width: 65%;
      height: 30px;
    //   background: chartreuse;
      margin-top: 20px;
  }
  .special-font{
      font-size: 14px;
      margin-top: 30px;
  }
  .special-font2{
      margin-top: 0px;
  }
  .icon-box{
      width: 60%;
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      span{
            font-size: 18px;
            color: #aaabc8;
      }
  }
}
</style>