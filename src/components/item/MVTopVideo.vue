<template>
  <div class="MVTopVideo">
    <div class="back">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-zuojiantou1"></use>
      </svg>
      <span>MV详情</span>
    </div>
    <video :src="MVURL" controls></video>
    <div class="artists">
      <!-- <img :src="MVPublishInfo.artists[0].img1v1Url" alt="" /> -->
      <span v-for="item in MVPublishInfo.artists" :key="item">
        {{ item.name }}&nbsp;
      </span>
    </div>
    <div class="info">
      <p>{{ MVPublishInfo.name }}</p>
      <span>发布时间：{{ MVPublishInfo.publishTime }}</span>
      <span>播放：{{ MVPublishInfo.playCount }}次</span>
    </div>
    <div class="iconList">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-dianzan"></use>
        </svg>
        <span>赞({{MVShareInfo.likedCount}})</span>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shoucang"></use>
        </svg>
        <span>收藏({{MVShareInfo.likedCount}})</span>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>分享{{MVPublishInfo.shareCount}}</span>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiazai-wenjianxiazai-07"></use>
        </svg>
        <span>下载MV</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["MVURL", "MVPublishInfo", "MVShareInfo"],
  name: "MVTopVideo",
  setup() {},
};
</script>

<style lang="less" scoped>
.MVTopVideo {
  width: 100%;
  .back {
    align-items: center;
    span {
      font-size: 0.4rem;
      font-weight: 700;
    }
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      fill: rgb(96, 95, 95);
    }
  }
  video {
    width: 100%;
    height: 4.8rem;
    align-items: center;
    object-fit: inherit;
  }
  .artists {
    position: relative;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 0.5rem;
      vertical-align: middle;
    }
    span {
      font-size: 0.35rem;
    }
  }
  .info {
    p {
      font-size: 0.5rem;
      margin: 0.1rem;
    }
    span {
      font-size: 0.3rem;
      margin-right: 0.2rem;
      color: gray;
    }
  }
  .iconList {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
      width: 1.8rem;
      text-align: center; 
    }
    .icon{
      width: 0.5rem;
      height: 0.5rem;
      vertical-align: middle;
      fill: gray;
    }
    span{
      font-size: 0.3rem;
      color: gray;
    }
  }
}
</style>