<template>
  <TopNav></TopNav>
  <SwpierTop></SwpierTop>
  <IconList></IconList>
  <musicList></musicList>
  <MVList></MVList>
</template>

<script>
import TopNav from '@/components/home/TopNav.vue'
import SwpierTop from '@/components/home/SwpierTop.vue'
import IconList from '@/components/home/IconList.vue'
import musicList from '@/components/home/musicList.vue'
import MVList from '@/components/home/MVList.vue'
export default {
  name: 'HomeView',
  components: {
    TopNav,SwpierTop,IconList,musicList,MVList
}
}
</script>
