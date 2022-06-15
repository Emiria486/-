<template>
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true" @click="showPopup">
        <use xlink:href="#icon-gengduo1"></use>
      </svg>
    </div>
    <van-popup v-model:show="state.showDetail" position="left" :style="{ height: '100%',width:'50%' }" >
      <ToolBar :userInfo="state.userInfo"></ToolBar>
    </van-popup>
    <div class="topContent">
      <span @click="$router.push('/InfoUser')">我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span @click="$router.push('/mikuTop')">游戏</span>
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true" @click="$router.push('/searchMusic')">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import ToolBar from '../item/toolBar.vue';
export default {
    name: "TopNav",
    setup() {
        let state = reactive({
            showDetail: false,
            userInfo: {
                isExist: true,
                userIMG: "",
                userNikeName: "",
                backGroundIMG: ""
            }
        });
        let showPopup = () => {
            state.showDetail = true;
        };
        onMounted(async () => {
            let res = localStorage.getItem("account");
            if (res == null) {
                state.userInfo.isExist = false;
            }
            else {
                let dataOBJ = JSON.parse(res).data;
                let resIMG = dataOBJ.profile.avatarUrl;
                let resBackGround = dataOBJ.profile.backgroundUrl;
                let resNikename = dataOBJ.profile.nickname;
                state.userInfo.isExist=true
                state.userInfo.userIMG = resIMG;
                state.userInfo.userNikeName = resNikename;
                state.userInfo.backGroundIMG = resBackGround;
                console.log("[0000]",state.userInfo)
            }
        });
        return { showPopup, state };
    },
    components: { ToolBar }
};
</script>

<style lang="less" scoped>
    .topNav{
        width: 100%;
        height: 1rem;
        padding: 0.2rem;
        display: flex;
        justify-content: space-between;
        align-content: center;
        .topContent{
            width: 65%;
            height: 100%;
            display: flex;
            justify-content: space-evenly;
            font-size: 0.36rem;
            .active{
                font-weight: 900;
            }
        }
    }
</style>