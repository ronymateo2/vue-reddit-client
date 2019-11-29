<template>
  <div>
    <div>
      <div>{{ item.author }}</div>
      <div>{{ item.title }}</div>
      <div>{{ item.num_comments }}</div>
      <v-img :src="item.thumbnail"></v-img>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { PostItemData } from '@/model/post';
export default Vue.extend({
  props: {
    item: {
      type: Object as () => PostItemData,
    },
  },
});
</script>
<style>
</style>