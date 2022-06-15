<template>
  <div class="MVComment">
    <p class="title" v-show="MVComment.hotComments.length">精彩评论</p>
    <div
      class="HotComments"
      v-show="MVComment.hotComments.length"
      v-for="item in MVComment.hotComments"
      :key="item"
    ></div>
    <div class="Comments">
      <p class="title">最新评论({{ MVComment.comments.length }})</p>
      <div class="comment" v-for="items in MVComment.comments" :key="items">
        <div class="commentLeft">
          <img :src="items.user.avatarUrl" alt="" />
          <p class="name">{{ items.user.nickname }}</p>
          <span class="time">{{ items.timeStr }}</span>
        </div>
        <div class="commentCenter">
          <p>{{ items.content }}</p>
        </div>
        <div class="commentRight">
          <span v-show="items.likedCount">{{items.likedCount}}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dianzan"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenxiang"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-chakantiezihuifu"></use>
          </svg>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["MVComment"],
  name: "MVFooter",
};
</script>

<style lang="less" scoped>
.Comments {
  width: 100%;
  margin-top: 0.5rem;
  position: relative;
  .title {
    font-size: 0.4rem;
    font-weight: 700;
  }
  .comment {
    width: 100%;
    height: 1rem;
    position: relative;
    .commentLeft {
      position: relative;
      img {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        vertical-align: middle;
      }
      p{
        font-size: 0.2rem;
        color: rgb(67, 67, 224);
        position: absolute;
        top: 0rem;
        left: 0.8rem;
      }
      span{
        font-size: 0.1rem;
        position: absolute;
        top: 0.3rem;
      }
    }
    .commentCenter{
      position: absolute;
      left: 0.8rem;
      top: 0.5rem;
      p{
        font-size: 0.3rem;
      }
    }
    .commentRight{
      right: 0rem;
      position: absolute;
      bottom: 0.3rem;
      .icon{
        width: 0.3rem;
        height: 0.3rem;
        vertical-align: middle;
      }
    }
  }
  hr{
    margin: 0.2rem;
  }
}
</style>