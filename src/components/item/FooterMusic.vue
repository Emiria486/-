<template>
  <div class="FooterMusic">
      <div class="footerLeft" @click="updateDetailShow">
          <img :src="playList[playListIndex].al.picUrl" alt="">
          <div>
              <p>{{playList[playListIndex].name}}</p>
              <div>横滑切换上下首哦</div>
          </div>
      </div>
      <div class="footerRight">
          <svg class="icon" aria-hidden="true" v-if="isbtnShow" @click="play">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <svg class="icon" aria-hidden="true" v-else @click="play">
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-playlistMusic_white-copy"></use>
        </svg>
      </div>
      <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
      <van-popup v-model:show="detailShow" position="bottom" :style="{ height: '100%',width:'100%' }" >
      <MusicDetail :musicList="playList[playListIndex]" :play="play" :isbtnShow="isbtnShow" :addDuration="addDuration"></MusicDetail>
      </van-popup>

  </div>
</template>

<script>
import MusicDetail from '@/components/item/MusicDetail.vue'
import { mapMutations, mapState } from 'vuex'
export default {
    data(){
        return{
            interVal:0
        }
    },
    computed:{
        ...mapState(['playList','playListIndex','isbtnShow','detailShow'])
    },
    mounted(){
        this.$store.dispatch("getLyric",this.playList[this.playListIndex].id)
        this.updateTime()
    },
    methods:{
        play:function(){
          if(this.$refs.audio.paused){
                this.$refs.audio.play()
                this.updateIsbtnShow(false)
                this.updateTime()
          }
          else{
              this.$refs.audio.pause()
              this.updateIsbtnShow(true)
              clearInterval(this.interVal)
          }
        },
        updateTime:function(){
            this.interVal=setInterval(()=>{
                this.updateCurrentTime(this.$refs.audio.currentTime)
            },100)
        },
        addDuration:function(){
            this.updateDuration(this.$refs.audio.duration)
        },
        ...mapMutations(['updateIsbtnShow','updateDetailShow','updateCurrentTime',"updateDuration"])
    },
    watch:{
        playListIndex:function(){//监听，如果下标发生了改变，就自动播放音乐和改变图标啊
            this.$refs.audio.autoplay=true
            if(this.$refs.audio.paused){//如果是暂停状态，改变图标
                 this.updateIsbtnShow(false)
            }
            console.log("++++++",this.playList)
        },
        playList:function(){
                this.$refs.audio.autoplay=true
                this.updateIsbtnShow(false)
        }
    },
    updated(){
        this.$store.dispatch("getLyric",this.playList[this.playListIndex].id)
        this.addDuration()
    },
    components:{MusicDetail}
}
</script>

<style lang="less" scoped>
.FooterMusic{
    width: 100%;
    height: 1.4rem;
    background-color: rgb(227, 221, 221);
    position: fixed;
    bottom: 0;
    border-top: 1px solid #999;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    .footerLeft{
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-content: center;
        img{
            width: 1rem;
            height: 1rem;
            border-radius: 0.5rem;
        }
        p{
            font-size: 0.3rem;
        }
    }
     .footerRight{
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon{
            width: 0.6rem;
            height: 0.6rem;
            fill: white;
        }
    }
}
</style>