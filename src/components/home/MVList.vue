<template>
  <div class="MVList">
    <div class="MVTop">
      <div class="title">推荐MV</div>
      <div class="more">查看更多</div>
    </div>
    <div class="MVContent">
      <div class="MVs" v-for="item in state.MVList" :key="item">
       <router-link :to="{path:'/MVDetail',query:{id:item.id}}">
        <img :src="item.picUrl" alt="" />
       </router-link>
        <p>{{ item.name }}</p>
        <div class="artists">
          <span v-for="items in item.artists" :key="items">
          {{ items.name }}&nbsp;
        </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPersonalizedMV } from "@/request/api/home";
import { onMounted, reactive } from "@vue/runtime-core";
export default {
  name: "MVList",
  setup() {
    let state = reactive({
      MVList: [],
    });
    onMounted(async () => {
      let res = await getPersonalizedMV();
      // console.log("[+++]", res);
      state.MVList = res.data.result;
      // console.log("[---]", state.MVList);
    });
    return { state };
  },
};
</script>

<style lang="less" scoped>
.MVList {
  width: 100%;
  padding: 0.2rem;
  position: absolute;
  top: 11.5rem;
  .MVTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      font-size: 0.2rem;
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
  .MVContent {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    img {
      width: 3.5rem;
      height: 3rem;
      padding-right: 0.01rem;
    }
    p {
      display: block;
      width: 3rem;
      font-size: 0.3rem;
      font-weight: 700;
      word-break: keep-all; /* 不换行 */
      white-space: nowrap; /* 不换行 */
      overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
      text-overflow: ellipsis; /*溢出时显示省略标记...；需与overflow:hidden;一起使用*/
    }
    .artists{
      width: 3rem;
      word-break: keep-all; /* 不换行 */
      white-space: nowrap; /* 不换行 */
      overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
      text-overflow: ellipsis; /*溢出时显示省略标记...；需与overflow:hidden;一起使用*/
      span {
      font-size: 0.2rem;
      color: rgb(133, 131, 131);
    }
    }
  }
}
</style>