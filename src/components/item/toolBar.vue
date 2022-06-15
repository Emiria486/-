<template>
  <div class="toolBar">
    <div class="visitor" v-if="!userInfo.isExist">
      <div class="visitorImg">
        <div>登录网易云音乐</div>
        <div>320K高音质无限下载，手机电脑多端同步</div>
        <div>立即登录</div>
      </div>
    </div>
    <div class="Login" v-else>
      <div class="userImg">
        <div class="backGround">
          <img :src="userInfo.backGroundIMG" alt="" />
        </div>
        <img :src="userInfo.userIMG" alt="" class="user" />
        <div class="nickName">{{ userInfo.userNikeName }}</div>
      </div>
    </div>
    <div class="personal">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiaoxi"></use>
        </svg>
        我的消息
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qinghuiyuan"></use>
        </svg>
        会员中心
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shangcheng"></use>
        </svg>
        商城
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-mianliuliangfuwu"></use>
        </svg>
        在线听歌免流量
      </div>
    </div>
    <div class="social">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-31haoyou"></use>
        </svg>
        我的好友
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-31dingwei"></use>
        </svg>
        附近的人
      </div>
    </div>
    <div class="tools">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pifu"></use>
        </svg>
        个性换肤
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tinggeshiqu"></use>
        </svg>
        听歌识曲
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-dingshi"></use>
        </svg>
        定时停止播放
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-saoyisao"></use>
        </svg>
        扫一扫
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-naozhong"></use>
        </svg>
        音乐闹钟
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qiche"></use>
        </svg>
        驾驶模式
      </div>
    </div>
          <div class="system">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yueduye-yejianmoshi"></use>
        </svg>
        夜间模式
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shezhi1"></use>
        </svg>
        设置
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tuichu"></use>
        </svg>
        退出
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "toolBar",
  props: ["userInfo"],
};
</script>

<style lang="less" scoped>
.toolBar {
  width: 100%;
  height: 100%;
  .icon {
    width: 0.3rem;
    height: 0.3rem;
    vertical-align: middle;
  }
  .Login {
    position: relative;
    .backGround {
      width: 100%;
      height: 2.5rem;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .user {
      width: 1rem;
      height: 1rem;
      border-radius: 0.5rem;
      position: absolute;
      top: 1.2rem;
      vertical-align: middle;
    }
    .nickName {
      margin-left: 0.2rem;
      font-size: 0.3rem;
      position: absolute;
      top: 1.5rem;
      left: 1rem;
      color: white;
    }
  }
  .personal {
    width: 100%;
    border-bottom: 0.1rem rgb(241, 238, 238) solid;
    div {
      height: 1.1rem;
      color: rgb(61, 56, 56);
      line-height: 1.1rem;
    }
    div:hover{
      background-color: rgb(212, 208, 208);
    }
  }
  .social {
    border-bottom: 0.1rem rgb(241, 238, 238) solid;
    div {
      height: 1rem;
      color: rgb(61, 56, 56);
      line-height: 1.1rem;
    }
    div:hover{
      background-color: rgb(212, 208, 208);
    }
  }
  .tools {
    div {
      height: 1.1rem;
      color: rgb(61, 56, 56);
      line-height: 1.1rem;
    }
    div:hover{
      background-color: rgb(212, 208, 208);
    }
  }
  .system {
    width: 100%;
    height: 1rem;
    position: fixed;
    display: flex;
    bottom: 0rem;
    justify-content: space-between;
    align-content: center;
    border-top: 0.02rem solid gray;
    div{
      font-size: .25rem;
      height: 1rem;
      line-height: 1rem;
    }
    .icon {
      width: 0.25rem;
      height: 0.25rem;
      vertical-align: middle;
    }
  }
}
</style>