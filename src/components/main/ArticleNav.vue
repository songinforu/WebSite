<template>
  <div class="articleNav">
    <div class="articleNav-center">
      <div class="article-top">
        <h1>面向企业提供更好的产品和服务</h1>
        <div class="recommendPage">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
              <h2>
                "对比过众多厂商后更能感受到Authing的优势，这是一款经过思考做出来的产品"
              </h2>
              <div>
                <img src="@/style/images/home-logo-education.png" alt="" />
                <span></span>
                <router-link to="">
                  <p>阅读客户成功案例→</p>
                </router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <h2>
                “每当我们需要 Authing 时，Authing
                的客户成功团队都会随时响应。有时我查看时间，发现北京时间已是午夜，但是
                Authing 团队仍在工作。我真的很感激。向 Authing 致敬。”
              </h2>
              <div>
                <img src="@/style/images/home-logo-education.png" alt="" />
                <span></span>
                <router-link to="">
                  <p>详细案例正在赶来的路上</p>
                </router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <h2>
                “在云身份认证、单点登录、无服务器计算等新兴技术领域，Authing
                很创新。”
              </h2>
              <div>
                <img src="@/style/images/home-logo-education.png" alt="" />
                <span></span>
                <router-link to="">
                  <p>详细案例正在赶来的路上</p>
                </router-link>
              </div>
            </swiper-slide>
            <swiper-slide>
              <h2>“凡所应有，无所不有。”</h2>
              <div>
                <img src="@/style/images/home-logo-education.png" alt="" />
                <span></span>
                <router-link to="">
                  <p>详细案例正在赶来的路上</p>
                </router-link>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
      </div>
      <div class="string">
        <span></span>
        <p>获得众多合格认证</p>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  // name: "Home",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style lang="scss" scoped>
.articleNav {
  display: flex;
  align-items: center;
  justify-content: center;
  .articleNav-center {
    width: 80%;
    height: 748px;
    // background: chartreuse;
    .article-top {
      h1 {
        text-align: center;
        margin: 50px 0;
      }
      .recommendPage .swiper-container {
        height: 400px;
      }
      .recommendPage .swiper-container .swiper-slide {
        border: 1px solid #eeeeee;
        color: #000;
        font-size: 16px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
          margin: 5%;
        }
        div {
          display: flex;
          img {
            width: 180px;
            height: 60px;
          }
          span{
            height: 60px;
            width: 2px;
            background: #EEEEEE;
          }
          a{
            padding-left: 26px;
            line-height: 60px;
          }
        }
      }
    }
  }
  .string {
    height: 164px;
    margin: 0 auto;
    // background: chocolate;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      width: 40%;
      height: 1px;
      background: linear-gradient(to right, #ffff, #475669, #ffff);
      margin: 20px;
      &:first-child {
        transform: rotate(180deg);
      }
    }
    p {
      color: #969eaf;
    }
  }
}
</style>