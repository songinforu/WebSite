<template>
  <div class="questionNav">
    <div class="authing-title-wrapper">
      <p class="title">常见问题</p>
      <p class="description">
        我们在这里解释你可能想知道的所有内容。让我们帮忙！
      </p>
    </div>
    <div class="question-list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <div class="left">
          <i class="iconfont icon-liaotian"></i>
        </div>
        <div class="right">
          <div class="question-title">{{ item.title }}</div>
          <div class="question-content">
            {{ item.contentOne }}
            <ul></ul>
            <router-link to="">{{ item.contentTwo }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "我该如何选择 Authing 的技术？",
          contentOne:
            "我该如何选择 Authing 的技术？请根据你的具体情况选择需要使用的技术。 开始之前，我们建议你阅读此文：",
          contentTwo: "为什么所有软件都应该使用单点登录来管理用户？",
        },
        {
          title: "如何选择认证方式？",
          contentOne:
            "若你不理解什么是 OAuth、OIDC、SAML、LDAP 等标准协议且应用安全性要求不高，建议使用普通认证； 若你的应用安全性要求较高，无论是否了解标准协议，请使用标准协议认证。",
          //   contentTwo: "为什么所有软件都应该使用单点登录来管理用户？",
        },
        {
          title: "Authing 是什么？",
          contentOne:
            "Authing 提供专业的身份认证和授权服务。 我们为开发者和企业提供用以保证应用程序安全所需的认证模块，这让开发人员无需成为安全专家。 你可以将任意平台的应用接入到 Authing（无论是新开发的应用还是老应用都可以），同时你还可以自定义应用程序的登录方式（如：邮箱/密码、短信/验证码、扫码登录等）。 你可以根据你使用的技术，来选择我们的 SDK 或调用相关 API 来接入你的应用。当用户发起授权请求时，Authing 会帮助你认证他们的身份和返回必要的用户信息到你的应用中。",
          //   contentTwo: "为什么所有软件都应该使用单点登录来管理用户？",
        },
        {
          title: "为什么要使用 Authing？",
          contentOne:
            "下面是我们整理的 Authing 的部分使用场景:你想开发一个很酷的程序，这时你想添加用户身份认证和授权。你希望你的用户能使用微信、Github 登录，同时你还希望能追踪到用户的注册来源，活动数据，以便你做后续的用户增长。你做了一个 API，同时你希望能使用 OAuth 2.0 协议保证 API 的安全。你做了很多应用程序，你希望这些应用程序的用户数据可以通过单点登录（Single Sign On）的方式互通。你做了一个 JavaScript 前端应用和一个移动端应用，你希望这两个客户端应用都可以安全的访问你的 API。",
          contentTwo: "阅读文档",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.questionNav {
  margin: 70px 0 40px 0;
  .authing-title-wrapper {
    padding: 40px 0;
    text-align: center;
    .title {
      color: #181818;
      font-size: 36px;
      margin-bottom: 10px;
      line-height: 50px;
    }
    .description {
      color: #999;
      line-height: 20px;
      font-size: 16px;
      text-align: center;
      line-height: 26px;
      margin: 0 auto;
      max-width: 1070px;
    }
  }
  .question-list {
    display: flex;
    width: 1100px;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      padding: 16px;
      display: flex;
      width: 535px;
      box-sizing: border-box;
      .left {
        i {
          color: #396aff;
          font-size: 30px;
          margin-right: 16px;
        }
      }
      .right {
        flex-grow: 1;
        .question-title {
          font-weight: 700;
          color: #333;
          line-height: 20px;
          height: 20px;
          margin-bottom: 10px;
        }
        .question-content {
          color: #666;
          font-size: 14px;
          line-height: 28px;
          a {
            color: #396aff;
          }
        }
      }
    }
  }
}
</style>