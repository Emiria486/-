<template>
  <Suspense>
    <template #default>
      <div>
        <MVTopVideo
          :MVURL="state.MVUlr"
          :MVPublishInfo="state.MVPublishInfo"
          :MVShareInfo="state.MVShareInfo"
        >
        </MVTopVideo>
        <MVFooter :MVComment="state.MVComment"></MVFooter>
      </div>
    </template>
    <template #fallback>
      <h3>稍等，加载中...</h3>
    </template>
  </Suspense>

</template>

<script>
import { useRoute } from "vue-router";
import MVFooter from "./MVFooter.vue";
import MVTopVideo from "./MVTopVideo.vue";
import {
  getMVVideoURL,
  getMVPublishInfo,
  getMVShareInfo,
  getMVComment,
} from "@/request/api/item";
import { onBeforeMount, onMounted, reactive } from "@vue/runtime-core";
export default {
  name: "MVDetail",
  components: { MVTopVideo, MVFooter },
  setup() {
    let state = reactive({
      MVUlr: "",
      MVPublishInfo: {},
      MVShareInfo: {},
      MVComment: {},
    });
   onBeforeMount(async () => {
      //得到点击传入的MVID
      let id = useRoute().query.id;
      // 请求得到MV播放地址
      let resUrl = await getMVVideoURL(id);
      state.MVUlr = resUrl.data.data.url;
      let resPublish = await getMVPublishInfo(id);
      state.MVPublishInfo = resPublish.data.data;
      let resShare = await getMVShareInfo(id);
      state.MVShareInfo = resShare.data;
      let resComment = await getMVComment(id);
      state.MVComment = resComment.data;
      console.log("[+++]", state);
    });
    return { state };
  },
};
</script>

<style>
</style>