<template>
  <div class="mikuTap">
    <div class="back" @click="$router.go(-1)">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zuojiantou1"></use>
      </svg>
      返回
    </div>
    <div class="game">
      <iframe :src="src" frameborder="0" height="800px" width="375px"></iframe>
    </div>
  </div>
</template>
<script>
export default {
  name: "MikuTap",
  data() {
    return {
      src: "",
    };
  },
  mounted() {
    this.src = "http://home.narcissuweb.com:82/mikutap-master/index.html";
  },
};
</script>

<style lang="less" scoped>
.mikuTap {
  width: 100%;
  position: relative;
  background-color:#8cc;
  .back {
    width: 100%;
    font-size: 0.5rem;
    color: rgb(225, 233, 191);
    .icon{
      fill: gray;
    }
  }
}
</style>