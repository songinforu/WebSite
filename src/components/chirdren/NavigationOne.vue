<template>
  <div class="all">
    <div class="navigationOne" v-for="(item, index) in navOne" :key="index">
      <p>{{ item.title }}</p>
      <router-link to="" v-for="(el, elIndex) in item.children" :key="elIndex">
        <span>{{ el }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navOne: [
        {
          title: "产品介绍",
          children: [
            "产品优势",
            "手机号码闪验",
            "通用登录组件",
            "单点登录",
            "自适应多因素认证",
          ],
        },
        {
          title: "解决方案",
          children: [
            "微信登录解决方案",
            "构建企业专属的身份云",
            "全面替代IAM",
            "全面替代Okta",
            "全面替代Cognito",
          ],
        },
        {
          title: "技术支持",
          children: [
            "开发者文档",
            "开发者论坛",
            "Github",
            "技术博客",
            "Authing Timeline",
          ],
        },
        {
          title: "公司信息",
          children: [
            "加入我们",
            "400-6197-031",
            "sales@authing.cn",
            "北京市海淀区中关村东路",
            "盛夏大厦6层",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.all {
  width: 60%;
  display: flex;
  justify-content: space-between;
  .navigationOne {
    display: flex;
    flex-direction: column;
    p {
      color: #828387;
      margin: 20px 0 10px 0;
    }
    a {
      font-size: 14px;
      margin-top: 20px;
      color: #4b5a78;
    }
  }
}
</style>