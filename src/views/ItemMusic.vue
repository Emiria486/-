<template>
  <ItemMusicTop :playlist="state.playlist"></ItemMusicTop>
  <itemMusicList :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount"></itemMusicList>
</template>

<script>
import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { getMusicItemList,getItemList} from '@/request/api/item'
import ItemMusicTop from '@/components/item/ItemMusicTop'
import itemMusicList from '../components/item/itemMusicList.vue'
export default {
    setup() {
        const state = reactive({
            playlist: {},//歌单的详情页的数据
            itemList:[]//歌单的歌曲
        });
        onMounted(async () => {
            let id = useRoute().query.id;
            // 获取歌单详情页
            let res = await getMusicItemList(id);
            state.playlist = res.data.playlist;
            // 获取歌单的歌曲
            let result = await getItemList({id,limit:1000,offset:0});
             state.itemList=result.data.songs
            // 防止页面刷新，数据丢失，将数据保存到sessionStorage中
            sessionStorage.setItem('itemDetail',JSON.stringify(state))
        });
        return { state };
    },
    components: { ItemMusicTop,itemMusicList }
}
</script>

<style>

</style>