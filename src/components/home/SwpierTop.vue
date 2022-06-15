<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import {getBanner} from "@/request/api/home.js";
import { onMounted, reactive, toRefs } from "vue";
export default {
  name: "SwpierTop",
  setup() {
    const state = reactive({
      images: [
        "https://img1.baidu.com/it/u=262367497,2832938812&fm=253&fmt=auto&app=138&f=JPEG?w=282&h=500",
        "https://img1.baidu.com/it/u=880069203,1305941160&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=857",
      ],
    });
    onMounted(async () => {
      let res = await getBanner();
      state.images = res.data.banners;
    });
    return { ...toRefs(state) };
  },
};
</script>

<style lang="less">
#swiperTop {
  .van-swipe {
    width: 100%;
    padding: 0.2rem;
    .van-swipe__track {
      .van-swipe-item {
        img {
          width: 100%;
          height: 3rem;
        }
      }
    }
    .van-swipe__indicators {

      .van-swipe__indicator--active {
        background-color: rgb(224, 26, 26);
      }
    }
  }
}
</style>