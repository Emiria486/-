<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="150"
        class="my-swpie"
        :show-indicators="false"
        >
        <van-swipe-item v-for='item in MusicList' :key="item.id" class="item">
        <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
          <img :src="item.picUrl" alt="" />
          <span class="palyCount">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gl-play"></use>
            </svg>
           <span id="numberSub"> {{changeCount(item.playCount)}}</span>
          </span>
          <span class="name">{{item.name}}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import {getMusicList} from "@/request/api/home";
export default {
  name: "musicList",
  setup() {
    let MusicList=ref([])
    onMounted(async () => {
      let res = await getMusicList();
      MusicList.value= res.data.result;
    });
    function changeCount(num){
        if(num>=10000){
            return (num/10000).toFixed(1)+'万'
        }
    }
     return{MusicList,changeCount}
  },
};
</script>

<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 0.6rem;
  padding: 0.1rem;
  .musicTop {
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
  .musicContent {
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    .my-swpie {
      height: 100%;
      .item{
       margin-left:0.3rem ;
       margin-right:0.3rem ; 
       box-shadow: 0.1rem 0.1rem 0.2rem 0.2rem rgb(194, 194, 194);  
       img{
          position: relative;
          width: 100%;
          height: 3rem;
      }
      .palyCount{
          position: absolute;
          right: 2%;
          top: 2%;
          color: white;
          font-size: 0.2rem;
          vertical-align: top;
          text-align: right;
          .icon{
              widows: 0.25rem;
              height: 0.25rem;
              fill: rgb(255, 255, 255);
          }
      }
      }
    }
  }
}
</style>