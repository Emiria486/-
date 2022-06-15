<template>
    <div class="infoUserTop">
    <img :src="user.data.profile.avatarUrl" alt="" class="profileimg" />
    <div class="name">{{ user.data.profile.nickname }}</div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
export default {
  setup(){
    let user=reactive(JSON.parse(localStorage.getItem('account')))
    return{user}
  }
};
</script>


<style lang="less" scoped>
.infoUserTop {
    width: 100%;
    height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  .profileimg {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  .name{
      font-weight: 700;
      font-size: .4rem;
  }
}
</style>