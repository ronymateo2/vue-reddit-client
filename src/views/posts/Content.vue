<template>
  <div>{{ $route.params}}</div>
  <!-- <PostContent :item="item"></PostContent> -->
</template>
<script lang="ts">
import Vue from 'vue';
import { PostItemData } from '@/model/post';
export default Vue.extend({
  data() {
    return { item: {} as PostItemData | null };
  },
  mounted() {
    document.documentElement.scrollTop = 0;
    const id = this.$route.params['id'] as string;
  },
});
</script>