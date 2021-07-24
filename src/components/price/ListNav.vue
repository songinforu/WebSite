<template>
  <div class="listNav">
    <div class="inner">
      <div class="pay-way">
        <div>
          <el-switch
            v-model="value1"
            active-text="按年付费"
            inactive-text="按月付费"
          >
          </el-switch>
        </div>
        <div>
          订阅1年，即免2个月费用。不同于其他厂商，Authing 只对
          <span>活跃用户</span>
          <i class="iconfont icon-iconfontquestion"></i>收费
        </div>
      </div>
      <div class="price-item-warp">
        <div
          class="price-list-item"
          v-for="(itemOne, indexOne) in navOne"
          :key="indexOne"
        >
          <div class="item-num-warp">
            <p>{{ itemOne.title }}</p>
            <div>
              <div class="list-item-num">
                <div class="list-item-num-detail">
                  <span class="list-item-num-icon">¥</span>
                  <span>{{itemOne.pay}}<span>/月</span></span>
                  <span class="list-item-num-unit"></span>
                </div>
              </div>
              <div class="list-item-bar">
                <div class="block">
                  <el-slider v-model="itemOne.value" :show-tooltip="false"></el-slider>
                </div>
              </div>
              <div class="list-item-tip">
                {{itemOne.num}}个<span>活跃用户</span>
                <i class="iconfont icon-iconfontquestion"></i>
              </div>
            </div>
          </div>
          <div class="price-button">
            <button class="authing-button">立即使用</button>
          </div>
          <div class="item-feature-warp">
            <div
              class="item-feature"
              v-for="(item, index) in itemOne.children"
              :key="index"
            >
              <div class="item-feature-title">
                <span>{{ item }}</span>
                <i class="iconfont icon-iconfontquestion"></i>
              </div>
            </div>
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
      value1: true,
      value3: 40,
      navOne: [
        {
          title: "开发者版",
          pay: "169",
          num: "1000",
          value: 0,
          children: [
            "社交账号连接",
            "长达 3 天的审计日志存储",
            "外部用户管理",
            "角色、权限管理",
            "登录框组件、域名和邮件定制",
          ],
        },
        {
          title: "高级版",
          pay: "1899",
          num: "2000",
          value: 20,
          children: [
            "2 个企业身份连接",
            "长达 10 天的审计日志存储",
            "无限的社交账号连接",
            "内部人员身份",
            "协作管理员",
            "多因素认证基础功能",
            "10 个身份工作流",
            "企业系统集成",
            "99.9% SLA",
          ],
        },
        {
          title: "企业版",
          pay: "9999",
          num: "3000",
          value: 80,
          children: [
            "产品优势",
            "手机号码闪验",
            "通用登录组件",
            "单点登录",
            "自适应多因素认证",
            "产品优势",
            "手机号码闪验",
            "通用登录组件",
            "单点登录",
            "自适应多因素认证",
            "产品优势",
            "手机号码闪验",
            "通用登录组件",
            "单点登录",
            "自适应多因素认证",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.inner {
  width: 1200px;
  margin: 0 auto;
  .pay-way {
    height: 96px;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    color: #666;
    align-items: center;
    font-size: 14px;
    span {
      margin: 0 4px;
      cursor: default;
    }
  }
  .price-item-warp {
    display: flex;
    padding: 0 50px;
    margin-bottom: 70px;
    .price-list-item {
      width: 350px;
      text-align: center;
      // box-shadow: 0 2px 40px 0;
      position: relative;
      z-index: 2;
      .item-num-warp {
        height: 272px;
        p {
          height: 50px;
          line-height: 50px;
          color: #666;
          border-bottom: 1px solid #e5e5e5;
        }
        .list-item-num {
          height: 110px;
          font-size: 36px;
          color: #999;
          padding: 36px 0 24px;
          box-sizing: border-box;
        }
        .list-item-bar {
          width: 200px;
          margin: 0 auto 16px;
        }
        .list-item-tip {
          font-size: 14px;
          color: #333;
          margin-top: 20px;
          cursor: default;
          i {
            color: #aaaaaa;
            margin-left: 6px;
          }
        }
      }
      .price-button {
        margin-bottom: 50px;
        .authing-button {
          border: 0;
          background-color: transparent;
          outline: none;
          font-size: 16px;
          width: 200px;
          height: 50px;
          background: #396aff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          cursor: pointer;
          margin: 0 auto;
          border-radius: 4px;
          transition: All 0.2s ease-in-out;
        }
        .authing-button:hover {
          background-color: #557fff;
          transform: translateY(-2px);
        }
      }
      .item-feature-warp {
        .item-feature:first-child {
          border-top: 1px solid #eee;
        }
        .item-feature {
          height: 50px;
          font-size: 14px;
          border-bottom: 1px solid #eee;
          color: #666;
          display: flex;
          justify-content: center;
          align-items: center;
          .item-feature-title {
            display: flex;
            justify-content: center;
            align-items: center;
            i {
              color: #aaaaaa;
              margin-left: 6px;
            }
          }
        }
      }
    }
    .price-list-item:nth-child(2){
        background: #f7f7f7;
    }
    .price-list-item:nth-child(3){
        background: #2c303e;
        .item-num-warp{
            p{
                border-bottom: 1px solid #212121;
                color: #fff;
            }
            div{
                .list-item-num,.list-item-bar,.list-item-tip{
                    color: #fff;
                }
            }
        }
        .item-feature-warp{
            .item-feature{
                border-bottom: 1px solid #212121;
                color: #fff;
            }
            .item-feature:first-child{
                border-top: 1px solid #212121;
            }
        }
    }
  }
}
</style>