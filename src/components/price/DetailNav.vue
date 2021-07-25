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
          <button class="authing-button">下载电子书</button>
        </div>
        <div class="authing-title-wrapper">
          <p>功能比较</p>
          <div class="table-title">
            <span> <i class="iconfont icon-kapian"></i>开发者版 </span>
            <span> <i class="iconfont icon-taiyang_sun61"></i>高级版 </span>
            <span> <i class="iconfont icon-icon-"></i>企业版 </span>
          </div>
        </div>
      </div>
    </div>
    <div class="price-detail">
      <div class="table-content">
        <div class="authing-table" v-for="(item,index) in list" :key="index">
          <div class="tr">
            <span>{{item.title}}</span>
          </div>
          <div class="tbody" v-for="(el,elIndex) in item.children" :key="elIndex">
            <p>{{el.one}}<i></i></p>
            <p>{{el.two}}</p>
            <p>{{el.three}}</p>
            <p>{{el.four}}</p>
          </div>
        </div>
      </div>
    </div>
    <QuestionNav />
  </div>
</template>

<script>
import QuestionNav from "./QuestionNav"
export default {
    components:{
        QuestionNav,
    },
    data(){
        return{
            list:[
                {
                    title:"认证方式",
                    children:[
                        {
                            one: "外部用户身份",
                            two: "多达50000个活跃用户",
                            three: "多达50000个活跃用户",
                            four: "根据需要"
                        },
                        {
                            one: "社交账号连接",
                            two: "无限个",
                            three: "无限个",
                            four: "无限个"
                        },
                        {
                            one: "内部人员身份",
                            two: "",
                            three: "多达 50,000 名员工",
                            four: "根据需要"
                        },
                        {
                            one: "企业身份连接",
                            two: "",
                            three: "2个",
                            four: "无限"
                        },
                    ]
                },
                {
                    title:"用户管理",
                    children:[
                        {
                            one: "外部用户身份",
                            two: "多达50000个活跃用户",
                            three: "多达50000个活跃用户",
                            four: "根据需要"
                        },
                        {
                            one: "外部用户身份",
                            two: "多达50000个活跃用户",
                            three: "多达50000个活跃用户",
                            four: "根据需要"
                        },
                        {
                            one: "外部用户身份",
                            two: "多达50000个活跃用户",
                            three: "多达50000个活跃用户",
                            four: "根据需要"
                        },
                        {
                            one: "外部用户身份",
                            two: "多达50000个活跃用户",
                            three: "多达50000个活跃用户",
                            four: "根据需要"
                        },
                    ]
                },
                {
                    title:"安全",
                    children:[
                        {
                            one: "外部用户身份",
                            two: "多达50000个活跃用户",
                            three: "多达50000个活跃用户",
                            four: "根据需要"
                        },
                        {
                            one: "外部用户身份",
                            two: "多达50000个活跃用户",
                            three: "多达50000个活跃用户",
                            four: "根据需要"
                        },
                    ]
                },
                {
                    title:"企业个性化",
                    children:[
                        {
                            one: "登录框组件、域名和邮件定制",
                            two: "",
                            three: "",
                            four: ""
                        },
                        {
                            one: "可自定义的邮件模版",
                            two: "",
                            three: "",
                            four: ""
                        },
                        {
                            one: "私有云部署服务",
                            two: "",
                            three: "可加购（38,199 人民币/年）",
                            four: "已包括"
                        },
                        {
                            one: "企业系统集成",
                            two: "",
                            three: "",
                            four: ""
                        },
                        {
                            one: "定制开发工程师",
                            two: "",
                            three: "799 RMB/人时",
                            four: "高级版的 8 折"
                        },
                        {
                            one: "单点登录应用面板",
                            two: "",
                            three: "",
                            four: "根据需要"
                        },
                    ]
                },
                {
                    title:"企业支持服务",
                    children:[
                        {
                            one: "客服时间",
                            two: "工作时间",
                            three: "工作时间",
                            four: "全年 24 小时"
                        },
                        {
                            one: "响应时间",
                            two: "24 小时内可紧急响应",
                            three: "1 小时内可紧急响应",
                            four: "30 分钟内可紧急响应"
                        },
                        {
                            one: "微信客服",
                            two: "",
                            three: "",
                            four: ""
                        },
                        {
                            one: "服务级别",
                            two: "",
                            three: "99.9%",
                            four: "99.9%"
                        },
                        {
                            one: "应用对接支持、培训",
                            two: "",
                            three: "699 RMB/人时",
                            four: "高级版的 8 折"
                        },
                        {
                            one: "电话/会议客服",
                            two: "",
                            three: "",
                            four: ""
                        },
                        {
                            one: "专属客户经理",
                            two: "",
                            three: "",
                            four: ""
                        },
                    ]
                },
            ]
        }
    }
};
</script>

<style lang="scss" scoped>
.detailNav {
  .price-message {
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
      .authing-title-wrapper {
        margin-top: 70px;
        p {
          text-align: center;
          color: #181818;
          font-size: 36px;
          margin-bottom: 10px;
          line-height: 50px;
          margin: 40px 0;
        }
        .table-title {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 30px;
          color: #666;
          span {
            display: inline-block;
            width: 270px;
            text-align: center;
            i {
              color: #999;
              margin-right: 6px;
            }
          }
        }
      }
    }
  }
  .price-detail {
    .table-content {
      box-shadow: 0 0 40px 0 #f2f2f2;
      width: 1100px;
      margin: 0 auto;
      .authing-table {
        margin: 0 auto;
        border-collapse: separate;
        border-spacing: 0;
        width: 1100px;
        .tr {
          height: 58px;
          line-height: 58px;
          background: #2c303e;
          color: #fff;
          padding: 0 30px;
          text-align: left;
          span {
          }
        }
        .tbody {
          height: 48px;
          line-height: 48px;
          color: #666;
          font-size: 14px;
          display: flex;
          justify-content: flex-end;
          p {
            width: 250px;
            text-align: center;
          }
          p:first-child {
            width: 300px;
            text-align: left;
          }
        }
        .tbody:nth-child(2) ,.tbody:nth-child(4) ,.tbody:nth-child(6) ,.tbody:nth-child(8){
            background: #f7f7f7;
        }
      }
    }
  }
}
</style>