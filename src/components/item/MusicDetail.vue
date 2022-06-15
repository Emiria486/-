<template>
  <img :src="musicList.al.picUrl" alt="" class="bgimg" />
  <div class="detailTop">
    <div class="detailTopLeft">
      <svg class="icon" aria-hidden="true" @click="backHome">
        <use xlink:href="#icon-zuojiantou1"></use>
      </svg>
      <div class="leftMarquee">
        <Vue3Marquee>{{ musicList.name }}</Vue3Marquee>
        <span v-for="(item, index) in musicList.ar" :key="index">
          {{ item.name }}&nbsp;
        </span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo"></use>
        </svg>
      </div>
    </div>
    <div class="detailTopRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang1-white-copy"></use>
      </svg>
    </div>
  </div>
  <div
    class="detailContent"
    v-show="!isLyricShow"
    @click="isLyricShow = !isLyricShow"
  >
    <img
      src="@/assets/ned.png"
      alt=""
      class="img_ned"
      :class="{ img_ned_active: !isbtnShow }"
    />
    <img src="@/assets/blackBoder.png" alt="" class="img_blackBoder" />
    <img
      :src="musicList.al.picUrl"
      class="img_ar"
      :class="{ img_ar_active: !isbtnShow, img_ar_pauesd: isbtnShow }"
    />
  </div>
  <div
    class="musicLyric"
    ref="musicLyric"
    v-show="isLyricShow"
    @click="isLyricShow = !isLyricShow"
  >
    <p
      v-for="item in FullLyric"
      :key="item"
      :class="{
        active:
          currentTime * 1000 >= item.time && currentTime * 1000 < item.pre,
      }"
      >
      {{ item.lrc }}
    </p>
  </div>
  <div class="detailFooter">
    <div class="footerTop" v-show="!isLyricShow">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xihuan_white-copy"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiazai-wenjianxiazai-07_white-copy"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yinlechangpian"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-chakantiezihuifu"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gengduo-shuxiang"></use>
      </svg>
    </div>
    <div class="footerContent">
      <span>{{ songStartTime }}</span>
      <input
        type="range"
        class="range"
        min="0"
        :max="duration"
        v-model.number="currentTime"
        step="0.05"
      />
      <span>{{ songEndTIme }}</span>
    </div>
    <div class="footer">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiaoxunhuan"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
        <use xlink:href="#icon-shangyishoushangyige"></use>
      </svg>
      <svg
        class="icon bofang"
        aria-hidden="true"
        v-if="isbtnShow"
        @click="play"
      >
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon bofang" aria-hidden="true" v-else @click="play">
        <use xlink:href="#icon-bofang1_white-copy"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="goPlay(1)">
        <use xlink:href="#icon-xiayigexiayishou"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-musicList-copy"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
import { mapMutations, mapState } from "vuex";
import lyricJoin from '@/hook/lyricJoin'
export default {
  name: "MusicDetail",
  data() {
    return {
      isLyricShow: false,
      normalCurrentTime: 0,
    };
  },
  props: ["musicList", "isbtnShow", "play", "addDuration"],
  computed: {
    ...mapState([
      "lyricList",
      "currentTime",
      "playListIndex",
      "playList",
      "duration",
      'lyricTranslateList',
    ]),
    lyricTranslate:function(){
      let arr
      if (this.lyricTranslateList.lyric!='') {
        arr = this.lyricTranslateList.lyric.split(/[(\r\n)\r\n]+/).map((item, i) => {
          let lrc = item.slice(11, item.length);
          return {lrc};
        });
        return arr;
      }else{
        arr=[-1]
        return arr
        }
    },
    lyric: function () {
      let arr;
      if (this.lyricList.lyric) {
          arr = this.lyricList.lyric.split(/[(\r\n)\r\n]+/).map((item, i) => {
          let min = item.slice(1, 3);
          let sec = item.slice(4, 6);
          let mill = item.slice(7, 10);
          let lrc = item.slice(11, item.length)+'\r\n'
          let time =
            parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
          if (isNaN(Number(mill))) {
            mill = item.slice(7, 9);
            lrc = item.slice(10, item.length);
            time =
              parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
          }
          return { min, sec, mill, lrc, time };
        });
         arr.forEach((item, i) => {
          if (i === arr.length - 1 || isNaN(arr[i + 1].time)) {
            item.pre = 100000;
          } else {
            item.pre = arr[i + 1].time;
          }
        });
      }
     return arr
    },
    FullLyric:function(){
      let res= lyricJoin(this.lyric,this.lyricTranslate)
      return res
    },
    songStartTime: function () {
      let arr;
      if (this.currentTime < 60) {
        if (this.currentTime <=9.5) {
          let min = "00";
          let sec = (this.currentTime / 1).toFixed(0);
          arr = `${min}:0${sec}`;
          return arr;
        } else {
          let min = "00";
          let sec = (this.currentTime / 1).toFixed(0);
          arr = `${min}:${sec}`;
          return arr;
        }
      } else {
        let min = (this.currentTime / 60).toFixed(0);
        let sec = (this.currentTime - min * 60).toFixed(0);
        arr = `${min}:${sec}`;
        return arr;
      }
    },
    songEndTIme: function () {
      let arr;
      if (this.duration < 60) {
        if (this.duration < 10) {
          let min = "00";
          let sec = (this.duration / 1).toFixed(0);
          arr = `${min}:${sec}`;
          return arr;
        } else {
          let min = "00";
          let sec = (this.duration / 1).toFixed(0);
          arr = `${min}:${sec}`;
          return arr;
        }
      } else {
        let min = (this.duration / 60).toFixed(0);
        let sec = (this.duration - min * 60).toFixed(0);
        arr = `${min}:${sec}`;
        return arr;
      }
    },
  },
  mounted() {
    this.addDuration();
  },
  methods: {
    ...mapMutations(["updateDetailShow", "updatePlayListIndex"]),
    backHome: function () {
      this.updateDetailShow();
      this.isLyricShow = false;
    },
    goPlay: function (num) {
      let index = this.playListIndex + num;
      if (index < 0) {
        index = this.playList.length - 1;
      } else if (index == this.playList.length) {
        index = 0;
      }
      this.updatePlayListIndex(index);
    },
  },
  watch: {
    currentTime: function (newValue) {
      let p = document.querySelector("p.active");
      if (p) {
        if (p.offsetTop > 300) {
          this.$refs.musicLyric.scrollTop = p.offsetTop - 400;
        }
      }
      if (newValue == this.duration) {
        if (this.playListIndex == this.playList.length - 1) {
          this.updatePlayListIndex(0);
          this.play();
        } else {
          this.updatePlayListIndex(this.playListIndex + 1);
        }
      }
      this.normalCurrentTime = this.currentTime;
    },
  },
  components: { Vue3Marquee },
};
</script>

<style lang="less" scoped>
.bgimg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(80px);
}
.detailTop {
  width: 100%;
  height: 1rem;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  align-items: center;
  .icon {
    fill: white;
  }
  .detailTopLeft {
    display: flex;
    align-items: center;
    .leftMarquee {
      width: 5rem;
      height: 100%;
      margin-left: 0.2rem;
      color: white;
      span {
        color: rgba(242, 235, 235, 0.5);
      }
      .icon {
        width: 0.3rem;
        height: 0.3rem;
        fill: #ffffff;
      }
    }
  }
}
.detailContent {
  width: 100%;
  height: 9.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .img_ned {
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    left: 46%;
    transform-origin: 0 0;
    transform: rotate(-10deg);
    transition: all 2s;
  }
  .img_ned_active {
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    left: 46%;
    transform-origin: 0 0;
    transform: rotate(10deg);
    transition: all 2s;
  }
  .img_blackBoder {
    width: 6rem;
    height: 6rem;
    position: absolute;
    bottom: 2.3rem;
    z-index: -1;
  }
  .img_ar {
    width: 4rem;
    height: 4rem;
    position: absolute;
    left: 1.8rem;
    right: 1.8rem;
    top: 2.3rem;
    bottom: 9.5rem;
    z-index: 3;
    border-radius: 5rem;
    animation: rotate_ar 10s linear infinite;
  }
  .img_ar_active {
    animation-play-state: running;
  }
  .img_ar_pauesd {
    animation-play-state: paused;
  }
  @keyframes rotate_ar {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
}
.musicLyric {
  width: 100%;
  height: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.2rem;
  overflow: scroll;
  p {
    color: rgb(190, 181, 181);
    margin-bottom: 0.3rem;
  }
  .active {
    color: #fff;
    font-size: 0.4rem;
  }
}
.detailFooter {
  width: 100%;
  height: 3rem;
  position: absolute;
  bottom: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .footerTop {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
      fill: white;
    }
  }
    .footerContent {
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 1.5rem;
    justify-content: space-between;
    align-items: center;
    .range {
      width: 80%;
      height: 0.09rem;
      color: #fff 0.6;
    }
    span{
      width: 10%;
      color: rgb(245, 234, 234);
    }
  }
  .footer {
    width: 100%;
    height: 1rem;
    display: flex;
    position: fixed;
    bottom: 0.1rem;
    justify-content: space-around;
    align-items: center;
    .icon {
      fill: rgb(245, 234, 234);
    }
    .bofang {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>