<template>
  <div class="DailySong">
    <div itemTop>
      <img src="@/assets/liya.jpg" alt="" />
      <div class="itemTopLeft">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-zuojiantou1"></use>
        </svg>
      </div>
      <div class="time">{{ dataFull }}</div>
    </div>
    <div class="itemList">
      <div class="item" v-for="(item, i) in state.itemList" :key="i">
        <div class="itemLeft" @click="playMusic(i)">
          <span class="leftSpan">{{ i + 1 }}</span>
          <div>
            <p>{{ item.name }}</p>
            <span v-for="(item1, index) in item.ar" :key="index">{{
              item1.name
            }}</span>
          </div>
        </div>
        <div class="itemRight">
          <svg class="icon bofang" aria-hidden="true" v-if="item.mv != 0">
            <use xlink:href="#icon-MV"></use>
          </svg>
          <svg class="icon liebiao" aria-hidden="true">
            <use xlink:href="#icon-gengduo1"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "@vue/runtime-core";
import { getDailySong } from "@/request/api/item";
import { mapMutations, useStore } from 'vuex';
export default {
  name: "DailySong",
  setup() {
    let state = reactive({
      itemList: [], //推荐的歌曲
    });
    let store=useStore()
    let updatePlayList=mapMutations(['updatePlayList']).updatePlayList.bind({
      $store:store
    })
    let updatePlayListIndex=mapMutations(['updatePlayListIndex']).updatePlayListIndex.bind({
      $store:store
    })
    let dateMonth = new Date().getMonth() + 1;
    let dateDay = new Date().getDate();
    let dataFull = `这是${dateMonth}月${dateDay}号的推荐，请收下~`;
    onMounted(async () => {
      let res = await getDailySong(localStorage.getItem("token"));
      // console.log("****", res);
      state.itemList = res.data.data.dailySongs;
      // console.log("---", state.itemList);
    });
     function playMusic(i){
      this.updatePlayList(this.state.itemList)
      this.updatePlayListIndex(i)
    }
    return { state, dataFull,playMusic,updatePlayListIndex,updatePlayList};
  },
  
};
</script>

<style lang="less" scoped>
.DailySong {
  position: relative;
  img {
    width: 100%;
    height: 3rem;
  }
  .itemTopLeft {
    position: absolute;
    top: 0.3rem;
    .icon {
      width: 0.7rem;
      height: 0.7rem;
      fill: white;
    }
  }
  .time {
    font-size: 0.5rem;
    color: rgb(173, 64, 237);
  }
  .itemList {
    width: 100%;
    background-color: #fff;
    padding: 0 0.2rem;
    margin-top: 0.2rem;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    .item {
      width: 100%;
      height: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:hover {
        background-color: rgb(236, 230, 230);
      }
      .itemLeft {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        .leftSpan {
          display: inline-block;
          width: 0.2rem;
          text-align: center;
        }
        div {
          p {
            width: 4.54rem;
            height: 0.4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
          }
          span {
            font-weight: 400;
            font-size: 0.24rem;
            color: #999;
          }
          margin-left: 0.3rem;
        }
      }
      .itemRight {
        width: 20%;
        height: 100%;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        position: relative;
        .icon {
          fill: #999;
        }
        .bofang {
          position: absolute;
          left: 0;
        }
        .liebiao {
          position: absolute;
          right: 0;
        }
      }
    }
  }
}
</style>